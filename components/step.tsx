import type { NextPage } from "next";
import Image from "next/image";

export type StepType = {
  className?: string;
};

const Step: NextPage<StepType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[76.25rem] h-[34.375rem] rounded-[28px] bg-[#181f25] overflow-hidden shrink-0 flex items-start p-[4.25rem] box-border gap-[3rem] max-w-full z-[1] mq800:gap-[1.5rem] mq800:py-[2rem] mq450:p-[1.5rem] mq450:w-full mq450:h-auto mq450:flex-col mq450:gap-[1.5rem] mq1350:h-auto mq1350:flex-wrap mq1350:pl-[2.125rem] mq1350:pr-[2.125rem] mq1350:box-border ${className}`}
    >
      <section className="flex-1 flex flex-col items-start gap-[1.25rem] text-center text-[1.25rem] text-[#0bc111] font-['Proxima_Nova'] mq800:min-w-full mq450:min-w-full">
        <div className="rounded-[40px] bg-[rgba(11,193,17,0.2)] flex items-center py-[0.25rem] px-[0.625rem] gap-[0.25rem]">
          <h3 className="m-0 relative text-[length:inherit] leading-[1.75rem] font-bold font-[inherit] mq450:text-[1rem] mq450:leading-[1.375rem]">
            Step
          </h3>
          <h3 className="m-0 relative text-[length:inherit] leading-[1.75rem] font-bold font-[inherit] text-left mq450:text-[1rem] mq450:leading-[1.375rem]">
            01
          </h3>
        </div>
        <div className="self-stretch flex flex-col items-start gap-[1.25rem] text-left text-[2.25rem] text-[#eee]">
          <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[3rem] font-semibold font-[inherit] mq450:text-[1.375rem] mq450:leading-[1.813rem] mq800:text-[1.813rem] mq800:leading-[2.375rem]">
            Upload or Connect
          </h2>
          <div className="self-stretch flex flex-col items-start gap-[1.5rem] text-[1.125rem] text-[rgba(238,238,238,0.8)]">
            <div className="self-stretch relative leading-[1.75rem]">
              Upload your content manually through the Wirero dashboard or
              connect your RSS feed for fully automated distribution.
            </div>
            <div className="self-stretch relative leading-[1.75rem]">
              Publish instantly, automate recurring content flows, and manage
              distribution from a single centralized system.
            </div>
          </div>
        </div>
      </section>
      <Image
        className="w-[27.125rem] relative rounded-2xl max-h-full object-cover max-w-full mq800:w-full mq1350:flex-1"
        loading="lazy"
        width={434}
        height={280}
        sizes="100vw"
        alt=""
        src="/Rectangle-114@2x.png"
      />
    </div>
  );
};

export default Step;
