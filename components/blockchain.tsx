"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type BlockchainType = {
  className?: string;

  /** Variant props */
  property1?: CSSProperties["property1"];

  /** Style props */
  blockchainBorder?: CSSProperties["border"];
  blockchainIconHeight?: CSSProperties["height"];
  blockchainIconMaxHeight?: CSSProperties["maxHeight"];
  nameGap?: CSSProperties["gap"];
  nameWidth?: CSSProperties["width"];
  nameBorder?: CSSProperties["border"];
  nameOutline?: CSSProperties["outline"];
  nameBackgroundColor?: CSSProperties["backgroundColor"];
  nameFontFamily?: CSSProperties["fontFamily"];
  nameFontWeight?: CSSProperties["fontWeight"];
  nameFontSize?: CSSProperties["fontSize"];
  nameColor?: CSSProperties["color"];
};

const Blockchain: NextPage<BlockchainType> = ({
  className = "",
  property1 = "Default",
  blockchainBorder,
  blockchainIconHeight,
  blockchainIconMaxHeight,
  nameGap,
  nameWidth,
  nameBorder,
  nameOutline,
  nameBackgroundColor,
  nameFontFamily,
  nameFontWeight,
  nameFontSize,
  nameColor,
}) => {
  const blockchainStyle: CSSProperties = useMemo(() => {
    return {
      border: blockchainBorder,
    };
  }, [blockchainBorder]);

  const blockchainIconStyle: CSSProperties = useMemo(() => {
    return {
      height: blockchainIconHeight,
      maxHeight: blockchainIconMaxHeight,
    };
  }, [blockchainIconHeight, blockchainIconMaxHeight]);

  const nameStyle: CSSProperties = useMemo(() => {
    return {
      gap: nameGap,
      width: nameWidth,
      border: nameBorder,
      outline: nameOutline,
      backgroundColor: nameBackgroundColor,
      fontFamily: nameFontFamily,
      fontWeight: nameFontWeight,
      fontSize: nameFontSize,
      color: nameColor,
    };
  }, [
    nameGap,
    nameWidth,
    nameBorder,
    nameOutline,
    nameBackgroundColor,
    nameFontFamily,
    nameFontWeight,
    nameFontSize,
    nameColor,
  ]);

  return (
    <button
      className={`cursor-pointer [border:none] py-[1.5rem] pl-[1.5rem] pr-[2rem] bg-color-white flex-1 rounded-[126px] flex items-center gap-[1rem] ${className}`}
      style={blockchainStyle}
    >
      <Image
        className="h-[3rem] w-[3rem] relative"
        width={48}
        height={48}
        sizes="100vw"
        alt=""
        src="/blockchain.svg"
        style={blockchainIconStyle}
      />
      <div
        className="flex-1 flex flex-col items-start gap-[0.25rem]"
        style={nameStyle}
      >
        <b className="self-stretch relative text-[1.5rem] leading-[1.75rem] font-['Proxima_Nova'] text-[#1a2530] text-left shrink-0">{`Blockchain & Cryptocurrency`}</b>
        <div className="w-[12.625rem] relative text-[1rem] leading-[1.25rem] font-['Proxima_Nova'] text-[#4d565f] text-center hidden shrink-0">
          Technology
        </div>
      </div>
      <Image
        className="h-[1.5rem] w-[1.5rem] relative hidden"
        width={24}
        height={24}
        sizes="100vw"
        alt=""
        src="/arrow-up-right.svg"
      />
    </button>
  );
};

export default Blockchain;
