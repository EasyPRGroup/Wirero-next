import type { NextPage } from "next";
import Image from "next/image";
import UserOutlined from "./user-outlined";

export type BannerheaderType = {
  className?: string;
};

const Bannerheader: NextPage<BannerheaderType> = ({ className = "" }) => {
  return (
    <section
      className={`home-gutters flex min-h-[46.75rem] w-full flex-col items-start bg-gradient-to-b from-[#12171c] to-[#060809] p-0 ${className}`}
    >
      <div className="home-hero-container flex w-full min-w-0 flex-1 items-end justify-between gap-[3.75rem] pb-[2.5rem] mq450:gap-[0.938rem] mq800:gap-[1.875rem] mq1350:flex-wrap mq1350:pt-[1.25rem]">
        <section className="h-[33.75rem] flex flex-1 flex-col items-start max-w-full text-left text-[4.125rem] text-[#eee] font-['Proxima_Nova'] mq450:h-auto mq800:h-auto mq800:min-w-full mq1350:flex-1">
          <div className="w-[37.5rem] flex flex-col items-start max-w-full">
            <div className="self-stretch flex flex-col items-start gap-[1.75rem]">
              <div className="self-stretch flex flex-col items-start gap-[1.25rem]">
                <div className="w-[37.5rem] relative leading-[4.875rem] hidden mq450:text-[2.5rem] mq450:leading-[2.938rem] mq800:text-[3.313rem] mq800:leading-[3.875rem]">
                  <span className="leading-[1.182rem]">{`Access a `}</span>
                  <b className="leading-[1.182rem]">1000+</b>
                  <span className="leading-[1.182rem]">
                    {" "}
                    Distribution Network in One Place
                  </span>
                </div>
                <h1 className="m-0 self-stretch relative text-[3.875rem] leading-[4.625rem] font-[inherit] mq450:text-[2.313rem] mq450:leading-[2.75rem] mq800:text-[3.125rem] mq800:leading-[3.688rem]">
                  <span className="leading-[1.194rem]">{`Own your distribution. Publish across `}</span>
                  <b className="leading-[1.194rem]">1000 domains</b>
                  <span className="leading-[1.194rem]"> instantly.</span>
                </h1>
                <div className="self-stretch relative text-[1.25rem] leading-[2rem] text-[rgba(238,238,238,0.5)] mq450:text-[1rem] mq450:leading-[1.625rem]">
                  A dedicated multi-domain publishing infrastructure for
                  agencies, platforms, and brands that need scalable
                  distribution—without relying on third-party news wires.
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
              <div className="self-stretch flex items-center gap-[1rem] text-[1.125rem] text-[rgba(238,238,238,0.8)] mq450:flex-wrap mq800:flex-wrap mq800:justify-center">
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
        <section className="h-[38.75rem] w-[41.875rem] flex items-start py-[5rem] pl-[0rem] pr-0 box-border max-w-full text-left text-[1.5rem] text-[#eee] font-['Proxima_Nova'] mq450:hidden mq800:hidden mq1350:hidden mq800:pt-[3.25rem] mq800:pb-[3.25rem] mq800:box-border mq1125:min-w-full mq1350:pr-0 mq1350:box-border mq1350:min-w-full mq1350:h-auto">
          <div className="ml-[-0.338rem] h-[26.938rem] w-[39.775rem] relative shrink-0 origin-top-left mq800:scale-[0.78] mq800:mb-[-5.9rem] mq450:scale-[0.45] mq450:mb-[-14.8rem]">
            <div className="absolute h-full top-[0rem] bottom-[0rem] left-[2.819rem] rounded-tl-[110px] rounded-tr-none rounded-br-[110px] rounded-bl-none bg-[rgba(217,217,217,0.4)] w-[23.4rem]" />
            <div className="absolute top-[19.256rem] left-[0rem] [backdrop-filter:blur(10px)] rounded-xl bg-[rgba(24,31,37,0.8)] border-[rgba(122,131,140,0.2)] border-solid border-[1px] box-border w-[14.931rem] h-[5.281rem] flex items-start py-[0.875rem] pl-[1rem] pr-[0.812rem] gap-[0.75rem]">
              <div className="rounded-[100px] bg-[#e4e0f7] flex items-center justify-center p-[0.5rem] gap-[0.375rem] shrink-0">
                <Image
                  className="h-[1.5rem] w-[1.5rem] relative hidden"
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/newspaper.svg"
                />
                <Image
                  className="h-[1.5rem] w-[1.5rem] relative"
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/streamline-plump-news-paper-solid.svg"
                />
              </div>
              <div className="hidden items-center shrink-0">
                <Image
                  className="h-[2.25rem] w-[2.25rem] relative rounded-[50%] object-cover"
                  width={36}
                  height={36}
                  sizes="100vw"
                  alt=""
                  src="/Ellipse-22@2x.png"
                />
                <Image
                  className="h-[2.25rem] w-[2.25rem] relative rounded-[50%] object-cover ml-[-0.75rem]"
                  width={36}
                  height={36}
                  sizes="100vw"
                  alt=""
                  src="/Ellipse-20@2x.png"
                />
                <Image
                  className="h-[2.25rem] w-[2.25rem] relative rounded-[50%] object-cover ml-[-0.75rem]"
                  width={36}
                  height={36}
                  sizes="100vw"
                  alt=""
                  src="/Ellipse-23@2x.png"
                />
              </div>
              <div className="flex flex-col items-start gap-[0.5rem] shrink-0">
                <div className="flex items-center gap-[0.5rem]">
                  <h3 className="m-0 relative text-[length:inherit] leading-[1.75rem] font-semibold font-[inherit] shrink-0 mq450:text-[1.188rem] mq450:leading-[1.375rem]">
                    1000+
                  </h3>
                  <div className="relative text-[1rem] leading-[1.25rem] capitalize font-[Urbanist] text-[#64676f] hidden shrink-0">{`Positive `}</div>
                </div>
                <div className="flex items-center text-[1rem] text-[rgba(238,238,238,0.5)]">
                  <div className="relative leading-[1.25rem] capitalize">
                    Independent Domains
                  </div>
                </div>
              </div>
            </div>
            <Image
              className="absolute h-full top-[0rem] bottom-[0rem] left-[22.469rem] max-h-full w-[12.988rem] z-[1]"
              width={207.8}
              height={431}
              sizes="100vw"
              alt=""
              src="/Rectangle-33.svg"
            />
            <div className="absolute top-[2.338rem] left-[30.119rem] [backdrop-filter:blur(10px)] rounded-xl bg-[rgba(24,31,37,0.8)] border-[rgba(122,131,140,0.2)] border-solid border-[1px] flex flex-col items-center py-[0.875rem] px-[1rem] gap-[0.75rem] text-center text-[1.125rem]">
              <div className="rounded-[100px] bg-[#e4e0f7] flex items-center justify-center p-[0.5rem] gap-[0.375rem] shrink-0">
                <Image
                  className="h-[1.5rem] w-[1.5rem] relative hidden"
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/newspaper.svg"
                />
                <Image
                  className="h-[1.5rem] w-[1.5rem] relative"
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/tdesign-book-open-filled.svg"
                />
              </div>
              <div className="flex flex-col items-center py-[0rem] px-[0.812rem] gap-[0.5rem] shrink-0">
                <div className="flex items-center gap-[0.5rem] shrink-0">
                  <div className="relative leading-[1.375rem] font-semibold shrink-0">
                    Automated <br />
                    Distribution
                  </div>
                  <div className="relative text-[1rem] leading-[1.25rem] capitalize font-[Urbanist] text-[#64676f] text-left hidden shrink-0">{`Positive `}</div>
                </div>
                <div className="hidden items-center shrink-0 text-left text-[1rem] text-[rgba(238,238,238,0.5)]">
                  <div className="relative leading-[1.25rem] capitalize">
                    distribution
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            className="h-[23.813rem] w-[51.25rem] relative object-cover hidden shrink-0"
            width={820}
            height={381}
            style={{ height: "auto" }}
            sizes="100vw"
            alt=""
            src="/image-116@2x.png"
          />
        </section>
      </div>
    </section>
  );
};

export default Bannerheader;
