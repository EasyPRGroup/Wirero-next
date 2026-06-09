import type { NextPage } from "next";
import NetworkCategory from "./network-category";
import UserOutlined from "./user-outlined";

export type ListType = {
  className?: string;
};

/**
 * Network categories section component
 * Displays industry/category filter buttons in a grid layout
 */
const List: NextPage<ListType> = ({ className = "" }) => {
  const networkCategories = [
    { name: "Blockchain & Cryptocurrency", subtitle: "Technology" },
    { name: "Healthcare", subtitle: "Medical" },
    { name: "Casino & Gambling", subtitle: "Entertainment" },
    { name: "Fintech, Forex & ETFs", subtitle: "Finance" },
    { name: "Technology & Internet", subtitle: "Tech" },
    { name: "Cannabis Industry", subtitle: "Wellness" },
    { name: "Real Estate", subtitle: "Property" },
    { name: "Consumer & Cosmetics", subtitle: "Lifestyle" },
    { name: "Travel & Hospitality", subtitle: "Leisure" },
    { name: "Food & Beverage", subtitle: "CPG" },
  ];

  return (
    <section
      className={`self-stretch rounded-2xl overflow-hidden flex flex-col items-center gap-[1.25rem] text-center text-[1.25rem] text-[rgba(238,238,238,0.8)] font-['Proxima_Nova'] ${className}`}
    >
      {/* Network categories grid */}
      <div className="self-stretch flex items-stretch flex-wrap content-start gap-[1.25rem] shrink-0">
        {networkCategories.map((category, index) => (
          <NetworkCategory
            key={index}
            name={category.name}
          />
        ))}
      </div>
      <UserOutlined
        showUserOutlined={false}
        userOutlinedBorder="unset"
        userOutlinedPadding="1rem 2.5rem"
        userOutlinedBackgroundColor="unset"
        userOutlinedHeight="3.5rem"
        userOutlined="/plus.svg"
        showUserOutlinedIcon
        cTAButton="1000 more..."
        cTAButtonFontSize="1.25rem"
        cTAButtonColor="#fff"
        cTAButtonMargin="unset"
        arrowRight="/arrow-right1.svg"
        showArrowRightIcon={false}
      />
      <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[2rem] font-normal font-[inherit] shrink-0 mq450:text-[1rem] mq450:leading-[1.625rem]">
        Each category includes 100 independent domains, allowing you to
        distribute content where it actually fits.
      </h3>
    </section>
  );
};

export default List;
