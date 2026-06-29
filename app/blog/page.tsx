import type { NextPage } from "next";
import Footer from "../../components/footer";

const Blog: NextPage = () => {
  return (
    <div className="relative flex w-full min-w-0 flex-col items-stretch overflow-x-clip bg-color-white leading-[normal] tracking-[normal]">
      <main className="site-section self-stretch">
        <div className="site-container flex flex-col items-center justify-center min-h-[60vh]">
        <div className="flex flex-col items-center gap-[1.5rem] text-center">
          <h1 className="m-0 relative text-[3.5rem] leading-[4.25rem] font-bold font-[inherit] text-[#4d565f] mq450:text-[2.125rem] mq450:leading-[2.563rem] mq800:text-[2.813rem] mq800:leading-[3.375rem]">
            Blog
          </h1>
          <p className="m-0 relative text-[1.25rem] leading-[1.875rem] text-[#64676f]">
            This page is under development.
          </p>
        </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;
