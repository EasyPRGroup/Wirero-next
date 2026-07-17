import type { NextPage } from "next";
import Points from "./points";

export type AboutType = {
  className?: string;
};

const About: NextPage<AboutType> = ({ className = "" }) => {
  return (
    <section
      className={`site-section self-stretch bg-[#f7fafd] flex flex-col items-start justify-center box-border gap-[3rem] max-w-full mq800:gap-[2rem] mq450:gap-[1.5rem] ${className}`}
    >
      <section className="site-container overflow-hidden flex flex-col items-start gap-[1.5rem] max-w-full text-left text-[1rem] text-[#0bc111] font-proxima mq450:gap-[1.25rem]">
        <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase mq450:text-[0.875rem] mq450:leading-[1.125rem]">
          BUILT FOR SCALE
        </b>
        <div className="self-stretch flex items-start gap-[3rem] max-w-full text-[3.5rem] text-[#1a2530] mq450:flex-col mq450:gap-[1.25rem] mq800:gap-[2rem] mq1350:flex-wrap">
          <h1 className="m-0 flex-1 relative fluid-h2 font-bold font-[inherit] inline-block min-w-0 max-w-full mq1050:text-[2.5rem] mq1050:leading-[3rem] mq800:text-[2rem] mq800:leading-[2.5rem] mq450:text-[1.75rem] mq450:leading-[2.125rem]">
            Everything Designed for High-Volume Distribution
          </h1>
          <div className="w-full max-w-[33.25rem] flex flex-col items-start gap-[0.75rem] min-w-0 text-[1.125rem] text-[#4d565f] mq1350:flex-1 mq450:gap-[0.625rem]">
            <div className="self-stretch relative leading-[1.75rem] mq800:text-[1.063rem] mq800:leading-[1.625rem] mq450:text-[1rem] mq450:leading-[1.5rem]">
              Infrastructure optimized for scale, automation, and operational
              efficiency.
            </div>
            <div className="self-stretch relative leading-[1.75rem] mq800:text-[1.063rem] mq800:leading-[1.625rem] mq450:text-[1rem] mq450:leading-[1.5rem]">
              Built for speed, automation, and large-scale publishing across
              independent distribution networks.
            </div>
          </div>
        </div>
      </section>
      <div className="site-container">
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
      </div>
    </section>
  );
};

export default About;
