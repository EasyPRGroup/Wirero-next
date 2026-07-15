import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  MOCK_BASE_POSTS,
  getMockBlogPostDetail,
  fetchBlogPost,
  isBlogApiConfigured,
  type BlogPostDetail,
} from "../blog-api";
import BlogPostContent from "./blog-post-content";
import Footer from "../../../components/footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wirero.com";

export const revalidate = 3600;

export function generateStaticParams() {
  return MOCK_BASE_POSTS.map((post) => ({ slug: post.slug! }));
}

async function getPost(slug: string): Promise<BlogPostDetail | null> {
  if (isBlogApiConfigured()) {
    try {
      const real = await fetchBlogPost(slug);
      if (real) return real as BlogPostDetail;
    } catch {
      // Fall through to mock lookup on any live API failure.
    }
  }
  return getMockBlogPostDetail(slug);
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    return { title: "Post Not Found" };
  }

  const title = post.title ?? "Blog Post";
  const description =
    post.excerpt ??
    post.intro?.[0] ??
    `Learn about ${post.category?.toLowerCase() || "content distribution"} strategies and best practices for press release publishing and media syndication.`;
  const url = `${SITE_URL}/blog/${slug}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "article",
      ...(post.image ? { images: [{ url: post.image }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      ...(post.image ? { images: [post.image] } : {}),
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await getPost(slug);

  if (!post) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description:
      post.excerpt ??
      post.intro?.[0] ??
      "",
    url: `${SITE_URL}/blog/${slug}`,
    ...(post.image ? { image: post.image } : {}),
    ...(post.date ? { datePublished: post.date } : {}),
    ...(post.author?.name
      ? { author: { "@type": "Person", name: post.author.name } }
      : {}),
    publisher: {
      "@type": "Organization",
      name: "Wirero",
      url: SITE_URL,
    },
  };

  return (
    <div className="relative flex w-full min-w-0 flex-col items-stretch overflow-x-clip bg-color-white leading-[normal] tracking-[normal]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <BlogPostContent post={post} />
      <Footer />
    </div>
  );
}
