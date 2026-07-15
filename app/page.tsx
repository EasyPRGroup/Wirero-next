import type { Metadata } from "next";
import Home from "./home";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wirero.com";

export const metadata: Metadata = {
  title: "Press Release Distribution Across 1000+ News Sites | Automated Publishing",
  description:
    "Publish press releases across 1000+ news sites in 10 industry networks. Dofollow backlinks, RSS automation, and instant multi-domain distribution.",
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: "Press Release Distribution Across 1000+ News Sites",
    description:
      "Publish press releases across 1000+ news sites. Dofollow backlinks, RSS automation, and instant multi-domain distribution.",
    url: `${SITE_URL}/`,
  },
};

export default function Page() {
  return <Home />;
}
