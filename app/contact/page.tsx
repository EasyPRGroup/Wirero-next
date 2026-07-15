import type { Metadata } from "next";
import ContactPage from "./contact-content";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wirero.com";

export const metadata: Metadata = {
  title: "Contact Us | Start Publishing Press Releases Today",
  description:
    "Contact Wirero to start distributing press releases across 1000+ news sites. Questions about pricing, network access, or bulk distribution?",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact Wirero | Press Release Distribution Inquiries",
    description:
      "Start distributing press releases across 1000+ news sites. Contact our team for pricing, API access, and distribution setup.",
    url: `${SITE_URL}/contact`,
  },
};

export default function Page() {
  return <ContactPage />;
}
