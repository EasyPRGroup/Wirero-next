"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type UserOutlinedType = {
  className?: string;
  showUserOutlined?: boolean;
  userOutlined: string;
  showUserOutlinedIcon?: boolean;
  cTAButton?: string;
  arrowRight: string;
  showArrowRightIcon?: boolean;

  /** Variant props */
  property1?: CSSProperties["property1"];

  /** Style props */
  userOutlinedBorder?: CSSProperties["border"];
  userOutlinedPadding?: CSSProperties["padding"];
  userOutlinedBackgroundColor?: CSSProperties["backgroundColor"];
  userOutlinedHeight?: CSSProperties["height"];
  cTAButtonFontSize?: CSSProperties["fontSize"];
  cTAButtonColor?: CSSProperties["color"];
  cTAButtonMargin?: CSSProperties["margin"];
};

const UserOutlined: NextPage<UserOutlinedType> = ({
  className = "",
  property1 = "Default",
  showUserOutlined,
  userOutlinedBorder,
  userOutlinedPadding,
  userOutlinedBackgroundColor,
  userOutlinedHeight,
  userOutlined,
  showUserOutlinedIcon,
  cTAButton,
  cTAButtonFontSize,
  cTAButtonColor,
  cTAButtonMargin,
  arrowRight,
  showArrowRightIcon,
}) => {
  const userOutlinedStyle: CSSProperties = useMemo(() => {
    return {
      border: userOutlinedBorder,
      padding: userOutlinedPadding,
      backgroundColor: userOutlinedBackgroundColor,
      height: userOutlinedHeight,
    };
  }, [
    userOutlinedBorder,
    userOutlinedPadding,
    userOutlinedBackgroundColor,
    userOutlinedHeight,
  ]);

  const cTAButtonStyle: CSSProperties = useMemo(() => {
    return {
      fontSize: cTAButtonFontSize,
      color: cTAButtonColor,
      margin: cTAButtonMargin,
    };
  }, [cTAButtonFontSize, cTAButtonColor, cTAButtonMargin]);

  return (
    !!showUserOutlined && (
      <button
        className={`cursor-pointer [border:none] py-[0.75rem] px-[2.25rem] bg-color-white h-[3rem] rounded-lg flex items-center justify-center box-border gap-[0.5rem] ${className}`}
        style={userOutlinedStyle}
      >
        {!!showUserOutlinedIcon && (
          <Image
            className="h-[1rem] w-[1rem] relative shrink-0"
            width={16}
            height={16}
            sizes="100vw"
            alt=""
            src={userOutlined}
          />
        )}
        <div
          className="relative text-[0.875rem] leading-[1.125rem] font-semibold font-['Proxima_Nova'] text-[#0f0928] text-center shrink-0"
          style={cTAButtonStyle}
        >
          {cTAButton}
        </div>
        {!!showArrowRightIcon && (
          <Image
            className="h-[1rem] w-[1rem] relative shrink-0"
            width={16}
            height={16}
            sizes="100vw"
            alt=""
            src={arrowRight}
          />
        )}
      </button>
    )
  );
};

export default UserOutlined;
