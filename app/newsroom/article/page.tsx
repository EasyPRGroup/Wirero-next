"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, Suspense } from "react";

function LegacyArticleRedirect() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const slug = searchParams.get("slug");

  useEffect(() => {
    if (slug) {
      router.replace(`/newsroom/${slug}`);
    } else {
      router.replace("/newsroom");
    }
  }, [slug, router]);

  return null;
}

export default function LegacyArticlePage() {
  return (
    <Suspense fallback={null}>
      <LegacyArticleRedirect />
    </Suspense>
  );
}
