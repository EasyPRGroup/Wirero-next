"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

export type NetworkCategoryType = {
  className?: string;

  /** Category display text (e.g., "Blockchain & Cryptocurrency") */
  name?: string;

  /** Link destination when clicked */
  href?: string;

  /** Variant props */
  property1?: "Default" | "Variant2";

  /** Style props */
  networkCategoryBorder?: CSSProperties["border"];
  networkCategoryIconHeight?: CSSProperties["height"];
  networkCategoryIconMaxHeight?: CSSProperties["maxHeight"];
  networkCategoryNameGap?: CSSProperties["gap"];
  networkCategoryNameWidth?: CSSProperties["width"];
  networkCategoryNameBorder?: CSSProperties["border"];
  networkCategoryNameOutline?: CSSProperties["outline"];
  networkCategoryNameBackgroundColor?: CSSProperties["backgroundColor"];
  networkCategoryNameFontFamily?: CSSProperties["fontFamily"];
  networkCategoryNameFontWeight?: CSSProperties["fontWeight"];
  networkCategoryNameFontSize?: CSSProperties["fontSize"];
  networkCategoryNameColor?: CSSProperties["color"];
  iconSrc?: string;
};

const NetworkCategory: NextPage<NetworkCategoryType> = ({
  className = "",
  property1: _property1 = "Default",
  name = "Blockchain & Cryptocurrency",
  href = "/network",
  iconSrc = "/blockchain.svg",
  networkCategoryBorder,
  networkCategoryIconHeight,
  networkCategoryIconMaxHeight,
  networkCategoryNameGap,
  networkCategoryNameWidth,
  networkCategoryNameBorder,
  networkCategoryNameOutline,
  networkCategoryNameBackgroundColor,
  networkCategoryNameFontFamily,
  networkCategoryNameFontWeight,
  networkCategoryNameFontSize,
  networkCategoryNameColor,
}) => {
  const networkCategoryStyle: CSSProperties = useMemo(() => {
    return {
      border: networkCategoryBorder,
    };
  }, [networkCategoryBorder]);

  const networkCategoryIconStyle: CSSProperties = useMemo(() => {
    return {
      height: networkCategoryIconHeight,
      maxHeight: networkCategoryIconMaxHeight,
    };
  }, [networkCategoryIconHeight, networkCategoryIconMaxHeight]);

  const networkCategoryNameStyle: CSSProperties = useMemo(() => {
    return {
      gap: networkCategoryNameGap,
      width: networkCategoryNameWidth,
      border: networkCategoryNameBorder,
      outline: networkCategoryNameOutline,
      backgroundColor: networkCategoryNameBackgroundColor,
      fontFamily: networkCategoryNameFontFamily,
      fontWeight: networkCategoryNameFontWeight,
      fontSize: networkCategoryNameFontSize,
      color: networkCategoryNameColor,
    };
  }, [
    networkCategoryNameGap,
    networkCategoryNameWidth,
    networkCategoryNameBorder,
    networkCategoryNameOutline,
    networkCategoryNameBackgroundColor,
    networkCategoryNameFontFamily,
    networkCategoryNameFontWeight,
    networkCategoryNameFontSize,
    networkCategoryNameColor,
  ]);

  return (
    <Link
      href={href}
      className={`cursor-pointer [border:none] py-[1.5rem] pl-[2rem] pr-[1.5rem] bg-color-white min-w-[18.75rem] mq450:min-w-full rounded-[126px] flex items-center justify-start gap-[1rem] no-underline hover:shadow-[0px_2px_12px_rgba(26,38,48,0.12)] transition-shadow ${className}`}
      style={networkCategoryStyle}
    >
      <Image
        className="h-[3rem] w-[3rem] relative shrink-0"
        width={48}
        height={48}
        sizes="100vw"
        alt=""
        src={iconSrc}
        style={networkCategoryIconStyle}
      />
      <div
        className="flex-1 flex flex-col items-start gap-[0.25rem]"
        style={networkCategoryNameStyle}
      >
        <b className="relative text-[1.5rem] leading-[1.75rem] font-['Proxima_Nova'] text-[#1a2530] text-left">{name}</b>
        <div className="relative text-[1rem] leading-[1.25rem] font-['Proxima_Nova'] text-[#4d565f] text-left hidden shrink-0">
          Technology
        </div>
      </div>
      <Image
        className="h-[1.5rem] w-[1.5rem] relative hidden shrink-0"
        width={24}
        height={24}
        sizes="100vw"
        alt=""
        src="/arrow-up-right.svg"
      />
    </Link>
  );
};

export default NetworkCategory;
