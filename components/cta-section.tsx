import type { NextPage } from "next";
import Image from "next/image";
import UserOutlined from "./user-outlined";
import FrameComponent from "./frame-component";

export type CtaSectionType = {
  className?: string;
};

const CtaSection: NextPage<CtaSectionType> = ({ className = "" }) => {
  const featureItems = [
    {
      label: "1000 Independent Domains",
      position: "absolute left-0 top-0",
      width: "w-[22.375rem]",
    },
    {
      label: "Targeted Category Networks",
      position: "absolute right-0 top-[5.25rem]",
      width: "w-[23rem]",
    },
    {
      label: "Automated Distribution System",
      position: "absolute bottom-0 left-0",
      width: "w-[24.5rem]",
    },
  ];
  return (
    <section
      className={`self-stretch bg-[#e2eff9] flex flex-col items-start py-[2.5rem] px-[6.875rem] box-border relative isolate gap-[0.625rem] max-w-full mq450:py-[1.625rem] mq450:px-[1.25rem] mq450:box-border mq800:pl-[3.438rem] mq800:pr-[3.438rem] mq800:box-border ${className}`}
    >
      <Image
        className="w-[40.688rem] h-[14.375rem] absolute !m-0 bottom-[0rem] left-[49.313rem] z-[0] shrink-0 mq1350:hidden"
        width={651}
        height={230}
        sizes="100vw"
        alt=""
        src="/Group-111.svg"
      />
      <section className="home-container rounded-3xl flex items-center p-[2.5rem] box-border gap-[3.75rem] max-w-full z-[1] shrink-0 text-left text-[1rem] text-[#0bc111] font-['Proxima_Nova'] mq800:gap-[1.875rem] mq1350:flex-wrap">
        <div className="flex-1 flex flex-col items-start gap-[1.75rem] min-w-[22.75rem] mq450:min-w-full mq800:min-w-full">
          <div className="self-stretch overflow-hidden flex flex-col items-start gap-[1.5rem]">
            <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase">
              Subscription Access
            </b>
            <div className="self-stretch flex flex-col items-start gap-[0.75rem] text-[2.25rem] text-[#1a2530]">
              <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[3rem] font-bold font-[inherit] mq450:text-[1.375rem] mq450:leading-[1.813rem] mq800:text-[1.813rem] mq800:leading-[2.375rem]">
                Scalable Distribution Access
              </h2>
              <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[#4d575f]">
                Access the distribution network through a flexible subscription
                model — designed for ongoing usage without complexity.
              </div>
            </div>
          </div>
          <UserOutlined
            showUserOutlined
            href="/pricing"
            userOutlinedBorder="none"
            userOutlinedPadding="1rem 2.5rem"
            userOutlinedBackgroundColor="#0461c3"
            userOutlinedHeight="3.5rem"
            userOutlined="/search.svg"
            showUserOutlinedIcon={false}
            cTAButton="View Plans"
            cTAButtonFontSize="1rem"
            cTAButtonColor="#fff"
            cTAButtonMargin="unset"
            arrowRight="/arrow-right1.svg"
            showArrowRightIcon
          />
        </div>
        <div className="relative h-[14.5rem] w-[32.5rem] max-w-full shrink-0 text-[1.125rem] text-[#4d565f] mq800:flex mq800:h-auto mq800:w-full mq800:flex-col mq800:items-center mq800:gap-[1rem] mq1125:min-w-full mq1350:flex-1">
          <div className="w-[19.581rem] hidden items-start gap-[0.75rem] shrink-0 mq450:flex-wrap">
            <div className="h-[1.625rem] flex items-center">
              <div className="rounded-[52px] bg-[#0461c3] flex items-center justify-center p-[0.25rem]">
                <Image
                  className="h-[0.75rem] w-full relative"
                  width={12}
                  height={12}
                  sizes="100vw"
                  alt=""
                  src="/check.svg"
                />
              </div>
            </div>
            <div className="flex-1 relative leading-[1.625rem] font-semibold inline-block min-w-[11.438rem]">
              Monthly access
            </div>
          </div>
          <div className="w-[19.581rem] hidden items-start gap-[0.75rem] shrink-0 mq450:flex-wrap">
            <div className="h-[1.625rem] flex items-center">
              <div className="rounded-[52px] bg-[#0461c3] flex items-center justify-center p-[0.25rem]">
                <Image
                  className="h-[0.75rem] w-full relative"
                  width={12}
                  height={12}
                  sizes="100vw"
                  alt=""
                  src="/check.svg"
                />
              </div>
            </div>
            <div className="flex-1 relative leading-[1.625rem] font-semibold inline-block min-w-[11.438rem]">
              Multiple distributions
            </div>
          </div>
          <div className="w-[19.581rem] hidden items-start gap-[0.75rem] shrink-0 mq450:flex-wrap">
            <div className="h-[1.625rem] flex items-center">
              <div className="rounded-[52px] bg-[#0461c3] flex items-center justify-center p-[0.25rem]">
                <Image
                  className="h-[0.75rem] w-full relative"
                  width={12}
                  height={12}
                  sizes="100vw"
                  alt=""
                  src="/check.svg"
                />
              </div>
            </div>
            <div className="flex-1 relative leading-[1.625rem] font-semibold inline-block min-w-[11.438rem]">
              Predictable pricing
            </div>
          </div>
          <div className="w-[17.625rem] hidden items-start gap-[0.75rem] shrink-0 mq450:flex-wrap">
            <div className="h-[1.625rem] flex items-center">
              <div className="rounded-[52px] bg-[#0461c3] flex items-center justify-center p-[0.25rem]">
                <Image
                  className="h-[0.75rem] w-full relative"
                  width={12}
                  height={12}
                  sizes="100vw"
                  alt=""
                  src="/check.svg"
                />
              </div>
            </div>
            <div className="flex-1 relative leading-[1.625rem] font-semibold inline-block min-w-[10.125rem]">
              Distribution across media platforms
            </div>
          </div>
          {featureItems.map((item) => (
            <FrameComponent
              key={item.label}
              className={`${item.position} ${item.width} mq800:static mq800:w-full mq800:items-center`}
              independentDomains={item.label}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default CtaSection;
