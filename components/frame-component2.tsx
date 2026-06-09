import type { NextPage } from "next";
import Image from "next/image";
import UserOutlined from "./user-outlined";

export type FrameComponent2Type = {
  className?: string;
};

const FrameComponent2: NextPage<FrameComponent2Type> = ({ className = "" }) => {
  return (
    <section
      className={`flex-1 flex flex-col items-start py-[0rem] px-[1.25rem] box-border gap-[1.75rem] min-w-[22.125rem] text-left text-[1rem] text-[#0bc111] font-['Proxima_Nova'] mq800:min-w-full ${className}`}
    >
      <div className="self-stretch overflow-hidden flex flex-col items-start gap-[1.5rem]">
        <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase">
          WHAT WIRERO IS
        </b>
        <div className="self-stretch flex flex-col items-start gap-[1rem] text-[1.125rem] text-[#4d565f]">
          <h3 className="m-0 self-stretch relative text-[2.25rem] leading-[3rem] font-bold font-[inherit] text-[#1a2530] mq450:text-[1.375rem] mq450:leading-[1.813rem] mq800:text-[1.813rem] mq800:leading-[2.375rem]">
            A distribution infrastructure—not a traditional newswire.
          </h3>
          <div className="w-[26.5rem] hidden flex-col items-start gap-[0.75rem]">
            <div className="self-stretch relative leading-[1.75rem]">
              Wirero is built to give you access — not make unrealistic claims.
            </div>
            <div className="self-stretch relative leading-[1.75rem]">
              Instead of promising reach or media coverage, we provide a
              structured network where you can distribute your content
              consistently and efficiently. You stay in control of what you
              publish and where it goes.
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start gap-[0.75rem]">
            <div className="self-stretch relative leading-[1.75rem]">
              Wirero gives you direct access to a controlled network of 1000
              independent domains, built specifically for large-scale content
              distribution.
            </div>
            <div className="self-stretch relative leading-[1.75rem]">
              Instead of relying on publisher outreach, editorial approvals, or
              manual placement negotiations, Wirero allows you to distribute
              content instantly across niche-specific networks from a single
              platform.
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-col items-start gap-[1.25rem] text-[1.25rem] text-[#4d565f]">
        <div className="flex items-center relative isolate gap-[0.5rem]">
          <Image
            className="h-[1.75rem] w-[1.75rem] relative object-cover z-[0] shrink-0"
            loading="lazy"
            width={28}
            height={28}
            sizes="100vw"
            alt=""
            src="/Frame-266@2x.png"
          />
          <h3 className="m-0 relative text-[length:inherit] leading-[1.5rem] font-semibold font-[inherit] z-[1] shrink-0 mq450:text-[1rem] mq450:leading-[1.188rem]">
            No outreach.
          </h3>
          <div className="relative text-[1.125rem] leading-[1.75rem] hidden opacity-[0.9] whitespace-nowrap z-[2] shrink-0">
            Distribution Platforms
          </div>
          <Image
            className="h-[3rem] w-[3rem] absolute !!m-[0 important] top-[-0.625rem] left-[0.938rem] object-cover hidden z-[3] shrink-0"
            width={48}
            height={48}
            sizes="100vw"
            alt=""
            src="/globe@2x.png"
          />
        </div>
        <div className="flex items-center relative isolate gap-[0.5rem]">
          <Image
            className="h-[3rem] w-[3rem] absolute !!m-[0 important] top-[-0.625rem] left-[8rem] object-cover hidden z-[0] shrink-0"
            width={48}
            height={48}
            sizes="100vw"
            alt=""
            src="/Mask-group@2x.png"
          />
          <Image
            className="h-[1.75rem] w-[1.75rem] relative object-cover z-[1] shrink-0"
            width={28}
            height={28}
            sizes="100vw"
            alt=""
            src="/Frame-268@2x.png"
          />
          <h3 className="m-0 relative text-[length:inherit] leading-[1.5rem] font-semibold font-[inherit] z-[2] shrink-0 mq450:text-[1rem] mq450:leading-[1.188rem]">
            No publisher dependency.
          </h3>
          <div className="relative text-[1.125rem] leading-[1.75rem] hidden opacity-[0.9] z-[3] shrink-0">
            Content Categories
          </div>
        </div>
        <div className="flex items-center relative isolate gap-[0.5rem]">
          <Image
            className="h-[3rem] w-[3rem] absolute !!m-[0 important] top-[-0.625rem] left-[5.5rem] object-cover hidden z-[0] shrink-0"
            width={48}
            height={48}
            sizes="100vw"
            alt=""
            src="/Mask-group2@2x.png"
          />
          <Image
            className="h-[3rem] w-[3rem] absolute !!m-[0 important] top-[-0.625rem] left-[10.688rem] object-cover hidden z-[1] shrink-0"
            width={48}
            height={48}
            sizes="100vw"
            alt=""
            src="/broadcast-1@2x.png"
          />
          <Image
            className="h-[1.75rem] w-[1.75rem] relative object-cover z-[2] shrink-0"
            width={28}
            height={28}
            sizes="100vw"
            alt=""
            src="/Frame-267@2x.png"
          />
          <h3 className="m-0 relative text-[length:inherit] leading-[1.5rem] font-semibold font-[inherit] z-[3] shrink-0 mq450:text-[1rem] mq450:leading-[1.188rem]">
            No Per-Placement Negotiation
          </h3>
          <div className="relative text-[1.125rem] leading-[1.75rem] hidden opacity-[0.9] z-[4] shrink-0">
            Distribution Network
          </div>
        </div>
      </div>
      <UserOutlined
        showUserOutlined
        userOutlinedBorder="none"
        userOutlinedPadding="1rem 2.5rem"
        userOutlinedBackgroundColor="#0461c3"
        userOutlinedHeight="3.5rem"
        userOutlined="/search.svg"
        showUserOutlinedIcon={false}
        cTAButton="Start Distribution"
        cTAButtonFontSize="1rem"
        cTAButtonColor="#fff"
        cTAButtonMargin="unset"
        arrowRight="/arrow-right1.svg"
        showArrowRightIcon
      />
    </section>
  );
};

export default FrameComponent2;
