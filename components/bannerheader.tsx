import type { NextPage } from "next";
import Image from "next/image";
import UserOutlined from "./user-outlined";

export type BannerheaderType = {
  className?: string;
};

const Bannerheader: NextPage<BannerheaderType> = ({ className = "" }) => {
  return (
    <section
      className={`site-gutters flex min-h-[calc(100svh-4.5rem)] w-full min-w-0 bg-gradient-to-b from-[#12171c] to-[#060809] ${className}`}
    >
      <div className="site-container flex w-full min-w-0 flex-1 items-start justify-between gap-[clamp(2rem,4vw,3.75rem)] py-[clamp(3rem,5.5vw,5rem)] mq450:gap-[2rem] mq450:py-[2.5rem] mq800:flex-col">
        <section className="flex min-w-0 flex-1 flex-col items-start pt-[1.5rem] text-left text-[#eee] font-proxima mq800:w-full mq800:pt-0">
          <div className="w-full max-w-[37.5rem] flex flex-col items-start min-w-0 mq800:max-w-none">
            <div className="self-stretch flex flex-col items-start gap-[1.75rem]">
              <div className="self-stretch flex flex-col items-start gap-[1.25rem]">
                <h1 className="m-0 self-stretch fluid-h1 font-normal font-[inherit] tracking-[-0.01em]">
                  <span className="block">Own your distribution.</span>
                  <span className="block">
                    Publish across <b className="font-bold">1000</b>
                  </span>
                  <span className="block">
                    <b className="font-bold">domains</b> instantly.
                  </span>
                </h1>
                <div className="self-stretch relative text-[1.25rem] leading-[2rem] text-[rgba(238,238,238,0.5)] mq450:text-[1rem] mq450:leading-[1.625rem]">
                  A dedicated multi-domain publishing infrastructure for
                  agencies, platforms, and brands that need scalable
                  distribution, without relying on third-party news wires.
                </div>
              </div>
              <div className="cursor-pointer [border:none] p-0 bg-[transparent] flex items-start">
                <UserOutlined
                  showUserOutlined
                  href="/pricing"
                  userOutlinedBorder="unset"
                  userOutlinedPadding="1rem 2.5rem"
                  userOutlinedBackgroundColor="#0461c3"
                  userOutlinedHeight="3.5rem"
                  userOutlined="/search.svg"
                  showUserOutlinedIcon={false}
                  cTAButton="Start Publishing"
                  cTAButtonFontSize="1rem"
                  cTAButtonColor="#fff"
                  cTAButtonMargin="unset"
                  arrowRight="/arrow-right1.svg"
                  showArrowRightIcon
                />
              </div>
              <div className="self-stretch flex items-center gap-x-[1rem] gap-y-[0.5rem] text-[1.125rem] text-[rgba(238,238,238,0.8)] mq450:flex-col mq450:items-start mq450:text-[1rem] mq800:flex-wrap">
                <div className="flex items-center gap-[0.375rem] shrink-0">
                  <Image
                    className="h-[1rem] w-[1rem] relative"
                    width={16}
                    height={16}
                    sizes="100vw"
                    alt=""
                    src="/circle-check.svg"
                  />
                  <div className="relative leading-[1.75rem] font-semibold">
                    No outreach
                  </div>
                </div>
                <div className="flex items-center gap-[0.375rem] shrink-0">
                  <Image
                    className="h-[1rem] w-[1rem] relative"
                    width={16}
                    height={16}
                    sizes="100vw"
                    alt=""
                    src="/circle-check.svg"
                  />
                  <div className="relative leading-[1.75rem] font-semibold">
                    No publisher dependency
                  </div>
                </div>
                <div className="flex items-center gap-[0.375rem] shrink-0">
                  <Image
                    className="h-[1rem] w-[1rem] relative"
                    width={16}
                    height={16}
                    sizes="100vw"
                    alt=""
                    src="/circle-check.svg"
                  />
                  <div className="relative leading-[1.75rem] font-semibold">
                    No per-placement negotiation
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="relative w-full max-w-[33rem] min-w-0 shrink basis-[33rem] self-center text-left text-[1.5rem] text-[#eee] font-proxima mq450:max-w-[19rem] mq450:basis-auto mq800:max-w-[30rem] mq800:basis-auto">
          <div className="relative mx-auto aspect-[1.22/1] w-full">
            <div className="absolute inset-y-0 left-[6%] right-[22%] overflow-hidden rounded-tl-[clamp(4rem,9vw,6.875rem)] rounded-tr-none rounded-br-[clamp(4rem,9vw,6.875rem)] rounded-bl-none bg-[#686d70]">
              <Image
                className="h-full w-full object-cover object-center"
                loading="eager"
                priority
                width={865}
                height={560}
                style={{ height: "100%", width: "100%" }}
                sizes="(max-width: 450px) 70vw, (max-width: 800px) 65vw, 26rem"
                alt="Publishing professional using Wirero"
                src="/hero-woman.jpg"
              />
            </div>

            {/* <div
              className="absolute inset-y-0 right-0 h-full w-[20%] bg-[#686d70]"
              style={{
                maskImage: "url('/Rectangle-33.svg')",
                maskSize: "100% 100%",
                maskRepeat: "no-repeat",
                WebkitMaskImage: "url('/Rectangle-33.svg')",
                WebkitMaskSize: "100% 100%",
                WebkitMaskRepeat: "no-repeat",
              }}
            /> */}

            <div className="absolute bottom-[9%] left-0 z-[2] flex w-[15rem] items-center gap-[0.75rem] rounded-xl border border-solid border-[rgba(122,131,140,0.2)] bg-[rgba(24,31,37,0.92)] px-[1rem] py-[0.875rem] shadow-lg [backdrop-filter:blur(10px)] mq450:w-[11.5rem] mq450:gap-[0.5rem] mq450:px-[0.75rem] mq450:py-[0.625rem]">
              <div className="flex shrink-0 items-center justify-center rounded-full bg-[#e4e0f7] p-[0.5rem] mq450:p-[0.375rem]">
                <Image
                  className="relative h-[1.5rem] w-[1.5rem] mq450:h-[1.125rem] mq450:w-[1.125rem]"
                  width={24}
                  height={24}
                  sizes="24px"
                  alt=""
                  src="/streamline-plump-news-paper-solid.svg"
                />
              </div>
              <div className="flex min-w-0 flex-col items-start gap-[0.25rem]">
                <h3 className="m-0 relative text-[1.5rem] leading-[1.75rem] font-semibold font-[inherit] mq450:text-[1.125rem] mq450:leading-[1.375rem]">
                  1000+
                </h3>
                <div className="relative text-[1rem] leading-[1.25rem] capitalize text-[rgba(238,238,238,0.5)] mq450:text-[0.8125rem] mq450:leading-[1.125rem]">
                  Independent Domains
                </div>
              </div>
            </div>

            <div className="absolute right-[0%] top-[9%] z-[2] flex min-h-[8rem] w-[10rem] flex-col items-center justify-center gap-[0.75rem] rounded-l-[1.25rem] border-y border-l border-solid border-[rgba(122,131,140,0.2)] bg-[#242a2f] px-[1rem] py-[0.875rem] text-center text-[1.125rem] shadow-lg mq450:right-[-3%] mq450:min-h-[6.75rem] mq450:w-[7.5rem] mq450:gap-[0.5rem] mq450:rounded-l-[1rem] mq450:px-[0.625rem] mq450:py-[0.625rem]">
              <div className="flex h-[2.625rem] w-[2.625rem] shrink-0 items-center justify-center rounded-full border border-solid border-[rgba(190,180,226,0.7)] bg-[#e4e0f7] shadow-[0_0_0_3px_rgba(24,31,37,0.25)] mq450:h-[2rem] mq450:w-[2rem]">
                <Image
                  className="relative h-[1.5rem] w-[1.5rem] mq450:h-[1.125rem] mq450:w-[1.125rem]"
                  width={24}
                  height={24}
                  sizes="24px"
                  alt=""
                  src="/tdesign-book-open-filled.svg"
                />
              </div>
              <div className="relative leading-[1.375rem] font-semibold mq450:text-[0.8125rem] mq450:leading-[1.125rem]">
                Automated
                <br />
                Distribution
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Bannerheader;
