import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import FrameComponent4 from "./frame-component4";

export type FooterType = {
  className?: string;

  /** Variant props */
  property1?: "Default" | "Variant2";
};

const Footer: NextPage<FooterType> = ({
  className = "",
  property1: _property1 = "Default",
}) => {
  return (
    <footer
      className={`w-full bg-[#f7fafd] border-[#e2e5e9] border-solid border-t-[1px] box-border flex flex-col items-start pt-[6.25rem] pb-[4.25rem] gap-[4.25rem] text-left text-[1rem] text-[#4d565f] font-['Proxima_Nova'] ${className} home-gutters mq800:pt-[3.5rem] mq800:pb-[2.5rem] mq800:gap-[2.5rem] mq450:pt-[2.5rem] mq450:pb-[1.5rem] mq450:gap-[1.5rem]`}
    >
      {/* Top Section - Logo and Description */}
      <div className="home-container flex items-start gap-[2.5rem] mq800:flex-col mq800:gap-[1.5rem]">
        <div className="flex-1 flex items-center gap-[0.5rem] mq450:flex-col mq450:items-start">
          <div className="h-[1.5rem] w-[7.5rem] relative shrink-0">
            <Link href="/">
              <Image
                className="absolute w-[32.5%] top-[calc(50%_-_15.7px)] right-[65.58%] left-[1.92%] max-w-full overflow-hidden h-auto object-cover shrink-0"
                width={52}
                height={42}
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
            </Link>
          </div>
          <div className="flex-1 relative leading-[1.5rem] capitalize mq450:w-full">
            Scalable Publishing Infrastructure for Modern Distribution
          </div>
        </div>
        <div className="flex-1 relative leading-[1.5rem] capitalize mq450:flex-1">
          Wirero is a distribution network designed to simplify content
          publishing across multiple platforms.
        </div>
      </div>

      {/* Links Section */}
      <FrameComponent4 className="home-container" />

      {/* Copyright Section */}
      <div className="home-container border-[#e2e5e9] border-solid border-t-[1px] flex items-start pt-[3rem] px-[0rem] pb-[0rem] mq800:pt-[2rem] mq450:pt-[1.5rem]">
        <div className="flex-1 relative leading-[1.5rem] capitalize">
          © 2026 Wirero Agency. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
