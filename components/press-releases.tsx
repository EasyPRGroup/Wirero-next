"use client";
import type { NextPage } from "next";
import { useRef } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Testimonials from "./testimonials";
import UserOutlined from "./user-outlined";

export type PressReleasesType = {
  className?: string;
};

type ScrollButtonProps = {
  direction: "left" | "right";
  onClick: () => void;
};

const ScrollButton = ({ direction, onClick }: ScrollButtonProps) => {
  return (
    <button
      onClick={onClick}
      className="rounded-[40px] bg-[#12171c] w-11 h-11 flex flex-col items-center justify-center p-[0.5rem] cursor-pointer border-none hover:bg-[#1a2530] transition-colors"
    >
      {direction === "left" ? (
        <ChevronLeft className="w-7 h-7 relative text-white" />
      ) : (
        <ChevronRight className="w-7 h-7 relative text-white" />
      )}
    </button>
  );
};

const PressReleases: NextPage<PressReleasesType> = ({ className = "" }) => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth * 0.7;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section
      className={`site-section self-stretch flex flex-col items-center box-border gap-[4.25rem] max-w-full mq450:gap-[1.063rem] mq800:gap-[2.125rem] ${className}`}
    >
      <section className="w-full max-w-[60rem] min-w-0 overflow-hidden flex flex-col items-center gap-[1.5rem] text-left text-[1rem] text-[#0bc111] font-proxima">
        <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase">
          Recently Distributed
        </b>
        <div className="self-stretch flex flex-col items-center gap-[1rem] text-center text-[3.5rem] text-[#1a2530]">
          <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[4.25rem] font-bold font-[inherit] mq450:text-[2.125rem] mq450:leading-[2.563rem] mq800:text-[2.813rem] mq800:leading-[3.375rem]">
            Real Distribution. Real Results.
          </h2>
          <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d575f]">
            See how content is distributed across the Wirero network, and how
            teams use it to scale.
          </div>
        </div>
      </section>
      <div className="site-container flex flex-col items-center gap-[3rem] max-w-full mq800:gap-[1.5rem]">
        <div className="w-full flex flex-col items-center gap-[2.25rem] max-w-full shrink-0 mq800:gap-[1.125rem]">
          <div className="self-stretch flex flex-col items-start relative isolate gap-[0.625rem] max-w-full">
            <div
              ref={scrollRef}
              className="self-stretch overflow-x-auto flex items-center justify-center gap-[2.5rem] max-w-full z-[0] shrink-0 mq800:gap-[1.25rem] scroll-smooth snap-x snap-mandatory touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <section className="h-[30rem] w-[65rem] rounded-[28px] bg-[rgba(242,240,251,0.08)] border-[#f4f7fa] border-solid border-[4px] box-border overflow-hidden shrink-0 flex items-start justify-center [row-gap:20px] max-w-full text-left text-[1.125rem] text-[#1a2530] font-proxima snap-start mq1125:h-auto mq1125:flex-wrap">
                <div className="self-stretch flex-1 bg-color-white flex flex-col items-start justify-between p-[1.25rem] box-border gap-[1.25rem] min-w-0">
                  <div className="w-[29.063rem] rounded-lg hidden flex-col items-start justify-center py-[0.25rem] px-[0.5rem] box-border gap-[0.5rem] shrink-0 text-[#4d575f]">
                    <div className="rounded-[40px] flex items-center gap-[0.375rem] shrink-0">
                      <Image
                        className="h-[1rem] w-[1rem] relative"
                        width={16}
                        height={16}
                        sizes="100vw"
                        alt=""
                        src="/circle-check-big.svg"
                      />
                      <div className="relative leading-[1.75rem] font-semibold">
                        Published on 1000+ Domains
                      </div>
                    </div>
                    <div className="rounded-[40px] flex items-center gap-[0.375rem] shrink-0">
                      <Image
                        className="h-[1rem] w-[1rem] relative"
                        width={16}
                        height={16}
                        sizes="100vw"
                        alt=""
                        src="/circle-check-big.svg"
                      />
                      <div className="relative leading-[1.75rem] font-semibold">
                        Reached Multiple Regions
                      </div>
                    </div>
                    <div className="rounded-[40px] flex items-center gap-[0.375rem] shrink-0">
                      <Image
                        className="h-[1rem] w-[1rem] relative"
                        width={16}
                        height={16}
                        sizes="100vw"
                        alt=""
                        src="/circle-check-big.svg"
                      />
                      <div className="relative leading-[1.75rem] font-semibold">
                        Multi-category distribution
                      </div>
                    </div>
                    <div className="rounded-[40px] flex items-center gap-[0.375rem] shrink-0">
                      <Image
                        className="h-[1rem] w-[1rem] relative"
                        width={16}
                        height={16}
                        sizes="100vw"
                        alt=""
                        src="/circle-check-big.svg"
                      />
                      <div className="relative leading-[1.75rem] font-semibold">
                        Single submission
                      </div>
                    </div>
                    <div className="rounded-[40px] hidden items-center gap-[0.375rem] shrink-0">
                      <Image
                        className="h-[1rem] w-[1rem] relative"
                        width={16}
                        height={16}
                        sizes="100vw"
                        alt=""
                        src="/circle-check-big.svg"
                      />
                      <div className="relative leading-[1.75rem] font-semibold">
                        Published across network
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start p-[1.25rem] gap-[0.75rem] shrink-0 text-[1.5rem]">
                    <div className="self-stretch rounded-2xl flex flex-col items-start gap-[0.375rem]">
                      <div className="self-stretch flex items-center gap-[0.75rem] shrink-0 mq450:flex-wrap">
                        <div className="flex items-center justify-center shrink-0">
                          <Image
                            className="h-[1.5rem] w-full relative"
                            width={24}
                            height={24}
                            sizes="100vw"
                            alt=""
                            src="/solar-global-bold3.svg"
                          />
                        </div>
                        <h3 className="m-0 flex-1 relative text-[length:inherit] leading-[1.875rem] inline-block min-w-0 shrink-0 font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                          <span className="font-semibold leading-[1.25rem]">{`Published on `}</span>
                          <b className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#0461c3,_#0bc111)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] leading-[1.25rem]">
                            1000+ domains
                          </b>
                        </h3>
                        <div className="w-[13.644rem] relative text-[1.25rem] leading-[1.5rem] capitalize font-semibold hidden shrink-0 mq450:text-[1rem] mq450:leading-[1.188rem]">
                          media websites available
                        </div>
                      </div>
                      <div className="w-[29.281rem] relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] hidden opacity-[0.9] shrink-0">
                        Access a wide network of tech-focused digital platforms.
                      </div>
                    </div>
                    <div className="self-stretch rounded-2xl flex flex-col items-start gap-[0.375rem]">
                      <div className="self-stretch flex items-center gap-[0.75rem] shrink-0 mq450:flex-wrap">
                        <div className="flex items-center justify-center shrink-0">
                          <Image
                            className="h-[1.5rem] w-full relative"
                            width={24}
                            height={24}
                            sizes="100vw"
                            alt=""
                            src="/target-fill1.svg"
                          />
                        </div>
                        <h3 className="m-0 flex-1 relative text-[length:inherit] leading-[1.875rem] inline-block min-w-0 shrink-0 font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                          <span className="font-semibold leading-[1.25rem]">{`Reached `}</span>
                          <b className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#0461c3,_#0bc111)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] leading-[1.25rem]">
                            Multiple
                          </b>
                          <span className="font-semibold leading-[1.25rem]">
                            {" "}
                            Regions
                          </span>
                        </h3>
                        <div className="w-[13.644rem] relative text-[1.25rem] leading-[1.5rem] capitalize font-semibold hidden shrink-0 mq450:text-[1rem] mq450:leading-[1.188rem]">
                          media websites available
                        </div>
                      </div>
                      <div className="w-[27.781rem] relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] hidden opacity-[0.9] shrink-0">
                        Access a wide network of tech-focused digital platforms.
                      </div>
                    </div>
                    <div className="self-stretch rounded-2xl flex flex-col items-start gap-[0.375rem]">
                      <div className="self-stretch flex items-center gap-[0.75rem] shrink-0 mq450:flex-wrap">
                        <div className="flex items-center justify-center shrink-0">
                          <Image
                            className="h-[1.5rem] w-full relative"
                            width={24}
                            height={24}
                            sizes="100vw"
                            alt=""
                            src="/stack-fill.svg"
                          />
                        </div>
                        <h3 className="m-0 flex-1 relative text-[length:inherit] leading-[1.875rem] inline-block min-w-0 shrink-0 font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                          <span className="font-semibold leading-[1.25rem]">{`Categorized `}</span>
                          <b className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#0461c3,_#0bc111)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] leading-[1.25rem]">
                            Distribution
                          </b>
                        </h3>
                        <div className="w-[13.644rem] relative text-[1.25rem] leading-[1.5rem] capitalize font-semibold hidden shrink-0 mq450:text-[1rem] mq450:leading-[1.188rem]">
                          media websites available
                        </div>
                      </div>
                      <div className="w-[27.781rem] relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] hidden opacity-[0.9] shrink-0">
                        Access a wide network of tech-focused digital platforms.
                      </div>
                    </div>
                  </div>
                  <Testimonials
                    property1="Default"
                    image83="/image-83@2x.png"
                  />
                </div>
                <div className="self-stretch w-[37.5rem] flex items-start pt-[22.875rem] px-[0rem] pb-[0.25rem] box-border relative isolate max-w-full text-[1.5rem] text-[#eee] mq800:pt-[14.875rem] mq800:pb-[1.25rem] mq800:box-border mq1125:flex-1 mq1125:min-w-full">
                  <Image
                    className="h-[37.5rem] w-[38.25rem] absolute !m-0 top-[-1.625rem] left-[0.063rem] object-cover shrink-0"
                    width={612}
                    height={600}
                    sizes="100vw"
                    alt=""
                    src="/publish-your-content-medias.jpg"
                  />
                  <div className="w-[37.5rem] [backdrop-filter:blur(8px)] rounded-t-none rounded-br-[20px] rounded-bl-none bg-[rgba(26,37,48,0.4)] flex flex-col items-start p-[1.5rem] box-border gap-[0.75rem] max-w-full z-[1] shrink-0">
                    <div className="self-stretch flex flex-col items-start gap-[0.25rem] shrink-0">
                      <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[1.875rem] font-bold font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                        Startup X Expands into Global Markets
                      </h3>
                      <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[rgba(238,238,238,0.8)]">{`Distributed across Technology, Business & News platforms`}</div>
                    </div>
                    <div className="w-[30.281rem] rounded-lg bg-[#f7fafd] overflow-x-auto hidden items-center flex-wrap content-center py-[0.25rem] px-[0.5rem] box-border gap-[0.5rem] shrink-0 text-[1.125rem] text-[#4d575f]">
                      <div className="rounded-[40px] flex items-center gap-[0.375rem]">
                        <Image
                          className="h-[1rem] w-[1rem] relative"
                          width={16}
                          height={16}
                          sizes="100vw"
                          alt=""
                          src="/circle-check-big.svg"
                        />
                        <div className="relative leading-[1.75rem] font-semibold">
                          Multi-category distribution
                        </div>
                      </div>
                      <div className="rounded-[40px] flex items-center gap-[0.375rem]">
                        <Image
                          className="h-[1rem] w-[1rem] relative"
                          width={16}
                          height={16}
                          sizes="100vw"
                          alt=""
                          src="/circle-check-big.svg"
                        />
                        <div className="relative leading-[1.75rem] font-semibold">
                          Single submission
                        </div>
                      </div>
                      <div className="rounded-[40px] flex items-center gap-[0.375rem]">
                        <Image
                          className="h-[1rem] w-[1rem] relative"
                          width={16}
                          height={16}
                          sizes="100vw"
                          alt=""
                          src="/circle-check-big.svg"
                        />
                        <div className="relative leading-[1.75rem] font-semibold">
                          Published across network
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
              <div className="h-[32.25rem] w-[65rem] shadow-[0px_2px_16px_rgba(26,_38,_48,_0.12)] rounded-[28px] bg-[rgba(242,240,251,0.08)] border-color-white border-solid border-[4px] box-border overflow-hidden shrink-0 flex items-start justify-center [row-gap:20px] max-w-full snap-start mq1125:h-auto mq1125:flex-wrap">
                <section className="self-stretch flex-1 bg-color-white flex flex-col items-start justify-between p-[1.25rem] box-border gap-[1.25rem] min-w-0 text-left text-[1.125rem] text-[#4d575f] font-proxima">
                  <div className="w-[29.063rem] rounded-lg hidden flex-col items-start justify-center py-[0.25rem] px-[0.5rem] box-border gap-[0.5rem] shrink-0">
                    <div className="rounded-[40px] flex items-center gap-[0.375rem] shrink-0">
                      <Image
                        className="h-[1rem] w-[1rem] relative"
                        width={16}
                        height={16}
                        sizes="100vw"
                        alt=""
                        src="/circle-check-big.svg"
                      />
                      <div className="relative leading-[1.75rem] font-semibold">
                        Published on 1000+ Domains
                      </div>
                    </div>
                    <div className="rounded-[40px] flex items-center gap-[0.375rem] shrink-0">
                      <Image
                        className="h-[1rem] w-[1rem] relative"
                        width={16}
                        height={16}
                        sizes="100vw"
                        alt=""
                        src="/circle-check-big.svg"
                      />
                      <div className="relative leading-[1.75rem] font-semibold">
                        Reached Multiple Regions
                      </div>
                    </div>
                    <div className="rounded-[40px] flex items-center gap-[0.375rem] shrink-0">
                      <Image
                        className="h-[1rem] w-[1rem] relative"
                        width={16}
                        height={16}
                        sizes="100vw"
                        alt=""
                        src="/circle-check-big.svg"
                      />
                      <div className="relative leading-[1.75rem] font-semibold">
                        Multi-category distribution
                      </div>
                    </div>
                    <div className="rounded-[40px] flex items-center gap-[0.375rem] shrink-0">
                      <Image
                        className="h-[1rem] w-[1rem] relative"
                        width={16}
                        height={16}
                        sizes="100vw"
                        alt=""
                        src="/circle-check-big.svg"
                      />
                      <div className="relative leading-[1.75rem] font-semibold">
                        Single submission
                      </div>
                    </div>
                    <div className="rounded-[40px] hidden items-center gap-[0.375rem] shrink-0">
                      <Image
                        className="h-[1rem] w-[1rem] relative"
                        width={16}
                        height={16}
                        sizes="100vw"
                        alt=""
                        src="/circle-check-big.svg"
                      />
                      <div className="relative leading-[1.75rem] font-semibold">
                        Published across network
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start p-[1.25rem] gap-[0.75rem] shrink-0 text-[1.5rem] text-[#1a2530]">
                    <div className="self-stretch rounded-2xl flex flex-col items-start gap-[0.375rem]">
                      <div className="self-stretch flex items-center gap-[0.75rem] shrink-0 mq450:flex-wrap">
                        <div className="flex items-center justify-center shrink-0">
                          <Image
                            className="h-[1.5rem] w-full relative"
                            width={24}
                            height={24}
                            sizes="100vw"
                            alt=""
                            src="/solar-global-bold3.svg"
                          />
                        </div>
                        <h3 className="m-0 flex-1 relative text-[length:inherit] leading-[1.875rem] inline-block min-w-0 shrink-0 font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                          <span className="font-semibold leading-[1.25rem]">{`Published on `}</span>
                          <b className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#0461c3,_#0bc111)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] leading-[1.25rem]">
                            1000+ domains
                          </b>
                        </h3>
                        <div className="w-[13.644rem] relative text-[1.25rem] leading-[1.5rem] capitalize font-semibold hidden shrink-0 mq450:text-[1rem] mq450:leading-[1.188rem]">
                          media websites available
                        </div>
                      </div>
                      <div className="w-[29.281rem] relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] hidden opacity-[0.9] shrink-0">
                        Access a wide network of tech-focused digital platforms.
                      </div>
                    </div>
                    <div className="self-stretch rounded-2xl flex flex-col items-start gap-[0.375rem]">
                      <div className="self-stretch flex items-center gap-[0.75rem] shrink-0 mq450:flex-wrap">
                        <div className="flex items-center justify-center shrink-0">
                          <Image
                            className="h-[1.5rem] w-full relative"
                            width={24}
                            height={24}
                            sizes="100vw"
                            alt=""
                            src="/target-fill1.svg"
                          />
                        </div>
                        <h3 className="m-0 flex-1 relative text-[length:inherit] leading-[1.875rem] inline-block min-w-0 shrink-0 font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                          <span className="font-semibold leading-[1.25rem]">{`Reached `}</span>
                          <b className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#0461c3,_#0bc111)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] leading-[1.25rem]">
                            Multiple
                          </b>
                          <span className="font-semibold leading-[1.25rem]">
                            {" "}
                            Regions
                          </span>
                        </h3>
                        <div className="w-[13.644rem] relative text-[1.25rem] leading-[1.5rem] capitalize font-semibold hidden shrink-0 mq450:text-[1rem] mq450:leading-[1.188rem]">
                          media websites available
                        </div>
                      </div>
                      <div className="w-[27.781rem] relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] hidden opacity-[0.9] shrink-0">
                        Access a wide network of tech-focused digital platforms.
                      </div>
                    </div>
                    <div className="self-stretch rounded-2xl flex flex-col items-start gap-[0.375rem]">
                      <div className="self-stretch flex items-center gap-[0.75rem] shrink-0 mq450:flex-wrap">
                        <div className="flex items-center justify-center shrink-0">
                          <Image
                            className="h-[1.5rem] w-full relative"
                            width={24}
                            height={24}
                            sizes="100vw"
                            alt=""
                            src="/stack-fill.svg"
                          />
                        </div>
                        <h3 className="m-0 flex-1 relative text-[length:inherit] leading-[1.875rem] inline-block min-w-0 shrink-0 font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                          <span className="font-semibold leading-[1.25rem]">{`Categorized `}</span>
                          <b className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#0461c3,_#0bc111)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] leading-[1.25rem]">
                            Distribution
                          </b>
                        </h3>
                        <div className="w-[13.644rem] relative text-[1.25rem] leading-[1.5rem] capitalize font-semibold hidden shrink-0 mq450:text-[1rem] mq450:leading-[1.188rem]">
                          media websites available
                        </div>
                      </div>
                      <div className="w-[27.781rem] relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] hidden opacity-[0.9] shrink-0">
                        Access a wide network of tech-focused digital platforms.
                      </div>
                    </div>
                  </div>
                  <Testimonials
                    property1="Default"
                    image83="/image-83@2x.png"
                  />
                </section>
                <section className="self-stretch w-[37.5rem] flex items-start pt-[25.125rem] px-[0rem] pb-[0.25rem] box-border relative isolate max-w-full text-left text-[1.5rem] text-[#eee] font-proxima mq800:pt-[16.313rem] mq800:pb-[1.25rem] mq800:box-border mq1125:flex-1 mq1125:min-w-full">
                  <Image
                    className="h-[37.5rem] w-[38.25rem] absolute !m-0 top-[-1.625rem] left-[0.063rem] object-cover shrink-0"
                    width={612}
                    height={600}
                    sizes="100vw"
                    alt=""
                    src="/Dofollow-backlinks.jpg"
                  />
                  <div className="w-[37.5rem] [backdrop-filter:blur(8px)] rounded-t-none rounded-br-[20px] rounded-bl-none bg-[rgba(26,37,48,0.4)] flex flex-col items-start p-[1.5rem] box-border gap-[0.75rem] max-w-full z-[1] shrink-0">
                    <div className="self-stretch flex flex-col items-start gap-[0.25rem] shrink-0">
                      <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[1.875rem] font-bold font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                        Startup X Expands into Global Markets
                      </h3>
                      <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[rgba(238,238,238,0.8)]">{`Distributed across Technology, Business & News platforms`}</div>
                    </div>
                    <div className="w-[30.281rem] rounded-lg bg-[#f7fafd] overflow-x-auto hidden items-center flex-wrap content-center py-[0.25rem] px-[0.5rem] box-border gap-[0.5rem] shrink-0 text-[1.125rem] text-[#4d575f]">
                      <div className="rounded-[40px] flex items-center gap-[0.375rem]">
                        <Image
                          className="h-[1rem] w-[1rem] relative"
                          width={16}
                          height={16}
                          sizes="100vw"
                          alt=""
                          src="/circle-check-big.svg"
                        />
                        <div className="relative leading-[1.75rem] font-semibold">
                          Multi-category distribution
                        </div>
                      </div>
                      <div className="rounded-[40px] flex items-center gap-[0.375rem]">
                        <Image
                          className="h-[1rem] w-[1rem] relative"
                          width={16}
                          height={16}
                          sizes="100vw"
                          alt=""
                          src="/circle-check-big.svg"
                        />
                        <div className="relative leading-[1.75rem] font-semibold">
                          Single submission
                        </div>
                      </div>
                      <div className="rounded-[40px] flex items-center gap-[0.375rem]">
                        <Image
                          className="h-[1rem] w-[1rem] relative"
                          width={16}
                          height={16}
                          sizes="100vw"
                          alt=""
                          src="/circle-check-big.svg"
                        />
                        <div className="relative leading-[1.75rem] font-semibold">
                          Published across network
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
              <section className="h-[30rem] w-[65rem] rounded-[28px] bg-[rgba(242,240,251,0.08)] border-[#f4f7fa] border-solid border-[4px] box-border overflow-hidden shrink-0 flex items-start justify-center [row-gap:20px] max-w-full text-left text-[1.125rem] text-[#4d575f] font-proxima snap-start mq1125:h-auto mq1125:flex-wrap">
                <div className="self-stretch flex-1 bg-color-white flex flex-col items-start justify-between p-[1.25rem] box-border gap-[1.25rem] min-w-0">
                  <div className="w-[29.063rem] rounded-lg hidden flex-col items-start justify-center py-[0.25rem] px-[0.5rem] box-border gap-[0.5rem] shrink-0">
                    <div className="rounded-[40px] flex items-center gap-[0.375rem] shrink-0">
                      <Image
                        className="h-[1rem] w-[1rem] relative"
                        width={16}
                        height={16}
                        sizes="100vw"
                        alt=""
                        src="/circle-check-big.svg"
                      />
                      <div className="relative leading-[1.75rem] font-semibold">
                        Published on 1000+ Domains
                      </div>
                    </div>
                    <div className="rounded-[40px] flex items-center gap-[0.375rem] shrink-0">
                      <Image
                        className="h-[1rem] w-[1rem] relative"
                        width={16}
                        height={16}
                        sizes="100vw"
                        alt=""
                        src="/circle-check-big.svg"
                      />
                      <div className="relative leading-[1.75rem] font-semibold">
                        Reached Multiple Regions
                      </div>
                    </div>
                    <div className="rounded-[40px] flex items-center gap-[0.375rem] shrink-0">
                      <Image
                        className="h-[1rem] w-[1rem] relative"
                        width={16}
                        height={16}
                        sizes="100vw"
                        alt=""
                        src="/circle-check-big.svg"
                      />
                      <div className="relative leading-[1.75rem] font-semibold">
                        Multi-category distribution
                      </div>
                    </div>
                    <div className="rounded-[40px] flex items-center gap-[0.375rem] shrink-0">
                      <Image
                        className="h-[1rem] w-[1rem] relative"
                        width={16}
                        height={16}
                        sizes="100vw"
                        alt=""
                        src="/circle-check-big.svg"
                      />
                      <div className="relative leading-[1.75rem] font-semibold">
                        Single submission
                      </div>
                    </div>
                    <div className="rounded-[40px] hidden items-center gap-[0.375rem] shrink-0">
                      <Image
                        className="h-[1rem] w-[1rem] relative"
                        width={16}
                        height={16}
                        sizes="100vw"
                        alt=""
                        src="/circle-check-big.svg"
                      />
                      <div className="relative leading-[1.75rem] font-semibold">
                        Published across network
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start p-[1.25rem] gap-[0.75rem] shrink-0 text-[1.5rem] text-[#1a2530]">
                    <div className="self-stretch rounded-2xl flex flex-col items-start gap-[0.375rem]">
                      <div className="self-stretch flex items-center gap-[0.75rem] shrink-0 mq450:flex-wrap">
                        <div className="flex items-center justify-center shrink-0">
                          <Image
                            className="h-[1.5rem] w-full relative"
                            width={24}
                            height={24}
                            sizes="100vw"
                            alt=""
                            src="/solar-global-bold3.svg"
                          />
                        </div>
                        <h3 className="m-0 flex-1 relative text-[length:inherit] leading-[1.875rem] inline-block min-w-0 shrink-0 font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                          <span className="font-semibold leading-[1.25rem]">{`Published on `}</span>
                          <b className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#0461c3,_#0bc111)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] leading-[1.25rem]">
                            1000+ domains
                          </b>
                        </h3>
                        <div className="w-[13.644rem] relative text-[1.25rem] leading-[1.5rem] capitalize font-semibold hidden shrink-0 mq450:text-[1rem] mq450:leading-[1.188rem]">
                          media websites available
                        </div>
                      </div>
                      <div className="w-[29.281rem] relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] hidden opacity-[0.9] shrink-0">
                        Access a wide network of tech-focused digital platforms.
                      </div>
                    </div>
                    <div className="self-stretch rounded-2xl flex flex-col items-start gap-[0.375rem]">
                      <div className="self-stretch flex items-center gap-[0.75rem] shrink-0 mq450:flex-wrap">
                        <div className="flex items-center justify-center shrink-0">
                          <Image
                            className="h-[1.5rem] w-full relative"
                            width={24}
                            height={24}
                            sizes="100vw"
                            alt=""
                            src="/target-fill1.svg"
                          />
                        </div>
                        <h3 className="m-0 flex-1 relative text-[length:inherit] leading-[1.875rem] inline-block min-w-0 shrink-0 font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                          <span className="font-semibold leading-[1.25rem]">{`Reached `}</span>
                          <b className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#0461c3,_#0bc111)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] leading-[1.25rem]">
                            Multiple
                          </b>
                          <span className="font-semibold leading-[1.25rem]">
                            {" "}
                            Regions
                          </span>
                        </h3>
                        <div className="w-[13.644rem] relative text-[1.25rem] leading-[1.5rem] capitalize font-semibold hidden shrink-0 mq450:text-[1rem] mq450:leading-[1.188rem]">
                          media websites available
                        </div>
                      </div>
                      <div className="w-[27.781rem] relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] hidden opacity-[0.9] shrink-0">
                        Access a wide network of tech-focused digital platforms.
                      </div>
                    </div>
                    <div className="self-stretch rounded-2xl flex flex-col items-start gap-[0.375rem]">
                      <div className="self-stretch flex items-center gap-[0.75rem] shrink-0 mq450:flex-wrap">
                        <div className="flex items-center justify-center shrink-0">
                          <Image
                            className="h-[1.5rem] w-full relative"
                            width={24}
                            height={24}
                            sizes="100vw"
                            alt=""
                            src="/stack-fill.svg"
                          />
                        </div>
                        <h3 className="m-0 flex-1 relative text-[length:inherit] leading-[1.875rem] inline-block min-w-0 shrink-0 font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                          <span className="font-semibold leading-[1.25rem]">{`Categorized `}</span>
                          <b className="text-transparent !bg-clip-text [background:linear-gradient(180deg,_#0461c3,_#0bc111)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] leading-[1.25rem]">
                            Distribution
                          </b>
                        </h3>
                        <div className="w-[13.644rem] relative text-[1.25rem] leading-[1.5rem] capitalize font-semibold hidden shrink-0 mq450:text-[1rem] mq450:leading-[1.188rem]">
                          media websites available
                        </div>
                      </div>
                      <div className="w-[27.781rem] relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] hidden opacity-[0.9] shrink-0">
                        Access a wide network of tech-focused digital platforms.
                      </div>
                    </div>
                  </div>
                  <Testimonials
                    property1="Default"
                    image83="/image-83@2x.png"
                  />
                </div>
                <div className="self-stretch w-[37.5rem] flex items-start pt-[22.875rem] px-[0rem] pb-[0.25rem] box-border relative isolate max-w-full text-[1.5rem] text-[#eee] mq800:pt-[14.875rem] mq800:pb-[1.25rem] mq800:box-border mq1125:flex-1 mq1125:min-w-full">
                  <Image
                    className="h-[37.5rem] w-[38.25rem] absolute !m-0 top-[-1.625rem] left-[0.063rem] object-cover shrink-0"
                    width={612}
                    height={600}
                    sizes="100vw"
                    alt=""
                    src="/Niche-Targeting.jpg"
                  />
                  <div className="w-[37.5rem] [backdrop-filter:blur(8px)] rounded-t-none rounded-br-[20px] rounded-bl-none bg-[rgba(26,37,48,0.4)] flex flex-col items-start p-[1.5rem] box-border gap-[0.75rem] max-w-full z-[1] shrink-0">
                    <div className="self-stretch flex flex-col items-start gap-[0.25rem] shrink-0">
                      <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[1.875rem] font-bold font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                        Startup X Expands into Global Markets
                      </h3>
                      <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[rgba(238,238,238,0.8)]">{`Distributed across Technology, Business & News platforms`}</div>
                    </div>
                    <div className="w-[30.281rem] rounded-lg bg-[#f7fafd] overflow-x-auto hidden items-center flex-wrap content-center py-[0.25rem] px-[0.5rem] box-border gap-[0.5rem] shrink-0 text-[1.125rem] text-[#4d575f]">
                      <div className="rounded-[40px] flex items-center gap-[0.375rem]">
                        <Image
                          className="h-[1rem] w-[1rem] relative"
                          width={16}
                          height={16}
                          sizes="100vw"
                          alt=""
                          src="/circle-check-big.svg"
                        />
                        <div className="relative leading-[1.75rem] font-semibold">
                          Multi-category distribution
                        </div>
                      </div>
                      <div className="rounded-[40px] flex items-center gap-[0.375rem]">
                        <Image
                          className="h-[1rem] w-[1rem] relative"
                          width={16}
                          height={16}
                          sizes="100vw"
                          alt=""
                          src="/circle-check-big.svg"
                        />
                        <div className="relative leading-[1.75rem] font-semibold">
                          Single submission
                        </div>
                      </div>
                      <div className="rounded-[40px] flex items-center gap-[0.375rem]">
                        <Image
                          className="h-[1rem] w-[1rem] relative"
                          width={16}
                          height={16}
                          sizes="100vw"
                          alt=""
                          src="/circle-check-big.svg"
                        />
                        <div className="relative leading-[1.75rem] font-semibold">
                          Published across network
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
            <div className="w-[11.25rem] h-full absolute !m-0 top-[0rem] bottom-[0rem] left-[-6.875rem] [background:linear-gradient(270deg,_rgba(255,_255,_255,_0.4),_#fff)] z-[1] shrink-0 mq800:hidden" />
            <div className="w-[11.25rem] h-full absolute !m-0 top-[0rem] right-[-6.875rem] bottom-[0rem] [background:linear-gradient(270deg,_#fff,_rgba(255,_255,_255,_0.4))] z-[2] shrink-0 mq800:hidden" />
            <div className="w-[78.75rem] max-w-full !m-0 absolute top-[calc(50%_-_22px)] left-[calc(50%_-_630px)] flex items-center justify-between gap-[1.25rem] z-[3] shrink-0 mq1350:w-full mq1350:left-0 mq1350:px-[0.5rem] mq1350:box-border">
              <ScrollButton direction="left" onClick={() => scroll("left")} />
              <ScrollButton direction="right" onClick={() => scroll("right")} />
            </div>
          </div>
          <div className="flex items-center justify-center gap-[2.5rem] mq800:gap-[1.25rem] mq800:flex-wrap">
            <Image
              className="w-[10.5rem] relative max-h-full object-cover"
              width={168}
              height={32}
              sizes="100vw"
              alt=""
              src="/Object1@2x.png"
            />
            <Image
              className="h-[2.5rem] w-[8.438rem] relative object-cover"
              width={135}
              height={40}
              sizes="100vw"
              alt=""
              src="/image-83@2x.png"
            />
            <Image
              className="h-[2.125rem] w-[5.813rem] relative object-cover"
              width={93}
              height={34}
              sizes="100vw"
              alt=""
              src="/Object4@2x.png"
            />
            <Image
              className="w-[7.769rem] relative max-h-full object-cover"
              width={124.3}
              height={32}
              sizes="100vw"
              alt=""
              src="/Object2@2x.png"
            />
          </div>
        </div>
        <UserOutlined
          showUserOutlined={false}
          href="/network"
          userOutlinedBorder="unset"
          userOutlinedPadding="1rem 2.5rem"
          userOutlinedBackgroundColor="#0461c3"
          userOutlinedHeight="3.5rem"
          userOutlined="/search.svg"
          showUserOutlinedIcon={false}
          cTAButton="View More"
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

export default PressReleases;
