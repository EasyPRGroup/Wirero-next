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
      className={`self-stretch rounded-[16px] border overflow-hidden flex flex-col items-start p-[1.75rem] gap-[1rem] transition-all duration-300 mq450:p-[1.25rem] ${
        isOpen
          ? "bg-color-white shadow-[0px_4px_16px_rgba(26,38,48,0.08)]"
          : "bg-color-white border-[#e2e5e9] border-solid"
      }`}
    >
      <button
        onClick={onToggle}
        className="self-stretch flex min-w-0 items-start gap-[0.5rem] cursor-pointer bg-transparent border-none p-0 text-left w-full"
      >
        <b
          className={`min-w-0 flex-1 relative leading-[2.125rem] font-proxima break-words ${
            isOpen ? "text-[#1a2530]" : "text-[#1a2530]"
          }`}
        >
          {item.question}
        </b>
        <div className="rounded-[52px] bg-[#e8f2f8] flex items-center justify-center p-[0.375rem] shrink-0">
          <Image
            className="w-[1.25rem] relative max-h-full transition-transform duration-300"
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
        <div
          className="flex items-center justify-center py-[0rem] pl-[0rem] pr-[2rem] text-[1.125rem] text-[#4d565f] font-proxima mq450:pr-0"
        >
          <div className="flex-1 relative leading-[1.75rem]">{item.answer}</div>
        </div>
      </div>
    </div>
  );
};

export default FaqAccordion;
