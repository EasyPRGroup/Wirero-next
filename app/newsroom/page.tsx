import type { NextPage } from "next";
import Footer from "../../components/footer";
import Newsroom from "../../components/newsroom";

const NewsroomPage: NextPage = () => {
  return (
    <div className="relative flex w-full min-w-0 flex-col items-stretch overflow-x-clip bg-color-white leading-[normal] tracking-[normal]">
      <Newsroom />
      <Footer />
    </div>
  );
};

export default NewsroomPage;
