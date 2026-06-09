"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ItemMenuType = {
  className?: string;
  showItemMenu?: boolean;
  aboutUs?: string;

  /** Variant props */
  property1?: CSSProperties["property1"];

  /** Style props */
  itemMenuAlignSelf?: CSSProperties["alignSelf"];
  itemMenuWidth?: CSSProperties["width"];
};

const ItemMenu: NextPage<ItemMenuType> = ({
  className = "",
  property1 = "Default",
  showItemMenu,
  itemMenuAlignSelf,
  itemMenuWidth,
  aboutUs,
}) => {
  const itemMenuStyle: CSSProperties = useMemo(() => {
    return {
      alignSelf: itemMenuAlignSelf,
      width: itemMenuWidth,
    };
  }, [itemMenuAlignSelf, itemMenuWidth]);

  return (
    !!showItemMenu && (
      <div
        className={`self-stretch flex items-start text-left text-[1rem] text-[rgba(26,37,48,0.7)] font-['Proxima_Nova'] ${className}`}
        style={itemMenuStyle}
      >
        <div className="flex-1 relative leading-[1.5rem] capitalize font-semibold">
          {aboutUs}
        </div>
      </div>
    )
  );
};

export default ItemMenu;
