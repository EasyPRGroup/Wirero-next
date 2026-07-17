"use client";
import Image from "next/image";

interface FaqCategoryProps {
  icon: string;
  title: string;
  isActive: boolean;
  onClick: () => void;
}

const FaqCategory: React.FC<FaqCategoryProps> = ({
  icon,
  title,
  isActive,
  onClick,
}) => {
  return (
    <button
      onClick={onClick}
      className={`cursor-pointer self-stretch rounded-[126px] flex min-w-0 items-center gap-[0.75rem] py-[1.25rem] px-[1.5rem] text-left transition-all duration-200 mq450:py-[1rem] mq450:px-[1.25rem] mq450:gap-[0.625rem] ${
        isActive
          ? "bg-[#0461c3] text-color-white"
          : "bg-[#f7fafd] border border-[#e2e5e9] text-[#1a2530]"
      }`}
    >
      <Image
        className="h-[1.5rem] w-[1.5rem] relative shrink-0 mq450:h-[1.25rem] mq450:w-[1.25rem]"
        loading="lazy"
        width={24}
        height={24}
        alt={title}
        src={icon}
      />
      <div className="min-w-0 flex-1 flex flex-col items-start">
        <h3
          className={`m-0 self-stretch relative text-[1.25rem] leading-[1.625rem] font-bold font-proxima text-left break-words mq450:text-[1.125rem] mq450:leading-[1.5rem] ${
            isActive ? "text-color-white" : "text-[#1a2530]"
          }`}
        >
          {title}
        </h3>
      </div>
      <Image
        className="h-[1.5rem] w-[1.5rem] relative hidden shrink-0"
        width={24}
        height={24}
        alt=""
        src="/arrow-up-right.svg"
      />
    </button>
  );
};

export default FaqCategory;
