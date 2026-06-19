import type { NextPage } from "next";
import Image from "next/image";
import Agencies from "./agencies";

export type FrameComponent3Type = {
  className?: string;
};

const FrameComponent3: NextPage<FrameComponent3Type> = ({ className = "" }) => {
  return (
    <div className={`self-stretch flex flex-col items-start ${className}`}>
      <section className="w-[45rem] max-w-full overflow-hidden flex flex-col items-start gap-[1.5rem] text-left text-[1rem] text-[#0bc111] font-['Proxima_Nova']">
        <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase">
          Made For Scale
        </b>
        <div className="self-stretch flex flex-col items-start gap-[1rem] text-[3.5rem] text-[#1a2530]">
          <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[4.25rem] font-bold font-[inherit] mq450:text-[2.125rem] mq450:leading-[2.563rem] mq800:text-[2.813rem] mq800:leading-[3.375rem]">
            Who is Wirero For?
          </h2>
          <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[#4d565f]">
            Built for agencies, reseller platforms, and high-volume industries
            that need faster distribution without added operational complexity.
          </div>
        </div>
      </section>
      <div className="w-[76.219rem] max-w-full h-[31.375rem] flex items-start justify-center flex-nowrap relative isolate gap-[2rem] mq450:h-auto mq1350:h-auto mq1350:flex-wrap mq1350:justify-center mq800:gap-[1rem]">
        <section className="flex flex-col items-start pt-[9.75rem] px-[0rem] pb-[0rem] text-center text-[1.5rem] text-[#1a2530] font-['Proxima_Nova'] mq450:pt-[0rem] mq450:box-border mq1350:pt-[0rem] mq1350:box-border mq800:pt-[0rem] mq800:box-border">
          <Agencies
            dedicatedProjectMa="Agencies"
            withLotsOfUnique="Expand your distribution capacity without increasing operational complexity or publishing overhead."
          />
        </section>
        <section className="flex flex-col items-start pt-[4.125rem] px-[0rem] pb-[0rem] mq1350:pt-[0rem] mq1350:box-border mq450:pt-[0rem] mq450:box-border mq800:pt-[0rem] mq800:box-border">
          <Agencies
            dedicatedProjectMa="Reseller Platforms"
            withLotsOfUnique="Offer scalable distribution services directly to your customers without building your own publishing network."
          />
        </section>
        <Agencies
          dedicatedProjectMa="High-Frequency Industries"
          withLotsOfUnique="Built for industries where speed, publishing volume, and continuous visibility matter."
        />
        <Image
          className="h-[7.75rem] w-[50.156rem] absolute !m-0 top-[23.625rem] left-[26.063rem] z-[1] mq1350:hidden"
          loading="lazy"
          width={802.5}
          height={124}
          sizes="100vw"
          alt=""
          src="/Union.svg"
        />
      </div>
    </div>
  );
};

export default FrameComponent3;
