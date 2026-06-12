import type { NextPage } from "next";
import type { CSSProperties } from "react";
import Image from "next/image";
import Link from "next/link";

export type UserOutlinedType = {
  className?: string;
  showUserOutlined?: boolean;
  userOutlined: string;
  showUserOutlinedIcon?: boolean;
  cTAButton?: string;
  arrowRight: string;
  showArrowRightIcon?: boolean;
  href?: string;

  /** Variant props */
  property1?: "Default" | "Variant2";

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
  showUserOutlined,
  userOutlined,
  showUserOutlinedIcon,
  cTAButton,
  arrowRight,
  showArrowRightIcon,
  href,
  userOutlinedBorder,
  userOutlinedPadding,
  userOutlinedBackgroundColor,
  userOutlinedHeight,
  cTAButtonFontSize,
  cTAButtonColor,
  cTAButtonMargin,
}) => {
  const buttonStyle: CSSProperties = {
    border: userOutlinedBorder,
    padding: userOutlinedPadding,
    backgroundColor: userOutlinedBackgroundColor,
    height: userOutlinedHeight,
  };

  const textStyle: CSSProperties = {
    fontSize: cTAButtonFontSize,
    color: cTAButtonColor,
    margin: cTAButtonMargin,
  };

  const content = (
    <>
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
        style={textStyle}
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
    </>
  );

  if (!showUserOutlined) return null;

  if (href) {
    return (
      <Link
        href={href}
        className={`cursor-pointer [border:none] py-[0.75rem] px-[2.25rem] bg-color-white h-[3rem] rounded-lg flex items-center justify-center box-border gap-[0.5rem] no-underline ${className}`}
        style={buttonStyle}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      className={`cursor-pointer [border:none] py-[0.75rem] px-[2.25rem] bg-color-white h-[3rem] rounded-lg flex items-center justify-center box-border gap-[0.5rem] ${className}`}
      style={buttonStyle}
    >
      {content}
    </button>
  );
};

export default UserOutlined;
