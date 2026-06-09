import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent6Type = {
  className?: string;
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch rounded-3xl bg-color-white border-[#e2e5e9] border-solid border-[1px] box-border flex flex-col items-center py-[3.625rem] px-[4.937rem] gap-[3rem] max-w-full text-center text-[1rem] text-[#0bc111] font-['Proxima_Nova'] mq800:gap-[1.5rem] mq800:pt-[2.375rem] mq800:pb-[2.375rem] mq800:box-border mq1350:pl-[2.438rem] mq1350:pr-[2.438rem] mq1350:box-border ${className}`}
    >
      <div className="w-[52.5rem] overflow-hidden flex flex-col items-center gap-[1.5rem]">
        <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase">
          TRANSPARENCY
        </b>
        <div className="self-stretch flex flex-col items-start gap-[1rem] text-[3.5rem] text-[#1a2530]">
          <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[4.25rem] font-bold font-[inherit] shrink-0 mq450:text-[2.125rem] mq450:leading-[2.563rem] mq800:text-[2.813rem] mq800:leading-[3.375rem]">
            What Wirero is—and what it isn’t
          </h2>
          <div className="w-[45rem] relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] text-left hidden shrink-0">
            Built for agencies, reseller platforms, and high-volume industries
            that need faster distribution without added operational complexity.
          </div>
        </div>
      </div>
      <section className="self-stretch shadow-[0px_2px_12px_rgba(26,_38,_48,_0.08)] rounded-[20px] bg-color-white overflow-hidden flex items-start justify-center p-[0.5rem] box-border [row-gap:20px] max-w-full text-left text-[1.5rem] text-[#1a2530] font-['Proxima_Nova'] mq1125:flex-wrap">
        <div className="w-[35rem] rounded-2xl bg-[rgba(226,239,249,0.5)] overflow-hidden shrink-0 flex flex-col items-start p-[2rem] box-border relative isolate gap-[1.25rem] max-w-full mq1125:flex-1 mq1125:min-w-full">
          <Image
            className="w-[9rem] h-[3.063rem] absolute !!m-[0 important] top-[3.063rem] left-[0rem] z-[0] shrink-0"
            width={144}
            height={49}
            sizes="100vw"
            alt=""
            src="/Vector-3.svg"
          />
          <Image
            className="w-[11.5rem] h-[5.438rem] absolute !!m-[0 important] right-[-3.875rem] bottom-[0.188rem] z-[1] shrink-0"
            width={184}
            height={87}
            sizes="100vw"
            alt=""
            src="/Group-11.svg"
          />
          <div className="self-stretch flex items-center gap-[0.625rem] z-[2] shrink-0">
            <Image
              className="h-[1.5rem] w-[1.5rem] relative"
              width={24}
              height={24}
              sizes="100vw"
              alt=""
              src="/check-check.svg"
            />
            <h3 className="m-0 flex-1 relative text-[length:inherit] leading-[1.875rem] font-bold font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
              What it is
            </h3>
          </div>
          <div className="self-stretch flex flex-col items-start py-[0rem] px-[1rem] gap-[0.75rem] z-[3] shrink-0 text-[1.125rem]">
            <div className="self-stretch rounded-2xl flex flex-col items-start gap-[0.375rem]">
              <div className="self-stretch flex items-center gap-[0.75rem] shrink-0 mq800:flex-wrap">
                <div className="hidden items-center justify-center shrink-0">
                  <Image
                    className="h-[1.25rem] w-full relative"
                    width={20}
                    height={20}
                    sizes="100vw"
                    alt=""
                    src="/solar-global-bold.svg"
                  />
                </div>
                <div className="h-[0.5rem] w-[0.5rem] relative rounded-[50%] bg-[#1a8cd5] shrink-0" />
                <Image
                  className="h-[1.25rem] w-[1.25rem] relative hidden shrink-0"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                  src="/check.svg"
                />
                <div className="flex-1 relative leading-[1.75rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(#1a2530,_#1a2530),_linear-gradient(180deg,_#0461c3,_#0bc111)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[18.063rem] shrink-0">
                  Built for distribution scale, not editorial placement
                </div>
                <div className="w-[13.644rem] relative text-[1.25rem] leading-[1.5rem] capitalize font-semibold hidden shrink-0 mq450:text-[1rem] mq450:leading-[1.188rem]">
                  media websites available
                </div>
              </div>
              <div className="w-[29.281rem] relative leading-[1.75rem] text-[#4d565f] hidden opacity-[0.9] shrink-0">
                Access a wide network of tech-focused digital platforms.
              </div>
            </div>
            <div className="self-stretch rounded-2xl flex flex-col items-start gap-[0.375rem]">
              <div className="self-stretch flex items-center gap-[0.75rem] shrink-0 mq800:flex-wrap">
                <div className="hidden items-center justify-center shrink-0">
                  <Image
                    className="h-[1.25rem] w-full relative"
                    width={20}
                    height={20}
                    sizes="100vw"
                    alt=""
                    src="/target-fill.svg"
                  />
                </div>
                <div className="h-[0.5rem] w-[0.5rem] relative rounded-[50%] bg-[#1a8cd5] shrink-0" />
                <Image
                  className="h-[1.25rem] w-[1.25rem] relative hidden shrink-0"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                  src="/check.svg"
                />
                <div className="flex-1 relative leading-[1.75rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(#1a2530,_#1a2530),_linear-gradient(180deg,_#0461c3,_#0bc111)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[16.313rem] shrink-0">
                  Operates on independent niche domains
                </div>
                <div className="w-[13.644rem] relative text-[1.25rem] leading-[1.5rem] capitalize font-semibold hidden shrink-0 mq450:text-[1rem] mq450:leading-[1.188rem]">
                  media websites available
                </div>
              </div>
              <div className="w-[29rem] relative leading-[1.75rem] text-[#4d565f] hidden opacity-[0.9] shrink-0">
                Access a wide network of tech-focused digital platforms.
              </div>
            </div>
            <div className="self-stretch rounded-2xl flex flex-col items-start gap-[0.375rem]">
              <div className="self-stretch flex items-start gap-[0.75rem] shrink-0 mq800:flex-wrap">
                <div className="hidden items-center justify-center shrink-0">
                  <Image
                    className="h-[1.5rem] w-full relative"
                    width={24}
                    height={24}
                    sizes="100vw"
                    alt=""
                    src="/stack-fill.svg"
                  />
                </div>
                <div className="h-[1.75rem] flex items-center shrink-0">
                  <div className="h-[0.5rem] w-[0.5rem] relative rounded-[50%] bg-[#1a8cd5]" />
                </div>
                <Image
                  className="h-[1.25rem] w-[1.25rem] relative hidden shrink-0"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                  src="/check.svg"
                />
                <div className="flex-1 relative leading-[1.75rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(#1a2530,_#1a2530),_linear-gradient(180deg,_#0461c3,_#0bc111)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[18.063rem] shrink-0">
                  Designed for reach, presence, and infrastructure efficiency
                </div>
                <div className="w-[13.644rem] relative text-[1.25rem] leading-[1.5rem] capitalize font-semibold hidden shrink-0 mq450:text-[1rem] mq450:leading-[1.188rem]">
                  media websites available
                </div>
              </div>
              <div className="w-[27.781rem] relative leading-[1.75rem] text-[#4d565f] hidden opacity-[0.9] shrink-0">
                Access a wide network of tech-focused digital platforms.
              </div>
            </div>
          </div>
        </div>
        <div className="w-[29.063rem] rounded-lg hidden flex-col items-start justify-center py-[0.25rem] px-[0.5rem] box-border gap-[0.5rem] text-[1.125rem] text-[#4d575f]">
          <div className="rounded-[40px] flex items-center gap-[0.375rem] shrink-0">
            <Image
              className="h-[1rem] w-[1rem] relative"
              width={16}
              height={16}
              sizes="100vw"
              alt=""
              src="/circle-check-big.svg"
            />
            <div className="relative leading-[1.75rem] font-semibold">
              Published on 25+ Websites
            </div>
          </div>
          <div className="rounded-[40px] flex items-center gap-[0.375rem] shrink-0">
            <Image
              className="h-[1rem] w-[1rem] relative"
              width={16}
              height={16}
              sizes="100vw"
              alt=""
              src="/circle-check-big.svg"
            />
            <div className="relative leading-[1.75rem] font-semibold">
              Reached Multiple Regions
            </div>
          </div>
          <div className="rounded-[40px] flex items-center gap-[0.375rem] shrink-0">
            <Image
              className="h-[1rem] w-[1rem] relative"
              width={16}
              height={16}
              sizes="100vw"
              alt=""
              src="/circle-check-big.svg"
            />
            <div className="relative leading-[1.75rem] font-semibold">
              Multi-category distribution
            </div>
          </div>
          <div className="rounded-[40px] flex items-center gap-[0.375rem] shrink-0">
            <Image
              className="h-[1rem] w-[1rem] relative"
              width={16}
              height={16}
              sizes="100vw"
              alt=""
              src="/circle-check-big.svg"
            />
            <div className="relative leading-[1.75rem] font-semibold">
              Single submission
            </div>
          </div>
          <div className="rounded-[40px] hidden items-center gap-[0.375rem] shrink-0">
            <Image
              className="h-[1rem] w-[1rem] relative"
              width={16}
              height={16}
              sizes="100vw"
              alt=""
              src="/circle-check-big.svg"
            />
            <div className="relative leading-[1.75rem] font-semibold">
              Published across network
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start p-[2rem] box-border gap-[1.25rem] min-w-[19.688rem]">
          <div className="self-stretch flex items-center gap-[0.625rem]">
            <Image
              className="h-[1.5rem] w-[1.5rem] relative"
              width={24}
              height={24}
              sizes="100vw"
              alt=""
              src="/x.svg"
            />
            <h3 className="m-0 flex-1 relative text-[length:inherit] leading-[1.875rem] font-bold font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
              What it isn’t
            </h3>
          </div>
          <div className="self-stretch flex flex-col items-start py-[0rem] px-[1rem] gap-[0.75rem] text-[1.125rem]">
            <div className="self-stretch rounded-2xl flex flex-col items-start gap-[0.375rem]">
              <div className="self-stretch flex items-center gap-[0.75rem] shrink-0 mq800:flex-wrap">
                <div className="hidden items-center justify-center shrink-0">
                  <Image
                    className="h-[1.25rem] w-full relative"
                    width={20}
                    height={20}
                    sizes="100vw"
                    alt=""
                    src="/solar-global-bold.svg"
                  />
                </div>
                <div className="h-[0.5rem] w-[0.5rem] relative rounded-[50%] bg-[#ef6060] shrink-0" />
                <Image
                  className="h-[1.25rem] w-[1.25rem] relative hidden shrink-0"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                  src="/check.svg"
                />
                <div className="flex-1 relative leading-[1.75rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(#1a2530,_#1a2530),_linear-gradient(180deg,_#0461c3,_#0bc111)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[14.938rem] shrink-0">
                  Not a high-traffic media publishing platform
                </div>
                <div className="w-[13.644rem] relative text-[1.25rem] leading-[1.5rem] capitalize font-semibold hidden shrink-0 mq450:text-[1rem] mq450:leading-[1.188rem]">
                  media websites available
                </div>
              </div>
              <div className="w-[29.281rem] relative leading-[1.75rem] text-[#4d565f] hidden opacity-[0.9] shrink-0">
                Access a wide network of tech-focused digital platforms.
              </div>
            </div>
            <div className="self-stretch rounded-2xl flex flex-col items-start gap-[0.375rem]">
              <div className="self-stretch flex items-center gap-[0.75rem] shrink-0 mq800:flex-wrap">
                <div className="hidden items-center justify-center shrink-0">
                  <Image
                    className="h-[1.25rem] w-full relative"
                    width={20}
                    height={20}
                    sizes="100vw"
                    alt=""
                    src="/target-fill.svg"
                  />
                </div>
                <div className="h-[0.5rem] w-[0.5rem] relative rounded-[50%] bg-[#ef6060] shrink-0" />
                <Image
                  className="h-[1.25rem] w-[1.25rem] relative hidden shrink-0"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                  src="/check.svg"
                />
                <div className="flex-1 relative leading-[1.75rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(#1a2530,_#1a2530),_linear-gradient(180deg,_#0461c3,_#0bc111)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[14.938rem] shrink-0">
                  Not focused on editorial content creation
                </div>
                <div className="w-[13.644rem] relative text-[1.25rem] leading-[1.5rem] capitalize font-semibold hidden shrink-0 mq450:text-[1rem] mq450:leading-[1.188rem]">
                  media websites available
                </div>
              </div>
              <div className="w-[27.781rem] relative leading-[1.75rem] text-[#4d565f] hidden opacity-[0.9] shrink-0">
                Access a wide network of tech-focused digital platforms.
              </div>
            </div>
            <div className="self-stretch rounded-2xl flex flex-col items-start gap-[0.375rem]">
              <div className="self-stretch flex items-center gap-[0.75rem] shrink-0 mq800:flex-wrap">
                <div className="hidden items-center justify-center shrink-0">
                  <Image
                    className="h-[1.5rem] w-full relative"
                    width={24}
                    height={24}
                    sizes="100vw"
                    alt=""
                    src="/stack-fill.svg"
                  />
                </div>
                <div className="h-[0.5rem] w-[0.5rem] relative rounded-[50%] bg-[#ef6060] shrink-0" />
                <Image
                  className="h-[1.25rem] w-[1.25rem] relative hidden shrink-0"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                  src="/check.svg"
                />
                <div className="flex-1 relative leading-[1.75rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(#1a2530,_#1a2530),_linear-gradient(180deg,_#0461c3,_#0bc111)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block min-w-[14.688rem] shrink-0">
                  Not a traditional news or content site
                </div>
                <div className="w-[13.644rem] relative text-[1.25rem] leading-[1.5rem] capitalize font-semibold hidden shrink-0 mq450:text-[1rem] mq450:leading-[1.188rem]">
                  media websites available
                </div>
              </div>
              <div className="w-[27.781rem] relative leading-[1.75rem] text-[#4d565f] hidden opacity-[0.9] shrink-0">
                Access a wide network of tech-focused digital platforms.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrameComponent6;
