import type { NextPage } from "next";
import Image from "next/image";
import type {
  KeyboardEventHandler,
  MouseEventHandler,
  Ref,
} from "react";

export type HowItWorksType = {
  className?: string;
  thumbnailSrc: string;
  thumbnailAlt: string;
  stepNumber: string;
  title: string;
  isActive: boolean;
  tabId: string;
  panelId: string;
  buttonRef?: Ref<HTMLButtonElement>;
  onClick: MouseEventHandler<HTMLButtonElement>;
  onKeyDown: KeyboardEventHandler<HTMLButtonElement>;
};

const HowItWorks: NextPage<HowItWorksType> = ({
  className = "",
  thumbnailSrc,
  thumbnailAlt,
  stepNumber,
  title,
  isActive,
  tabId,
  panelId,
  buttonRef,
  onClick,
  onKeyDown,
}) => {
  return (
    <button
      ref={buttonRef}
      id={tabId}
      type="button"
      role="tab"
      aria-selected={isActive}
      aria-controls={panelId}
      tabIndex={isActive ? 0 : -1}
      onClick={onClick}
      onKeyDown={onKeyDown}
      className={`w-full min-w-0 cursor-pointer appearance-none p-0 rounded-[28px] overflow-hidden flex flex-col items-center text-center text-[1rem] text-[#0bc111] font-proxima border-solid border-[4px] transition-[border-color,background-color,box-shadow] duration-200 motion-reduce:transition-none focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[4px] focus-visible:outline-[#0bc111] ${
        isActive
          ? "bg-[rgba(242,240,251,0.08)] border-color-white"
          : "bg-[rgba(242,240,251,0.08)] border-[#1b2128]"
      } ${className}`}
    >
      <Image
        className={`self-stretch w-full relative overflow-hidden shrink-0 object-cover transition-[height] duration-200 motion-reduce:transition-none ${
          isActive
            ? "h-[10rem]"
            : "h-[5rem] mq1125:h-[8rem] mq450:h-[10rem]"
        }`}
        width={256}
        height={160}
        sizes="100vw"
        alt={thumbnailAlt}
        src={thumbnailSrc}
      />
      <div
        className={`self-stretch rounded-t-[28px] rounded-b-none flex flex-col items-center py-[1.25rem] px-[1.5rem] gap-[0.75rem] mt-[-1.25rem] relative transition-colors duration-200 motion-reduce:transition-none mq450:mt-0 ${
          isActive ? "bg-color-white" : "bg-[#12171c]"
        }`}
      >
        <div className="rounded-[40px] bg-[rgba(11,193,17,0.2)] flex items-center py-[0.25rem] px-[0.625rem] gap-[0.25rem]">
          <b className="relative leading-[1.5rem]">Step</b>
          <b className="relative leading-[1.5rem] text-left">{stepNumber}</b>
        </div>
        <h3
          className={`m-0 self-stretch relative text-[1.25rem] leading-[1.75rem] font-bold font-[inherit] transition-colors duration-200 motion-reduce:transition-none ${
            isActive ? "text-[#161c2d]" : "text-[rgba(238,238,238,0.8)]"
          }`}
        >
          {title}
        </h3>
      </div>
    </button>
  );
};

export default HowItWorks;
