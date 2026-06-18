"use client";
import type { NextPage } from "next";
import { useEffect, useMemo, useState } from "react";
import NewsroomCard from "./newsroom-card";

export type NewsArticle = {
  id: string | number;
  title: string;
  date: string;
  href?: string;
};

export type NewsroomType = {
  className?: string;
  /** Backend endpoint that returns the list of articles */
  apiUrl?: string;
  /** Number of articles shown per page */
  pageSize?: number;
};

const formatDate = (value: string) => {
  const parsed = new Date(value);
  if (Number.isNaN(parsed.getTime())) return value;
  return parsed.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const Newsroom: NextPage<NewsroomType> = ({
  className = "",
  apiUrl = process.env.NEXT_PUBLIC_NEWSROOM_API ?? "/api/articles",
  pageSize = 13,
}) => {
  const [articles, setArticles] = useState<NewsArticle[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    let active = true;

    const loadArticles = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) throw new Error(`Request failed (${response.status})`);
        const data = await response.json();
        const list: NewsArticle[] = Array.isArray(data) ? data : data.articles;
        if (active) setArticles(list ?? []);
      } catch (err) {
        if (active) {
          setArticles([]);
          setError(
            err instanceof Error ? err.message : "Unable to load articles"
          );
        }
      } finally {
        if (active) setLoading(false);
      }
    };

    loadArticles();
    return () => {
      active = false;
    };
  }, [apiUrl]);

  const totalPages = Math.max(1, Math.ceil(articles.length / pageSize));

  const pagedArticles = useMemo(() => {
    const start = (page - 1) * pageSize;
    return articles.slice(start, start + pageSize);
  }, [articles, page, pageSize]);

  const goToPage = (next: number) => {
    setPage(Math.min(Math.max(1, next), totalPages));
  };

  return (
    <section
      className={`self-stretch flex flex-col items-center py-[6.125rem] px-[6.875rem] box-border gap-[3rem] max-w-full text-center font-['Proxima_Nova'] mq450:py-[2.625rem] mq450:px-[1.25rem] mq800:py-[3.5rem] mq800:px-[3.438rem] ${className}`}
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
          <div className="relative text-[1.125rem] leading-[1.75rem] text-[#64676f]">
            Loading articles...
          </div>
        ) : error ? (
          <div className="relative text-[1.125rem] leading-[1.75rem] text-[#d14343]">
            {error}
          </div>
        ) : articles.length === 0 ? (
          <div className="relative text-[1.125rem] leading-[1.75rem] text-[#64676f]">
            No articles available right now.
          </div>
        ) : (
          <div className="w-full columns-1 gap-[1.5rem] md:columns-2 lg:columns-3 text-left">
            {pagedArticles.map((article) => (
              <NewsroomCard
                key={article.id}
                title={article.title}
                date={formatDate(article.date)}
                href={article.href}
              />
            ))}
          </div>
        )}

        {!loading && !error && totalPages > 1 && (
          <div className="flex items-center gap-[0.75rem]">
            <button
              type="button"
              onClick={() => goToPage(page - 1)}
              disabled={page === 1}
              aria-label="Previous page"
              className="cursor-pointer w-[2.75rem] h-[2.75rem] rounded-[10px] bg-color-white border-[#e2e5e9] border-solid border-[1px] flex items-center justify-center text-[#1a2530] disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-[0px_2px_12px_rgba(26,38,48,0.12)] transition-shadow"
            >
              ‹
            </button>
            {Array.from({ length: totalPages }, (_, index) => index + 1).map(
              (number) => (
                <button
                  key={number}
                  type="button"
                  onClick={() => goToPage(number)}
                  aria-current={page === number ? "page" : undefined}
                  className={`cursor-pointer w-[2.75rem] h-[2.75rem] rounded-[10px] border-solid border-[1px] flex items-center justify-center text-[1rem] transition-colors ${
                    page === number
                      ? "bg-[#1a8cd5] border-[#1a8cd5] text-color-white"
                      : "bg-color-white border-[#e2e5e9] text-[#1a2530] hover:bg-[#f7fafd]"
                  }`}
                >
                  {number}
                </button>
              )
            )}
            <button
              type="button"
              onClick={() => goToPage(page + 1)}
              disabled={page === totalPages}
              aria-label="Next page"
              className="cursor-pointer w-[2.75rem] h-[2.75rem] rounded-[10px] bg-color-white border-[#e2e5e9] border-solid border-[1px] flex items-center justify-center text-[#1a2530] disabled:opacity-40 disabled:cursor-not-allowed hover:shadow-[0px_2px_12px_rgba(26,38,48,0.12)] transition-shadow"
            >
              ›
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Newsroom;
