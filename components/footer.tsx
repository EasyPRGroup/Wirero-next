import type { NextPage } from "next";
import Image from "next/image";
import FrameComponent4 from "./frame-component4";

export type FooterType = {
  className?: string;

  /** Variant props */
  property1?: "Default" | "Variant2";
};

const Footer: NextPage<FooterType> = ({
  className = "",
  property1 = "Default",
}) => {
  return (
    <footer
      className={`w-[90rem] bg-[#f7fafd] border-[#e2e5e9] border-solid border-t-[1px] box-border flex flex-col items-start pt-[6.25rem] px-[6.875rem] pb-[4.25rem] gap-[4.25rem] text-left text-[1rem] text-[#4d565f] font-['Proxima_Nova'] ${className}`}
    >
      <div className="self-stretch flex items-start gap-[2.5rem]">
        <div className="flex-1 flex items-center gap-[0.5rem]">
          <div className="h-[1.5rem] w-[7.5rem] relative">
            <Image
              className="absolute w-[32.5%] top-[calc(50%_-_15.7px)] right-[65.58%] left-[1.92%] max-w-full overflow-hidden h-[1.969rem] object-cover shrink-0"
              width={39}
              height={31.5}
              sizes="100vw"
              alt=""
              src="/Wirero-main-1@2x.png"
            />
            <Image
              className="absolute h-[68.33%] w-[56.5%] top-[14.17%] right-[6.33%] bottom-[17.5%] left-[37.17%] max-w-full overflow-hidden max-h-full shrink-0"
              loading="lazy"
              width={67.8}
              height={16.4}
              sizes="100vw"
              alt=""
              src="/Wirero.svg"
            />
          </div>
          <div className="flex-1 relative leading-[1.5rem] capitalize">
            Scalable Publishing Infrastructure for Modern Distribution
          </div>
        </div>
        <div className="flex-1 relative leading-[1.5rem] capitalize">
          Wirero is a distribution network designed to simplify content
          publishing across multiple platforms.
        </div>
      </div>
      <FrameComponent4 />
      <div className="self-stretch border-[#e2e5e9] border-solid border-t-[1px] flex items-start pt-[3rem] px-[0rem] pb-[0rem]">
        <div className="flex-1 relative leading-[1.5rem] capitalize">
          © 2026 Wirero Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
