"use client";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import NewsroomCard from "./newsroom-card";
import {
  articleHref,
  fetchArticles,
  type Article,
} from "../app/newsroom/newsroom-api";

export type NewsroomType = {
  className?: string;
  /** Number of articles shown per page (backend-driven, fixed at 10) */
  pageSize?: number;
};

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

const Spinner = () => (
  <div
    className="flex flex-col items-center justify-center gap-[1rem] py-[3.5rem]"
    role="status"
    aria-live="polite"
  >
    <span className="sr-only">Loading articles...</span>
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
        stroke="#1a8cd5"
        strokeWidth="4"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

/**
 * Build a windowed list of page numbers for pagination.
 * Always includes the first and last page, with ellipsis for gaps.
 * Example for 67 total pages:
 *   page 1  -> [1, 2, "...", 67]
 *   page 3  -> [1, 2, 3, 4, "...", 67]
 *   page 5  -> [1, "...", 4, 5, 6, "...", 67]
 *   page 66 -> [1, "...", 65, 66, 67]
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

const Newsroom: NextPage<NewsroomType> = ({
  className = "",
  pageSize = 10,
}) => {
  const [articles, setArticles] = useState<Article[]>([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let active = true;
    const controller = new AbortController();

    const loadArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const result = await fetchArticles(page, pageSize, controller.signal);
        if (active) {
          setArticles(result.articles);
          setTotalPages(result.totalPages);
        }
      } catch (err) {
        if (active) {
          if (
            err instanceof DOMException &&
            err.name === "AbortError"
          ) {
            return;
          }
          setArticles([]);
          setTotalPages(1);
          setError(
            err instanceof Error ? err.message : "Unable to load articles",
          );
        }
      } finally {
        if (active) setLoading(false);
      }
    };

    loadArticles();
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
      className={`self-stretch flex flex-col items-center py-[6.125rem] box-border gap-[3rem] max-w-full text-center font-['Proxima_Nova'] home-gutters mq450:py-[2.625rem] mq800:py-[3.5rem] ${className}`}
    >
      <div className="w-[60rem] max-w-full flex flex-col items-center gap-[1rem]">
        <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase text-[1rem] text-[#0bc111]">
          Newsroom
        </b>
        <h1 className="m-0 relative text-[3.5rem] leading-[4.25rem] font-bold font-[inherit] text-[#1a2530] mq450:text-[2.125rem] mq450:leading-[2.563rem] mq800:text-[2.813rem] mq800:leading-[3.375rem]">
          Latest News Around the World
        </h1>
        <div className="relative text-[1.125rem] leading-[1.75rem] font-[Urbanist] text-[#4d575f]">
          24 hours a day, 7 days a week, 365 days a year. Find out about the
          latest information, news and announcements.
        </div>
      </div>

      <div className="self-stretch flex flex-col items-center gap-[2.5rem] max-w-full">
        {loading ? (
          <Spinner />
        ) : error ? (
          <div
            className="relative text-[1.125rem] leading-[1.75rem] text-[#d14343] max-w-[40rem]"
            role="alert"
          >
            {error}
          </div>
        ) : articles.length === 0 ? (
          <div className="relative text-[1.125rem] leading-[1.75rem] text-[#64676f]">
            No articles available right now.
          </div>
        ) : (
          <div className="w-full columns-3 gap-[1.5rem] mq1050:columns-2 mq750:columns-1 text-left">
            {articles.map((article) => (
              <NewsroomCard
                key={String(article.id ?? article.slug ?? article.title)}
                title={article.title ?? "Untitled article"}
                date={formatDate(article.date ?? "")}
                href={articleHref(article)}
                excerpt={article.excerpt}
                image={article.image}
              />
            ))}
          </div>
        )}

        {!loading && !error && totalPages > 1 && (
          <div className="flex flex-wrap justify-center items-center gap-[0.75rem]">
            <button
              type="button"
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              aria-label="Previous page"
              className="cursor-pointer h-[2.75rem] px-[1rem] rounded-[10px] bg-color-white border-[#e2e5e9] border-solid border-[1px] flex items-center justify-center text-[1rem] text-[#1a2530] disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-[0px_2px_12px_rgba(26,38,48,0.12)] transition-shadow"
            >
              ‹ Prev
            </button>
            {getPageNumbers(page, totalPages).map((item, index) =>
              item === "..." ? (
                <span
                  key={`ellipsis-${index}`}
                  className="w-[2.75rem] h-[2.75rem] flex items-center justify-center text-[#64676f] text-[1rem]"
                >
                  …
                </span>
              ) : (
                <button
                  key={item}
                  type="button"
                  onClick={() => goToPage(item)}
                  aria-current={page === item ? "page" : undefined}
                  className={`cursor-pointer w-[2.75rem] h-[2.75rem] rounded-[10px] border-solid border-[1px] flex items-center justify-center text-[1rem] transition-colors ${
                    page === item
                      ? "bg-[#1a8cd5] border-[#1a8cd5] text-color-white"
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
              className="cursor-pointer h-[2.75rem] px-[1rem] rounded-[10px] bg-color-white border-[#e2e5e9] border-solid border-[1px] flex items-center justify-center text-[1rem] text-[#1a2530] disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-[0px_2px_12px_rgba(26,38,48,0.12)] transition-shadow"
            >
              Next ›
            </button>
          </div>
        )}

        {!loading && !error && totalPages > 0 && (
          <div className="text-[0.875rem] leading-[1.25rem] text-[#64676f]">
            Page {page} of {totalPages}
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsroom;
