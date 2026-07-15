"use client";
import { useMemo } from "react";
import Link from "next/link";
import parse from "html-react-parser";
import type { BlogPostDetail } from "../blog-api";

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

const CalendarIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <rect x="2" y="3" width="12" height="11" rx="1.5" stroke="#64676f" strokeWidth="1.3" />
    <path d="M2 6.5H14" stroke="#64676f" strokeWidth="1.3" strokeLinecap="round" />
    <path d="M5 1.5V4M11 1.5V4" stroke="#64676f" strokeWidth="1.3" strokeLinecap="round" />
  </svg>
);

const ClockIcon = () => (
  <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <circle cx="8" cy="8" r="6.25" stroke="#64676f" strokeWidth="1.3" />
    <path
      d="M8 4.5V8L10.25 9.5"
      stroke="#64676f"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ShareIcons = () => (
  <div className="flex items-center gap-[0.625rem]">
    <a
      href="https://facebook.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Share on Facebook"
      className="rounded-[40px] border-[#e2e5e9] border-solid border-[1px] flex items-center justify-center p-[0.625rem] hover:bg-[#f7fafd] transition-colors"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/facebook.svg" alt="" className="h-[1rem] w-[1rem]" />
    </a>
    <a
      href="https://twitter.com"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Share on X"
      className="rounded-[40px] border-[#e2e5e9] border-solid border-[1px] flex items-center justify-center p-[0.625rem] hover:bg-[#f7fafd] transition-colors"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/twitter.svg" alt="" className="h-[1rem] w-[1rem]" />
    </a>
    <a
      href="https://linkedin.com"
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

interface BlogPostContentProps {
  post: BlogPostDetail;
}

export default function BlogPostContent({ post }: BlogPostContentProps) {
  const parsedHtml = useMemo(() => {
    const html =
      post.contentHtml ||
      (post.content && looksLikeHtml(post.content) ? post.content : "");
    if (!html) return null;
    return renderHtml(html);
  }, [post.contentHtml, post.content]);

  const hasStructuredBody = Boolean(post.sections && post.sections.length);
  const tocItems = hasStructuredBody
    ? [
        ...(post.coreHeading
          ? [{ id: "core-principles", label: post.coreHeading }]
          : []),
        ...(post.sections ?? []).map((s) => ({ id: s.id, label: s.heading })),
        ...(post.closing ? [{ id: post.closing.id, label: post.closing.heading }] : []),
      ]
    : [];

  return (
    <article className="w-full site-section">
      <div className="w-full max-w-[76rem] mx-auto flex flex-col items-center gap-[2.5rem]">
        {/* Header */}
        <div className="w-full max-w-[46rem] flex flex-col items-center gap-[1rem] text-center">
          <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase text-[1rem] text-[#0bc111]">
            Blog
          </b>
          <h1 className="m-0 text-[2.5rem] leading-[3rem] font-bold text-[#1a2530] mq450:text-[1.875rem] mq450:leading-[2.25rem]">
            {post.title ?? "Untitled post"}
          </h1>
          <div className="flex flex-wrap items-center justify-center gap-[0.625rem] text-[0.9375rem] leading-[1.25rem] text-[#64676f]">
            {post.author?.avatar ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={post.author.avatar}
                alt=""
                className="h-[1.625rem] w-[1.625rem] rounded-[50%] object-cover"
              />
            ) : null}
            {post.author?.name ? (
              <span className="font-semibold text-[#1a2530]">{post.author.name}</span>
            ) : null}
            {post.date ? (
              <>
                <span aria-hidden="true">•</span>
                <span className="flex items-center gap-[0.375rem]">
                  <CalendarIcon />
                  {post.date}
                </span>
              </>
            ) : null}
            {post.readTime ? (
              <>
                <span aria-hidden="true">•</span>
                <span className="flex items-center gap-[0.375rem]">
                  <ClockIcon />
                  {post.readTime}
                </span>
              </>
            ) : null}
          </div>
        </div>

        {/* Hero image */}
        {post.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={post.image}
            alt=""
            className="w-full max-w-[52rem] max-h-[26rem] object-cover rounded-[12px]"
          />
        ) : null}

        {/* Body */}
        <div className="w-full flex items-start gap-[3rem] text-left mq1050:flex-col">
          <div className="flex-1 min-w-0 flex flex-col gap-[1.75rem] text-[#1a2530] text-[1.0625rem] leading-[1.75rem]">
            {hasStructuredBody ? (
              <>
                {(post.intro ?? []).map((p, i) => (
                  <p key={i} className="m-0 text-[#4d575f]">
                    {p}
                  </p>
                ))}

                {post.keyHighlights && post.keyHighlights.length ? (
                  <div className="flex flex-col gap-[0.75rem]">
                    <b className="text-[#1a2530]">Key highlights:</b>
                    <ul className="m-0 pl-[1.25rem] flex flex-col gap-[0.5rem] text-[#4d575f]">
                      {post.keyHighlights.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ) : null}

                {post.coreHeading ? (
                  <div id="core-principles" className="flex flex-col gap-[0.75rem] scroll-mt-[6rem]">
                    <h2 className="m-0 text-[1.75rem] leading-[2.25rem] font-bold text-[#1a2530]">
                      {post.coreHeading}
                    </h2>
                    {post.coreIntro ? (
                      <p className="m-0 text-[#4d575f]">{post.coreIntro}</p>
                    ) : null}
                  </div>
                ) : null}

                {(post.sections ?? []).map((section) => (
                  <div
                    key={section.id}
                    id={section.id}
                    className="flex flex-col gap-[0.75rem] scroll-mt-[6rem]"
                  >
                    <h3 className="m-0 text-[1.375rem] leading-[1.875rem] font-bold text-[#1a2530]">
                      {section.heading}
                    </h3>
                    {section.paragraphs.map((p, i) => (
                      <p key={i} className="m-0 text-[#4d575f]">
                        {p}
                      </p>
                    ))}
                  </div>
                ))}

                {post.closing ? (
                  <div
                    id={post.closing.id}
                    className="flex flex-col gap-[0.75rem] scroll-mt-[6rem]"
                  >
                    <h2 className="m-0 text-[1.75rem] leading-[2.25rem] font-bold text-[#1a2530]">
                      {post.closing.heading}
                    </h2>
                    {post.closing.paragraphs.map((p, i) => (
                      <p key={i} className="m-0 text-[#4d575f]">
                        {p}
                      </p>
                    ))}
                  </div>
                ) : null}
              </>
            ) : parsedHtml ? (
              <div className="prose-newsroom">{parsedHtml}</div>
            ) : post.content ? (
              <p className="m-0 whitespace-pre-line text-[#4d575f]">{post.content}</p>
            ) : post.excerpt ? (
              <p className="m-0 text-[#4d575f]">{post.excerpt}</p>
            ) : (
              <p className="m-0 text-[#64676f]">This post has no content yet.</p>
            )}
          </div>

          {/* Sidebar */}
          <aside className="w-[18.5rem] max-w-full shrink-0 flex flex-col gap-[1.25rem] mq1050:w-full">
            <div className="sticky top-[6rem] flex flex-col gap-[1.25rem]">
              {tocItems.length ? (
                <div className="rounded-[12px] border-[#e2e5e9] border-solid border-[1px] p-[1.125rem] flex flex-col gap-[0.75rem]">
                  <b className="text-[0.9375rem] text-[#1a2530]">Contents</b>
                  <nav className="flex flex-col gap-[0.5rem]">
                    {tocItems.map((item) => (
                      <a
                        key={item.id}
                        href={`#${item.id}`}
                        className="text-[0.875rem] leading-[1.25rem] text-[#0461c3] no-underline hover:underline"
                      >
                        {item.label}
                      </a>
                    ))}
                  </nav>
                </div>
              ) : null}

              {post.author?.name ? (
                <div className="rounded-[12px] border-[#e2e5e9] border-solid border-[1px] p-[1.125rem] flex items-center gap-[0.75rem]">
                  {post.author.avatar ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={post.author.avatar}
                      alt=""
                      className="h-[2.5rem] w-[2.5rem] rounded-[50%] object-cover shrink-0"
                    />
                  ) : null}
                  <div className="flex flex-col">
                    <span className="text-[0.9375rem] font-semibold text-[#1a2530]">
                      {post.author.name}
                    </span>
                    {post.author.handle ? (
                      <span className="text-[0.8125rem] text-[#64676f]">
                        {post.author.handle}
                      </span>
                    ) : null}
                  </div>
                </div>
              ) : null}

              <div className="rounded-[12px] border-[#e2e5e9] border-solid border-[1px] p-[1.125rem] flex flex-col gap-[0.75rem]">
                <b className="text-[0.9375rem] text-[#1a2530]">Share Article</b>
                <ShareIcons />
              </div>
            </div>
          </aside>
        </div>

        <div className="w-full">
          <Link
            href="/blog/"
            className="text-[1rem] text-[#0461c3] no-underline hover:underline"
          >
            ‹ Back to Blog
          </Link>
        </div>
      </div>
    </article>
  );
}
