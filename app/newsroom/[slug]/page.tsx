import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { fetchArticle, getNewsroomApiConfig } from "../newsroom-api";
import ArticleContent from "./article-content";
import Footer from "../../../components/footer";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wirero.com";

export const revalidate = 3600;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const { apiBase, siteUrl } = getNewsroomApiConfig();

  if (!apiBase || !siteUrl) {
    return { title: "Article" };
  }

  try {
    const article = await fetchArticle(slug);
    if (!article) {
      return { title: "Article Not Found" };
    }

    const title = article.title || "Article";
    const description =
      article.excerpt ||
      `Read "${article.title}" on Wirero Newsroom.`;
    const canonical = `${SITE_URL}/newsroom/${slug}`;

    return {
      title,
      description,
      alternates: { canonical },
      openGraph: {
        title,
        description,
        url: canonical,
        type: "article",
        ...(article.image ? { images: [{ url: article.image }] } : {}),
        ...(article.date ? { publishedTime: article.date } : {}),
      },
      twitter: {
        card: "summary_large_image",
        title,
        description,
        ...(article.image ? { images: [article.image] } : {}),
      },
    };
  } catch {
    return { title: "Article" };
  }
}

export default async function NewsroomArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { apiBase, siteUrl } = getNewsroomApiConfig();

  if (!apiBase || !siteUrl) {
    notFound();
  }

  let article;
  try {
    article = await fetchArticle(slug);
  } catch {
    notFound();
  }

  if (!article) {
    notFound();
  }

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "NewsArticle",
    headline: article.title || "Untitled article",
    ...(article.date ? { datePublished: article.date } : {}),
    ...(article.image ? { image: article.image } : {}),
    ...(article.excerpt ? { description: article.excerpt } : {}),
    ...(article.author?.name
      ? { author: { "@type": "Person", name: article.author.name } }
      : {}),
    ...(article.source
      ? { publisher: { "@type": "Organization", name: article.source } }
      : {}),
    url: `${SITE_URL}/newsroom/${slug}`,
  };

  return (
    <div className="relative flex w-full min-w-0 flex-col items-stretch overflow-x-clip bg-color-white leading-[normal] tracking-[normal]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ArticleContent article={article} />
      <Footer />
    </div>
  );
}
