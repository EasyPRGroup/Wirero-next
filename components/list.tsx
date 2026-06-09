"use client";
import type { NextPage } from "next";
import { useState } from "react";
import Blockchain from "./blockchain";
import UserOutlined from "./user-outlined";

export type ListType = {
  className?: string;
};

const List: NextPage<ListType> = ({ className = "" }) => {
  const [blockchainItems] = useState([
    {
      property1: "Default" as const,
      blockchainBorder: "none" as const,
      blockchainIconHeight: "3rem" as const,
      blockchainIconMaxHeight: undefined,
      nameGap: "0.25rem" as const,
      nameWidth: undefined,
      nameBorder: undefined,
      nameOutline: undefined,
      nameBackgroundColor: undefined,
      nameFontFamily: undefined,
      nameFontWeight: undefined,
      nameFontSize: undefined,
      nameColor: undefined,
    },
    {
      property1: "Default" as const,
      blockchainBorder: "none" as const,
      blockchainIconHeight: "3rem" as const,
      blockchainIconMaxHeight: undefined,
      nameGap: "0.25rem" as const,
      nameWidth: undefined,
      nameBorder: undefined,
      nameOutline: undefined,
      nameBackgroundColor: undefined,
      nameFontFamily: undefined,
      nameFontWeight: undefined,
      nameFontSize: undefined,
      nameColor: undefined,
    },
    {
      property1: "Default" as const,
      blockchainBorder: "none" as const,
      blockchainIconHeight: "3rem" as const,
      blockchainIconMaxHeight: undefined,
      nameGap: "0.25rem" as const,
      nameWidth: undefined,
      nameBorder: undefined,
      nameOutline: undefined,
      nameBackgroundColor: undefined,
      nameFontFamily: undefined,
      nameFontWeight: undefined,
      nameFontSize: undefined,
      nameColor: undefined,
    },
  ]);
  const [blockchainItems1] = useState([
    {
      property1: "Default" as const,
      blockchainBorder: "unset" as const,
      blockchainIconHeight: "unset" as const,
      blockchainIconMaxHeight: "100%" as const,
      nameGap: undefined,
      nameWidth: undefined,
      nameBorder: undefined,
      nameOutline: undefined,
      nameBackgroundColor: undefined,
      nameFontFamily: undefined,
      nameFontWeight: undefined,
      nameFontSize: undefined,
      nameColor: undefined,
    },
    {
      property1: "Default" as const,
      blockchainBorder: "unset" as const,
      blockchainIconHeight: "unset" as const,
      blockchainIconMaxHeight: "100%" as const,
      nameGap: undefined,
      nameWidth: undefined,
      nameBorder: undefined,
      nameOutline: undefined,
      nameBackgroundColor: undefined,
      nameFontFamily: undefined,
      nameFontWeight: undefined,
      nameFontSize: undefined,
      nameColor: undefined,
    },
    {
      property1: "Default" as const,
      blockchainBorder: "unset" as const,
      blockchainIconHeight: "unset" as const,
      blockchainIconMaxHeight: "100%" as const,
      nameGap: undefined,
      nameWidth: undefined,
      nameBorder: undefined,
      nameOutline: undefined,
      nameBackgroundColor: undefined,
      nameFontFamily: undefined,
      nameFontWeight: undefined,
      nameFontSize: undefined,
      nameColor: undefined,
    },
  ]);
  const [blockchainItems2] = useState([
    {
      property1: "Default" as const,
      blockchainBorder: "unset" as const,
      blockchainIconHeight: undefined,
      blockchainIconMaxHeight: undefined,
      nameGap: "unset" as const,
      nameWidth: "calc(100% - 104px)" as const,
      nameBorder: "none" as const,
      nameOutline: "none" as const,
      nameBackgroundColor: "transparent" as const,
      nameFontFamily: "'Proxima Nova'" as const,
      nameFontWeight: "700" as const,
      nameFontSize: "1.5rem" as const,
      nameColor: "#1a2530" as const,
    },
    {
      property1: "Default" as const,
      blockchainBorder: "unset" as const,
      blockchainIconHeight: undefined,
      blockchainIconMaxHeight: undefined,
      nameGap: "unset" as const,
      nameWidth: "calc(100% - 104px)" as const,
      nameBorder: "none" as const,
      nameOutline: "none" as const,
      nameBackgroundColor: "transparent" as const,
      nameFontFamily: "'Proxima Nova'" as const,
      nameFontWeight: "700" as const,
      nameFontSize: "1.5rem" as const,
      nameColor: "#1a2530" as const,
    },
    {
      property1: "Default" as const,
      blockchainBorder: "unset" as const,
      blockchainIconHeight: undefined,
      blockchainIconMaxHeight: undefined,
      nameGap: "unset" as const,
      nameWidth: "calc(100% - 104px)" as const,
      nameBorder: "none" as const,
      nameOutline: "none" as const,
      nameBackgroundColor: "transparent" as const,
      nameFontFamily: "'Proxima Nova'" as const,
      nameFontWeight: "700" as const,
      nameFontSize: "1.5rem" as const,
      nameColor: "#1a2530" as const,
    },
  ]);
  return (
    <section
      className={`self-stretch rounded-2xl overflow-hidden flex flex-col items-center gap-[1.25rem] text-center text-[1.25rem] text-[rgba(238,238,238,0.8)] font-['Proxima_Nova'] ${className}`}
    >
      <div className="self-stretch flex items-start flex-wrap content-start gap-[1.25rem] shrink-0">
        {blockchainItems.map((item, index) => (
          <Blockchain
            key={index}
            property1={item.property1}
            blockchainBorder={item.blockchainBorder}
            blockchainIconHeight={item.blockchainIconHeight}
            blockchainIconMaxHeight={item.blockchainIconMaxHeight}
            nameGap={item.nameGap}
            nameWidth={item.nameWidth}
            nameBorder={item.nameBorder}
            nameOutline={item.nameOutline}
            nameBackgroundColor={item.nameBackgroundColor}
            nameFontFamily={item.nameFontFamily}
            nameFontWeight={item.nameFontWeight}
            nameFontSize={item.nameFontSize}
            nameColor={item.nameColor}
          />
        ))}
      </div>
      <div className="self-stretch flex items-start flex-wrap content-start gap-[1.25rem] shrink-0">
        {blockchainItems1.map((item, index) => (
          <Blockchain
            key={index}
            property1={item.property1}
            blockchainBorder={item.blockchainBorder}
            blockchainIconHeight={item.blockchainIconHeight}
            blockchainIconMaxHeight={item.blockchainIconMaxHeight}
            nameGap={item.nameGap}
            nameWidth={item.nameWidth}
            nameBorder={item.nameBorder}
            nameOutline={item.nameOutline}
            nameBackgroundColor={item.nameBackgroundColor}
            nameFontFamily={item.nameFontFamily}
            nameFontWeight={item.nameFontWeight}
            nameFontSize={item.nameFontSize}
            nameColor={item.nameColor}
          />
        ))}
      </div>
      <div className="self-stretch flex items-start flex-wrap content-start gap-[1.25rem] shrink-0">
        {blockchainItems2.map((item, index) => (
          <Blockchain
            key={index}
            property1={item.property1}
            blockchainBorder={item.blockchainBorder}
            blockchainIconHeight={item.blockchainIconHeight}
            blockchainIconMaxHeight={item.blockchainIconMaxHeight}
            nameGap={item.nameGap}
            nameWidth={item.nameWidth}
            nameBorder={item.nameBorder}
            nameOutline={item.nameOutline}
            nameBackgroundColor={item.nameBackgroundColor}
            nameFontFamily={item.nameFontFamily}
            nameFontWeight={item.nameFontWeight}
            nameFontSize={item.nameFontSize}
            nameColor={item.nameColor}
          />
        ))}
      </div>
      <UserOutlined
        showUserOutlined={false}
        userOutlinedBorder="unset"
        userOutlinedPadding="1rem 2.5rem"
        userOutlinedBackgroundColor="unset"
        userOutlinedHeight="3.5rem"
        userOutlined="/plus.svg"
        showUserOutlinedIcon
        cTAButton="1000 more..."
        cTAButtonFontSize="1.25rem"
        cTAButtonColor="#fff"
        cTAButtonMargin="unset"
        arrowRight="/arrow-right1.svg"
        showArrowRightIcon={false}
      />
      <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[2rem] font-normal font-[inherit] shrink-0 mq450:text-[1rem] mq450:leading-[1.625rem]">
        Each category includes 100 independent domains, allowing you to
        distribute content where it actually fits.
      </h3>
    </section>
  );
};

export default List;
