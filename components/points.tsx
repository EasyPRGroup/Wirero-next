"use client";
import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";
import Image from "next/image";

export type PointsType = {
  className?: string;
  image91: string;
  showImage91Icon?: boolean;
  dedicatedProjectMa?: string;
  withLotsOfUnique?: string;
  image92: string;
  showImage92Icon?: boolean;
  dedicatedProjectMa1?: string;
  withLotsOfUnique1?: string;
  image90: string;
  showImage90Icon?: boolean;
  dedicatedProjectMa2?: string;
  withLotsOfUnique2?: string;
  image93: string;
  showImage93Icon?: boolean;
  dedicatedProjectMa3?: string;
  withLotsOfUnique3?: string;

  /** Style props */
  pointsWidth?: CSSProperties["width"];
  pointsAlignSelf?: CSSProperties["alignSelf"];
  groupDivHeight?: CSSProperties["height"];
  groupDivWidth?: CSSProperties["width"];
  groupDivBackgroundImage?: CSSProperties["backgroundImage"];
  groupDivBackgroundSize?: CSSProperties["backgroundSize"];
  frameDivMinWidth?: CSSProperties["minWidth"];
  dedicatedProjectMaMargin?: CSSProperties["margin"];
  groupDivHeight1?: CSSProperties["height"];
  groupDivWidth1?: CSSProperties["width"];
  groupDivBackgroundImage1?: CSSProperties["backgroundImage"];
  groupDivBackgroundSize1?: CSSProperties["backgroundSize"];
  frameDivMinWidth1?: CSSProperties["minWidth"];
  dedicatedProjectMaMargin1?: CSSProperties["margin"];
  groupDivHeight2?: CSSProperties["height"];
  groupDivWidth2?: CSSProperties["width"];
  groupDivBackgroundImage2?: CSSProperties["backgroundImage"];
  groupDivBackgroundSize2?: CSSProperties["backgroundSize"];
  frameDivMinWidth2?: CSSProperties["minWidth"];
  dedicatedProjectMaMargin2?: CSSProperties["margin"];
  divPadding?: CSSProperties["padding"];
  groupDivHeight3?: CSSProperties["height"];
  groupDivWidth3?: CSSProperties["width"];
  groupDivBackgroundImage3?: CSSProperties["backgroundImage"];
  groupDivBackgroundSize3?: CSSProperties["backgroundSize"];
  frameDivMinWidth3?: CSSProperties["minWidth"];
  dedicatedProjectMaMargin3?: CSSProperties["margin"];
};

const Points: NextPage<PointsType> = ({
  className = "",
  pointsWidth,
  pointsAlignSelf,
  groupDivHeight,
  groupDivWidth,
  groupDivBackgroundImage,
  groupDivBackgroundSize,
  image91,
  showImage91Icon,
  frameDivMinWidth,
  dedicatedProjectMa,
  dedicatedProjectMaMargin,
  withLotsOfUnique,
  groupDivHeight1,
  groupDivWidth1,
  groupDivBackgroundImage1,
  groupDivBackgroundSize1,
  image92,
  showImage92Icon,
  frameDivMinWidth1,
  dedicatedProjectMa1,
  dedicatedProjectMaMargin1,
  withLotsOfUnique1,
  groupDivHeight2,
  groupDivWidth2,
  groupDivBackgroundImage2,
  groupDivBackgroundSize2,
  image90,
  showImage90Icon,
  frameDivMinWidth2,
  dedicatedProjectMa2,
  dedicatedProjectMaMargin2,
  withLotsOfUnique2,
  divPadding,
  groupDivHeight3,
  groupDivWidth3,
  groupDivBackgroundImage3,
  groupDivBackgroundSize3,
  image93,
  showImage93Icon,
  frameDivMinWidth3,
  dedicatedProjectMa3,
  dedicatedProjectMaMargin3,
  withLotsOfUnique3,
}) => {
  const pointsStyle: CSSProperties = useMemo(() => {
    return {
      width: pointsWidth,
      alignSelf: pointsAlignSelf,
    };
  }, [pointsWidth, pointsAlignSelf]);

  const groupDivStyle: CSSProperties = useMemo(() => {
    return {
      height: groupDivHeight,
      width: groupDivWidth,
      backgroundImage: groupDivBackgroundImage,
      backgroundSize: groupDivBackgroundSize,
    };
  }, [
    groupDivHeight,
    groupDivWidth,
    groupDivBackgroundImage,
    groupDivBackgroundSize,
  ]);

  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      minWidth: frameDivMinWidth,
    };
  }, [frameDivMinWidth]);

  const dedicatedProjectMaStyle: CSSProperties = useMemo(() => {
    return {
      margin: dedicatedProjectMaMargin,
    };
  }, [dedicatedProjectMaMargin]);

  const groupDiv1Style: CSSProperties = useMemo(() => {
    return {
      height: groupDivHeight1,
      width: groupDivWidth1,
      backgroundImage: groupDivBackgroundImage1,
      backgroundSize: groupDivBackgroundSize1,
    };
  }, [
    groupDivHeight1,
    groupDivWidth1,
    groupDivBackgroundImage1,
    groupDivBackgroundSize1,
  ]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      minWidth: frameDivMinWidth1,
    };
  }, [frameDivMinWidth1]);

  const dedicatedProjectMa1Style: CSSProperties = useMemo(() => {
    return {
      margin: dedicatedProjectMaMargin1,
    };
  }, [dedicatedProjectMaMargin1]);

  const groupDiv2Style: CSSProperties = useMemo(() => {
    return {
      height: groupDivHeight2,
      width: groupDivWidth2,
      backgroundImage: groupDivBackgroundImage2,
      backgroundSize: groupDivBackgroundSize2,
    };
  }, [
    groupDivHeight2,
    groupDivWidth2,
    groupDivBackgroundImage2,
    groupDivBackgroundSize2,
  ]);

  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      minWidth: frameDivMinWidth2,
    };
  }, [frameDivMinWidth2]);

  const dedicatedProjectMa2Style: CSSProperties = useMemo(() => {
    return {
      margin: dedicatedProjectMaMargin2,
    };
  }, [dedicatedProjectMaMargin2]);

  const divStyle: CSSProperties = useMemo(() => {
    return {
      padding: divPadding,
    };
  }, [divPadding]);

  const groupDiv3Style: CSSProperties = useMemo(() => {
    return {
      height: groupDivHeight3,
      width: groupDivWidth3,
      backgroundImage: groupDivBackgroundImage3,
      backgroundSize: groupDivBackgroundSize3,
    };
  }, [
    groupDivHeight3,
    groupDivWidth3,
    groupDivBackgroundImage3,
    groupDivBackgroundSize3,
  ]);

  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      minWidth: frameDivMinWidth3,
    };
  }, [frameDivMinWidth3]);

  const dedicatedProjectMa3Style: CSSProperties = useMemo(() => {
    return {
      margin: dedicatedProjectMaMargin3,
    };
  }, [dedicatedProjectMaMargin3]);

  return (
    <div
      className={`w-[76.25rem] mq450:w-full max-w-full flex flex-col items-start gap-[2.5rem] text-left text-[1.5rem] text-[#1a2530] font-proxima ${className}`}
      style={pointsStyle}
    >
      <div className="self-stretch flex items-start flex-wrap content-start gap-[2.5rem] mq450:gap-[1.25rem]">
        <div className="self-stretch flex-1 rounded-3xl border-[#e2e5e9] border-solid border-[1px] box-border overflow-hidden flex items-start py-[2.125rem] pl-[2.25rem] pr-[2.187rem] gap-[2rem] min-w-0 max-w-full mq450:p-[1.25rem] mq450:gap-[1rem] mq800:flex-wrap">
          <div
            className="h-[10rem] w-[10.063rem] relative hidden mq800:block"
            style={groupDivStyle}
          >
            {!!showImage91Icon && (
              <Image
                className="absolute top-[0rem] left-[0rem] w-full h-full object-cover"
                width={161}
                height={160}
                sizes="100vw"
                alt=""
                src={image91}
              />
            )}
            <div className="absolute top-[0rem] left-[0rem] bg-[#1e2226] w-full h-full mix-blend-overlay" />
          </div>
          <div
            className="flex-1 flex flex-col items-start gap-[0.75rem] min-w-0"
            style={frameDivStyle}
          >
            <b
              className="self-stretch relative leading-[1.875rem] mq450:text-[1.188rem] mq450:leading-[1.5rem]"
              style={dedicatedProjectMaStyle}
            >
              {dedicatedProjectMa}
            </b>
            <div className="self-stretch flex flex-col items-start gap-[1rem] text-[1.125rem] text-[#4d565f]">
              <div className="self-stretch relative leading-[1.75rem] shrink-0">
                {withLotsOfUnique}
              </div>
              <div className="w-[22.75rem] relative leading-[1.75rem] font-proxima text-[#4d575f] hidden shrink-0">
                With advanced automation and smart distribution technology,
                Wirero helps connect your news with journalists, bloggers, and
                online audiences while ensuring seamless integration of media
                assets such as images, logos, and multimedia content.
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex-1 rounded-3xl border-[#e2e5e9] border-solid border-[1px] box-border overflow-hidden flex items-start py-[2.125rem] pl-[2.25rem] pr-[2.187rem] gap-[2rem] min-w-0 max-w-full mq450:p-[1.25rem] mq450:gap-[1rem] mq800:flex-wrap">
          <div
            className="h-[10rem] w-[10rem] relative hidden mq800:block"
            style={groupDiv1Style}
          >
            {!!showImage92Icon && (
              <Image
                className="absolute top-[0rem] left-[0rem] w-full h-full object-cover"
                width={160}
                height={160}
                sizes="100vw"
                alt=""
                src={image92}
              />
            )}
            <div className="absolute top-[0rem] left-[0rem] bg-[#1e2226] w-full h-full mix-blend-overlay" />
          </div>
          <div
            className="flex-1 flex flex-col items-start gap-[0.75rem] min-w-0"
            style={frameDiv1Style}
          >
            <b
              className="self-stretch relative leading-[1.875rem] mq450:text-[1.188rem] mq450:leading-[1.5rem]"
              style={dedicatedProjectMa1Style}
            >
              {dedicatedProjectMa1}
            </b>
            <div className="self-stretch flex flex-col items-start gap-[1.25rem] text-[1.125rem] text-[#4d565f]">
              <div className="self-stretch relative leading-[1.75rem] shrink-0">
                {withLotsOfUnique1}
              </div>
              <div className="w-[24.75rem] relative leading-[1.75rem] font-proxima text-[#4d575f] hidden shrink-0">
                Whether you're a business, PR agency, or marketing team, our
                experts are ready to help you get the most out of your press
                release distribution.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex items-start flex-wrap content-start gap-[2.5rem] mq450:gap-[1.25rem]">
        <div className="flex-1 rounded-3xl border-[#e2e5e9] border-solid border-[1px] box-border overflow-hidden flex items-start py-[2.125rem] pl-[2.25rem] pr-[2.187rem] gap-[2rem] min-w-0 max-w-full mq450:p-[1.25rem] mq450:gap-[1rem] mq800:flex-wrap">
          <div
            className="h-[10rem] w-[10rem] relative hidden mq800:block"
            style={groupDiv2Style}
          >
            {!!showImage90Icon && (
              <Image
                className="absolute top-[0rem] left-[0rem] w-full h-full object-cover"
                width={160}
                height={160}
                sizes="100vw"
                alt=""
                src={image90}
              />
            )}
            <div className="absolute top-[0rem] left-[0rem] bg-[#1e2226] w-full h-full mix-blend-overlay" />
          </div>
          <div
            className="flex-1 flex flex-col items-start gap-[0.75rem] min-w-0"
            style={frameDiv2Style}
          >
            <b
              className="self-stretch relative leading-[1.875rem] mq450:text-[1.188rem] mq450:leading-[1.5rem]"
              style={dedicatedProjectMa2Style}
            >
              {dedicatedProjectMa2}
            </b>
            <div className="self-stretch flex flex-col items-start gap-[1.25rem] text-[1.125rem] text-[#4d565f]">
              <div className="self-stretch relative leading-[1.75rem] shrink-0">
                {withLotsOfUnique2}
              </div>
              <div className="w-[24.75rem] relative leading-[1.75rem] font-proxima text-[#4d575f] hidden shrink-0">
                Our distribution network ensures your news is delivered across
                multiple platforms, improving visibility and maximizing online
                exposure.
              </div>
            </div>
          </div>
        </div>
        <div
          className="self-stretch flex-1 rounded-3xl border-[#e2e5e9] border-solid border-[1px] box-border overflow-hidden flex items-start py-[2.125rem] pl-[2.25rem] pr-[2.187rem] gap-[2rem] min-w-0 max-w-full mq450:p-[1.25rem] mq450:gap-[1rem] mq800:flex-wrap"
          style={divStyle}
        >
          <div
            className="h-[10rem] w-[10rem] relative hidden mq800:block"
            style={groupDiv3Style}
          >
            {!!showImage93Icon && (
              <Image
                className="absolute top-[0rem] left-[0rem] w-full h-full object-cover"
                width={160}
                height={160}
                sizes="100vw"
                alt=""
                src={image93}
              />
            )}
            <div className="absolute top-[0rem] left-[0rem] bg-[#1e2226] w-full h-full mix-blend-overlay" />
          </div>
          <div
            className="flex-1 flex flex-col items-start gap-[0.75rem] min-w-0"
            style={frameDiv3Style}
          >
            <b
              className="self-stretch relative leading-[1.875rem] mq450:text-[1.188rem] mq450:leading-[1.5rem]"
              style={dedicatedProjectMa3Style}
            >
              {dedicatedProjectMa3}
            </b>
            <div className="self-stretch flex flex-col items-start gap-[1rem] text-[1.125rem] text-[#4d565f]">
              <div className="self-stretch relative leading-[1.75rem] shrink-0">
                {withLotsOfUnique3}
              </div>
              <div className="w-[22.75rem] relative leading-[1.75rem] font-proxima text-[#4d575f] hidden shrink-0">
                Whether you're a business, PR agency, or marketing team, our
                experts are ready to help you get the most out of your press
                release distribution.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Points;
