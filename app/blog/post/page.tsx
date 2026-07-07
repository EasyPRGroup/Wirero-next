import { Suspense } from "react";
import Footer from "../../../components/footer";
import BlogPostDetail from "./blog-post-detail";

export const metadata = {
  title: "Blog | Wirero",
};

function PostFallback() {
  return (
    <div className="w-full site-section" role="status" aria-live="polite">
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center gap-[1rem]">
        <span className="sr-only">Loading post...</span>
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
    </div>
  );
}

export default function BlogPostPage() {
  return (
    <div className="relative flex w-full min-w-0 flex-col items-stretch overflow-x-clip bg-color-white leading-[normal] tracking-[normal]">
      <Suspense fallback={<PostFallback />}>
        <BlogPostDetail />
      </Suspense>
      <Footer />
    </div>
  );
}
