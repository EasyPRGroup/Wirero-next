import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponentType = {
  className?: string;
  independentDomains?: string;
};

/**
 * Feature check item component
 * Displays a checkmark with a label for feature lists
 */
const FrameComponent: NextPage<FrameComponentType> = ({
  className = "",
  independentDomains,
}) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start shrink-0 text-left text-[1.375rem] text-[#4d565f] font-['Proxima_Nova'] ${className}`}
    >
      <div className="w-[22.375rem] shadow-[0px_0px_8px_rgba(26,_38,_48,_0.08)] rounded-xl bg-color-white border-color-white border-solid border-[4px] box-border overflow-hidden flex flex-col items-center py-[0.687rem] px-[1.25rem]">
        <div className="w-full flex items-start gap-[0.75rem] max-w-full mq450:flex-wrap">
          <div className="h-[1.75rem] flex items-center">
            <div className="rounded-[52px] bg-[#0461c3] flex items-center justify-center p-[0.25rem]">
              <Image
                className="h-[1rem] w-full relative"
                width={16}
                height={16}
                sizes="100vw"
                alt=""
                src="/check.svg"
              />
            </div>
          </div>
          <h3 className="m-0 flex-1 relative text-[length:inherit] leading-[1.75rem] font-semibold font-[inherit] inline-block min-w-[11.125rem] mq450:text-[1.125rem] mq450:leading-[1.375rem]">
            {independentDomains}
          </h3>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
