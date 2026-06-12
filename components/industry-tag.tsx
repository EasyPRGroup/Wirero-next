import type { NextPage } from "next";

export type IndustryTagType = {
  className?: string;
  text: string;
  icon?: string;
};

const IndustryTag: NextPage<IndustryTagType> = ({
  className = "",
  text,
}) => {
  return (
    <button
      className={`cursor-pointer border-[#2d3640] border-solid border-[1px] py-[0.375rem] pl-[1rem] pr-[0.937rem] bg-[#12171c] rounded-[40px] flex items-center gap-[0.5rem] ${className}`}
    >
      <div className="h-[0.5rem] w-[0.5rem] relative rounded-[50%] bg-[#1a8cd5] shrink-0"></div>
      <div className="relative text-[1.125rem] leading-[1.5rem] font-semibold font-proxima text-[#b4c3d0] text-left shrink-0">
        {text}
      </div>
    </button>
  );
};

export default IndustryTag;
