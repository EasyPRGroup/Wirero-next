import type { NextPage } from "next";
import type { CSSProperties } from "react";

export type ItemMenuType = {
  className?: string;
  showItemMenu?: boolean;
  aboutUs?: string;

  /** Variant props */
  property1?: "Default" | "Variant2";

  /** Style props */
  itemMenuAlignSelf?: CSSProperties["alignSelf"];
  itemMenuWidth?: CSSProperties["width"];
};

/**
 * Footer menu item component
 * Used in the footer navigation sections
 */
const ItemMenu: NextPage<ItemMenuType> = ({
  className = "",
  showItemMenu,
  itemMenuAlignSelf,
  itemMenuWidth,
  aboutUs,
}) => {
  // Static inline styles
  const itemMenuStyle: CSSProperties = {
    alignSelf: itemMenuAlignSelf,
    width: itemMenuWidth,
  };

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
