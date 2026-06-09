"use client";
import type { NextPage } from "next";
import { useState } from "react";
import Image from "next/image";
import Component1 from "./component1";
import UserOutlined from "./user-outlined";

export type WhyChooseUsType = {
  className?: string;
};

const WhyChooseUs: NextPage<WhyChooseUsType> = ({ className = "" }) => {
  const [component1Items] = useState([
    {
      divPadding: "1.375rem 0.75rem 1.5rem" as const,
      divBorderBottom: undefined,
      iconPadding: "0.75rem" as const,
      icLayers48px: "/ic-layers-48px.svg",
      icLayers48pxIconHeight: "2rem" as const,
      icLayers48pxIconMaxHeight: undefined,
      dedicatedProjectMa: "Niche Targeting",
      withLotsOfUnique:
        "Skip the time-consuming process of contacting individual websites or managing multiple submissions. Wirero provides direct access to a distribution network, allowing you to publish across platforms without manual outreach.",
    },
    {
      divPadding: "1.375rem 0.75rem 1.5rem" as const,
      divBorderBottom: undefined,
      iconPadding: "0.75rem" as const,
      icLayers48px: "/gis-layer-upload.svg",
      icLayers48pxIconHeight: "auto" as const,
      icLayers48pxIconMaxHeight: "100%" as const,
      dedicatedProjectMa: "Dofollow Backlinks",
      withLotsOfUnique:
        "Whether you publish occasionally or on a regular schedule, Wirero supports a consistent workflow. Manage and distribute content in a structured way without starting from scratch every time.",
    },
    {
      divPadding: "1.375rem 0.75rem 1.5rem" as const,
      divBorderBottom: undefined,
      iconPadding: "0.75rem 0.625rem" as const,
      icLayers48px: "/fluent-globe-search-20-filled.svg",
      icLayers48pxIconHeight: "auto" as const,
      icLayers48pxIconMaxHeight: "100%" as const,
      dedicatedProjectMa: "Custom Anchor Support",
      withLotsOfUnique:
        "Wirero is designed as a long-term platform for continuous distribution. As your content needs grow, the platform scales with you—supporting repeated use rather than one-time campaigns.",
    },
    {
      divPadding: "1.375rem 0.75rem" as const,
      divBorderBottom: "1px solid #e2e5e9" as const,
      iconPadding: "0.75rem" as const,
      icLayers48px: "/streamline-plump-news-paper-solid1.svg",
      icLayers48pxIconHeight: "auto" as const,
      icLayers48pxIconMaxHeight: "100%" as const,
      dedicatedProjectMa: "Automated Distribution",
      withLotsOfUnique:
        "Distribute your content based on relevant categories such as tech, business, finance, and more. This helps ensure your content is placed within the right context, making your distribution more structured and intentional.",
    },
    {
      divPadding: "1.375rem 0.75rem" as const,
      divBorderBottom: "1px solid #e2e5e9" as const,
      iconPadding: "0.75rem" as const,
      icLayers48px: "/streamline-plump-news-paper-solid1.svg",
      icLayers48pxIconHeight: "auto" as const,
      icLayers48pxIconMaxHeight: "100%" as const,
      dedicatedProjectMa: "Exportable Reports",
      withLotsOfUnique:
        "Distribute your content based on relevant categories such as tech, business, finance, and more. This helps ensure your content is placed within the right context, making your distribution more structured and intentional.",
    },
  ]);
  return (
    <section
      className={`self-stretch bg-[#f7fafd] flex flex-col items-center py-[6.125rem] px-[6.875rem] box-border gap-[4.75rem] max-w-full text-center text-[1rem] text-[#0bc111] font-['Proxima_Nova'] mq450:gap-[1.188rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq800:gap-[2.375rem] mq800:py-[2.625rem] mq800:px-[3.438rem] mq800:box-border mq1350:pt-[4rem] mq1350:pb-[4rem] mq1350:box-border ${className}`}
    >
      <div className="w-[60rem] overflow-hidden flex flex-col items-center gap-[1.5rem] shrink-0">
        <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase">
          Core Capabilities
        </b>
        <h1 className="m-0 self-stretch relative text-[3.5rem] leading-[4.25rem] font-bold font-[inherit] text-[#1a2530] mq450:text-[2.125rem] mq450:leading-[2.563rem] mq800:text-[2.813rem] mq800:leading-[3.375rem]">
          Infrastructure Built for Scalable Distribution
        </h1>
      </div>
      <div className="self-stretch flex items-start pt-[0rem] px-[0rem] pb-[2.5rem] box-border gap-[2.5rem] max-w-full shrink-0 mq800:gap-[1.25rem] mq1350:flex-wrap">
        <section className="flex-1 flex flex-col items-start relative isolate min-w-[26.813rem] text-left text-[1.5rem] text-[#1a2530] font-['Proxima_Nova'] mq800:min-w-full">
          <div className="self-stretch border-[rgba(226,229,233,0.5)] border-solid border-t-[6px] overflow-hidden flex flex-col items-start pt-[1.062rem] px-[0.75rem] pb-[2rem] gap-[0.25rem] z-[0]">
            <div className="self-stretch flex items-center gap-[1rem] mq800:flex-wrap">
              <div className="h-[3.5rem] w-[3.5rem] rounded-[56px] bg-[rgba(26,140,213,0.1)] flex items-center justify-center py-[0.75rem] px-[0.625rem] box-border">
                <Image
                  className="w-full relative max-h-full h-auto shrink-0"
                  loading="lazy"
                  width={36}
                  height={36}
                  sizes="100vw"
                  alt=""
                  src="/solar-global-bold2.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start gap-[1rem] min-w-[20.313rem]">
                <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[1.875rem] font-bold font-[inherit] shrink-0 mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                  Multi-Domain Publishing
                </h3>
                <div className="w-[31.25rem] relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] hidden shrink-0">
                  Wirero is designed to remove unnecessary steps from the
                  distribution process. From submission to distribution,
                  everything is streamlined so you can publish content quickly
                  without dealing with complex workflows or manual coordination.
                </div>
              </div>
              <div className="rounded-[56px] flex items-center justify-center p-[0.625rem]">
                <Image
                  className="h-[1.75rem] w-full relative"
                  width={28}
                  height={28}
                  sizes="100vw"
                  alt=""
                  src="/chevron-up.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start py-[0rem] pl-[4.5rem] pr-[4rem] gap-[1rem] mq800:pl-[2.25rem] mq800:pr-[2rem] mq800:box-border">
              <b className="w-[31.25rem] relative leading-[1.875rem] hidden mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                Simple and Fast Distribution
              </b>
              <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[#4d565f]">
                Publish content across hundreds of independent domains
                simultaneously through one centralized interface. Wirero
                simplifies large-scale distribution without requiring manual
                coordination across multiple websites.
              </div>
            </div>
          </div>
          {component1Items.map((item, index) => (
            <Component1
              key={index}
              divPadding={item.divPadding}
              divBorderBottom={item.divBorderBottom}
              iconPadding={item.iconPadding}
              icLayers48px={item.icLayers48px}
              icLayers48pxIconHeight={item.icLayers48pxIconHeight}
              icLayers48pxIconMaxHeight={item.icLayers48pxIconMaxHeight}
              dedicatedProjectMa={item.dedicatedProjectMa}
              withLotsOfUnique={item.withLotsOfUnique}
            />
          ))}
          <div className="w-[41.25rem] border-[#e2e5e9] border-solid border-t-[1px] border-b-[1px] box-border overflow-x-auto hidden items-center py-[1.375rem] px-[0.75rem] gap-[1rem] z-[6]">
            <div className="rounded-[56px] bg-[rgba(26,140,213,0.1)] flex items-center justify-center p-[0.75rem] gap-[0.625rem]">
              <Image
                className="h-[2.25rem] w-[2.25rem] relative object-cover hidden shrink-0"
                width={36}
                height={36}
                sizes="100vw"
                alt=""
                src="/ic-timelapse-48px@2x.png"
              />
              <Image
                className="h-[2rem] w-[2rem] relative shrink-0"
                width={32}
                height={32}
                sizes="100vw"
                alt=""
                src="/ion-cash.svg"
              />
            </div>
            <div className="flex-1 flex flex-col items-start gap-[1rem]">
              <b className="self-stretch relative leading-[1.875rem] shrink-0 mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                Subscription-Based Access
              </b>
              <div className="w-[35rem] relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] hidden shrink-0">
                Get ongoing access to the distribution network through a simple
                subscription. Publish when you need, without dealing with
                per-release limitations or complicated pricing structures.
              </div>
            </div>
            <div className="rounded-[56px] flex items-center justify-center p-[0.625rem]">
              <Image
                className="h-[1.75rem] w-full relative"
                width={28}
                height={28}
                sizes="100vw"
                alt=""
                src="/chevron-down.svg"
              />
            </div>
          </div>
          <div className="w-[22.875rem] h-[0.375rem] absolute !!m-[0 important] top-[0rem] left-[-0.187rem] border-[#1a8cd5] border-solid border-t-[6px] box-border z-[7]" />
        </section>
        <div className="h-[30rem] w-[32.5rem] relative rounded-[20px] bg-[#5b5c5c] max-w-full mq800:min-w-full mq1350:flex-1" />
      </div>
      <div className="w-[76.25rem] rounded-[20px] bg-color-white border-[#e2e5e9] border-solid border-t-[1px] box-border hidden items-center flex-wrap content-center pt-[2.375rem] px-[3.75rem] pb-[2.5rem] gap-[5rem] shrink-0 text-left text-[2.25rem] text-[#1a2530]">
        <div className="flex-1 overflow-hidden flex flex-col items-start gap-[0.75rem] min-w-[32.313rem] mq1125:min-w-full">
          <b className="self-stretch relative leading-[3rem] mq450:text-[1.375rem] mq450:leading-[1.813rem] mq800:text-[1.813rem] mq800:leading-[2.375rem]">
            Start Distributing Your Content Today
          </b>
          <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[#4d565f]">
            Get access to a growing distribution network and publish whenever
            you need.
          </div>
        </div>
        <UserOutlined
          showUserOutlined
          userOutlinedBorder="unset"
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
      </div>
    </section>
  );
};

export default WhyChooseUs;
