import { Suspense } from "react";
import LegacyRedirect from "./legacy-redirect";

export default function LegacyBlogPost() {
  return (
    <Suspense fallback={null}>
      <LegacyRedirect />
    </Suspense>
  );
}
