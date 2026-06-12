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
      className={`cursor-pointer self-stretch rounded-[126px] flex items-center gap-[0.75rem] py-[1.25rem] px-[1.5rem] transition-all duration-200 ${
        isActive
          ? "bg-[#0461c3] text-color-white"
          : "bg-[#f7fafd] border border-[#e2e5e9] text-[#1a2530]"
      }`}
    >
      <Image
        className="h-[1.5rem] w-[1.5rem] relative shrink-0"
        loading="lazy"
        width={24}
        height={24}
        alt={title}
        src={icon}
      />
      <div className="flex-1 flex flex-col items-start shrink-0">
        <h3
          className={`m-0 self-stretch relative text-[1.25rem] leading-[1.625rem] font-bold font-abel text-left ${
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
