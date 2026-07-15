import type { Metadata } from "next";
import FaqsContent from "./faqs-content";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wirero.com";

export const metadata: Metadata = {
  title: "FAQs | Press Release Distribution Questions Answered",
  description:
    "FAQs about press release distribution, dofollow backlinks, domain network, RSS automation, and pricing. Learn how Wirero works.",
  alternates: { canonical: `${SITE_URL}/faqs` },
  openGraph: {
    title: "FAQs | Press Release Distribution Questions Answered",
    description:
      "Answers about press release distribution, dofollow backlinks, domain network, automation, and pricing on Wirero.",
    url: `${SITE_URL}/faqs`,
  },
};

export default function Page() {
  return <FaqsContent />;
}
