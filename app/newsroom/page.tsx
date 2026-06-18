import type { NextPage } from "next";
import Footer from "../../components/footer";
import Newsroom from "../../components/newsroom";

const NewsroomPage: NextPage = () => {
  return (
    <div className="w-full relative bg-color-white overflow-hidden flex flex-col items-start leading-[normal] tracking-[normal]">
      <Newsroom />
      <Footer />
    </div>
  );
};

export default NewsroomPage;
