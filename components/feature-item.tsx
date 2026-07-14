import type { NextPage } from "next";
import Image from "next/image";

export type FeatureItemType = {
  className?: string;
  number?: string;
  icon?: string;
  title: string;
  description: string;
  badgeClassName?: string;
  titleColor?: string;
  descriptionColor?: string;
  vertical?: boolean;
};

const FeatureItem: NextPage<FeatureItemType> = ({
  className = "",
  number,
  icon,
  title,
  description,
  badgeClassName = "h-[3rem] w-[3rem] rounded-[40px] bg-[rgba(26,140,213,0.1)]",
  titleColor = "text-[#1a2530]",
  descriptionColor = "text-[#4d565f]",
  vertical = false,
}) => {
  return (
    <div
      className={`self-stretch overflow-hidden flex items-start gap-[1rem] ${vertical ? "flex-col" : "mq750:flex-wrap"} ${className}`}
    >
      <div
        className={`flex items-center justify-center p-[0.75rem] box-border shrink-0 ${badgeClassName}`}
      >
        {icon ? (
          <Image
            className="h-[1.5rem] w-[1.5rem] relative"
            width={24}
            height={24}
            sizes="100vw"
            alt=""
            src={icon}
          />
        ) : (
          <h3 className="m-0 relative text-[length:inherit] leading-[1.75rem] font-extrabold font-[inherit] text-[#1a8cd5] shrink-0 mq450:text-[1rem] mq450:leading-[1.375rem]">
            {number}
          </h3>
        )}
      </div>
      <div
        className={`flex-1 flex flex-col items-start gap-[0.5rem] min-w-0 font-proxima ${titleColor}`}
      >
        <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[1.75rem] font-bold font-[inherit] mq450:text-[1rem] mq450:leading-[1.375rem]">
          {title}
        </h3>
        <div
          className={`self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima ${descriptionColor}`}
        >
          {description}
        </div>
      </div>
    </div>
  );
};

export default FeatureItem;
