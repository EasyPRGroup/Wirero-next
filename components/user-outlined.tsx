import type { NextPage } from "next";
import type { CSSProperties } from "react";
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
  userOutlinedBorder,
  userOutlinedPadding,
  userOutlinedBackgroundColor,
  userOutlinedHeight,
  cTAButtonFontSize,
  cTAButtonColor,
  cTAButtonMargin,
}) => {
  // Static inline styles (no need for useMemo since they don't change)
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

  return (
    !!showUserOutlined && (
      <button
        className={`cursor-pointer [border:none] py-[0.75rem] px-[2.25rem] bg-color-white h-[3rem] rounded-lg flex items-center justify-center box-border gap-[0.5rem] ${className}`}
        style={buttonStyle}
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
      </button>
    )
  );
};

export default UserOutlined;
