"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { useRef } from "react";
import Footer from "../../components/footer";
import NetworkCategory from "../../components/network-category";

const AboutUs: NextPage = () => {
  const features = [
    "Controlled network infrastructure",
    "Multi-domain deployment system",
    "RSS automation support",
    "Centralized publishing workflow",
    "Built for high-frequency distribution",
  ];

  const differentFeatures = [
    {
      title: "Controlled Distribution Network",
      description:
        "Operate through a privately managed infrastructure without relying on external publishers.",
      icon: "/solar-global-bold.svg",
    },
    {
      title: "Industry-Based Targeting",
      description:
        "Distribute content across categorized networks aligned with specific industries.",
      icon: "/solar-global-bold.svg",
    },
    {
      title: "Rapid Deployment",
      description:
        "Most campaigns are published across selected domains within approximately one hour.",
      icon: "/solar-global-bold.svg",
    },
    {
      title: "Multi-Domain Publishing",
      description:
        "Deploy content simultaneously across hundreds of domains from one platform.",
      icon: "/solar-global-bold.svg",
    },
    {
      title: "Automated Distribution",
      description:
        "Connect RSS feeds for continuous publishing without manual uploads.",
      icon: "/solar-global-bold.svg",
    },
    {
      title: "Predictable Scaling",
      description:
        "Flat-rate infrastructure designed for recurring campaigns and high-volume usage.",
      icon: "/solar-global-bold.svg",
    },
  ];

  const industries = [
    {
      title: "PR Agencies",
      image: "/image@2x.png",
      highlight: false,
    },
    {
      title: "Crypto & Forex Firms",
      image: "/image1@2x.png",
      highlight: false,
    },
    {
      title: "Reseller Platforms",
      image: "/image2@2x.png",
      highlight: true,
    },
    {
      title: "Media & Content Platforms",
      image: "/image3@2x.png",
      highlight: false,
    },
  ];

  const industryScrollRef = useRef<HTMLDivElement>(null);

  const scrollIndustry = (direction: "left" | "right") => {
    if (!industryScrollRef.current) return;
    const scrollAmount = industryScrollRef.current.clientWidth * 0.5;
    industryScrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="w-full relative bg-color-white flex flex-col items-start leading-[normal] tracking-[normal]">

      {/* Hero Section */}
      <section className="self-stretch flex flex-col items-start pt-[4.25rem] px-[6.875rem] pb-[6.125rem] box-border gap-[4.25rem] max-w-full text-center font-['Proxima_Nova'] mq750:gap-[2.125rem] mq750:pt-[1.813rem] mq750:px-[3.438rem] mq750:pb-[2.625rem] mq750:box-border mq1050:pt-[2.75rem] mq1050:pb-[4rem] mq1050:box-border mq450:gap-[1.063rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
        <section className="self-stretch overflow-hidden flex flex-col items-start gap-[1.5rem] max-w-full text-left text-[1rem] text-[#0bc111]">
          <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase">
            About Wirero
          </b>
          <div className="self-stretch flex items-start gap-[4.25rem] max-w-full text-[3.5rem] text-[#4d565f] lg:flex-wrap mq750:gap-[2.125rem] mq450:gap-[1.063rem]">
            <h1 className="m-0 w-[32.5rem] relative text-[length:inherit] leading-[4.25rem] font-bold font-[inherit] inline-block shrink-0 max-w-full lg:flex-1 mq1050:text-[2.813rem] mq1050:leading-[3.375rem] mq1050:min-w-full mq450:text-[2.125rem] mq450:leading-[2.563rem]">
              Built for scalable content distribution
            </h1>
            <div className="flex-1 flex flex-col items-start gap-[1.25rem] min-w-[25.688rem] text-[1.125rem] text-[#4d565f] mq750:min-w-full">
              <div className="self-stretch relative leading-[1.75rem]">
                Wirero is a multi-domain publishing infrastructure designed for
                agencies, platforms, and brands that need fast, controlled
                distribution at scale.
              </div>
              <div className="self-stretch relative leading-[1.75rem]">
                Instead of relying on third-party publisher networks, Wirero
                operates a centralized system of independently managed domains
                structured for rapid deployment across multiple industries.
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <div className="self-stretch flex items-start flex-wrap content-start gap-[1.5rem]">
          <div className="flex-1 flex flex-col items-center relative isolate gap-[0.375rem] min-w-[18.313rem]">
            <h1 className="m-0 relative text-[3.5rem] leading-[2.5rem] font-extrabold font-[inherit] z-[0] shrink-0 mq1050:text-[2.375rem] mq1050:leading-[2rem] mq450:text-[1.813rem] mq450:leading-[1.5rem]">
              1000+
            </h1>
            <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] opacity-[0.9] z-[1] shrink-0">
              Independent Domains
            </div>
            <Image
              className="w-[3rem] h-[3rem] absolute !m-0 top-[-0.625rem] left-[14.688rem] object-cover hidden z-[2] shrink-0"
              width={48}
              height={48}
              sizes="100vw"
              alt=""
              src="/globe@2x.png"
            />
          </div>
          <div className="flex-1 flex flex-col items-center relative isolate gap-[0.375rem] min-w-[18.313rem]">
            <Image
              className="w-[3rem] h-[3rem] absolute !m-0 top-[-0.625rem] left-[15.519rem] object-cover hidden z-[0] shrink-0"
              width={48}
              height={48}
              sizes="100vw"
              alt=""
              src="/Mask-group@2x.png"
            />
            <h2 className="m-0 relative text-[3.5rem] leading-[2.5rem] font-extrabold font-[inherit] z-[1] shrink-0 mq1050:text-[2.375rem] mq1050:leading-[2rem] mq450:text-[1.813rem] mq450:leading-[1.5rem]">
              10
            </h2>
            <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] opacity-[0.9] z-[2] shrink-0">
              Industry Networks
            </div>
          </div>
          <div className="flex-1 flex flex-col items-center relative isolate gap-[0.375rem] min-w-[18.313rem]">
            <Image
              className="w-[3rem] h-[3rem] absolute !m-0 top-[-0.625rem] left-[14.375rem] object-cover hidden z-[0] shrink-0"
              width={48}
              height={48}
              sizes="100vw"
              alt=""
              src="/broadcast-1@2x.png"
            />
            <h2 className="m-0 relative text-[3.5rem] leading-[2.5rem] font-extrabold font-[inherit] z-[1] shrink-0 mq1050:text-[2.375rem] mq1050:leading-[2rem] mq450:text-[1.813rem] mq450:leading-[1.5rem]">
              &lt; 1 Hour
            </h2>
            <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] opacity-[0.9] z-[2] shrink-0">
              Average Deployment
            </div>
          </div>
        </div>
      </section>

      {/* What Wirero Does Section */}
      <section className="self-stretch bg-[#f8f8ff] flex items-start py-[5rem] px-[6.875rem] box-border gap-[4.25rem] max-w-full lg:flex-wrap mq750:gap-[2.125rem] mq750:py-[3.25rem] mq750:px-[3.438rem] mq750:box-border mq450:gap-[1.063rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
        <section className="flex-1 flex flex-col items-start gap-[1.75rem] min-w-[20.813rem] text-left text-[1rem] text-[#005edc] font-['Proxima_Nova']">
          <div className="self-stretch overflow-hidden flex flex-col items-start gap-[1.5rem]">
            <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase text-[#0bc111]">
              WHAT WIRERO DOES
            </b>
            <div className="self-stretch flex flex-col items-start gap-[1rem] text-[2.25rem] text-[#4d565f]">
              <h1 className="m-0 self-stretch relative text-[3rem] leading-[3.625rem] font-bold font-[inherit] mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
                A centralized infrastructure for large-scale publishing
              </h1>
              <div className="self-stretch flex flex-col items-start gap-[1.5rem] text-[1.125rem] text-[#4d565f]">
                <div className="self-stretch relative leading-[1.75rem]">
                  Wirero simplifies distribution by allowing users to publish
                  content across multiple industry-specific domains from one
                  centralized system.
                </div>
                <div className="self-stretch flex flex-col items-start gap-[0.75rem]">
                  <div className="self-stretch relative leading-[1.75rem]">
                    The infrastructure is built for:
                  </div>
                  <div className="self-stretch flex flex-col items-start gap-[0.75rem]">
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="self-stretch flex items-start gap-[0.75rem] mq750:flex-wrap"
                      >
                        <div className="h-[1.75rem] flex items-center">
                          <div className="rounded-[52px] bg-[#005edc] flex items-center justify-center p-[0.25rem]">
                            <Image
                              className="w-[0.75rem] relative max-h-full"
                              width={12}
                              height={12}
                              sizes="100vw"
                              alt=""
                              src="/check.svg"
                            />
                          </div>
                        </div>
                        <div className="flex-1 relative leading-[1.625rem] font-semibold inline-block min-w-[13.25rem]">
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="h-[27.5rem] w-[40rem] flex flex-col items-end max-w-full text-left text-[1rem] text-[#4d565f] font-['Proxima_Nova'] lg:flex-1 mq1050:min-w-full">
          <div className="w-[40rem] flex items-start max-w-full">
            <div className="w-[26.25rem] flex flex-col items-start gap-[2.5rem] shrink-0 max-w-full mq450:gap-[1.25rem]">
              {/* Infrastructure-First Card */}
              <div className="self-stretch shadow-[8px_8px_12px_rgba(26,_38,_48,_0.08)] rounded-[20px] bg-color-white overflow-hidden flex flex-col items-start p-[1.5rem] gap-[1rem]">
                <div className="self-stretch flex items-center justify-center gap-[0.625rem] shrink-0 text-[1.5rem]">
                  <Image
                    className="h-[1.75rem] w-[1.75rem] relative"
                    width={28}
                    height={28}
                    sizes="100vw"
                    alt=""
                    src="/target-fill.svg"
                  />
                  <h3 className="m-0 flex-1 relative text-[length:inherit] leading-[1.875rem] font-bold font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                    Infrastructure-First
                  </h3>
                </div>
                <div className="self-stretch flex flex-col items-start gap-[0.5rem] shrink-0 text-[#4d565f]">
                  <div className="self-stretch relative leading-[1.5rem]">
                    Built around operational efficiency instead of manual
                    publisher outreach.
                  </div>
                </div>
              </div>

              {/* Scalable by Design Card */}
              <div className="self-stretch shadow-[8px_8px_12px_rgba(26,_38,_48,_0.08)] rounded-[20px] bg-color-white overflow-hidden flex flex-col items-start p-[1.5rem] gap-[1rem]">
                <div className="self-stretch flex items-center justify-center gap-[0.625rem] shrink-0 text-[1.5rem]">
                  <Image
                    className="h-[1.75rem] w-[1.75rem] relative"
                    width={28}
                    height={28}
                    sizes="100vw"
                    alt=""
                    src="/rocket-sharp.svg"
                  />
                  <h3 className="m-0 flex-1 relative text-[length:inherit] leading-[1.875rem] font-bold font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                    Scalable by Design
                  </h3>
                </div>
                <div className="self-stretch flex flex-col items-start gap-[0.5rem] shrink-0 text-[#4d565f]">
                  <div className="self-stretch relative leading-[1.5rem]">
                    Deploy campaigns simultaneously across selected industry
                    networks.
                  </div>
                </div>
              </div>
            </div>
          </div>
          <Image
            className="w-[23.75rem] h-[23.75rem] relative rounded-[20px] object-cover shrink-0 mt-[-16.5rem]"
            width={380}
            height={380}
            sizes="100vw"
            alt=""
            src="/IMG@2x.png"
          />
        </section>
      </section>

      {/* We're Different Section (Dark) */}
      <main className="self-stretch bg-[#4d575f] flex flex-col items-center py-[6.125rem] px-[6.875rem] box-border gap-[4.25rem] max-w-full text-center text-[1rem] text-[#0bc111] font-['Proxima_Nova'] mq750:gap-[2.125rem] mq750:py-[2.625rem] mq750:px-[3.438rem] mq750:box-border mq1050:pt-[4rem] mq1050:pb-[4rem] mq1050:box-border mq450:gap-[1.063rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
        <section className="self-stretch overflow-hidden flex flex-col items-start gap-[1.5rem] max-w-full text-left text-[1rem] text-[#0bc111]">
          <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase">
            We're different
          </b>
          <div className="self-stretch flex items-start gap-[4.25rem] max-w-full text-[3rem] text-[#eee] lg:flex-wrap mq750:gap-[2.125rem] mq450:gap-[1.063rem]">
            <h1 className="m-0 w-[32.5rem] relative text-[length:inherit] leading-[3.625rem] font-bold font-[inherit] inline-block shrink-0 max-w-full lg:flex-1 mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq1050:min-w-full mq450:text-[1.813rem] mq450:leading-[2.188rem]">
              What Makes Wirero Different
            </h1>
            <div className="flex-1 relative text-[1.125rem] leading-[1.75rem] text-[rgba(238,238,238,0.8)] inline-block min-w-[25.688rem] mq750:min-w-full">
              Wirero is a controlled multi-domain distribution infrastructure
              built for scalable publishing. Instead of relying on external
              publishers or manual outreach, the platform enables fast,
              automated, and industry-targeted distribution through a
              centralized system.
            </div>
          </div>
        </section>

        <div className="self-stretch flex flex-col items-start pt-[0rem] px-[0rem] pb-[2.5rem] gap-[1.75rem]">
          <section className="self-stretch flex items-start flex-wrap content-start gap-[1.75rem] text-left text-[1.5rem] text-[#eee] font-['Proxima_Nova']">
            {differentFeatures.slice(0, 3).map((feature, index) => (
              <div
                key={index}
                className="flex-1 rounded-[20px] bg-[#1a2530] border-[rgba(122,131,140,0.2)] border-solid border-[1px] overflow-hidden flex flex-col items-start p-[1.5rem] gap-[1.25rem]"
              >
                <div className="rounded-[16px] flex items-center justify-center p-[0.25rem]">
                  <Image
                    className="h-[3rem] w-[3rem] relative"
                    width={48}
                    height={48}
                    sizes="100vw"
                    alt=""
                    src={feature.icon}
                  />
                </div>
                <div className="self-stretch flex flex-col items-start gap-[1rem]">
                  <b className="self-stretch relative leading-[1.875rem]">
                    {feature.title}
                  </b>
                  <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[rgba(238,238,238,0.8)]">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </section>

          <section className="self-stretch flex items-start flex-wrap content-start gap-[1.75rem] text-left text-[1.5rem] text-[#eee] font-['Proxima_Nova']">
            {differentFeatures.slice(3, 6).map((feature, index) => (
              <div
                key={index + 3}
                className="flex-1 rounded-[20px] bg-[#1a2530] border-[rgba(122,131,140,0.2)] border-solid border-[1px] overflow-hidden flex flex-col items-start p-[1.5rem] gap-[1.25rem]"
              >
                <div className="rounded-[16px] flex items-center justify-center p-[0.25rem]">
                  <Image
                    className="h-[3rem] w-[3rem] relative"
                    width={48}
                    height={48}
                    sizes="100vw"
                    alt=""
                    src={feature.icon}
                  />
                </div>
                <div className="self-stretch flex flex-col items-start gap-[1rem]">
                  <b className="self-stretch relative leading-[1.875rem]">
                    {feature.title}
                  </b>
                  <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[rgba(238,238,238,0.8)]">
                    {feature.description}
                  </div>
                </div>
              </div>
            ))}
          </section>
        </div>
      </main>

      {/* Industries We Serve Section */}
      <section className="self-stretch flex flex-col items-center py-[6.125rem] px-[6.875rem] box-border gap-[4.25rem] max-w-full text-left text-[1.375rem] text-[#4d565f] font-['Proxima_Nova'] mq750:gap-[2.125rem] mq750:pl-[3.438rem] mq750:pr-[3.438rem] mq750:box-border mq1050:pt-[4rem] mq1050:pb-[4rem] mq1050:box-border mq450:gap-[1.063rem] mq450:py-[2.625rem] mq450:px-[1.25rem] mq450:box-border">
        <section className="w-[60rem] overflow-hidden flex flex-col items-center gap-[1.5rem] shrink-0 text-left text-[1rem] text-[#0bc111]">
          <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase">
            Industries We Serve
          </b>
          <div className="self-stretch flex flex-col items-center gap-[1rem] text-center text-[3rem] text-[#4d565f]">
            <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[3.625rem] font-bold font-[inherit] mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
              Who We Serve
            </h2>
            <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[#4d565f]">
              Wirero supports organizations across a wide range of industries,
              including:
            </div>
          </div>
        </section>

        {/* Industry Cards */}
        <div className="self-stretch flex items-center gap-[3rem] max-w-full shrink-0 text-[2.25rem] lg:flex-wrap mq750:gap-[1.5rem]">
          <section className="w-[47.5rem] overflow-hidden shrink-0 flex flex-col items-center relative isolate gap-[0.625rem] max-w-full text-left text-[1.375rem] text-[#4d565f] font-['Proxima_Nova'] lg:flex-1 mq1050:min-w-full">
            <div
              ref={industryScrollRef}
              className="w-[42.5rem] backdrop-blur-[8px] rounded-[28px] bg-[rgba(0,94,220,0.08)] flex items-start justify-center py-[3.75rem] px-[0rem] box-border gap-[1.25rem] z-[0] shrink-0 mq450:pt-[2.438rem] mq450:pb-[2.438rem] mq450:box-border overflow-x-auto scroll-smooth">
              {industries.map((industry, index) => (
                <div
                  key={index}
                  className={`w-[15.063rem] rounded-[16px] bg-color-white border-color-white border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-start ${
                    industry.highlight
                      ? "shadow-[0px_2px_16px_rgba(26,_38,_48,_0.12)]"
                      : "opacity-50"
                  }`}
                >
                  <Image
                    className="self-stretch h-[15rem] max-w-full overflow-hidden shrink-0 object-cover"
                    width={241}
                    height={240}
                    sizes="100vw"
                    alt=""
                    src={industry.image}
                  />
                  <div className="self-stretch rounded-[16px] bg-color-white flex items-center p-[1.25rem] gap-[0.75rem] mt-[-1.25rem] relative">
                    <h3 className="m-0 flex-1 relative text-[length:inherit] leading-[1.75rem] font-bold font-[inherit] shrink-0">
                      {industry.title}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-[2.75rem] h-[29rem] absolute !m-0 top-[calc(50%_-_232px)] left-[-0.25rem] bg-[linear-gradient(270deg,_rgba(255,_255,_255,_0.2),_#fff)] z-[1] shrink-0" />
            <div className="w-[2.75rem] h-[29rem] absolute !m-0 top-[calc(50%_-_232px)] right-[-0.25rem] bg-[linear-gradient(270deg,_#fff,_rgba(255,_255,_255,_0.2))] z-[2] shrink-0" />
            <div className="w-[45rem] !m-0 absolute top-[calc(50%_-_22px)] left-[calc(50%_-_360px)] flex items-center justify-between gap-[1.25rem] z-[3] shrink-0">
              <button
                onClick={() => scrollIndustry("left")}
                className="rounded-[40px] bg-[#4d575f] flex flex-col items-center justify-center p-[0.5rem] cursor-pointer border-none hover:bg-[#3a444b] transition-colors"
              >
                <Image
                  className="w-[1.75rem] h-[1.75rem] relative"
                  width={28}
                  height={28}
                  sizes="100vw"
                  alt="Scroll left"
                  src="/arrow-left.svg"
                />
              </button>
              <button
                onClick={() => scrollIndustry("right")}
                className="rounded-[40px] bg-[#4d575f] flex flex-col items-center justify-center p-[0.5rem] cursor-pointer border-none hover:bg-[#3a444b] transition-colors"
              >
                <Image
                  className="w-[1.75rem] h-[1.75rem] relative"
                  width={28}
                  height={28}
                  sizes="100vw"
                  alt="Scroll right"
                  src="/arrow-right1.svg"
                />
              </button>
            </div>
          </section>

          {/* Reseller Platforms Highlight */}
          <div className="flex-1 overflow-hidden flex flex-col items-start py-[1.25rem] px-[0rem] box-border gap-[1.25rem] min-w-[16.75rem]">
            <div className="rounded-[12px] bg-[#005edc] flex items-center justify-center p-[0.75rem]">
              <Image
                className="h-[1.75rem] w-[1.75rem] relative"
                width={28}
                height={28}
                sizes="100vw"
                alt=""
                src="/rocket-sharp.svg"
              />
            </div>
            <div className="self-stretch flex flex-col items-start gap-[0.75rem]">
              <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[3rem] font-bold font-[inherit] mq1050:text-[1.813rem] mq1050:leading-[2.375rem] mq450:text-[1.375rem] mq450:leading-[1.813rem]">
                Reseller Platforms
              </h2>
              <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[#4d565f]">
                Empower your distribution network with white-label solutions.
                Wirero enables resellers to offer branded content distribution
                services to their clients, complete with custom domains and
                reporting dashboards.
              </div>
            </div>
          </div>
        </div>
      </section>

      {false && (
      <section className="self-stretch bg-color-white flex flex-col items-center py-[6.125rem] px-[6.875rem] box-border gap-[3.5rem] max-w-full text-center font-['Proxima_Nova'] mq800:gap-[2rem] mq800:py-[2.625rem] mq800:px-[3.438rem] mq800:box-border mq450:px-[1.25rem] mq450:box-border">
        <div className="flex flex-col items-center gap-[1.5rem] max-w-[60rem]">
          <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase text-[#0bc111]">
            HOW DISTRIBUTION WORKS
          </b>
          <h2 className="m-0 relative text-[3rem] leading-[3.625rem] font-bold text-[#1a2530] mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
            Simple, centralized publishing workflow
          </h2>
          <div className="relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] max-w-[50rem]">
            Wirero simplifies large-scale distribution through a controlled multi-domain infrastructure designed for fast and scalable deployment.
          </div>
        </div>

        <div className="self-stretch flex items-center justify-center flex-wrap gap-[1rem] max-w-full">
          {[
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 16V4M12 4L8 8M12 4L16 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M4 17V19C4 19.5304 4.21071 20.0391 4.58579 20.4142C4.96086 20.7893 5.46957 21 6 21H18C18.5304 21 19.0391 20.7893 19.4142 20.4142C19.7893 20.0391 20 19.5304 20 19V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Upload or Connect",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="6" stroke="white" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="2" fill="white"/>
                </svg>
              ),
              title: "Select Distribution",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Publish at Scale",
            },
            {
              icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20M16 13H8M16 17H8M10 9H8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              ),
              title: "Access Reports",
            },
          ].map((step, index, arr) => (
            <div key={index} className="flex items-center gap-[1rem]">
              <div className="flex items-center gap-[1rem] shrink-0">
                <div className="h-[3.75rem] w-[3.75rem] rounded-full bg-[#1a8cd5] flex items-center justify-center shrink-0">
                  {step.icon}
                </div>
                <b className="relative text-[1.25rem] leading-[1.5rem] font-bold text-[#1a2530] text-left shrink-0 whitespace-nowrap">
                  {step.title}
                </b>
              </div>
              {index < arr.length - 1 && (
                <div className="shrink-0 mx-[0.5rem] mq750:hidden">
                  <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 12C2 12 10 2 20 12C30 22 38 12 38 12" stroke="#b4c3d0" strokeWidth="2" strokeLinecap="round" strokeDasharray="4 4"/>
                    <path d="M32 8L38 12L32 16" stroke="#b4c3d0" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>)}

      {/* Network Structure Section */}
      <section className="self-stretch bg-[#f7fafd] flex flex-col items-center py-[6.125rem] px-[6.875rem] box-border gap-[3.5rem] max-w-full text-center font-['Proxima_Nova'] mq800:gap-[2rem] mq800:py-[2.625rem] mq800:px-[3.438rem] mq800:box-border mq450:px-[1.25rem] mq450:box-border">
        <div className="flex flex-col items-center gap-[1.5rem] max-w-[60rem]">
          <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase text-[#0bc111]">
            NETWORK STRUCTURE
          </b>
          <h2 className="m-0 relative text-[3rem] leading-[3.625rem] font-bold text-[#1a2530] mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
            Structured across 10 industry-specific networks
          </h2>
          <div className="relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] max-w-[50rem]">
            The Wirero infrastructure is organized into niche-focused domain categories designed for contextual and scalable distribution.
          </div>
        </div>
        <div className="self-stretch flex items-start justify-center flex-wrap content-start gap-[1.25rem] text-left">
          {[
            { name: "Blockchain & Cryptocurrency" },
            { name: "Casino & Gambling" },
            { name: "Fintech, Forex & ETFs" },
            { name: "Healthcare" },
            { name: "Technology & Internet" },
            { name: "Cannabis Industry" },
            { name: "Real Estate" },
            { name: "Consumer & Cosmetics" },
            { name: "Travel & Hospitality" },
            { name: "Food & Beverage" },
          ].map((item, index) => (
            <NetworkCategory
              key={index}
              name={item.name}
              iconSrc="/blockchain.svg"
              href="/network"
              className="flex-1 min-w-[16rem] max-w-[calc((100%_-_2.5rem)_/_3)] mq450:max-w-full"
            />
          ))}
        </div>
      </section>

      <Footer property1="Variant2" />
    </div>
  );
};

export default AboutUs;
