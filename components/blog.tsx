"use client";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import BlogCard from "./blog-card";
import {
  fetchBlogPosts,
  isBlogApiConfigured,
  postHref,
  type BlogPost,
} from "../app/blog/blog-api";

export type BlogType = {
  className?: string;
  /** Number of posts shown per page */
  pageSize?: number;
};

const Spinner = () => (
  <div
    className="flex flex-col items-center justify-center gap-[1rem] py-[3.5rem]"
    role="status"
    aria-live="polite"
  >
    <span className="sr-only">Loading posts...</span>
    <svg
      className="animate-spin"
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="16" stroke="#e2e5e9" strokeWidth="4" />
      <path
        d="M36 20a16 16 0 0 0-16-16"
        stroke="#0bc111"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

const ChevronLeftIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M10 3L5.5 8L10 13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const ChevronRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
    <path
      d="M6 3L10.5 8L6 13"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

/**
 * Build a windowed list of page numbers for pagination.
 * Always includes the first and last page, with ellipsis for gaps.
 */
function getPageNumbers(current: number, total: number): (number | "...")[] {
  if (total <= 7) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const pages: (number | "...")[] = [1];
  const start = Math.max(2, current - 1);
  const end = Math.min(total - 1, current + 1);

  if (start > 2) pages.push("...");
  for (let i = start; i <= end; i++) pages.push(i);
  if (end < total - 1) pages.push("...");

  pages.push(total);
  return pages;
}

const Blog: NextPage<BlogType> = ({ className = "", pageSize = 9 }) => {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let active = true;
    const controller = new AbortController();

    const loadPosts = async () => {
      setLoading(true);

      if (!isBlogApiConfigured()) {
        if (active) {
          setPosts([]);
          setTotalPages(1);
        }
        if (active) setLoading(false);
        return;
      }

      try {
        const result = await fetchBlogPosts(
          page,
          pageSize,
          controller.signal,
        );
        if (active) {
          setPosts(result.posts);
          setTotalPages(result.totalPages);
        }
      } catch (err) {
        if (
          err instanceof DOMException &&
          err.name === "AbortError"
        ) {
          return;
        }
        if (active) {
          setPosts([]);
          setTotalPages(1);
        }
      }

      if (active) setLoading(false);
    };

    loadPosts();
    return () => {
      active = false;
      controller.abort();
    };
  }, [page, pageSize]);

  const goToPage = (next: number) => {
    setPage(Math.min(Math.max(1, next), totalPages));
  };

  return (
    <section
      className={`site-section self-stretch flex flex-col items-center box-border gap-[3rem] max-w-full text-center font-proxima ${className}`}
    >
      <div className="w-[46rem] max-w-full flex flex-col items-center gap-[1rem]">
        <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase text-[1rem] text-[#0bc111]">
          Blog
        </b>
        <h1 className="m-0 relative text-[3rem] leading-[3.625rem] font-bold font-[inherit] text-[#1a2530] mq450:text-[2rem] mq450:leading-[2.5rem] mq800:text-[2.5rem] mq800:leading-[3rem]">
          Insights on Distribution, Publishing &amp; Scale
        </h1>
        <div className="relative text-[1.0625rem] leading-[1.625rem] font-proxima text-[#4d575f]">
          Stay updated with insights, guides, and best practices on content
          distribution, publishing infrastructure, automation, and
          industry-specific distribution strategies.
        </div>
      </div>

      <div className="self-stretch flex flex-col items-center gap-[2.5rem] max-w-full">
        {loading ? (
          <Spinner />
        ) : posts.length === 0 ? (
          <div className="relative text-[1.125rem] leading-[1.75rem] text-[#64676f]">
            No posts available right now.
          </div>
        ) : (
          <div className="w-full grid grid-cols-3 gap-[1.5rem] mq1050:grid-cols-2 mq750:grid-cols-1 text-left">
            {posts.map((post) => (
              <BlogCard
                key={String(post.id ?? post.slug ?? post.title)}
                title={post.title ?? "Untitled post"}
                date={post.date ?? ""}
                readTime={post.readTime}
                category={post.category}
                excerpt={post.excerpt}
                image={post.image}
                href={postHref(post)}
              />
            ))}
          </div>
        )}

        {!loading && totalPages > 1 && (
          <div className="flex flex-wrap justify-center items-center gap-[0.625rem]">
            <button
              type="button"
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              aria-label="Previous page"
              className="cursor-pointer w-[2.5rem] h-[2.5rem] rounded-[10px] bg-color-white border-[#e2e5e9] border-solid border-[1px] flex items-center justify-center text-[#1a2530] disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-[0px_2px_12px_rgba(26,38,48,0.12)] transition-shadow"
            >
              <ChevronLeftIcon />
            </button>
            {getPageNumbers(page, totalPages).map((item, index) =>
              item === "..." ? (
                <span
                  key={`ellipsis-${index}`}
                  className="w-[2.5rem] h-[2.5rem] flex items-center justify-center text-[#64676f] text-[1rem]"
                >
                  …
                </span>
              ) : (
                <button
                  key={item}
                  type="button"
                  onClick={() => goToPage(item)}
                  aria-current={page === item ? "page" : undefined}
                  className={`cursor-pointer w-[2.5rem] h-[2.5rem] rounded-[10px] border-solid border-[1px] flex items-center justify-center text-[1rem] transition-colors ${
                    page === item
                      ? "bg-[#0461c3] border-[#0461c3] text-color-white"
                      : "bg-color-white border-[#e2e5e9] text-[#1a2530] hover:bg-[#f7fafd]"
                  }`}
                >
                  {item}
                </button>
              ),
            )}
            <button
              type="button"
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages}
              aria-label="Next page"
              className="cursor-pointer w-[2.5rem] h-[2.5rem] rounded-[10px] bg-color-white border-[#e2e5e9] border-solid border-[1px] flex items-center justify-center text-[#1a2530] disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-[0px_2px_12px_rgba(26,38,48,0.12)] transition-shadow"
            >
              <ChevronRightIcon />
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Blog;
