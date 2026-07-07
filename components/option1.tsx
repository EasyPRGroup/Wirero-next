import type { NextPage } from "next";
import Link from "next/link";

export type OptionType = {
  className?: string;
  showOption?: boolean;
  features?: string;
  isActive?: boolean;
  href?: string;

  /** Variant props */
  property1?: "default" | "active";
};

/**
 * Navigation option component
 * Used in the header navigation menu
 */
const Option: NextPage<OptionType> = ({
  className = "",
  property1: _property1 = "default",
  showOption,
  features,
  isActive = false,
  href = "#",
}) => {
  return (
    !!showOption && (
      <Link
        href={href}
        className={`flex items-center justify-center py-[0rem] px-[0.25rem] shrink-0 text-left text-[1.125rem] font-proxima transition-colors ${className} ${isActive ? "text-color-white font-semibold" : "text-[#64676f] font-semibold hover:text-color-white"}`}
      >
        <div className={`relative leading-[1.625rem] font-semibold ${isActive ? "text-color-white" : ""}`}>
          {features}
        </div>
      </Link>
    )
  );
};

export default Option;
