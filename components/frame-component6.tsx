import type { NextPage } from "next";
import Image from "next/image";

export type FrameComponent6Type = {
  className?: string;
  eyebrow?: string;
  title?: string;
  positiveLabel?: string;
  positiveItems?: string[];
  negativeLabel?: string;
  negativeItems?: string[];
};

const FrameComponent6: NextPage<FrameComponent6Type> = ({
  className = "",
  eyebrow = "TRANSPARENCY",
  title = "What Wirero is—and what it isn’t",
  positiveLabel = "What it is",
  positiveItems = [
    "Built for distribution scale, not editorial placement",
    "Operates on independent niche domains",
    "Designed for reach, presence, and infrastructure efficiency",
  ],
  negativeLabel = "What it isn’t",
  negativeItems = [
    "Not a high-traffic media publishing platform",
    "Not focused on editorial content creation",
    "Not a traditional news or content site",
  ],
}) => {
  return (
    <div
      className={`self-stretch rounded-3xl bg-color-white border-[#e2e5e9] border-solid border-[1px] box-border flex flex-col items-center py-[3.625rem] px-[4.937rem] gap-[3rem] max-w-full text-center text-[1rem] text-[#0bc111] font-proxima mq450:px-[1.25rem] mq450:gap-[1.5rem] mq450:pt-[2rem] mq450:pb-[2rem] mq450:box-border mq800:gap-[1.5rem] mq800:pt-[2.375rem] mq800:pb-[2.375rem] mq800:box-border mq1350:pl-[2.438rem] mq1350:pr-[2.438rem] mq1350:box-border ${className}`}
    >
      <div className="w-full max-w-full overflow-hidden flex flex-col items-center gap-[1.5rem]">
        {eyebrow ? (
          <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase">
            {eyebrow}
          </b>
        ) : null}
        <div className="self-stretch flex flex-col items-start gap-[1rem] text-[3.5rem] text-[#1a2530]">
          <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[4.25rem] font-bold font-[inherit] shrink-0 mq450:text-[2.125rem] mq450:leading-[2.563rem] mq800:text-[2.813rem] mq800:leading-[3.375rem]">
            {title}
          </h2>
        </div>
      </div>
      <section className="self-stretch shadow-[0px_2px_12px_rgba(26,_38,_48,_0.08)] rounded-[20px] bg-color-white overflow-hidden flex items-start justify-center p-[0.5rem] box-border [row-gap:20px] max-w-full text-left text-[1.5rem] text-[#1a2530] font-proxima mq1350:flex-wrap">
        <div className="flex-1 rounded-2xl bg-[rgba(226,239,249,0.5)] overflow-hidden flex flex-col items-start p-[2rem] box-border relative isolate gap-[1.25rem] min-w-0 mq450:p-[1.25rem] mq1350:w-full mq1350:min-w-full">
          <Image
            className="w-[9rem] h-[3.063rem] absolute !m-0 top-[3.063rem] left-[0rem] z-[0] shrink-0"
            width={144}
            height={49}
            sizes="100vw"
            alt=""
            src="/Vector-3.svg"
          />
          <Image
            className="w-[11.5rem] h-[5.438rem] absolute !m-0 right-[-3.875rem] bottom-[0.188rem] z-[1] shrink-0"
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
              {positiveLabel}
            </h3>
          </div>
          <div className="self-stretch flex flex-col items-start gap-[0.75rem] z-[3] shrink-0 text-[1.125rem]">
            {positiveItems.map((item, index) => (
              <div
                key={index}
                className="self-stretch rounded-2xl flex flex-col items-start gap-[0.375rem]"
              >
                <div className="self-stretch flex items-center gap-[0.75rem] shrink-0 mq800:flex-wrap">
                  <div className="h-[0.5rem] w-[0.5rem] relative rounded-[50%] bg-[#1a8cd5] shrink-0" />
                  <div className="flex-1 relative leading-[1.75rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(#1a2530,_#1a2530),_linear-gradient(180deg,_#0461c3,_#0bc111)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                    {item}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex-1 flex flex-col items-start p-[2rem] box-border gap-[1.25rem] min-w-0 mq450:p-[1.25rem]">
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
              {negativeLabel}
            </h3>
          </div>
          <div className="self-stretch flex flex-col items-start gap-[0.75rem] text-[1.125rem]">
            {negativeItems.map((item, index) => (
              <div
                key={index}
                className="self-stretch rounded-2xl flex flex-col items-start gap-[0.375rem]"
              >
                <div className="self-stretch flex items-center gap-[0.75rem] shrink-0 mq800:flex-wrap">
                  <div className="h-[0.5rem] w-[0.5rem] relative rounded-[50%] bg-[#ef6060] shrink-0" />
                  <div className="flex-1 relative leading-[1.75rem] font-semibold text-transparent !bg-clip-text [background:linear-gradient(#1a2530,_#1a2530),_linear-gradient(180deg,_#0461c3,_#0bc111)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] inline-block shrink-0">
                    {item}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FrameComponent6;
