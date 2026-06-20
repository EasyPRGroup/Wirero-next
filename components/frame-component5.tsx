"use client";
import type { NextPage } from "next";
import { useState } from "react";
import HowItWorks from "./how-it-works";

export type FrameComponent5Type = {
  className?: string;
};

const FrameComponent5: NextPage<FrameComponent5Type> = ({ className = "" }) => {
  const [howItWorksItems] = useState([
    {
      property1: "Default" as const,
      rectangle11: "/Rectangle-116@2x.png",
      prop: "01",
      submitYourPressRelease: "Upload or Connect",
    },
    {
      property1: "Variant2" as const,
      rectangle11: "/Rectangle-113@2x.png",
      prop: "02",
      submitYourPressRelease: "Select Your Reach\r",
    },
    {
      property1: "Variant2" as const,
      rectangle11: "/Rectangle-112@2x.png",
      prop: "03",
      submitYourPressRelease: "Go Live Instantly",
    },
    {
      property1: "Variant2" as const,
      rectangle11: "/Rectangle-115@2x.png",
      prop: "04",
      submitYourPressRelease: "Track & Export\r",
    },
  ]);
  return (
    <section
      className={`flex items-start py-[0rem] px-[4.25rem] box-border max-w-full mt-[-7.125rem] relative text-center text-[1rem] text-[#0bc111] font-['Proxima_Nova'] mq800:mt-0 mq450:mt-0 mq450:px-[1.25rem] mq1350:pl-[2.125rem] mq1350:pr-[2.125rem] mq1350:box-border ${className}`}
    >
      <div className="w-[67.75rem] flex items-start justify-center flex-wrap content-start gap-[1.25rem] shrink-0 max-w-full mq450:w-full">
        {howItWorksItems.map((item, index) => (
          <HowItWorks
            key={index}
            property1={item.property1}
            rectangle11={item.rectangle11}
            prop={item.prop}
            submitYourPressRelease={item.submitYourPressRelease}
          />
        ))}
      </div>
    </section>
  );
};

export default FrameComponent5;
