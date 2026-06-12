import type { NextPage } from "next";

export type DistributionStepType = {
  className?: string;
  number: string;
  title: string;
  description: string;
};

const DistributionStep: NextPage<DistributionStepType> = ({
  className = "",
  number,
  title,
  description,
}) => {
  return (
    <div
      className={`self-stretch overflow-hidden flex items-center flex-wrap content-center gap-[1.25rem] z-[0] shrink-0 ${className}`}
    >
      <div className="h-[3.75rem] w-[3.75rem] rounded-[40px] bg-[#1a8cd5] flex items-center justify-center p-[0.75rem] box-border">
        <h2 className="m-0 relative text-[length:inherit] leading-[2.5rem] font-semibold font-[inherit] shrink-0 mq1050:text-[1.625rem] mq1050:leading-[2rem] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
          {number}
        </h2>
      </div>
      <div className="flex-1 flex flex-col items-start gap-[0.5rem] min-w-[22.75rem] text-[1.5rem] text-[#1a2530] font-abel mq750:min-w-full">
        <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[1.875rem] font-bold font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
          {title}
        </h3>
        <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d565f]">
          {description}
        </div>
      </div>
    </div>
  );
};

export default DistributionStep;
