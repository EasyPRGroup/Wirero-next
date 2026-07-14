// Shared blog API helpers used by the Blog list component.
// Mirrors the pattern used by `app/newsroom/newsroom-api.ts`.
//
// Until NEXT_PUBLIC_BLOG_API_BASE_URL / NEXT_PUBLIC_BLOG_SITE_URL (or the
// shared NEXT_PUBLIC_API_BASE_URL / NEXT_PUBLIC_SITE_URL) are set in `.env`,
// `isBlogApiConfigured()` returns false and the Blog component falls back to
// the bundled mock posts below so the page always renders.

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

type BlogApiConfig = {
  apiBase: string;
  siteUrl: string;
  apiKey: string;
};

// Uses dedicated NEXT_PUBLIC_BLOG_* env vars (not the shared newsroom ones)
// so the Blog page keeps showing the bundled demo content below until you
// explicitly wire it up to its own API by adding these to `.env`.
export function getBlogApiConfig(): BlogApiConfig {
  const apiBase = normalizeApiBase(process.env.NEXT_PUBLIC_BLOG_API_BASE_URL);
  const siteUrl = process.env.NEXT_PUBLIC_BLOG_SITE_URL ?? "";
  const apiKey = process.env.NEXT_PUBLIC_BLOG_API_KEY ?? "";
  return { apiBase, siteUrl, apiKey };
}

/** True once real blog API env vars are configured. */
export function isBlogApiConfigured(): boolean {
  const { apiBase, siteUrl } = getBlogApiConfig();
  return Boolean(apiBase && siteUrl);
}

export function normalizePost(raw: RawPost): BlogPost {
  const title = pickString(raw, ["title"]) ?? "Untitled post";
  const id = pickString(raw, ["id", "_id", "slug", "title"]) ?? "";
  const slug = pickString(raw, ["slug", "uri", "id"]) ?? String(id);
  const date = pickString(raw, ["date", "publishedAt", "createdAt"]) ?? "";
  const excerpt = pickString(raw, ["excerpt", "summary", "description"]) ?? "";
  const image = pickString(raw, ["image", "featuredImage", "thumbnail"]) ?? "";
  const category =
    pickString(raw, ["category", "tag", "topic", "section"]) ?? "";
  const readTime =
    pickString(raw, ["readTime", "reading_time", "read_time"]) ?? "";
  const content = pickString(raw, ["content", "body"]) ?? "";
  const contentHtml = pickString(raw, ["contentHtml", "html"]) ?? "";

  return {
    id,
    title,
    slug,
    date,
    excerpt,
    image,
    category,
    readTime,
    content,
    contentHtml,
  };
}

function resolveListPayload(data: unknown): RawPost[] {
  if (Array.isArray(data)) return data as RawPost[];
  const record = data as Record<string, unknown> | null;
  if (!record || typeof record !== "object") return [];
  const candidate =
    record.posts ?? record.articles ?? record.data ?? record.items ?? record.results;
  if (Array.isArray(candidate)) return candidate as RawPost[];
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
 * Fetch a page of blog posts from the backend. Adjust the endpoint path
 * below once the real API contract is known; the shape mirrors the
 * newsroom endpoint (`${apiBase}/client?uri=...&page=...&limit=...`).
 */
export async function fetchBlogPosts(
  page: number,
  limit = 9,
  signal?: AbortSignal,
): Promise<BlogListResponse> {
  const { apiBase, siteUrl, apiKey } = getBlogApiConfig();
  if (!apiBase || !siteUrl) {
    throw new Error("Blog API configuration is missing.");
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
  const posts = rawList.map(normalizePost);

  return { posts, total, totalPages, page: resolvedPage };
}

/**
 * Fetch a single blog post by slug. Returns null when the backend reports
 * 404. Endpoint mirrors the newsroom detail endpoint:
 *   `${apiBase}/client/${slug}?uri=${siteUrl}`
 */
export async function fetchBlogPost(
  slug: string,
  signal?: AbortSignal,
): Promise<BlogPost | null> {
  const { apiBase, siteUrl, apiKey } = getBlogApiConfig();
  if (!apiBase || !siteUrl) {
    throw new Error("Blog API configuration is missing.");
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
  const raw = (record.data ?? record.post ?? record.article ?? record) as RawPost;
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return null;
  return normalizePost(raw);
}

/** Build the client-side href for a blog post detail page. */
export function postHref(post: BlogPost): string {
  const slug = post.slug ?? post.id ?? "";
  return `/blog/post?slug=${encodeURIComponent(String(slug))}`;
}

// ---------------------------------------------------------------------------
// Mock/demo content, used only until the real blog API is configured.
// ---------------------------------------------------------------------------

const MOCK_BASE_POSTS: BlogPost[] = [
  {
    slug: "future-of-content-distribution",
    title:
      "The Future of Content Distribution: Why Infrastructure Matters More Than Outreach",
    category: "Distribution Strategy",
    date: "February 10, 2026",
    readTime: "2 min read",
    image: "/IMG@2x.png",
  },
  {
    slug: "targeted-distribution-vs-random-placement",
    title:
      "Targeted Distribution vs. Random Placement: Why Industry Networks Matter",
    category: "Industry Insights",
    date: "February 10, 2026",
    readTime: "2 min read",
    image: "/image1@2x.png",
  },
  {
    slug: "understanding-distribution-infrastructure",
    title:
      "Understanding Distribution Infrastructure: What It Is and Why It Matters",
    category: "Educational",
    date: "February 10, 2026",
    readTime: "2 min read",
    image: "/image@2x.png",
  },
  {
    slug: "multi-domain-publishing-scale",
    title:
      "How Multi-Domain Publishing Helps Businesses Scale Content Distribution",
    category: "Publishing Infrastructure",
    date: "February 10, 2026",
    readTime: "2 min read",
    image: "/Rectangle-112@2x.png",
  },
  {
    slug: "agencies-need-scalable-distribution",
    title: "Why Agencies Need Scalable Distribution Infrastructure",
    category: "Agency Solutions",
    date: "February 10, 2026",
    readTime: "2 min read",
    image: "/image3@2x.png",
  },
  {
    slug: "high-volume-distribution-strategy",
    title: "Building a High-Volume Content Distribution Strategy",
    category: "Distribution Guide",
    date: "February 10, 2026",
    readTime: "2 min read",
    image: "/image2@2x.png",
  },
  {
    slug: "rss-automation-distribute-content",
    title: "RSS Automation: The Smarter Way to Distribute Content Continuously",
    category: "Automation",
    date: "February 10, 2026",
    readTime: "2 min read",
    image: "/IMG1@2x.png",
  },
  {
    slug: "content-distribution-crypto-forex-gaming",
    title: "Content Distribution for Crypto, Forex & Gaming Industries",
    category: "Industry Solutions",
    date: "February 10, 2026",
    readTime: "2 min read",
    image: "/startups@3x.png",
  },
  {
    slug: "choosing-right-distribution-network",
    title: "Choosing the Right Distribution Network for Your Business",
    category: "Buying Guide",
    date: "February 10, 2026",
    readTime: "2 min read",
    image: "/image4@2x.png",
  },
];

const MOCK_TOTAL_PAGES = 4;

/** Client-side paginated mock data, used while the real API is unwired. */
export function getMockBlogPosts(
  page: number,
  limit = 9,
): BlogListResponse {
  const safePage = Math.min(Math.max(1, Math.floor(page)), MOCK_TOTAL_PAGES);
  const total = MOCK_BASE_POSTS.length * MOCK_TOTAL_PAGES;
  // Slugs stay stable across pages (so post detail lookups always resolve);
  // only `id` varies to keep React keys unique per rendered page.
  const posts = MOCK_BASE_POSTS.map((post) => ({
    ...post,
    id: `${post.slug}-p${safePage}`,
  })).slice(0, limit);

  return { posts, total, totalPages: MOCK_TOTAL_PAGES, page: safePage };
}

const MOCK_AUTHOR: BlogPostAuthor = {
  name: "Wirero Team",
  handle: "@wirero",
  avatar: "/Ellipse-16@2x.png",
};

function slugify(value: string): string {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

/**
 * Synthesize a structured detail-page body for a mock post, matching the
 * "principles" style layout (intro, key highlights, numbered core
 * sections, closing section). Replace with real `contentHtml` once the
 * blog API is wired up.
 */
function buildMockPostDetail(post: BlogPost): BlogPostDetail {
  const topic = post.category ?? "Distribution";
  const coreHeading = `The 4 Core Principles of ${topic}`;

  const sectionTitles = [
    "Start With Infrastructure, Not Outreach",
    "Consistency Beats One-Off Placements",
    "Match the Network to the Audience",
    "Automate What You Can Control",
  ];

  const sections: BlogPostSection[] = sectionTitles.map((title, index) => ({
    id: slugify(`${index + 1}-${title}`),
    heading: `${index + 1}. ${title}`,
    paragraphs: [
      `When it comes to ${topic.toLowerCase()}, teams that rely on ad-hoc outreach usually see inconsistent results. ${title} is the foundation that keeps ${post.title?.split(":")[0] ?? "your distribution strategy"} working over time, not just for a single campaign.`,
      "Instead of chasing individual placements, build a repeatable process that your team can run every week without renegotiating access each time.",
    ],
  }));

  return {
    ...post,
    author: MOCK_AUTHOR,
    intro: [
      `Most teams treat distribution as a one-time push instead of a system, and it costs them reach every single time they publish. This post breaks down what actually works when you need results you can repeat.`,
      `We'll walk through the core principles behind ${post.title?.toLowerCase() ?? "this topic"}, why most approaches fail, and what to do instead.`,
    ],
    keyHighlights: [
      "Infrastructure beats one-off outreach for consistent reach.",
      "Niche-specific networks outperform random placement.",
      "Automation keeps distribution running without manual negotiation.",
      "Review your results by network, not just by individual post.",
    ],
    coreHeading,
    coreIntro:
      "These four principles apply whether you're publishing once a week or scaling across dozens of domains.",
    sections,
    closing: {
      id: "why-most-efforts-fail",
      heading: `Why Most ${topic} Efforts Fail?`,
      paragraphs: [
        "Most distribution efforts fail for the same reason: they depend on manual relationships instead of durable infrastructure. When the person managing outreach leaves or a publisher relationship changes, the whole pipeline breaks.",
        "Wirero is built to remove that single point of failure by giving you direct, repeatable access to a controlled network you can rely on.",
      ],
    },
  };
}

/** Look up a mock post's full detail content by slug. */
export function getMockBlogPostDetail(slug: string): BlogPostDetail | null {
  const base = MOCK_BASE_POSTS.find((post) => post.slug === slug);
  if (!base) return null;
  return buildMockPostDetail(base);
}
