"use client";
import type { NextPage } from "next";
import { useState } from "react";
import FrameComponent1 from "./frame-component1";
import UserOutlined from "./user-outlined";

export type TitleType = {
  className?: string;
};

const Title: NextPage<TitleType> = ({ className = "" }) => {
  const [frameComponent1Items] = useState([
    {
      property1: "Variant4" as const,
      networkOverflow: "hidden" as const,
      eFCBBCFDF: "/8E821442-01FC-4318-BB27-92CF8D31F868@2x.png",
      newsmax: "TechCrunch",
      url: "https://techcrunch.com/",
    },
    {
      property1: "Variant4" as const,
      networkOverflow: "hidden" as const,
      eFCBBCFDF: "/8E821442-01FC-4318-BB27-92CF8D31F868@2x.png",
      newsmax: "Forbes",
      url: "https://www.forbes.com/",
    },
    {
      property1: "Variant4" as const,
      networkOverflow: "unset" as const,
      eFCBBCFDF: "/Group-9.svg",
      newsmax: "VentureBeat",
      url: "https://venturebeat.com/",
    },
    {
      property1: "Variant4" as const,
      networkOverflow: "hidden" as const,
      eFCBBCFDF: "/8E821442-01FC-4318-BB27-92CF8D31F868@2x.png",
      newsmax: "Newsmax",
      url: "https://www.newsmax.com/",
    },
  ]);
  const [frameComponent1Items1] = useState([
    {
      property1: "Variant4" as const,
      networkOverflow: undefined,
      eFCBBCFDF: "/8E821442-01FC-4318-BB27-92CF8D31F868@2x.png",
      newsmax: "CoinDesk",
      url: "https://www.coindesk.com/",
    },
    {
      property1: "Variant4" as const,
      networkOverflow: undefined,
      eFCBBCFDF: "/8E821442-01FC-4318-BB27-92CF8D31F868@2x.png",
      newsmax: "Business Insider",
      url: "https://www.businessinsider.com/",
    },
    {
      property1: "Variant4" as const,
      networkOverflow: undefined,
      eFCBBCFDF: "/8E821442-01FC-4318-BB27-92CF8D31F868@2x.png",
      newsmax: "Entrepreneur",
      url: "https://www.entrepreneur.com/",
    },
    {
      property1: "Variant4" as const,
      networkOverflow: undefined,
      eFCBBCFDF: "/8E821442-01FC-4318-BB27-92CF8D31F868@2x.png",
      newsmax: "MarketWatch",
      url: "https://www.marketwatch.com/",
    },
  ]);
  return (
    <section
      className={`self-stretch overflow-hidden flex flex-col items-center gap-[1.5rem] text-center text-[1rem] text-[#eee] font-proxima ${className}`}
    >
      <b className="w-[51.25rem] relative tracking-[0.02em] leading-[1.25rem] uppercase hidden text-[#0bc111]">
        NETWORK STRUCTURE
      </b>
      <b className="w-[47.5rem] relative text-[3.5rem] leading-[4.25rem] hidden font-proxima mq450:text-[2.125rem] mq450:leading-[2.563rem] mq800:text-[2.813rem] mq800:leading-[3.375rem]">
        See Why Clients Choose Wirero
      </b>
      <div className="self-stretch flex flex-col items-center gap-[1rem] text-[2rem]">
        <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[2.375rem] font-semibold font-[inherit] shrink-0 mq450:text-[1.188rem] mq450:leading-[1.438rem] mq800:text-[1.625rem] mq800:leading-[1.875rem]">
          Trusted Publishing Platforms
        </h2>
        <div className="w-[51.25rem] relative text-[1.25rem] leading-[2rem] text-[rgba(238,238,238,0.8)] hidden shrink-0 mq450:text-[1rem] mq450:leading-[1.625rem]">
          Wirero is structured for targeted reach, not random placement.
        </div>
      </div>
      <div className="self-stretch overflow-hidden flex flex-col items-center gap-[1.25rem] text-left text-[1.5rem]">
        <div className="self-stretch flex items-start justify-center flex-wrap content-start gap-[1.25rem]">
          {frameComponent1Items.map((item, index) => (
            <FrameComponent1
              key={index}
              property1={item.property1}
              networkOverflow={item.networkOverflow}
              eFCBBCFDF={item.eFCBBCFDF}
              newsmax={item.newsmax}
              url={item.url}
            />
          ))}
        </div>
        <div className="self-stretch flex items-start justify-center flex-wrap content-start gap-[1.25rem]">
          {frameComponent1Items1.map((item, index) => (
            <FrameComponent1
              key={index}
              property1={item.property1}
              networkOverflow={item.networkOverflow}
              eFCBBCFDF={item.eFCBBCFDF}
              newsmax={item.newsmax}
              url={item.url}
            />
          ))}
        </div>
        <UserOutlined
          showUserOutlined
          href="/network"
          userOutlinedBorder="unset"
          userOutlinedPadding="1rem 2.5rem"
          userOutlinedBackgroundColor="unset"
          userOutlinedHeight="3.5rem"
          userOutlined="/plus.svg"
          showUserOutlinedIcon
          cTAButton="1000 more..."
          cTAButtonFontSize="1.25rem"
          cTAButtonColor="#fff"
          cTAButtonMargin="0"
          arrowRight="/arrow-right1.svg"
          showArrowRightIcon={false}
        />
      </div>
    </section>
  );
};

export default Title;
