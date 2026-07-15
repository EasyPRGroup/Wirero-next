"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect } from "react";

export default function LegacyRedirect() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const slug = searchParams.get("slug");

  useEffect(() => {
    if (slug) {
      router.replace(`/blog/${slug}`);
    } else {
      router.replace("/blog");
    }
  }, [slug, router]);

  return null;
}
