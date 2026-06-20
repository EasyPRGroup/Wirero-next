import type { NextPage } from "next";
import Link from "next/link";

export type PricingCardType = {
  className?: string;
  icon: "rocket" | "target" | "diamond";
  planName: string;
  description: string;
  price: string;
  features: string[];
  bestFor: string;
  ctaText: string;
  isPopular?: boolean;
  ctaVariant?: "outline" | "filled";
};

const RocketIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M152 360L56 272L136 320L56 272L152 360Z"
      fill="currentColor"
    />
    <path
      d="M376 136L264 80L344 128L264 80L376 136Z"
      fill="currentColor"
    />
    <path
      d="M480 32L208 304L240 336L480 32Z"
      stroke="currentColor"
      strokeWidth="32"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M192 432L64 480L192 432Z"
      fill="currentColor"
    />
  </svg>
);

const TargetIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="256"
      cy="256"
      r="224"
      stroke="currentColor"
      strokeWidth="32"
      fill="none"
    />
    <circle
      cx="256"
      cy="256"
      r="160"
      stroke="currentColor"
      strokeWidth="32"
      fill="none"
    />
    <circle
      cx="256"
      cy="256"
      r="96"
      stroke="currentColor"
      strokeWidth="32"
      fill="none"
    />
    <circle cx="256" cy="256" r="32" fill="currentColor" />
  </svg>
);

const DiamondIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M256 48L48 224L256 464L464 224L256 48Z"
      stroke="currentColor"
      strokeWidth="32"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M48 224H464"
      stroke="currentColor"
      strokeWidth="32"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M256 48L144 224L256 464L368 224L256 48Z"
      stroke="currentColor"
      strokeWidth="16"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20 6L9 17L4 12"
      stroke="white"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PricingCard: NextPage<PricingCardType> = ({
  className = "",
  icon,
  planName,
  description,
  price,
  features,
  bestFor,
  ctaText,
  isPopular = false,
  ctaVariant = "outline",
}) => {
  const IconComponent = icon === "rocket" ? RocketIcon : icon === "target" ? TargetIcon : DiamondIcon;

  return (
    <section
      className={`self-stretch min-w-[18rem] rounded-[24px] flex flex-col items-start p-[0.5rem] gap-[1.25rem] text-left text-[0.75rem] font-['Proxima_Nova'] mq450:min-w-full ${className} ${isPopular ? "bg-[#0461c3] shadow-[0px_2px_20px_rgba(26,37,48,0.12)] border-[2px] border-[#0461c3]" : "bg-[#f7fafd] shadow-[0px_2px_8px_rgba(26,37,48,0.04)]"}`}
    >
      <div
        className={`self-stretch rounded-[16px] flex flex-col items-start pt-[1.25rem] px-[1.25rem] pb-[1.75rem] gap-[1.5rem] ${isPopular ? "bg-[#0461c3]" : "bg-color-white"}`}
      >
        <div className="self-stretch flex flex-col items-start gap-[1rem] shrink-0">
          <div className="self-stretch flex items-start gap-[0.625rem]">
            <div
              className={`rounded-[52px] flex items-center justify-center p-[0.75rem] shrink-0 ${isPopular ? "bg-[#181f25]" : "bg-[#f0f4f8]"}`}
            >
              <IconComponent />
            </div>
            {isPopular && (
              <div className="rounded-[40px] bg-[#181f25] border-[#181f25] border-solid border-[1px] flex items-center justify-center py-[0.375rem] px-[0.625rem] gap-[0.25rem]">
                <b className="relative leading-[1rem] text-color-white">MOST POPULAR</b>
              </div>
            )}
          </div>
          <div
            className={`self-stretch flex flex-col items-start gap-[0.5rem] text-[1.75rem] ${isPopular ? "text-color-white" : "text-[#4d565f]"} font-['Proxima_Nova']`}
          >
            <h3 className="m-0 self-stretch relative leading-[2.125rem] font-bold font-[inherit]">
              {planName}
            </h3>
            <div
              className={`self-stretch relative text-[1rem] leading-[1.375rem] ${isPopular ? "text-[#f0f4f8]" : "text-[#64676f]"}`}
            >
              {description}
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start shrink-0 text-[2.5rem]">
          <div className="self-stretch flex items-end gap-[0.5rem]">
            <h2
              className={`m-0 relative tracking-[-0.01em] leading-[2.5rem] font-extrabold font-[inherit] ${isPopular ? "text-color-white" : "text-[#4d565f]"}`}
            >
              {price}
            </h2>
            <h3
              className={`m-0 relative text-[1.25rem] leading-[2rem] font-normal font-[inherit] ${isPopular ? "text-[#f0f4f8]" : "text-[#64676f]"}`}
            >
              / month
            </h3>
          </div>
        </div>
      </div>
      <div
        className={`self-stretch flex-1 flex flex-col items-start pt-[1rem] px-[1rem] pb-[1.25rem] gap-[1.75rem] text-[1.125rem] ${isPopular ? "text-[#f0f4f8]" : "text-[#64676f]"}`}
      >
        <div className="self-stretch flex flex-col items-start gap-[1rem] shrink-0">
          <div className="self-stretch relative leading-[1.75rem] opacity-[0.9]">
            Features Included:
          </div>
          <div className="self-stretch flex flex-col items-start gap-[1rem]">
            {features.map((feature, index) => (
              <div key={index} className="self-stretch flex items-start gap-[0.75rem]">
                <div className="h-[1.625rem] flex items-center">
                  <div className="rounded-[52px] bg-[#0461c3] flex items-center justify-center p-[0.25rem]">
                    <CheckIcon />
                  </div>
                </div>
                <div className="flex-1 relative leading-[1.625rem] font-semibold">
                  {feature}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div
          className={`self-stretch flex flex-col items-start gap-[1rem] ${isPopular ? "text-color-white" : "text-[#4d565f]"}`}
        >
          <div
            className={`self-stretch rounded-[8px] flex items-center py-[0.5rem] px-[0.75rem] ${isPopular ? "bg-[#181f25]" : "bg-color-white"}`}
          >
            <div className="flex-1 relative leading-[1.5rem] font-semibold">
              {bestFor}
            </div>
          </div>
          <Link
            href="/contact"
            className={`cursor-pointer self-stretch h-[3.5rem] rounded-[8px] flex items-center justify-center gap-[0.5rem] no-underline ${ctaVariant === "filled" ? "bg-[#0461c3] border-none" : "border-[#0461c3] border-solid border-[1px] bg-transparent"} hover:opacity-90 transition-opacity`}
          >
            <div
              className={`relative text-[1rem] leading-[1.25rem] font-semibold font-['Proxima_Nova'] text-center shrink-0 ${isPopular ? "text-color-white" : "text-[#0461c3]"}`}
            >
              {ctaText}
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PricingCard;
