import type { Metadata } from "next";
import Home from "./home";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wirero.com";

export const metadata: Metadata = {
  title: "Press Release Distribution Across 1000+ News Sites | Automated Publishing",
  description:
    "Publish press releases across 1000+ news and media sites in 10 industry-specific networks. Get dofollow backlinks, RSS automation, and instant multi-domain distribution for your PR campaigns.",
  alternates: { canonical: `${SITE_URL}/` },
  openGraph: {
    title: "Press Release Distribution Across 1000+ News Sites",
    description:
      "Publish press releases across 1000+ news and media sites. Dofollow backlinks, RSS automation, and instant multi-domain distribution for PR agencies and brands.",
    url: `${SITE_URL}/`,
  },
};

export default function Page() {
  return <Home />;
}
