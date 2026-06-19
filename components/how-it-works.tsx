import type { NextPage } from "next";

import Image from "next/image";

export type HowItWorksType = {
  className?: string;
  rectangle11: string;
  prop?: string;
  submitYourPressRelease?: string;

  /** Variant props */
  property1?: string;
};

const getHowItWorksContainerStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Variant2":
      return "[&]:border-[#1b2128] [&]:border-solid [&]:border-[4px]";
  }
};
const getRectangleImageStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Variant2":
      return "[&]:h-[5rem] mq450:[&]:h-[10rem]";
  }
};
const getTitleContainerStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Variant2":
      return "[&]:bg-[#12171c]";
  }
};
const getStepContainerStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Variant2":
      return "[&]:bg-[rgba(11,193,17,0.2)]";
  }
};
const getSubmitYourPressStyle = (styleKey: string) => {
  switch (styleKey) {
    case "Variant2":
      return "[&]:text-[rgba(238,238,238,0.8)]";
  }
};

const HowItWorks: NextPage<HowItWorksType> = ({
  className = "",
  property1 = "Default",
  rectangle11,
  prop,
  submitYourPressRelease,
}) => {
  const variantKey = `${property1}`;

  return (
    <div
      className={`flex-1 rounded-[28px] bg-[rgba(242,240,251,0.08)] border-color-white border-solid border-[4px] overflow-hidden flex flex-col items-center text-center text-[1rem] text-[#0bc111] font-['Proxima_Nova'] mq450:min-w-full mq450:flex-none ${getHowItWorksContainerStyle(variantKey)} ${className}`}
    >
      <Image
        className={`self-stretch h-[10rem] relative max-w-full overflow-hidden shrink-0 object-cover mq450:h-[10rem] ${getRectangleImageStyle(variantKey)}`}
        width={256}
        height={160}
        style={{ width: "auto" }}
        sizes="100vw"
        alt=""
        src={rectangle11}
      />
      <div
        className={`self-stretch rounded-t-[28px] rounded-b-none bg-color-white flex flex-col items-center py-[1.25rem] px-[1.5rem] gap-[0.75rem] mt-[-1.25rem] relative mq450:mt-0 ${getTitleContainerStyle(variantKey)}`}
      >
        <div
          className={`rounded-[40px] bg-[rgba(11,193,17,0.12)] flex items-center py-[0.25rem] px-[0.625rem] gap-[0.25rem] ${getStepContainerStyle(variantKey)}`}
        >
          <b className="relative leading-[1.5rem]">Step</b>
          <b className="relative leading-[1.5rem] text-left">{prop}</b>
        </div>
        <h3
          className={`m-0 self-stretch relative text-[1.25rem] leading-[1.75rem] font-bold font-[inherit] text-[#161c2d] ${getSubmitYourPressStyle(variantKey)}`}
        >
          {submitYourPressRelease}
        </h3>
      </div>
    </div>
  );
};

export default HowItWorks;
