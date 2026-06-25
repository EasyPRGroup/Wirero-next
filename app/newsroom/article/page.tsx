import { Suspense } from "react";
import Footer from "../../../components/footer";
import ArticleDetail from "./article-detail";

export const metadata = {
  title: "Article | Wirero",
};

function ArticleFallback() {
  return (
    <div
      className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-[1rem] py-[6rem] px-[1.25rem]"
      role="status"
      aria-live="polite"
    >
      <span className="sr-only">Loading article...</span>
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
}

export default function ArticlePage() {
  return (
    <div className="w-full relative bg-color-white overflow-hidden flex flex-col items-start leading-[normal] tracking-[normal]">
      <Suspense fallback={<ArticleFallback />}>
        <ArticleDetail />
      </Suspense>
      <Footer />
    </div>
  );
}
