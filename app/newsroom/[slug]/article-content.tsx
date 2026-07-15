"use client";
import { useMemo } from "react";
import Link from "next/link";
import parse from "html-react-parser";
import type { Article } from "../newsroom-api";

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

function renderHtml(html: string) {
  return parse(sanitizeHtml(html));
}

function looksLikeHtml(value: string): boolean {
  return /<[a-z][\s\S]*?>/i.test(value);
}

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

const ShareIcons = ({ title, slug }: { title: string; slug: string }) => {
  const articleUrl = `https://wirero.com/newsroom/${slug}`;
  const encodedUrl = encodeURIComponent(articleUrl);
  const encodedTitle = encodeURIComponent(title);

  return (
    <div className="flex items-center gap-[0.625rem]">
      <a
        href={`https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on Facebook"
        className="rounded-[40px] border-[#e2e5e9] border-solid border-[1px] flex items-center justify-center p-[0.625rem] hover:bg-[#f7fafd] transition-colors"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/facebook.svg" alt="" className="h-[1rem] w-[1rem]" />
      </a>
      <a
        href={`https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on X"
        className="rounded-[40px] border-[#e2e5e9] border-solid border-[1px] flex items-center justify-center p-[0.625rem] hover:bg-[#f7fafd] transition-colors"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/twitter.svg" alt="" className="h-[1rem] w-[1rem]" />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Share on LinkedIn"
        className="rounded-[40px] border-[#e2e5e9] border-solid border-[1px] flex items-center justify-center p-[0.625rem] hover:bg-[#f7fafd] transition-colors"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/linkedin-fill.svg" alt="" className="h-[1rem] w-[1rem]" />
      </a>
    </div>
  );
};

interface ArticleContentProps {
  article: Article;
}

export default function ArticleContent({ article }: ArticleContentProps) {
  const parsedHtml = useMemo(() => {
    const html =
      article?.contentHtml ||
      (article?.content && looksLikeHtml(article.content)
        ? article.content
        : "");
    if (!html) return null;
    const cleaned = article?.image ? removeFirstImage(html) : html;
    return renderHtml(cleaned);
  }, [article?.contentHtml, article?.content, article?.image]);

  const hasHtml = Boolean(article.contentHtml);
  const contentIsHtml =
    Boolean(article.content) && looksLikeHtml(article.content ?? "");
  const hasTextContent = Boolean(article.content) && !contentIsHtml;
  const renderParsed = hasHtml || contentIsHtml;

  return (
    <article className="w-full site-section">
      <div className="w-full max-w-[48rem] mx-auto flex flex-col items-center gap-[2rem] text-left">
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
            <p className="m-0 text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d575f]">
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
                <span aria-hidden="true">&bull;</span>
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

        {/* Share & Author Section */}
        <div className="w-full flex items-center justify-between border-t border-[#e2e5e9] pt-[1.5rem]">
          <ShareIcons
            title={article.title || "Article"}
            slug={article.slug || ""}
          />
          {article.author?.name ? (
            <div className="flex items-center gap-[0.5rem] text-[0.875rem] text-[#64676f]">
              <span>
                By <span className="font-semibold text-[#1a2530]">{article.author.name}</span>
              </span>
            </div>
          ) : null}
        </div>

        <div className="w-full mt-[1rem]">
          <Link
            href="/newsroom/"
            className="text-[1rem] text-[#1a8cd5] no-underline hover:underline"
          >
            &lsaquo; Back to Newsroom
          </Link>
        </div>
      </div>
    </article>
  );
}
