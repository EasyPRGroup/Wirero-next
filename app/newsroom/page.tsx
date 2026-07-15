import type { Metadata } from "next";
import type { NextPage } from "next";
import Footer from "../../components/footer";
import Newsroom from "../../components/newsroom";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://wirero.com";

export const metadata: Metadata = {
  title: "Newsroom | Latest Press Releases & Media Distribution Updates",
  description:
    "Read the latest press releases, industry announcements, and news distributed through Wirero's global network of 1000+ media sites. Real-time PR distribution coverage and updates.",
  alternates: { canonical: `${SITE_URL}/newsroom` },
  openGraph: {
    title: "Newsroom | Latest Press Releases & Media Distribution Updates",
    description:
      "Latest press releases and announcements distributed through Wirero's global network of 1000+ media sites.",
    url: `${SITE_URL}/newsroom`,
  },
};

const NewsroomPage: NextPage = () => {
  return (
    <div className="relative flex w-full min-w-0 flex-col items-stretch overflow-x-clip bg-color-white leading-[normal] tracking-[normal]">
      <Newsroom />
      <Footer />
    </div>
  );
};

export default NewsroomPage;
