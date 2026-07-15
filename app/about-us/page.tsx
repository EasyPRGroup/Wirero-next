import type { Metadata } from "next";
import AboutUs from "./about-us-content";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wirero.com";

export const metadata: Metadata = {
  title: "About Wirero | Multi-Domain Press Release Distribution Platform",
  description:
    "Wirero operates a controlled press release distribution network of 1000+ domains across 10 industries. Built for PR agencies, brands, and publishers who need fast, scalable media distribution without outreach.",
  alternates: { canonical: `${SITE_URL}/about-us` },
  openGraph: {
    title: "About Wirero | Press Release Distribution Platform",
    description:
      "A controlled distribution network of 1000+ domains for fast, scalable press release publishing across 10 industry-specific networks.",
    url: `${SITE_URL}/about-us`,
  },
};

export default function Page() {
  return <AboutUs />;
}
