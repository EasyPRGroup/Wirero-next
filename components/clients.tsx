import type { NextPage } from "next";
import Image from "next/image";

export type ClientsType = {
  className?: string;
};

const Clients: NextPage<ClientsType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-[#f7fafd] flex flex-col items-center py-[3rem] px-[1.25rem] box-border gap-[1.75rem] max-w-full text-center text-[1.125rem] text-[#1a2530] font-['Proxima_Nova'] ${className}`}
    >
      <div className="w-[76.25rem] overflow-hidden flex flex-col items-center gap-[0.75rem]">
        <b className="self-stretch relative tracking-[0.01em] leading-[1.625rem] uppercase shrink-0">
          Trusted by Top Brands
        </b>
        <b className="relative text-[2.25rem] leading-[3rem] hidden font-[Urbanist] text-[#161c2d] text-left shrink-0 mq450:text-[1.375rem] mq450:leading-[1.813rem] mq800:text-[1.813rem] mq800:leading-[2.375rem]">
          Trusted by Top Brands
        </b>
      </div>
      <div className="w-[69rem] h-[2.125rem] flex items-start gap-[3.312rem] max-w-full mq800:gap-[1.625rem] mq1125:h-auto mq1125:flex-wrap">
        <div className="flex flex-col items-start pt-[0.187rem] pb-[0rem] pl-[0rem] pr-[1.312rem]">
          <Image
            className="w-full h-[1.5rem] relative object-cover"
            loading="lazy"
            width={140}
            height={24}
            sizes="100vw"
            alt=""
            src="/Object5@2x.png"
          />
        </div>
        <div className="flex flex-col items-start pt-[0.125rem] px-[0rem] pb-[0rem]">
          <Image
            className="w-full h-[1.875rem] relative object-cover"
            width={148}
            height={30}
            sizes="100vw"
            alt=""
            src="/Object@2x.png"
          />
        </div>
        <div className="w-[43.063rem] flex items-start justify-between gap-[1.25rem] max-w-full mq800:flex-wrap mq800:justify-center">
          <div className="flex flex-col items-start pt-[0.25rem] pb-[0rem] pl-[0rem] pr-[0.25rem]">
            <Image
              className="w-full h-[1.75rem] relative object-cover"
              width={147}
              height={28}
              sizes="100vw"
              alt=""
              src="/Object1@2x.png"
            />
          </div>
          <Image
            className="h-[2.125rem] w-[5.813rem] relative object-cover"
            width={93}
            height={34}
            sizes="100vw"
            alt=""
            src="/Object4@2x.png"
          />
          <div className="flex flex-col items-start pt-[0.25rem] pb-[0rem] pl-[0rem] pr-[0.375rem]">
            <Image
              className="w-full h-[1.625rem] relative object-cover"
              width={101}
              height={26}
              sizes="100vw"
              alt=""
              src="/Object2@2x.png"
            />
          </div>
          <Image
            className="h-[1.875rem] w-[6.875rem] relative object-cover"
            width={110}
            height={30}
            sizes="100vw"
            alt=""
            src="/Object3@2x.png"
          />
        </div>
      </div>
    </section>
  );
};

export default Clients;
