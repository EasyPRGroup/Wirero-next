import type { NextPage } from "next";

export type FeatureItemType = {
  className?: string;
  number: string;
  title: string;
  description: string;
};

const FeatureItem: NextPage<FeatureItemType> = ({
  className = "",
  number,
  title,
  description,
}) => {
  return (
    <div
      className={`self-stretch overflow-hidden flex items-start gap-[1rem] mq750:flex-wrap ${className}`}
    >
      <div className="h-[3rem] w-[3rem] rounded-[40px] bg-[#1a8cd5] flex items-center justify-center p-[0.75rem] box-border">
        <h3 className="m-0 relative text-[length:inherit] leading-[1.75rem] font-extrabold font-[inherit] shrink-0 mq450:text-[1rem] mq450:leading-[1.375rem]">
          {number}
        </h3>
      </div>
      <div className="flex-1 flex flex-col items-start gap-[0.5rem] min-w-[21.375rem] text-[#1a2530] font-abel mq750:min-w-full">
        <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[1.75rem] font-bold font-[inherit] mq450:text-[1rem] mq450:leading-[1.375rem]">
          {title}
        </h3>
        <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d565f]">
          {description}
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
