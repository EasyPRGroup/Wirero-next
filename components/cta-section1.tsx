import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import UserOutlined from "./user-outlined";

export type CtaSection1Type = {
  className?: string;
};

const CtaSection1: NextPage<CtaSection1Type> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch flex flex-col items-start pt-[2.5rem] px-[6.875rem] pb-[6.125rem] box-border max-w-full text-left text-[1.375rem] text-[#1a2530] font-['Proxima_Nova'] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq800:pt-[1.625rem] mq800:px-[3.438rem] mq800:pb-[4rem] mq800:box-border ${className}`}
    >
      <div className="self-stretch rounded-3xl bg-[#0461c3] overflow-hidden flex items-center p-[3.75rem] box-border relative isolate gap-[5rem] max-w-full mq450:gap-[1.25rem] mq450:pt-[2.438rem] mq450:pb-[2.438rem] mq450:box-border mq800:gap-[2.5rem] mq1350:flex-wrap mq1350:pl-[1.875rem] mq1350:pr-[1.875rem] mq1350:box-border">
        <Image
          className="h-[14.375rem] w-[30.25rem] absolute !m-0 bottom-[0rem] left-[2.25rem] z-[0] shrink-0 mq800:hidden"
          width={484}
          height={230}
          sizes="100vw"
          alt=""
          src="/Group-11.svg"
        />
        <Image
          className="h-[11.563rem] w-[23.75rem] absolute !m-0 top-[11.563rem] left-[49.313rem] z-[1] shrink-0 mq1350:hidden"
          width={380}
          height={185}
          sizes="100vw"
          alt=""
          src="/Vector-3.svg"
        />
        <section className="flex-1 flex flex-col items-start gap-[1.75rem] min-w-[23.938rem] z-[2] shrink-0 text-left text-[2.25rem] text-color-white font-['Proxima_Nova'] mq450:min-w-full mq800:min-w-full">
          <div className="self-stretch overflow-hidden flex flex-col items-start gap-[0.75rem]">
            <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[3rem] font-bold font-[inherit] mq450:text-[1.375rem] mq450:leading-[1.813rem] mq800:text-[1.813rem] mq800:leading-[2.375rem]">
              Take control of your distribution
            </h2>
            <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[rgba(238,238,238,0.8)]">
              Stop relying on third-party networks. Start publishing on your own
              infrastructure.
            </div>
          </div>
          <UserOutlined
            showUserOutlined
            href="/contact"
            userOutlinedBorder="none"
            userOutlinedPadding="1rem 2.5rem"
            userOutlinedBackgroundColor="#fff"
            userOutlinedHeight="3.5rem"
            userOutlined="/search.svg"
            showUserOutlinedIcon={false}
            cTAButton="Get Started with Wirero
"
            cTAButtonFontSize="1rem"
            cTAButtonColor="#1a2530"
            cTAButtonMargin="unset"
            arrowRight="/arrow-right1.svg"
            showArrowRightIcon
          />
        </section>
        <div className="h-[14.438rem] w-[26.938rem] relative [filter:drop-shadow(0px_2px_80px_rgba(26,_38,_48,_0.08))] max-w-full z-[1] shrink-0 origin-top-left mq450:hidden mq800:hidden mq1125:min-w-full mq1350:flex-1">
          <div className="absolute top-[10.813rem] left-[0.063rem] rounded-xl bg-[#b1ceec] border-[#0461c3] border-solid border-[4px] overflow-hidden flex flex-col items-center py-[0.687rem] px-[1.5rem] gap-[0.75rem]">
            <h3 className="m-0 relative text-[length:inherit] tracking-[0.02em] leading-[1.625rem] font-semibold font-[inherit] shrink-0 mq450:text-[1.125rem] mq450:leading-[1.313rem]">
              Enterprise Brands
            </h3>
            <div className="w-[23.75rem] relative text-[1rem] leading-[1.5rem] font-[Urbanist] text-[rgba(77,86,95,0.8)] hidden shrink-0">
              March 10, 2026
            </div>
          </div>
          <div className="absolute top-[2.188rem] left-[13.875rem] rounded-xl bg-[#b1ceec] border-[#0461c3] border-solid border-[4px] overflow-hidden flex flex-col items-center py-[0.687rem] px-[1.5rem] gap-[0.75rem] text-center">
            <div className="relative tracking-[0.02em] leading-[1.625rem] font-semibold shrink-0 mq450:text-[1.125rem] mq450:leading-[1.313rem]">
              High-Volume <br />
              Campaigns
            </div>
            <div className="w-[23.75rem] relative text-[1rem] leading-[1.5rem] font-[Urbanist] text-[rgba(77,86,95,0.8)] text-left hidden shrink-0">
              March 10, 2026
            </div>
          </div>
          <button className="cursor-pointer border-[#0461c3] border-solid border-[4px] py-[0.687rem] pl-[1.687rem] pr-[1.25rem] bg-[#b1ceec] absolute top-[0rem] left-[0rem] rounded-xl overflow-hidden flex flex-col items-center gap-[0.75rem]">
            <Link href="/network" className="relative text-[1.375rem] tracking-[0.02em] leading-[1.625rem] font-semibold font-['Proxima_Nova'] text-[#1a2530] text-left shrink-0 no-underline mq450:text-[1.125rem] mq450:leading-[1.313rem]">
              Reseller Platforms
            </Link>
            <div className="w-[23.75rem] relative text-[1rem] leading-[1.5rem] font-[Urbanist] text-[rgba(77,86,95,0.8)] text-left hidden shrink-0">
              March 10, 2026
            </div>
          </button>
          <div className="absolute top-[8.375rem] left-[13.875rem] rounded-xl bg-[#b1ceec] border-[#0461c3] border-solid border-[4px] overflow-hidden flex flex-col items-center py-[1rem] pl-[1.687rem] pr-[1.25rem] gap-[0.75rem]">
            <h3 className="m-0 relative text-[length:inherit] tracking-[0.02em] leading-[1.625rem] font-semibold font-[inherit] shrink-0 mq450:text-[1.125rem] mq450:leading-[1.313rem]">{`Crypto & Forex`}</h3>
            <div className="w-[23.75rem] relative text-[1rem] leading-[1.5rem] font-[Urbanist] text-[rgba(77,86,95,0.8)] hidden shrink-0">
              March 10, 2026
            </div>
          </div>
          <div className="absolute top-[5.75rem] left-[3.313rem] shadow-[0px_0px_12px_rgba(26,_38,_48,_0.08)] rounded-xl bg-color-white border-color-white border-solid border-[4px] overflow-hidden flex flex-col items-center py-[0.687rem] px-[1.5rem] gap-[0.75rem]">
            <h3 className="m-0 relative text-[length:inherit] tracking-[0.02em] leading-[1.625rem] font-semibold font-[inherit] shrink-0 mq450:text-[1.125rem] mq450:leading-[1.313rem]">
              PR Agencies
            </h3>
            <div className="w-[23.75rem] relative text-[1rem] leading-[1.5rem] font-[Urbanist] text-[rgba(77,86,95,0.8)] hidden shrink-0">
              March 10, 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection1;
