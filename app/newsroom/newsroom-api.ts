// Shared newsroom API helpers used by the Newsroom list component and the
// static-export-safe article detail page.

export type ArticleAuthor = {
  id?: string;
  name?: string;
};

export type Article = {
  id?: string | number;
  title?: string;
  slug?: string;
  date?: string;
  excerpt?: string;
  image?: string;
  content?: string;
  contentHtml?: string;
  author?: ArticleAuthor;
  source?: string;
  sourceUrl?: string;
  section?: string;
};

type RawArticle = Record<string, unknown>;

type ArticleListResponse = {
  articles: Article[];
  total: number;
  totalPages: number;
  page: number;
};

function pickString(raw: RawArticle, keys: string[]): string | undefined {
  for (const key of keys) {
    const value = raw[key];
    if (typeof value === "string" && value.trim() !== "") return value;
    if (typeof value === "number" && Number.isFinite(value)) {
      return String(value);
    }
  }
  return undefined;
}

function pickNumber(
  raw: Record<string, unknown> | null,
  keys: string[],
): number {
  if (!raw) return 0;
  for (const key of keys) {
    const value = raw[key];
    if (typeof value === "number" && Number.isFinite(value)) return value;
    if (typeof value === "string" && value.trim() !== "") {
      const parsed = Number(value);
      if (Number.isFinite(parsed)) return parsed;
    }
  }
  return 0;
}

/**
 * Normalize the API base URL defensively.
 * - Strips a trailing `/client` segment if present (so we can re-append it).
 * - Strips any trailing slash.
 * - Never throws on undefined input.
 */
export function normalizeApiBase(apiBase?: string): string {
  if (!apiBase || typeof apiBase !== "string") return "";
  let base = apiBase.trim();
  if (!base) return "";
  base = base.replace(/\/client\/?$/, "");
  base = base.replace(/\/$/, "");
  return base;
}

type NewsroomApiConfig = {
  apiBase: string;
  siteUrl: string;
  apiKey: string;
};

export function getNewsroomApiConfig(): NewsroomApiConfig {
  const apiBase = normalizeApiBase(process.env.NEXT_PUBLIC_API_BASE_URL);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
  const apiKey =
    process.env.NEXT_PUBLIC_API_KEY ??
    process.env.NEXT_PUBLIC_CONTACT_API_KEY ??
    "";
  return { apiBase, siteUrl, apiKey };
}

export function normalizeArticle(raw: RawArticle): Article {
  const title = pickString(raw, ["title"]) ?? "Untitled article";
  const id = pickString(raw, ["id", "_id", "slug", "title"]) ?? "";
  const slug = pickString(raw, ["slug", "uri", "id"]) ?? String(id);
  const date = pickString(raw, ["date", "publishedAt", "createdAt"]) ?? "";
  const excerpt = pickString(raw, ["excerpt", "summary", "description"]) ?? "";
  const image = pickString(raw, ["image", "featuredImage", "thumbnail"]) ?? "";
  const content = pickString(raw, ["content", "body"]) ?? "";
  const contentHtml = pickString(raw, ["contentHtml", "html"]) ?? "";
  const source = pickString(raw, ["source"]) ?? "";
  const sourceUrl = pickString(raw, ["sourceUrl"]) ?? "";
  const section = pickString(raw, ["section"]) ?? "";

  const authorRaw = raw.author;
  let author: ArticleAuthor | undefined;
  if (authorRaw && typeof authorRaw === "object" && !Array.isArray(authorRaw)) {
    const a = authorRaw as Record<string, unknown>;
    author = {
      id: pickString(a, ["_id", "id"]),
      name: pickString(a, ["name"]),
    };
  }

  return {
    id,
    title,
    slug,
    date,
    excerpt,
    image,
    content,
    contentHtml,
    author,
    source,
    sourceUrl,
    section,
  };
}

function resolveListPayload(data: unknown): RawArticle[] {
  if (Array.isArray(data)) return data as RawArticle[];
  const record = data as Record<string, unknown> | null;
  if (!record || typeof record !== "object") return [];
  const candidate =
    record.articles ?? record.data ?? record.items ?? record.results;
  if (Array.isArray(candidate)) return candidate as RawArticle[];
  return [];
}

function resolveTotal(data: unknown, fallback: number): number {
  if (Array.isArray(data)) return data.length;
  const record = data as Record<string, unknown> | null;
  if (!record || typeof record !== "object") return fallback;
  const candidate =
    record.total ?? record.totalCount ?? record.count ?? record.totalItems;
  if (typeof candidate === "number" && Number.isFinite(candidate)) {
    return candidate;
  }
  if (typeof candidate === "string" && candidate.trim() !== "") {
    const parsed = Number(candidate);
    if (Number.isFinite(parsed)) return parsed;
  }
  return fallback;
}

/**
 * Fetch a page of articles from the backend. The endpoint is:
 *   `${apiBase}/client?uri=${siteUrl}&page=${page}&limit=${limit}`
 */
export async function fetchArticles(
  page: number,
  limit = 10,
  signal?: AbortSignal,
): Promise<ArticleListResponse> {
  const { apiBase, siteUrl, apiKey } = getNewsroomApiConfig();
  if (!apiBase || !siteUrl) {
    throw new Error("Newsroom API configuration is missing.");
  }

  const safePage = Math.max(1, Math.floor(page));
  const url = `${apiBase}/client?uri=${encodeURIComponent(
    siteUrl,
  )}&page=${safePage}&limit=${limit}`;

  const headers: Record<string, string> = {};
  if (apiKey) headers["x-api-key"] = apiKey;

  const response = await fetch(url, { headers, signal });
  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`);
  }

  const data = await response.json();
  const record = (Array.isArray(data) ? null : data) as
    | Record<string, unknown>
    | null;
  const rawList = resolveListPayload(data);

  // The backend returns totalPages / currentPage directly. Prefer those
  // over computing from a (possibly absent) total count.
  const backendTotalPages = pickNumber(record, [
    "totalPages",
    "pages",
    "pageCount",
  ]);
  const backendPage = pickNumber(record, ["currentPage", "page"]);
  const total = resolveTotal(data, rawList.length);
  const totalPages =
    backendTotalPages > 0
      ? backendTotalPages
      : Math.max(1, Math.ceil(total / limit));
  const resolvedPage = backendPage > 0 ? backendPage : safePage;
  const articles = rawList.map(normalizeArticle);

  return { articles, total, totalPages, page: resolvedPage };
}

/**
 * Fetch a single article by slug. Returns null when the backend reports 404.
 * Endpoint: `${apiBase}/client/${slug}?uri=${siteUrl}`
 */
export async function fetchArticle(
  slug: string,
  signal?: AbortSignal,
): Promise<Article | null> {
  const { apiBase, siteUrl, apiKey } = getNewsroomApiConfig();
  if (!apiBase || !siteUrl) {
    throw new Error("Newsroom API configuration is missing.");
  }

  const url = `${apiBase}/client/${encodeURIComponent(
    slug,
  )}?uri=${encodeURIComponent(siteUrl)}`;

  const headers: Record<string, string> = {};
  if (apiKey) headers["x-api-key"] = apiKey;

  const response = await fetch(url, { headers, signal });
  if (response.status === 404) return null;
  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`);
  }

  const data = await response.json();
  if (!data || typeof data !== "object" || Array.isArray(data)) return null;
  const record = data as Record<string, unknown>;
  const raw = (record.data ?? record.article ?? record) as RawArticle;
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  return normalizeArticle(raw);
}

/**
 * Build the href for an article detail page using the dynamic route segment.
 */
export function articleHref(article: Article): string {
  const slug = article.slug ?? article.id ?? "";
  return `/newsroom/${encodeURIComponent(String(slug))}`;
}
