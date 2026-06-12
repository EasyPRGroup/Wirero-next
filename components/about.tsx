import type { NextPage } from "next";
import Points from "./points";

export type AboutType = {
  className?: string;
};

const About: NextPage<AboutType> = ({ className = "" }) => {
  return (
    <section
      className={`self-stretch bg-[#f7fafd] flex flex-col items-start justify-center py-[5rem] px-[6.875rem] box-border gap-[3rem] max-w-full mq450:py-[2.125rem] mq450:px-[1.25rem] mq450:box-border mq800:gap-[1.5rem] mq800:pl-[3.438rem] mq800:pr-[3.438rem] mq800:box-border mq1125:pt-[3.25rem] mq1125:pb-[3.25rem] mq1125:box-border ${className}`}
    >
      <section className="self-stretch overflow-hidden flex flex-col items-start gap-[1.5rem] max-w-full text-left text-[1rem] text-[#0bc111] font-['Proxima_Nova']">
        <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase">
          BUILT FOR SCALE
        </b>
        <div className="self-stretch flex items-start gap-[3rem] max-w-full text-[3.5rem] text-[#1a2530] mq800:gap-[1.5rem] mq1350:flex-wrap">
          <h1 className="m-0 flex-1 relative text-[length:inherit] leading-[4.25rem] font-bold font-[inherit] inline-block min-w-[26rem] mq450:text-[2.125rem] mq450:leading-[2.563rem] mq800:text-[2.813rem] mq800:leading-[3.375rem] mq800:min-w-full">
            Everything Designed for High-Volume Distribution
          </h1>
          <div className="w-[33.25rem] flex flex-col items-start gap-[0.75rem] max-w-full text-[1.125rem] text-[#4d565f] mq800:min-w-full mq1350:flex-1">
            <div className="self-stretch relative leading-[1.75rem]">
              Infrastructure optimized for scale, automation, and operational
              efficiency.
            </div>
            <div className="self-stretch relative leading-[1.75rem]">
              Built for speed, automation, and large-scale publishing across
              independent distribution networks.
            </div>
          </div>
        </div>
      </section>
      <Points
        pointsWidth="unset"
        pointsAlignSelf="stretch"
        groupDivHeight="7.5rem"
        groupDivWidth="7.55rem"
        groupDivBackgroundImage="unset"
        groupDivBackgroundSize="cover"
        image91="/image-91@2x.png"
        showImage91Icon
        frameDivMinWidth="14.813rem"
        dedicatedProjectMa="Publish Across 1000 Domains"
        dedicatedProjectMaMargin="0"
        withLotsOfUnique="Distribute content across a large network of independent domains from one centralized workflow."
        groupDivHeight1="7.5rem"
        groupDivWidth1="7.5rem"
        groupDivBackgroundImage1="unset"
        groupDivBackgroundSize1="cover"
        image92="/image-92@2x.png"
        showImage92Icon
        frameDivMinWidth1="14.875rem"
        dedicatedProjectMa1="Under 1 Hour Distribution"
        dedicatedProjectMaMargin1="0"
        withLotsOfUnique1="Publish time-sensitive content quickly with average distribution completed in under one hour."
        groupDivHeight2="7.5rem"
        groupDivWidth2="7.5rem"
        groupDivBackgroundImage2="unset"
        groupDivBackgroundSize2="cover"
        image90="/image-90@2x.png"
        showImage90Icon
        frameDivMinWidth2="14.875rem"
        dedicatedProjectMa2="Unlimited Monthly Publishing"
        dedicatedProjectMaMargin2="0"
        withLotsOfUnique2="Scale your publishing workflow with plans designed for ongoing, high-frequency distribution."
        divPadding="2.25rem 2.187rem 2.25rem 2.25rem"
        groupDivHeight3="7.5rem"
        groupDivWidth3="7.5rem"
        groupDivBackgroundImage3="unset"
        groupDivBackgroundSize3="cover"
        image93="/image-93@2x.png"
        showImage93Icon
        frameDivMinWidth3="14.875rem"
        dedicatedProjectMa3="RSS Automation"
        dedicatedProjectMaMargin3="0"
        withLotsOfUnique3="Connect RSS feeds to automate recurring content distribution without manual uploads."
      />
    </section>
  );
};

export default About;
