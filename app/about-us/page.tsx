"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { useRef } from "react";
import CtaBanner from "../../components/cta-banner";
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
    <div className="w-full relative bg-color-white overflow-hidden flex flex-col items-start leading-[normal] tracking-[normal]">

      {/* Hero Section */}
      <section className="self-stretch flex flex-col items-start pt-[4.25rem] home-gutters pb-[6.125rem] box-border gap-[4.25rem] max-w-full text-center font-['Proxima_Nova'] mq750:gap-[2.125rem] mq750:pt-[1.813rem] mq750:pb-[2.625rem] mq1050:pt-[2.75rem] mq1050:pb-[4rem] mq450:gap-[1.063rem]">
        <section className="self-stretch overflow-hidden flex flex-col items-start gap-[1.5rem] max-w-full text-left text-[1rem] text-[#0bc111]">
          <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase">
            About Wirero
          </b>
          <div className="self-stretch flex items-start gap-[4.25rem] max-w-full text-[3.5rem] text-[#4d565f] mq1350:flex-wrap mq750:gap-[2.125rem] mq450:gap-[1.063rem]">
            <h1 className="m-0 w-[32.5rem] relative text-[length:inherit] leading-[4.25rem] font-bold font-[inherit] inline-block shrink-0 max-w-full mq1350:w-full mq1350:min-w-full mq1050:flex-1 mq1050:text-[2.813rem] mq1050:leading-[3.375rem] mq1050:min-w-full mq450:text-[2.125rem] mq450:leading-[2.563rem]">
              Built for scalable content distribution
            </h1>
            <div className="flex-1 flex flex-col items-start gap-[1.25rem] min-w-[25.688rem] text-[1.125rem] text-[#4d565f] mq1350:min-w-full mq750:min-w-full">
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
      <section className="self-stretch bg-[#f8f8ff] flex items-start py-[5rem] home-gutters box-border gap-[4.25rem] max-w-full mq1050:flex-wrap mq750:gap-[2.125rem] mq750:py-[3.25rem] mq450:gap-[1.063rem]">
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

        <section className="h-[27.5rem] w-[40rem] flex flex-col items-end max-w-full text-left text-[1rem] text-[#4d565f] font-['Proxima_Nova'] mq1050:h-auto mq1050:flex-1 mq1050:min-w-full">
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
            className="w-[23.75rem] h-[23.75rem] relative rounded-[20px] object-cover shrink-0 mt-[-16.5rem] mq450:mt-[-2rem]"
            width={380}
            height={380}
            sizes="100vw"
            alt=""
            src="/IMG@2x.png"
          />
        </section>
      </section>

      {/* We're Different Section (Dark) */}
      <main className="self-stretch bg-[#4d575f] flex flex-col items-center py-[6.125rem] home-gutters box-border gap-[4.25rem] max-w-full text-center text-[1rem] text-[#0bc111] font-['Proxima_Nova'] mq750:gap-[2.125rem] mq750:py-[2.625rem] mq1050:pt-[4rem] mq1050:pb-[4rem] mq450:gap-[1.063rem]">
        <section className="self-stretch overflow-hidden flex flex-col items-start gap-[1.5rem] max-w-full text-left text-[1rem] text-[#0bc111]">
          <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase">
            We're different
          </b>
          <div className="self-stretch flex items-start gap-[4.25rem] max-w-full text-[3rem] text-[#eee] mq1350:flex-wrap mq750:gap-[2.125rem] mq450:gap-[1.063rem]">
            <h1 className="m-0 w-[32.5rem] relative text-[length:inherit] leading-[3.625rem] font-bold font-[inherit] inline-block shrink-0 max-w-full mq1350:w-full mq1350:min-w-full mq1050:flex-1 mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq1050:min-w-full mq450:text-[1.813rem] mq450:leading-[2.188rem]">
              What Makes Wirero Different
            </h1>
            <div className="flex-1 relative text-[1.125rem] leading-[1.75rem] text-[rgba(238,238,238,0.8)] inline-block min-w-[25.688rem] mq1350:min-w-full mq750:min-w-full">
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
                className="flex-1 min-w-[16rem] mq450:min-w-full rounded-[20px] bg-[#1a2530] border-[rgba(122,131,140,0.2)] border-solid border-[1px] overflow-hidden flex flex-col items-start p-[1.5rem] gap-[1.25rem]"
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
                className="flex-1 min-w-[16rem] mq450:min-w-full rounded-[20px] bg-[#1a2530] border-[rgba(122,131,140,0.2)] border-solid border-[1px] overflow-hidden flex flex-col items-start p-[1.5rem] gap-[1.25rem]"
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
      <section className="self-stretch flex flex-col items-center py-[6.125rem] home-gutters box-border gap-[4.25rem] max-w-full text-left text-[1.375rem] text-[#4d565f] font-['Proxima_Nova'] mq750:gap-[2.125rem] mq1050:pt-[4rem] mq1050:pb-[4rem] mq450:gap-[1.063rem] mq450:py-[2.625rem]">
        <section className="w-[60rem] max-w-full overflow-hidden flex flex-col items-center gap-[1.5rem] shrink-0 text-left text-[1rem] text-[#0bc111]">
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
        <div className="self-stretch flex items-center gap-[3rem] max-w-full shrink-0 text-[2.25rem] mq1050:flex-wrap mq750:gap-[1.5rem]">
          <section className="w-[47.5rem] overflow-hidden shrink-0 flex flex-col items-center relative isolate gap-[0.625rem] max-w-full text-left text-[1.375rem] text-[#4d565f] font-['Proxima_Nova'] mq1050:flex-1 mq1050:min-w-full">
            <div
              ref={industryScrollRef}
              className="w-[42.5rem] max-w-full backdrop-blur-[8px] rounded-[28px] bg-[rgba(0,94,220,0.08)] flex items-start justify-center mq1050:justify-start py-[3.75rem] px-[0rem] box-border gap-[1.25rem] z-[0] shrink-0 mq450:pt-[2.438rem] mq450:pb-[2.438rem] overflow-x-auto scroll-smooth">
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
            <div className="w-full !m-0 absolute top-[calc(50%_-_22px)] left-0 right-0 px-[1rem] box-border flex items-center justify-between gap-[1.25rem] z-[3] shrink-0">
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

      {/* Network Structure Section */}
      <section className="self-stretch bg-[#f7fafd] flex flex-col items-center py-[6.125rem] home-gutters box-border gap-[3.5rem] max-w-full text-center font-['Proxima_Nova'] mq800:gap-[2rem] mq800:py-[2.625rem]">
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
        <div className="self-stretch grid w-full auto-rows-fr grid-cols-3 gap-[1.25rem] text-left mq800:grid-cols-2 mq450:grid-cols-1">
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
              className="h-full w-full !min-w-0"
            />
          ))}
        </div>
      </section>

      {/* How Distribution Works Section */}
      <section className="self-stretch bg-color-white flex flex-col items-center py-[6.125rem] home-gutters box-border gap-[3.5rem] max-w-full text-center font-['Proxima_Nova'] mq800:gap-[2rem] mq800:py-[2.625rem]">
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

        <div className="self-stretch flex items-center justify-center flex-wrap gap-[1.25rem] max-w-full">
          {[
            { number: "1", title: "Upload or Connect" },
            { number: "2", title: "Select Distribution" },
            { number: "3", title: "Publish at Scale" },
            { number: "4", title: "Access Reports" },
          ].map((step, index, arr) => (
            <div key={index} className="flex items-center gap-[1.25rem]">
              <div className="flex items-center gap-[1rem] shrink-0">
                <div className="h-[3.75rem] w-[3.75rem] rounded-[40px] bg-[#e2eff9] flex items-center justify-center shrink-0">
                  <h3 className="m-0 relative text-[1.5rem] leading-[2.5rem] font-semibold text-[#1a8cd5]">
                    {step.number}
                  </h3>
                </div>
                <b className="relative text-[1.125rem] leading-[1.5rem] font-bold text-[#1a2530] text-left shrink-0 w-[6.5rem]">
                  {step.title}
                </b>
              </div>
              {index < arr.length - 1 && (
                <div className="shrink-0 mq750:hidden">
                  <Image
                    className="w-[2.875rem] h-[1.0625rem] relative"
                    width={46}
                    height={17}
                    sizes="100vw"
                    alt=""
                    src="/Vector2.svg"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <CtaBanner
        title="Take control of your distribution infrastructure"
        subtitle="Publish across independently managed domains through a centralized multi-network system designed for scalable deployment."
        buttonText="Start Publishing"
        buttonHref="/contact"
      />

      <Footer property1="Variant2" />
    </div>
  );
};

export default AboutUs;
