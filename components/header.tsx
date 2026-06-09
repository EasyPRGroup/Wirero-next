"use client";
import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import Option from "./option1";
import UserOutlined from "./user-outlined";

export type HeaderType = {
  className?: string;

  /** Variant props */
  property1?: "Default" | "Variant2";
};

const Header: NextPage<HeaderType> = ({
  className = "",
  property1 = "Default",
}) => {
  const [optionItems] = useState([
    {
      property1: "default" as const,
      showOption: true,
      features: "Network",
    },
    {
      property1: "default" as const,
      showOption: true,
      features: "Agencies",
    },
    {
      property1: "default" as const,
      showOption: true,
      features: "FAQs",
    },
    {
      property1: "default" as const,
      showOption: true,
      features: "Pricing",
    },
    {
      property1: "default" as const,
      showOption: true,
      features: "Blogs",
    },
    {
      property1: "default" as const,
      showOption: false,
      features: "Contact Us",
    },
  ]);
  return (
    <header
      className={`self-stretch border-[rgba(122,131,140,0.2)] border-solid border-b-[1px] flex items-center justify-between py-[1.25rem] px-[6.875rem] gap-[1.25rem] text-left text-[1.75rem] text-color-white font-[Inter] ${className}`}
    >
      <div className="h-[2rem] w-[10rem] relative">
        <Image
          className="absolute top-[calc(50%_-_21px)] left-[0.188rem] w-[3.25rem] h-[2.625rem] object-cover shrink-0"
          loading="lazy"
          width={52}
          height={42}
          sizes="100vw"
          alt=""
          src="/Wirero-main-1@2x.png"
        />
        <h2 className="m-0 absolute top-[0rem] left-[3.688rem] text-[length:inherit] leading-[2rem] font-bold font-[inherit] shrink-0">
          Wirero
        </h2>
      </div>
      <div className="flex items-center gap-[2.5rem]">
        <nav className="m-0 rounded-[50px] flex items-center justify-center gap-[2.5rem] text-left text-[1.125rem] text-[#64676f] font-['Proxima_Nova']">
          {optionItems.map((item, index) => (
            <Option
              key={index}
              property1={item.property1}
              showOption={item.showOption}
              features={item.features}
            />
          ))}
        </nav>
        <UserOutlined
          property1="Variant2"
          showUserOutlined
          userOutlined="/user-outlined.svg"
          showUserOutlinedIcon={false}
          cTAButton="Contact Us"
          arrowRight="/arrow-right.svg"
          showArrowRightIcon={false}
        />
      </div>
    </header>
  );
};

export default Header;
