import type { NextPage } from "next";
import Image from "next/image";

export type AgenciesType = {
  className?: string;
  dedicatedProjectMa?: string;
  withLotsOfUnique?: string;
};

/**
 * Feature card component for the agencies section
 * Displays an icon with title and description
 */
const Agencies: NextPage<AgenciesType> = ({
  className = "",
  dedicatedProjectMa,
  withLotsOfUnique,
}) => {
  return (
    <div
      className={`w-[24.125rem] rounded-[20px] bg-color-white border-[#e2e5e9] border-solid border-[1px] box-border overflow-hidden flex flex-col items-center text-center text-[1.5rem] text-[#1a2530] font-['Proxima_Nova'] ${className}`}
    >
      <div className="self-stretch h-[10rem] flex items-center justify-center relative isolate">
        {/* Decorative grid pattern */}
        <div className="!m-0 absolute top-[-0.625rem] left-[-0.625rem] flex flex-col items-start z-[0] shrink-0">
          <div className="self-stretch flex items-center">
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md bg-[rgba(26,140,213,0.1)] border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
          </div>
          <div className="self-stretch flex items-center mt-[-0.063rem] relative">
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md bg-[rgba(26,140,213,0.1)] border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
          </div>
          <div className="self-stretch flex items-center mt-[-0.063rem] relative">
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border" />
            <div className="h-[2rem] w-[2rem] relative rounded-md bg-[rgba(26,140,213,0.1)] border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
          </div>
          <div className="self-stretch flex items-center mt-[-0.063rem] relative">
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md bg-[rgba(26,140,213,0.1)] border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
            <div className="h-[2rem] w-[2rem] relative rounded-md border-[#e2e5e9] border-solid border-[1px] box-border ml-[-0.063rem]" />
          </div>
        </div>
        <div className="h-[4.75rem] w-[25rem] absolute !m-0 bottom-[0rem] left-[calc(50%_-_199.5px)] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.3)_10%,_rgba(255,_255,_255,_0.96)_27.95%)] z-[1] shrink-0" />
        <div className="shadow-[0px_4px_0px_rgba(26,_37,_48,_0.1)] rounded-3xl bg-color-white flex items-center p-[0.5rem] z-[2] shrink-0">
          <div className="h-[5rem] w-[5rem] rounded-2xl bg-[#1a8cd5] flex items-center justify-center p-[1.25rem] box-border">
            <Image
              className="w-full relative max-h-full h-auto shrink-0"
              width={48}
              height={48}
              sizes="100vw"
              alt=""
              src="/solar-global-bold1.svg"
            />
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-center p-[1.75rem] gap-[1rem]">
        <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[1.875rem] font-bold font-[inherit]">
          {dedicatedProjectMa}
        </h3>
        <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[#4d565f]">
          {withLotsOfUnique}
        </div>
      </div>
    </div>
  );
};

export default Agencies;
