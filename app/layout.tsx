import "./global.css";
import type { Metadata } from "next";
import Header from "../components/header";
import ScrollToTop from "../components/scroll-to-top";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wirero.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Wirero - Press Release Distribution Service | Publish Across 1000+ News Sites",
    template: "%s | Wirero",
  },
  description:
    "Distribute press releases across 1000+ news sites instantly. Automated multi-domain publishing with dofollow backlinks for PR agencies and brands.",
  keywords: [
    "press release distribution",
    "press release distribution service",
    "PR distribution",
    "news distribution service",
    "content distribution platform",
    "multi-domain publishing",
    "dofollow backlinks",
    "media distribution network",
    "content syndication",
    "automated press release",
    "publish press release online",
    "PR agency distribution",
    "global media distribution",
  ],
  authors: [{ name: "Wirero" }],
  creator: "Wirero",
  publisher: "Wirero",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Wirero",
    title: "Wirero - Press Release Distribution Service | 1000+ News Sites",
    description:
      "Distribute press releases across 1000+ news sites instantly. Automated multi-domain publishing with dofollow backlinks and industry-targeted reach.",
    images: [
      {
        url: "/Wirero-main-1@2x.png",
        width: 52,
        height: 42,
        alt: "Wirero - Press Release Distribution Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wirero - Press Release Distribution Across 1000+ News Sites",
    description:
      "Publish press releases across 1000+ media domains with dofollow backlinks. Automated distribution for PR agencies and brands.",
    images: ["/Wirero-main-1@2x.png"],
  },
  alternates: {
    canonical: SITE_URL,
  },
  icons: {
    icon: "/Wirero-main-1@2x.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <div className="site-page-frame">
          <Header />
          {children}
        </div>
        <ScrollToTop />
      </body>
    </html>
  );
}
