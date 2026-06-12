import type { NextPage } from "next";
import Image from "next/image";

export type NetworkTagType = {
  className?: string;
  icon: string;
  text: string;
};

const NetworkTag: NextPage<NetworkTagType> = ({
  className = "",
  icon,
  text,
}) => {
  return (
    <button
      className={`cursor-pointer [border:none] py-[0.375rem] px-[0.75rem] bg-[#1a8cd5] rounded-[40px] flex items-center gap-[0.5rem] hover:bg-[#1a8cd5]/90 ${className}`}
    >
      <Image
        className="h-[1.25rem] w-[1.25rem] relative object-cover"
        width={20}
        height={20}
        sizes="100vw"
        alt=""
        src={icon}
      />
      <div className="relative text-[1.125rem] leading-[1.5rem] font-semibold font-proxima text-[#4d565f] text-left">
        {text}
      </div>
    </button>
  );
};

export default NetworkTag;
