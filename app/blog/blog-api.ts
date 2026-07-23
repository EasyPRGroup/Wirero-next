// Shared blog API helpers used by the Blog list component.
// Mirrors the pattern used by `app/newsroom/newsroom-api.ts`.
//
// Requires NEXT_PUBLIC_API_BASE_URL to be set in `.env` for the Blog API to work.
// Use `isBlogApiConfigured()` to check if the API is properly configured.

export type BlogPost = {
  id?: string | number;
  title?: string;
  slug?: string;
  date?: string;
  excerpt?: string;
  image?: string;
  category?: string;
  readTime?: string;
  content?: string;
  contentHtml?: string;
};

export type BlogPostAuthor = {
  name?: string;
  handle?: string;
  avatar?: string;
};

export type BlogPostSection = {
  id: string;
  heading: string;
  paragraphs: string[];
};

export type BlogPostDetail = BlogPost & {
  author?: BlogPostAuthor;
  intro?: string[];
  keyHighlights?: string[];
  coreHeading?: string;
  coreIntro?: string;
  sections?: BlogPostSection[];
  closing?: BlogPostSection;
  // SEO fields from backend
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  robots?: string;
};

type RawPost = Record<string, unknown>;

type BlogListResponse = {
  posts: BlogPost[];
  total: number;
  totalPages: number;
  page: number;
};

function pickString(raw: RawPost, keys: string[]): string | undefined {
  for (const key of keys) {
    const value = raw[key];
    if (typeof value === "string" && value.trim() !== "") return value;
    if (typeof value === "number" && Number.isFinite(value)) {
      return String(value);
    }
  }
  return undefined;
}

function formatDate(raw: string): string {
  if (!raw) return "";
  try {
    const d = new Date(raw);
    if (isNaN(d.getTime())) return raw;
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return raw;
  }
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

type BlogApiConfig = {
  apiBase: string;
  siteUrl: string;
  apiKey: string;
};

// Uses the shared NEXT_PUBLIC_* env vars (same as newsroom).
export function getBlogApiConfig(): BlogApiConfig {
  const apiBase = normalizeApiBase(process.env.NEXT_PUBLIC_API_BASE_URL);
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "";
  const apiKey = process.env.NEXT_PUBLIC_API_KEY ?? "";
  return { apiBase, siteUrl, apiKey };
}

/** True once real blog API env vars are configured. */
export function isBlogApiConfigured(): boolean {
  const { apiBase } = getBlogApiConfig();
  return Boolean(apiBase);
}

/**
 * Fetch a page of blog posts from the backend.
 * Endpoint: `${apiBase}/public/blogs?page=${page}&limit=${limit}`
 */
export async function fetchBlogPosts(
  page: number,
  limit = 9,
  signal?: AbortSignal,
): Promise<BlogListResponse> {
  const { apiBase, apiKey } = getBlogApiConfig();
  if (!apiBase) {
    throw new Error("Blog API configuration is missing.");
  }

  const safePage = Math.max(1, Math.floor(page));
  const url = `${apiBase}/public/blogs?page=${safePage}&limit=${limit}`;

  const headers: Record<string, string> = {};
  if (apiKey) headers["x-api-key"] = apiKey;

  const response = await fetch(url, { headers, signal });
  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`);
  }

  const data = await response.json();
  
  if (!data.success || !data.data) {
    throw new Error("Invalid API response");
  }

  const posts = data.data.map(normalizePost);
  const pagination = data.pagination || {};
  
  return {
    posts,
    total: pagination.total || 0,
    totalPages: pagination.totalPages || 1,
    page: pagination.currentPage || safePage,
  };
}

/**
 * Fetch a single blog post by slug.
 * Endpoint: `${apiBase}/public/blogs/${slug}`
 */
export async function fetchBlogPost(
  slug: string,
  signal?: AbortSignal,
): Promise<BlogPost | null> {
  const { apiBase, apiKey } = getBlogApiConfig();
  if (!apiBase) {
    throw new Error("Blog API configuration is missing.");
  }

  const url = `${apiBase}/public/blogs/${encodeURIComponent(slug)}`;

  const headers: Record<string, string> = {};
  if (apiKey) headers["x-api-key"] = apiKey;

  const response = await fetch(url, { headers, signal });
  if (response.status === 404) return null;
  if (!response.ok) {
    throw new Error(`Request failed (${response.status})`);
  }

  const data = await response.json();
  if (!data.success || !data.data) return null;
  
  return normalizePost(data.data);
}

export function normalizePost(raw: RawPost): BlogPost {
  const title = pickString(raw, ["title"]) ?? "Untitled post";
  const id = pickString(raw, ["_id", "id", "slug", "title"]) ?? "";
  const slug = pickString(raw, ["slug", "uri", "id"]) ?? String(id);
  const date = formatDate(pickString(raw, ["publishedAt", "date", "createdAt"]) ?? "");
  const excerpt = pickString(raw, ["excerpt", "summary", "description"]) ?? "";
  const image = pickString(raw, ["featuredImage", "image", "thumbnail"]) ?? "";
  const category = pickString(raw, ["category", "tag", "topic", "section"]) ?? "";
  const readTime = pickString(raw, ["readingTime", "readTime", "reading_time", "read_time"]) ?? "";
  const content = pickString(raw, ["content", "body"]) ?? "";
  const contentHtml = pickString(raw, ["contentHtml", "html", "content"]) ?? "";

  return {
    id,
    title,
    slug,
    date,
    excerpt,
    image,
    category,
    readTime: readTime ? `${readTime} min read` : "",
    content,
    contentHtml,
  };
}





/** Build the client-side href for a blog post detail page. */
export function postHref(post: BlogPost): string {
  const slug = post.slug ?? post.id ?? "";
  return `/blog/${encodeURIComponent(String(slug))}`;
}

// ---------------------------------------------------------------------------
