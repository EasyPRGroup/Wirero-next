"use client";
import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import parse from "html-react-parser";
import { fetchArticle, type Article } from "../newsroom-api";

/**
 * Sanitize an HTML string before parsing:
 * - Remove <script>, <style>, <iframe> tags and their content entirely.
 * - Strip inline event handler attributes (onclick, onerror, etc.).
 */
function sanitizeHtml(html: string): string {
  return html
    .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
    .replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "")
    .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "")
    .replace(/\son\w+\s*=\s*"[^"]*"/gi, "")
    .replace(/\son\w+\s*=\s*'[^']*'/gi, "")
    .replace(/\son\w+\s*=\s*[^\s>]+/gi, "");
}

/**
 * Convert an HTML string into React elements via html-react-parser.
 * The HTML is sanitized first to remove scripts, styles, iframes,
 * and inline event handlers for safety.
 */
function renderHtml(html: string) {
  return parse(sanitizeHtml(html));
}

/** Detect whether a string contains HTML markup that should be parsed. */
function looksLikeHtml(value: string): boolean {
  return /<[a-z][\s\S]*?>/i.test(value);
}

/** Remove the first <img> tag from an HTML string (featured image is shown separately). */
function removeFirstImage(html: string): string {
  return html.replace(/<img\b[^>]*>/i, "");
}

const formatDate = (value: string) => {
  if (!value) return "";
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

function Spinner() {
  return (
    <div
      className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-[1rem] py-[6rem] px-[1.25rem]"
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Loading article...</span>
      <svg
        className="animate-spin"
        width="44"
        height="44"
        viewBox="0 0 40 40"
        fill="none"
        aria-hidden="true"
      >
        <circle cx="20" cy="20" r="16" stroke="#e2e5e9" strokeWidth="4" />
        <path
          d="M36 20a16 16 0 0 0-16-16"
          stroke="#1a8cd5"
          strokeWidth="4"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
}

export default function ArticleDetail() {
  const searchParams = useSearchParams();
  const slug = searchParams.get("slug");

  const [article, setArticle] = useState<Article | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    if (!slug) {
      setArticle(null);
      setError(null);
      setNotFound(true);
      setLoading(false);
      return;
    }

    let active = true;
    const controller = new AbortController();

    const loadArticle = async () => {
      setLoading(true);
      setError(null);
      setNotFound(false);
      try {
        const result = await fetchArticle(slug, controller.signal);
        if (active) {
          if (!result) {
            setArticle(null);
            setNotFound(true);
          } else {
            setArticle(result);
          }
        }
      } catch (err) {
        if (active) {
          if (err instanceof DOMException && err.name === "AbortError") {
            return;
          }
          setArticle(null);
          setNotFound(false);
          setError(
            err instanceof Error ? err.message : "Unable to load article",
          );
        }
      } finally {
        if (active) setLoading(false);
      }
    };

    loadArticle();
    return () => {
      active = false;
      controller.abort();
    };
  }, [slug]);

  const parsedHtml = useMemo(() => {
    // Prefer the explicit contentHtml/html field, but also parse the
    // plain `content` field when it actually contains HTML markup.
    // Use || (not ??) so that empty strings fall through to content.
    const html =
      article?.contentHtml ||
      (article?.content && looksLikeHtml(article.content)
        ? article.content
        : "");
    if (!html) return null;
    // Remove the first <img> from the content body when a featured
    // image is already displayed above, to avoid showing it twice.
    const cleaned = article?.image ? removeFirstImage(html) : html;
    return renderHtml(cleaned);
  }, [article?.contentHtml, article?.content, article?.image]);

  if (loading) return <Spinner />;

  if (error) {
    return (
      <div className="w-full max-w-[48rem] mx-auto py-[6rem] px-[1.25rem] flex flex-col items-center gap-[1.5rem] text-center">
        <h1 className="m-0 text-[2rem] leading-[2.5rem] font-bold text-[#1a2530]">
          Something went wrong
        </h1>
        <p className="m-0 text-[1.125rem] leading-[1.75rem] text-[#d14343]">
          {error}
        </p>
        <Link
          href="/newsroom/"
          className="text-[1rem] text-[#1a8cd5] no-underline hover:underline"
        >
          Back to Newsroom
        </Link>
      </div>
    );
  }

  if (notFound) {
    return (
      <div className="w-full max-w-[48rem] mx-auto py-[6rem] px-[1.25rem] flex flex-col items-center gap-[1.5rem] text-center">
        <h1 className="m-0 text-[2rem] leading-[2.5rem] font-bold text-[#1a2530]">
          Article not found
        </h1>
        <p className="m-0 text-[1.125rem] leading-[1.75rem] text-[#64676f]">
          We couldn&apos;t find the article you were looking for.
        </p>
        <Link
          href="/newsroom/"
          className="text-[1rem] text-[#1a8cd5] no-underline hover:underline"
        >
          Back to Newsroom
        </Link>
      </div>
    );
  }

  if (!article) return null;

  const hasHtml = Boolean(article.contentHtml);
  const contentIsHtml =
    Boolean(article.content) && looksLikeHtml(article.content ?? "");
  const hasTextContent = Boolean(article.content) && !contentIsHtml;
  const renderParsed = hasHtml || contentIsHtml;

  return (
    <article className="w-full max-w-[48rem] mx-auto py-[5rem] px-[1.25rem] flex flex-col items-center gap-[2rem] text-left">
      <div className="w-full flex flex-col items-center gap-[1rem] text-center">
        <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase text-[1rem] text-[#0bc111]">
          Newsroom
        </b>
        {article.date ? (
          <time className="text-[0.9375rem] leading-[1.25rem] text-[#64676f]">
            {formatDate(article.date)}
          </time>
        ) : null}
        <h1 className="m-0 text-[2.5rem] leading-[3rem] font-bold text-[#1a2530] mq450:text-[1.875rem] mq450:leading-[2.25rem]">
          {article.title ?? "Untitled article"}
        </h1>
        {article.excerpt ? (
          <p className="m-0 text-[1.125rem] leading-[1.75rem] font-[Urbanist] text-[#4d575f]">
            {article.excerpt}
          </p>
        ) : null}
        {(article.author?.name || article.source) ? (
          <div className="flex flex-wrap items-center justify-center gap-[0.5rem] text-[0.875rem] leading-[1.25rem] text-[#64676f]">
            {article.author?.name ? (
              <span>
                By <span className="font-semibold text-[#1a2530]">{article.author.name}</span>
              </span>
            ) : null}
            {article.author?.name && article.source ? (
              <span aria-hidden="true">•</span>
            ) : null}
            {article.source ? (
              article.sourceUrl ? (
                <a
                  href={article.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="text-[#1a8cd5] no-underline hover:underline"
                >
                  {article.source}
                </a>
              ) : (
                <span>{article.source}</span>
              )
            ) : null}
          </div>
        ) : null}
      </div>

      {article.image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={article.image}
          alt=""
          className="w-full max-h-[26rem] object-cover rounded-[12px]"
        />
      ) : null}

      <div className="w-full flex flex-col gap-[1.25rem] text-[#1a2530] text-[1.0625rem] leading-[1.75rem] prose-newsroom">
        {renderParsed ? (
          <div className="prose-newsroom">{parsedHtml}</div>
        ) : hasTextContent ? (
          <p className="m-0 whitespace-pre-line">{article.content}</p>
        ) : (
          <p className="m-0 text-[#64676f]">
            This article has no content yet.
          </p>
        )}
      </div>

      <div className="w-full mt-[1rem]">
        <Link
          href="/newsroom/"
          className="text-[1rem] text-[#1a8cd5] no-underline hover:underline"
        >
          ‹ Back to Newsroom
        </Link>
      </div>
    </article>
  );
}
