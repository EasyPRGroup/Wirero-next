import type { NextPage } from "next";
import Link from "next/link";

export type CtaSection1Type = {
  className?: string;
};

const audienceItems = [
  {
    label: "Reseller Platforms",
    className: "left-0 top-0 w-[14.75rem] bg-[#b8d2eb]",
  },
  {
    label: "High-Volume Campaigns",
    className:
      "right-0 top-[2.25rem] w-[11.75rem] bg-[#b8d2eb] text-center",
  },
  {
    label: "PR Agencies",
    className:
      "left-[3rem] top-[5.5rem] w-[11.75rem] bg-white text-center shadow-[0_4px_14px_rgba(2,38,80,0.14)]",
  },
  {
    label: "Crypto & Forex",
    className: "right-[-1rem] top-[8.25rem] w-[12.75rem] bg-[#b8d2eb]",
  },
  {
    label: "Enterprise Brands",
    className: "bottom-0 left-0 w-[14.75rem] bg-[#b8d2eb]",
  },
] as const;

const CtaSection1: NextPage<CtaSection1Type> = ({ className = "" }) => {
  return (
    <section
      className={`site-section self-stretch text-left font-proxima ${className}`}
    >
      <div className="site-container relative isolate grid min-h-[22rem] grid-cols-[minmax(0,1fr)_minmax(28rem,32rem)] items-center gap-[4rem] overflow-hidden rounded-[24px] bg-[#0866c5] px-[3.75rem] py-[3.25rem] mq1050:grid-cols-1 mq1050:gap-[2.5rem] mq1050:px-[3rem] mq800:px-[2rem] mq450:min-h-0 mq450:px-[1.25rem] mq450:py-[2rem]">
        <div
          aria-hidden="true"
          className="absolute bottom-0 left-[16%] z-0 h-[58%] w-[28%] bg-[rgba(26,140,213,0.2)] [clip-path:polygon(0_0,100%_100%,0_100%)] mq800:hidden"
        />
        <div
          aria-hidden="true"
          className="absolute right-[3%] top-0 z-0 h-[7rem] w-[25rem] bg-[rgba(255,255,255,0.06)] [clip-path:polygon(20%_0,100%_0,70%_100%,0_100%)] mq800:hidden"
        />

        <div className="relative z-[2] flex max-w-[37rem] flex-col items-start gap-[1.75rem] text-white">
          <div className="flex flex-col items-start gap-[0.75rem]">
            <h2 className="m-0 text-[2.25rem] leading-[3rem] font-bold font-[inherit] mq800:text-[1.813rem] mq800:leading-[2.375rem] mq450:text-[1.5rem] mq450:leading-[1.875rem]">
              Take control of your distribution
            </h2>
            <p className="m-0 max-w-[35rem] text-[1.125rem] leading-[1.75rem] text-[rgba(238,238,238,0.8)]">
              Stop relying on third-party networks. Start publishing on your own
              infrastructure.
            </p>
          </div>

          <Link
            href="/contact"
            className="flex h-[3.5rem] min-w-[17rem] items-center justify-center gap-[0.75rem] rounded-lg bg-white px-[2rem] text-[1rem] leading-[1.25rem] font-semibold text-[#1a2530] no-underline transition-transform hover:-translate-y-0.5 mq450:w-full mq450:min-w-0"
          >
            <span>Get Started with Wirero</span>
            <span aria-hidden="true" className="text-[1.25rem] leading-none">
              →
            </span>
          </Link>
        </div>

        <div className="relative z-[2] h-[14.25rem] w-full max-w-[32rem] justify-self-end mq1050:justify-self-center mq800:grid mq800:h-auto mq800:max-w-[30rem] mq800:grid-cols-2 mq800:gap-[0.75rem] mq450:grid-cols-1">
          {audienceItems.map((item) => (
            <div
              key={item.label}
              className={`absolute flex min-h-[3.25rem] items-center justify-center rounded-xl px-[1.5rem] py-[0.65rem] text-[1.375rem] leading-[1.625rem] font-semibold text-[#1a2530] mq800:static mq800:w-full mq800:text-center mq450:text-[1.125rem] mq450:leading-[1.375rem] ${item.className}`}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CtaSection1;
