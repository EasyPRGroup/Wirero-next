import type { Metadata } from "next";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wirero.com";

export const metadata: Metadata = {
  title: "Become a Partner | Wirero Distribution Partnership",
  description:
    "Partner with Wirero and offer large-scale multi-domain publishing to your clients. Turn distribution into your revenue engine with our backend infrastructure.",
  alternates: { canonical: `${SITE_URL}/partner` },
  openGraph: {
    title: "Become a Partner | Wirero Distribution Partnership",
    description:
      "Partner with Wirero and offer large-scale multi-domain publishing to your clients. Turn distribution into your revenue engine with our backend infrastructure.",
    url: `${SITE_URL}/partner`,
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
