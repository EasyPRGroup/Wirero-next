"use client";
import Image from "next/image";

interface FaqItem {
  question: string;
  answer: string;
}

interface FaqAccordionProps {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}

const FaqAccordion: React.FC<FaqAccordionProps> = ({ item, isOpen, onToggle }) => {
  return (
    <div
      className={`self-stretch rounded-[16px] border overflow-hidden flex flex-col items-start transition-all duration-300 ${
        isOpen
          ? "bg-color-white shadow-[0px_4px_16px_rgba(26,38,48,0.08)] border-transparent"
          : "bg-color-white border-[#e2e5e9] border-solid"
      }`}
    >
      <button
        onClick={onToggle}
        className="self-stretch flex min-w-0 items-start gap-[0.5rem] cursor-pointer bg-transparent border-none p-[1.75rem] text-left w-full mq800:p-[1.5rem] mq450:p-[1.25rem] mq450:gap-[0.375rem]"
      >
        <b
          className={`min-w-0 flex-1 relative text-[1.75rem] leading-[2.125rem] font-proxima break-words mq800:text-[1.5rem] mq800:leading-[1.875rem] mq450:text-[1.25rem] mq450:leading-[1.625rem] ${
            isOpen ? "text-[#1a2530]" : "text-[#1a2530]"
          }`}
        >
          {item.question}
        </b>
        <div className="rounded-[52px] bg-[#e8f2f8] flex items-center justify-center p-[0.375rem] shrink-0 mq450:p-[0.25rem]">
          <Image
            className="w-[1.25rem] relative max-h-full transition-transform duration-300 mq450:w-[1rem]"
            loading="lazy"
            width={20}
            height={20}
            alt={isOpen ? "Collapse" : "Expand"}
            src={isOpen ? "/chevron-up.svg" : "/chevron-down.svg"}
          />
        </div>
      </button>
      <div
        className={`self-stretch overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex items-start px-[1.75rem] pb-[1.75rem] pt-0 text-[1.125rem] text-[#4d565f] font-proxima mq800:px-[1.5rem] mq800:pb-[1.5rem] mq450:px-[1.25rem] mq450:pb-[1.25rem]">
          <div className="flex-1 relative leading-[1.75rem] text-left mq800:text-[1.063rem] mq800:leading-[1.625rem] mq450:text-[1rem] mq450:leading-[1.5rem]">{item.answer}</div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
