import type { NextPage } from "next";
import Link from "next/link";
import type { CSSProperties } from "react";

export type ItemMenuType = {
  className?: string;
  showItemMenu?: boolean;
  aboutUs?: string;

  /** Navigation destination */
  href?: string;

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
  href,
}) => {
  // Static inline styles
  const itemMenuStyle: CSSProperties = {
    alignSelf: itemMenuAlignSelf,
    width: itemMenuWidth,
  };

  if (!showItemMenu) return null;

  const label = (
    <div className="flex-1 relative leading-[1.5rem] capitalize font-semibold">
      {aboutUs}
    </div>
  );

  return (
    <div
      className={`self-stretch flex items-start text-left text-[1rem] text-[rgba(26,37,48,0.7)] font-['Proxima_Nova'] ${className}`}
      style={itemMenuStyle}
    >
      {href ? (
        <Link
          href={href}
          className="flex-1 no-underline text-[inherit] transition-colors hover:text-[#1a8cd5]"
        >
          {label}
        </Link>
      ) : (
        label
      )}
    </div>
  );
};

export default ItemMenu;
