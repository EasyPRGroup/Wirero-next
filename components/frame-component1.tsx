"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type FrameComponent1Type = {
  className?: string;
  eFCBBCFDF: string;
  newsmax?: string;

  /** Variant props */
  property1?: CSSProperties["property1"];

  /** Style props */
  networkOverflow?: CSSProperties["overflow"];
};

const FrameComponent1: NextPage<FrameComponent1Type> = ({
  className = "",
  property1 = "default",
  networkOverflow,
  eFCBBCFDF,
  newsmax,
}) => {
  const networkStyle: CSSProperties = useMemo(() => {
    return {
      overflow: networkOverflow,
    };
  }, [networkOverflow]);

  return (
    <div
      className={`flex-1 rounded-2xl bg-[#181f25] border-[#242d38] border-solid border-[1px] flex flex-col items-start justify-center py-[1.25rem] px-[1.5rem] gap-[1.25rem] text-left text-[1.5rem] text-[#eee] font-['Proxima_Nova'] ${className}`}
    >
      <div className="self-stretch flex items-center gap-[0.5rem] shrink-0">
        <div
          className="h-[3.75rem] w-[3.75rem] relative overflow-hidden shrink-0 hidden"
          style={networkStyle}
        >
          <Image
            className="absolute h-[73.33%] top-[13.33%] bottom-[13.33%] left-[calc(50%_-_24.4px)] max-h-full w-full object-cover"
            width={48.8}
            height={44}
            sizes="100vw"
            alt=""
            src={eFCBBCFDF}
          />
        </div>
        <div className="flex-1 flex flex-col items-start shrink-0">
          <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[1.75rem] font-bold font-[inherit]">
            {newsmax}
          </h3>
          <div className="self-stretch relative text-[1rem] leading-[1.25rem] text-[#0461c3]">
            https://www.newsmax.com/
          </div>
        </div>
      </div>
      <div className="w-[20.75rem] rounded-lg bg-color-white border-[#ebf3fb] border-solid border-[2px] box-border hidden flex-col items-start shrink-0 text-[1rem] text-[#4d565f]">
        <div className="self-stretch border-[#ebf3fb] border-solid border-b-[1px] overflow-hidden flex items-center p-[0.75rem] gap-[0.75rem]">
          <div className="flex-1 flex items-center gap-[0.5rem]">
            <Image
              className="h-[1rem] w-[1rem] relative shrink-0"
              width={16}
              height={16}
              sizes="100vw"
              alt=""
              src="/users-round.svg"
            />
            <div className="flex-1 relative leading-[1.25rem] shrink-0">
              Monthly Visitors
            </div>
          </div>
          <div className="rounded-[40px] bg-[rgba(26,140,213,0.08)] flex items-center justify-center py-[0.25rem] px-[0.5rem] text-center text-[#0461c3]">
            <div className="relative leading-[1.25rem] font-semibold">2.3M</div>
          </div>
        </div>
        <div className="self-stretch border-[#ebf3fb] border-solid border-b-[1px] overflow-hidden flex items-center p-[0.75rem] gap-[0.75rem]">
          <div className="flex-1 flex items-center gap-[0.5rem]">
            <Image
              className="h-[1rem] w-[1rem] relative shrink-0"
              width={16}
              height={16}
              sizes="100vw"
              alt=""
              src="/chart-line.svg"
            />
            <div className="flex-1 relative leading-[1.25rem] shrink-0">
              Domain Authority
            </div>
          </div>
          <div className="rounded-[40px] bg-[rgba(26,140,213,0.08)] flex items-center justify-center py-[0.25rem] px-[0.5rem] text-center text-[#0461c3]">
            <div className="relative leading-[1.25rem] font-semibold">
              72.00
            </div>
          </div>
        </div>
        <div className="self-stretch overflow-hidden flex items-center p-[0.75rem] gap-[0.75rem]">
          <div className="flex-1 flex items-center gap-[0.5rem]">
            <Image
              className="h-[1rem] w-[1rem] relative shrink-0"
              width={16}
              height={16}
              sizes="100vw"
              alt=""
              src="/clock-fading.svg"
            />
            <div className="flex-1 relative leading-[1.25rem] shrink-0">
              Distribution Time
            </div>
          </div>
          <div className="rounded-[40px] bg-[rgba(26,140,213,0.08)] flex items-center justify-center py-[0.25rem] px-[0.5rem] text-center text-[#0461c3]">
            <div className="relative leading-[1.25rem] font-semibold">
              5days
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent1;
