import type { NextPage } from "next";
import Image from "next/image";

export type StepType = {
  className?: string;
  stepNumber: string;
  title: string;
  descriptions: readonly string[];
  imageSrc: string;
  imageAlt: string;
  panelId?: string;
  labelledBy?: string;
  contentVisible?: boolean;
};

const Step: NextPage<StepType> = ({
  className = "",
  stepNumber,
  title,
  descriptions,
  imageSrc,
  imageAlt,
  panelId,
  labelledBy,
  contentVisible = true,
}) => {
  return (
    <div
      id={panelId}
      role="tabpanel"
      aria-labelledby={labelledBy}
      aria-live="polite"
      className={`w-[76.25rem] min-h-[34.375rem] rounded-[28px] bg-[#181f25] overflow-hidden shrink-0 flex items-start p-[4.25rem] box-border gap-[3rem] max-w-full z-[1] mq1125:min-h-0 mq1125:flex-col mq1125:gap-[2rem] mq1125:py-[2.5rem] mq1125:px-[2.125rem] mq800:gap-[1.5rem] mq800:py-[2rem] mq450:p-[1.5rem] mq450:w-full ${className}`}
    >
      <section
        className={`min-w-0 flex-1 flex flex-col items-start gap-[1.25rem] text-center text-[1.25rem] text-[#0bc111] font-['Proxima_Nova'] transition-opacity duration-150 motion-reduce:transition-none mq1125:w-full mq1125:min-w-full ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="rounded-[40px] bg-[rgba(11,193,17,0.2)] flex items-center py-[0.25rem] px-[0.625rem] gap-[0.25rem]">
          <h3 className="m-0 relative text-[length:inherit] leading-[1.75rem] font-bold font-[inherit] mq450:text-[1rem] mq450:leading-[1.375rem]">
            Step
          </h3>
          <h3 className="m-0 relative text-[length:inherit] leading-[1.75rem] font-bold font-[inherit] text-left mq450:text-[1rem] mq450:leading-[1.375rem]">
            {stepNumber}
          </h3>
        </div>
        <div className="self-stretch flex flex-col items-start gap-[1.25rem] text-left text-[2.25rem] text-[#eee]">
          <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[3rem] font-semibold font-[inherit] mq450:text-[1.375rem] mq450:leading-[1.813rem] mq800:text-[1.813rem] mq800:leading-[2.375rem]">
            {title}
          </h2>
          <div className="self-stretch flex flex-col items-start gap-[1.5rem] text-[1.125rem] text-[rgba(238,238,238,0.8)]">
            {descriptions.map((description) => (
              <p
                key={description}
                className="m-0 self-stretch relative leading-[1.75rem]"
              >
                {description}
              </p>
            ))}
          </div>
        </div>
      </section>
      <Image
        className={`w-[27.125rem] max-w-[40%] h-auto aspect-[217/140] relative rounded-2xl object-cover shrink-0 transition-opacity duration-150 motion-reduce:transition-none mq1125:w-full mq1125:max-w-full mq450:hidden ${
          contentVisible ? "opacity-100" : "opacity-0"
        }`}
        width={434}
        height={280}
        sizes="100vw"
        alt={imageAlt}
        src={imageSrc}
      />
    </div>
  );
};

export default Step;
