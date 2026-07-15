import type { NextPage } from "next";
import type { Metadata } from "next";
import Footer from "../../components/footer";
import Blog from "../../components/blog";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wirero.com";

export const metadata: Metadata = {
  title: "Blog | Press Release Tips, Distribution Strategies & PR Guides",
  description:
    "Press release distribution strategies, content syndication tips, and multi-domain publishing guides. Expert insights for PR professionals.",
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: {
    title: "Blog | Press Release Distribution Tips & PR Strategies",
    description:
      "Expert guides on press release distribution, content syndication, SEO backlinks, and scalable publishing strategies for PR agencies.",
    url: `${SITE_URL}/blog`,
  },
};

const BlogPage: NextPage = () => {
  return (
    <div className="relative flex w-full min-w-0 flex-col items-stretch overflow-x-clip bg-color-white leading-[normal] tracking-[normal]">
      <Blog />
      <Footer />
    </div>
  );
};

export default BlogPage;
