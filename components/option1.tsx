import type { NextPage } from "next";
import { type CSSProperties } from "react";

export type OptionType = {
  className?: string;
  showOption?: boolean;
  features?: string;

  /** Variant props */
  property1?: CSSProperties["property1"];
};

const Option: NextPage<OptionType> = ({
  className = "",
  property1 = "active",
  showOption,
  features,
}) => {
  return (
    !!showOption && (
      <div
        className={`flex items-center justify-center py-[0rem] px-[0.25rem] shrink-0 text-left text-[1.125rem] text-[#64676f] font-['Proxima_Nova'] ${className}`}
      >
        <div className="relative leading-[1.625rem] font-semibold">
          {features}
        </div>
      </div>
    )
  );
};

export default Option;
