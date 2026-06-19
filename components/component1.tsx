"use client";
import type { NextPage } from "next";
import { useMemo, useState, type CSSProperties } from "react";
import Image from "next/image";

export type Component1Type = {
  className?: string;
  icLayers48px: string;
  dedicatedProjectMa?: string;
  withLotsOfUnique?: string;
  defaultOpen?: boolean;

  /** Style props */
  divPadding?: CSSProperties["padding"];
  divBorderBottom?: CSSProperties["borderBottom"];
  iconPadding?: CSSProperties["padding"];
  icLayers48pxIconHeight?: CSSProperties["height"];
  icLayers48pxIconMaxHeight?: CSSProperties["maxHeight"];
};

const Component1: NextPage<Component1Type> = ({
  className = "",
  divPadding,
  divBorderBottom,
  iconPadding,
  icLayers48px,
  icLayers48pxIconHeight,
  icLayers48pxIconMaxHeight,
  dedicatedProjectMa,
  withLotsOfUnique,
  defaultOpen = false,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  const div1Style: CSSProperties = useMemo(() => {
    return {
      padding: divPadding,
      borderBottom: divBorderBottom,
    };
  }, [divPadding, divBorderBottom]);

  const iconStyle: CSSProperties = useMemo(() => {
    return {
      padding: iconPadding,
    };
  }, [iconPadding]);

  const icLayers48pxIconStyle: CSSProperties = useMemo(() => {
    return {
      height: icLayers48pxIconHeight,
      maxHeight: icLayers48pxIconMaxHeight,
    };
  }, [icLayers48pxIconHeight, icLayers48pxIconMaxHeight]);

  return (
    <div
      className={`self-stretch border-[#e2e5e9] border-solid border-t-[1px] overflow-hidden flex flex-col items-center pt-[1.375rem] px-[0.75rem] pb-[1.5rem] gap-[0rem] z-[1] text-left text-[1.5rem] text-[#1a2530] font-['Proxima_Nova'] mq800:flex-wrap ${className}`}
      style={div1Style}
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="self-stretch flex items-center gap-[1rem] cursor-pointer bg-transparent border-none p-0 text-left w-full"
      >
        <div
          className="h-[3.5rem] w-[3.5rem] rounded-[56px] bg-[rgba(26,140,213,0.1)] flex items-center justify-center p-[0.75rem] box-border shrink-0"
          style={iconStyle}
        >
          <Image
            className="h-[2rem] w-full relative"
            width={30.3}
            height={32}
            sizes="100vw"
            alt=""
            src={icLayers48px}
            style={icLayers48pxIconStyle}
          />
        </div>
        <div className="flex-1 flex flex-col items-start gap-[1rem] min-w-[20.313rem] mq800:min-w-0">
          <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[1.875rem] font-bold font-[inherit] shrink-0 mq450:text-[1.188rem] mq450:leading-[1.5rem]">
            {dedicatedProjectMa}
          </h3>
        </div>
        <div className="rounded-[56px] flex items-center justify-center p-[0.625rem] shrink-0">
          <Image
            className="h-[1.75rem] w-full relative transition-transform duration-300"
            width={28}
            height={28}
            sizes="100vw"
            alt=""
            src={isOpen ? "/chevron-up.svg" : "/chevron-down.svg"}
          />
        </div>
      </button>
      <div
        className={`self-stretch overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-[500px] opacity-100 mt-[1rem]" : "max-h-0 opacity-0"
        }`}
      >
        <div className="pl-[4.5rem] pr-[4rem] text-[1.125rem] leading-[1.75rem] text-[#4d565f] mq800:pl-[2.25rem] mq800:pr-[2rem]">
          {withLotsOfUnique}
        </div>
      </div>
    </div>
  );
};

export default Component1;
