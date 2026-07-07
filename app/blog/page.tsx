import type { NextPage } from "next";
import Footer from "../../components/footer";
import Blog from "../../components/blog";

const BlogPage: NextPage = () => {
  return (
    <div className="relative flex w-full min-w-0 flex-col items-stretch overflow-x-clip bg-color-white leading-[normal] tracking-[normal]">
      <Blog />
      <Footer />
    </div>
  );
};

export default BlogPage;
