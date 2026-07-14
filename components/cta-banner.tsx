import type { NextPage } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";

export type CtaBannerType = {
  className?: string;
  title: string;
  subtitle?: string;
  pills?: { icon?: ReactNode; text: string }[];
  buttonText: string;
  buttonHref: string;
};

const CtaBanner: NextPage<CtaBannerType> = ({
  className = "",
  title,
  subtitle,
  pills = [],
  buttonText,
  buttonHref,
}) => {
  return (
    <section
      className={`site-section self-stretch bg-color-white flex flex-col items-center box-border max-w-full ${className}`}
    >
      <div className="self-stretch [background:radial-gradient(circle_at_72%_70%,_#1f79d6,_#0461c3_52%)] rounded-[24px] flex flex-col items-center justify-center py-[4.25rem] px-[2.5rem] box-border gap-[2rem] max-w-full text-center text-[2.75rem] text-color-white font-proxima mq1050:py-[3.25rem] mq1050:px-[2rem] mq750:py-[2.625rem] mq450:gap-[1.5rem] mq450:py-[2rem] mq450:px-[1.25rem] mq450:box-border">
        <div className="site-container flex flex-col items-center gap-[1rem] max-w-full">
          <h2 className="m-0 w-full max-w-[60rem] min-w-0 relative fluid-h2 font-bold font-[inherit]">
            {title}
          </h2>
          {subtitle ? (
            <div className="w-full max-w-[60rem] min-w-0 relative text-[1.125rem] leading-[1.75rem] font-proxima text-[rgba(255,255,255,0.8)]">
              {subtitle}
            </div>
          ) : null}
        </div>
        {pills.length > 0 ? (
          <div className="site-container flex flex-wrap items-center justify-center gap-[0.75rem]">
            {pills.map((pill, index) => (
              <div
                key={index}
                className="flex max-w-full items-center gap-[0.5rem] py-[0.5rem] px-[1rem] rounded-full bg-[rgba(255,255,255,0.12)] border-[1px] border-solid border-[rgba(255,255,255,0.25)]"
              >
                {pill.icon}
                <span className="relative min-w-0 text-[0.9375rem] leading-[1.25rem] font-semibold font-proxima text-color-white text-center">
                  {pill.text}
                </span>
              </div>
            ))}
          </div>
        ) : null}
        <Link
          href={buttonHref}
          className="cursor-pointer max-w-full py-[0.875rem] px-[clamp(1rem,4vw,1.75rem)] bg-color-white rounded-[8px] flex min-w-0 items-center justify-center box-border gap-[0.5rem] no-underline hover:bg-[#f0f4f8] transition-colors"
        >
          <div className="relative min-w-0 text-[1rem] leading-[1.25rem] font-semibold font-proxima text-[#1a2530] text-center">
            {buttonText}
          </div>
          <Image
            className="h-[1rem] w-[1rem] shrink-0"
            width={16}
            height={16}
            alt=""
            src="/arrow-right.svg"
          />
        </Link>
      </div>
    </section>
  );
};

export default CtaBanner;
