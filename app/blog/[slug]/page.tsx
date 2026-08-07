import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  fetchBlogPost,
  isBlogApiConfigured,
  type BlogPostDetail,
} from "../blog-api";
import BlogPostContent from "./blog-post-content";
import Footer from "../../../components/footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wirero.com";

export const revalidate = 60;

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

  // Use SEO fields from API if available, fallback to content fields
  const title = post.metaTitle || post.title || "Blog Post";
  const description =
    post.metaDescription ||
    post.excerpt ||
    post.intro?.[0] ||
    `Learn about ${post.category?.toLowerCase() || "content distribution"} strategies and best practices.`;
  
  const canonicalUrl = post.canonicalUrl || `${SITE_URL}/blog/${slug}`;
  const ogTitle = post.ogTitle || title;
  const ogDescription = post.ogDescription || description;
  const ogImageUrl = post.ogImage || post.image || "";

  return {
    title,
    description,
    ...(post.metaKeywords ? { keywords: post.metaKeywords.split(",").map(k => k.trim()) } : {}),
    alternates: { canonical: canonicalUrl },
    robots: post.robots || "index, follow",
    openGraph: {
      title: ogTitle,
      description: ogDescription,
      url: canonicalUrl,
      type: "article",
      ...(ogImageUrl ? { images: [{ url: ogImageUrl }] } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: ogDescription,
      ...(ogImageUrl ? { images: [ogImageUrl] } : {}),
    },
  };
}

async function getPost(slug: string): Promise<BlogPostDetail | null> {
  if (!isBlogApiConfigured()) {
    return null;
  }
  try {
    const real = await fetchBlogPost(slug);
    if (real) return real as BlogPostDetail;
  } catch {
    // Fall through to return null on API failure
  }
  return null;
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
