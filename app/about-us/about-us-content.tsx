"use client";
import type { NextPage } from "next";
import Image from "next/image";
import { useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
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
      title: "Newswire",
      image: "/newswire.jpg",
      description:
        "Amplify your press releases to thousands of indexed domains with instant distribution. Get comprehensive coverage reports and track your news reach across our extensive network of news-focused properties.",
    },
    {
      title: "Digital Marketing Agency",
      image: "/digital marketing agency.jpg",
      description:
        "Scale client campaigns across multiple industry verticals from a single platform. Deliver results with multi-domain distribution, precise targeting, and detailed performance analytics for every campaign.",
    },
    {
      title: "Content Marketing Agency",
      image: "/content marketing.jpg",
      description:
        "Maximize content reach for your clients through our premium domain network. Deploy blog posts, articles, and thought leadership across relevant industry sites with automated scheduling and tracking.",
    },
    {
      title: "Freelancer",
      image: "/Freelancer.jpg",
      description:
        "Offer professional distribution services to your clients without the overhead. Access our infrastructure to deliver enterprise-grade content publishing under your own brand.",
    },
    {
      title: "Media Networks",
      image: "/media network.jpg",
      description:
        "Manage multiple publications efficiently with centralized content distribution. Sync publishing across your network of sites and expand reach beyond your existing audience.",
    },
    {
      title: "Wires Services",
      image: "/wire service.jpg",
      description:
        "Specialized distribution for press releases and announcements. Ensure your news reaches maximum visibility with our wire service network designed for speed and comprehensive coverage.",
    },
  ];

  const industryScrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const rafRef = useRef<number | null>(null);

  const updateActiveCard = useCallback(() => {
    const container = industryScrollRef.current;
    if (!container) return;
    const cards = Array.from(container.children) as HTMLElement[];
    if (cards.length === 0) return;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closestIndex = 0;
    let closestDistance = Infinity;

    cards.forEach((card, index) => {
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - containerCenter);
      if (distance < closestDistance) {
        closestDistance = distance;
        closestIndex = index;
      }
    });

    setActiveIndex(closestIndex);
  }, []);

  const handleScroll = useCallback(() => {
    if (rafRef.current !== null) {
      cancelAnimationFrame(rafRef.current);
    }
    rafRef.current = requestAnimationFrame(updateActiveCard);
  }, [updateActiveCard]);

  useEffect(() => {
    const container = industryScrollRef.current;
    if (!container) return;

    const setPadding = () => {
      const cards = Array.from(container.children) as HTMLElement[];
      if (cards.length === 0) return;
      const cardWidth = cards[0].offsetWidth;
      const padding = Math.max(0, (container.clientWidth - cardWidth) / 2);
      container.style.paddingLeft = `${padding}px`;
      container.style.paddingRight = `${padding}px`;
    };

    setPadding();
    updateActiveCard();

    const onResize = () => {
      setPadding();
      updateActiveCard();
    };

    window.addEventListener("resize", onResize);
    container.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", onResize);
      container.removeEventListener("scroll", handleScroll);
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [handleScroll, updateActiveCard]);

  const scrollToCard = (index: number) => {
    const container = industryScrollRef.current;
    if (!container) return;
    const cards = Array.from(container.children) as HTMLElement[];
    if (!cards[index]) return;
    const card = cards[index];
    container.scrollTo({
      left: card.offsetLeft + card.offsetWidth / 2 - container.clientWidth / 2,
      behavior: "smooth",
    });
  };

  const scrollIndustry = (direction: "left" | "right") => {
    const container = industryScrollRef.current;
    if (!container) return;
    const cards = Array.from(container.children) as HTMLElement[];
    if (cards.length === 0) return;
    const cardWidth = cards[0].offsetWidth;
    const scrollAmount = cardWidth + 20;
    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative flex w-full min-w-0 flex-col items-stretch overflow-x-clip bg-color-white leading-[normal] tracking-[normal]">
      {/* Hero Section */}
      <section className="site-section-hero self-stretch">
        <div className="site-container flex flex-col items-start box-border gap-[4.25rem] max-w-full text-center font-proxima mq750:gap-[2.125rem] mq450:gap-[1.063rem]">
          <section className="self-stretch overflow-hidden flex flex-col items-start gap-[1.5rem] max-w-full text-left text-[1rem] text-[#0bc111]">
            <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase">
              About Wirero
            </b>
            <div className="self-stretch flex items-start gap-[4.25rem] max-w-full text-[3.5rem] text-[#1A2530] mq1350:flex-wrap mq1050:gap-[2.5rem] mq750:gap-[2.125rem] mq450:gap-[1.063rem]">
              <h1 className="m-0 w-[32.5rem] relative text-[length:inherit] leading-[4.25rem] font-bold font-[inherit] inline-block shrink-0 max-w-full mq1350:w-full mq1350:min-w-full mq1050:flex-1 mq1050:text-[2.813rem] mq1050:leading-[3.375rem] mq1050:min-w-full mq800:text-[2.375rem] mq800:leading-[2.875rem] mq450:text-[2.125rem] mq450:leading-[2.563rem]">
                Built for scalable content distribution
              </h1>
              <div className="flex-1 flex flex-col items-start gap-[1.25rem] min-w-0 max-w-full text-[1.125rem] text-[#1A2530] mq450:text-[1rem]">
                <div className="self-stretch relative leading-[1.75rem]">
                  Wirero is a multi-domain publishing infrastructure designed
                  for agencies, platforms, and brands that need fast, controlled
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

          {/* Image Showcase */}
          <div className="self-stretch flex items-stretch gap-[1.5rem] max-w-full mq1050:gap-[1rem] mq800:flex-col mq800:gap-[1rem]">
            <div className="w-[22rem] h-[20rem] shrink-0 rounded-[20px] overflow-hidden flex items-center justify-center mq1125:w-[18rem] mq1050:w-[15rem] mq1050:h-[17rem] mq800:w-full mq800:h-[16rem] mq450:h-[12rem]">
              <Image
                src="/Hero small.jpg"
                alt="Wirero distribution network showcase"
                width={352}
                height={320}
                className="h-full w-full object-cover"
                priority
              />
            </div>
            <div className="flex-1 min-w-0 h-[20rem] rounded-[20px] overflow-hidden flex items-center justify-center bg-transparent mq1050:h-[17rem] mq800:w-full mq800:h-[16rem] mq450:h-[12rem]">
              <Image
                src="/Hero-Wide.jpg"
                alt="Wirero hero artwork"
                width={800}
                height={320}
                className="h-full w-full object-contain"
                priority
              />
            </div>
          </div>

          {/* Stats */}
          <div className="self-stretch flex items-start flex-wrap content-start gap-[1.5rem] mq450:gap-[1.75rem]">
            <div className="flex-1 flex flex-col items-center relative isolate gap-[0.375rem] min-w-[14rem] mq450:min-w-full">
              <h1 className="m-0 relative text-[3.5rem] leading-[2.5rem] font-extrabold font-[inherit] text-[#0461c3] z-[0] shrink-0 mq1050:text-[2.75rem] mq1050:leading-[2.25rem] mq800:text-[2.375rem] mq800:leading-[2rem] mq450:text-[2.125rem] mq450:leading-[1.75rem]">
                1000+
              </h1>
              <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] opacity-[0.9] text-center z-[1] shrink-0 mq450:text-[1rem]">
                Independent Domains
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center relative isolate gap-[0.375rem] min-w-[14rem] mq450:min-w-full">
              <h2 className="m-0 relative text-[3.5rem] leading-[2.5rem] font-extrabold font-[inherit] text-[#0461c3] z-[1] shrink-0 mq1050:text-[2.75rem] mq1050:leading-[2.25rem] mq800:text-[2.375rem] mq800:leading-[2rem] mq450:text-[2.125rem] mq450:leading-[1.75rem]">
                10
              </h2>
              <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] opacity-[0.9] text-center z-[2] shrink-0 mq450:text-[1rem]">
                Industry Networks
              </div>
            </div>
            <div className="flex-1 flex flex-col items-center relative isolate gap-[0.375rem] min-w-[14rem] mq450:min-w-full">
              <h2 className="m-0 relative text-[3.5rem] leading-[2.5rem] font-extrabold font-[inherit] text-[#0461c3] z-[1] shrink-0 mq1050:text-[2.75rem] mq1050:leading-[2.25rem] mq800:text-[2.375rem] mq800:leading-[2rem] mq450:text-[2.125rem] mq450:leading-[1.75rem] whitespace-nowrap">
                &lt; 1 Hour
              </h2>
              <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] opacity-[0.9] text-center z-[2] shrink-0 mq450:text-[1rem]">
                Average Deployment
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What Wirero Does Section */}
      <section className="site-section self-stretch bg-[#f8f8ff]">
        <div className="site-container flex items-start box-border gap-[4.25rem] max-w-full mq1050:flex-wrap mq1050:gap-[2.5rem] mq750:gap-[2.125rem] mq450:gap-[1.5rem]">
          <section className="flex-1 flex flex-col items-start gap-[1.75rem] min-w-0 mq1050:min-w-full text-left text-[1rem] text-[#005edc] font-proxima">
            <div className="self-stretch overflow-hidden flex flex-col items-start gap-[1.5rem]">
              <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase text-[#0bc111]">
                WHAT WIRERO DOES
              </b>
              <div className="self-stretch flex flex-col items-start gap-[1rem] text-[2.25rem] text-[#1A2530]">
                <h1 className="m-0 self-stretch relative text-[3rem] leading-[3.625rem] font-bold font-[inherit] mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq800:text-[2rem] mq800:leading-[2.5rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
                  A centralized infrastructure for large-scale publishing
                </h1>
                <div className="self-stretch flex flex-col items-start gap-[1.5rem] text-[1.125rem] text-[#1A2530] mq450:text-[1rem]">
                  <div className="self-stretch relative leading-[1.75rem]">
                    Wirero simplifies distribution by allowing users to publish
                    content across multiple industry-specific domains from one
                    centralized system.
                  </div>
                  <div className="self-stretch flex flex-col items-start gap-[0.75rem]">
                    <div className="self-stretch relative leading-[1.75rem]">
                      The infrastructure is built for:
                    </div>
                    {features.map((feature, index) => (
                      <div
                        key={index}
                        className="self-stretch flex items-start gap-[0.75rem]"
                      >
                        <div className="h-[1.75rem] flex items-center shrink-0">
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
                        <div className="flex-1 min-w-0 relative leading-[1.625rem] font-semibold break-words">
                          {feature}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="w-[40rem] flex flex-col items-end max-w-full text-left text-[1rem] text-[#1A2530] font-proxima relative isolate mq1050:w-full mq1050:flex-1 mq1050:min-w-full">
            <div className="w-full flex items-start max-w-full relative z-[2]">
              <div className="w-[26.25rem] flex flex-col items-start gap-[2.5rem] shrink-0 max-w-full mq1050:w-full mq800:gap-[1.5rem] mq450:gap-[1.25rem]">
                {/* Infrastructure-First Card */}
                <div className="self-stretch shadow-[8px_8px_12px_rgba(26,_38,_48,_0.08)] rounded-[20px] bg-color-white overflow-hidden flex flex-col items-start p-[1.5rem] gap-[1rem] mq450:p-[1.25rem]">
                  <div className="self-stretch flex items-center justify-center gap-[0.625rem] shrink-0 text-[1.5rem]">
                    <Image
                      className="h-[1.75rem] w-[1.75rem] relative shrink-0"
                      width={28}
                      height={28}
                      sizes="100vw"
                      alt=""
                      src="/target-fill.svg"
                    />
                    <h3 className="m-0 flex-1 min-w-0 relative text-[length:inherit] leading-[1.875rem] font-bold font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                      Infrastructure-First
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-col items-start gap-[0.5rem] shrink-0 text-[#1A2530]">
                    <div className="self-stretch relative leading-[1.5rem]">
                      Built around operational efficiency instead of manual
                      publisher outreach.
                    </div>
                  </div>
                </div>

                {/* Scalable by Design Card */}
                <div className="self-stretch shadow-[8px_8px_12px_rgba(26,_38,_48,_0.08)] rounded-[20px] bg-color-white overflow-hidden flex flex-col items-start p-[1.5rem] gap-[1rem] mq450:p-[1.25rem]">
                  <div className="self-stretch flex items-center justify-center gap-[0.625rem] shrink-0 text-[1.5rem]">
                    <Image
                      className="h-[1.75rem] w-[1.75rem] relative shrink-0"
                      width={28}
                      height={28}
                      sizes="100vw"
                      alt=""
                      src="/rocket-sharp.svg"
                    />
                    <h3 className="m-0 flex-1 min-w-0 relative text-[length:inherit] leading-[1.875rem] font-bold font-[inherit] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                      Scalable by Design
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-col items-start gap-[0.5rem] shrink-0 text-[#1A2530]">
                    <div className="self-stretch relative leading-[1.5rem]">
                      Deploy campaigns simultaneously across selected industry
                      networks.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Image
              className="w-[23.75rem] h-[23.75rem] relative z-[1] rounded-[20px] object-cover shrink-0 mt-[-16.5rem] mq1050:mt-[1.5rem] mq1050:self-center mq800:w-[20rem] mq800:h-[20rem] mq450:w-full mq450:h-auto mq450:aspect-square"
              width={380}
              height={380}
              sizes="100vw"
              alt=""
              src="/What.jpg"
            />
          </section>
        </div>
      </section>

      {/* We're Different Section (Dark) */}
      <main className="site-section self-stretch bg-[#12171C]">
        <div className="site-container flex flex-col items-center box-border gap-[4.25rem] max-w-full text-center text-[1rem] text-[#0bc111] font-proxima mq1050:gap-[2.5rem] mq750:gap-[2.125rem] mq450:gap-[1.5rem]">
          <section className="self-stretch overflow-hidden flex flex-col items-start gap-[1.5rem] max-w-full text-left text-[1rem] text-[#0bc111]">
            <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase">
              We're different
            </b>
            <div className="self-stretch flex items-start gap-[4.25rem] max-w-full text-[3rem] text-[#eee] mq1350:flex-wrap mq1050:gap-[2rem] mq750:gap-[2.125rem] mq450:gap-[1.063rem]">
              <h1 className="m-0 w-[32.5rem] relative text-[length:inherit] leading-[3.625rem] font-bold font-[inherit] inline-block shrink-0 max-w-full mq1350:w-full mq1350:min-w-full mq1050:flex-1 mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq1050:min-w-full mq800:text-[2rem] mq800:leading-[2.5rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
                What Makes Wirero Different
              </h1>
              <div className="flex-1 relative text-[1.125rem] leading-[1.75rem] text-[rgba(238,238,238,0.8)] inline-block min-w-0 max-w-full mq450:text-[1rem]">
                Wirero is a controlled multi-domain distribution infrastructure
                built for scalable publishing. Instead of relying on external
                publishers or manual outreach, the platform enables fast,
                automated, and industry-targeted distribution through a
                centralized system.
              </div>
            </div>
          </section>

          <div className="self-stretch flex flex-col items-start pb-[2.5rem] gap-[1.75rem] mq450:pb-0 mq450:gap-[1.25rem]">
            <section className="self-stretch flex items-start flex-wrap content-start gap-[1.75rem] text-left text-[1.5rem] text-[#eee] font-proxima mq450:gap-[1.25rem]">
              {differentFeatures.slice(0, 3).map((feature, index) => (
                <div
                  key={index}
                  className="flex-1 min-w-0 basis-[16rem] max-w-full rounded-[20px] bg-[#1a2530] border-[rgba(122,131,140,0.2)] border-solid border-[1px] overflow-hidden flex flex-col items-start p-[1.5rem] gap-[1.25rem] mq450:p-[1.25rem] mq450:gap-[1rem]"
                >
                  <div className="rounded-[16px] flex items-center justify-center p-[0.25rem]">
                    <Image
                      className="h-[3rem] w-[3rem] relative mq450:h-[2.5rem] mq450:w-[2.5rem]"
                      width={48}
                      height={48}
                      sizes="100vw"
                      alt=""
                      src={feature.icon}
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start gap-[1rem]">
                    <b className="self-stretch relative leading-[1.875rem] mq450:text-[1.25rem] mq450:leading-[1.5rem]">
                      {feature.title}
                    </b>
                    <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[rgba(238,238,238,0.8)] mq450:text-[1rem] mq450:leading-[1.5rem]">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </section>

            <section className="self-stretch flex items-start flex-wrap content-start gap-[1.75rem] text-left text-[1.5rem] text-[#eee] font-proxima mq450:gap-[1.25rem]">
              {differentFeatures.slice(3, 6).map((feature, index) => (
                <div
                  key={index + 3}
                  className="flex-1 min-w-0 basis-[16rem] max-w-full rounded-[20px] bg-[#1a2530] border-[rgba(122,131,140,0.2)] border-solid border-[1px] overflow-hidden flex flex-col items-start p-[1.5rem] gap-[1.25rem] mq450:p-[1.25rem] mq450:gap-[1rem]"
                >
                  <div className="rounded-[16px] flex items-center justify-center p-[0.25rem]">
                    <Image
                      className="h-[3rem] w-[3rem] relative mq450:h-[2.5rem] mq450:w-[2.5rem]"
                      width={48}
                      height={48}
                      sizes="100vw"
                      alt=""
                      src={feature.icon}
                    />
                  </div>
                  <div className="self-stretch flex flex-col items-start gap-[1rem]">
                    <b className="self-stretch relative leading-[1.875rem] mq450:text-[1.25rem] mq450:leading-[1.5rem]">
                      {feature.title}
                    </b>
                    <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[rgba(238,238,238,0.8)] mq450:text-[1rem] mq450:leading-[1.5rem]">
                      {feature.description}
                    </div>
                  </div>
                </div>
              ))}
            </section>
          </div>
        </div>
      </main>

      {/* Industries We Serve Section */}
      <section className="site-section self-stretch">
        <div className="site-container flex flex-col items-center box-border gap-[4.25rem] max-w-full text-left text-[1.375rem] text-[#1A2530] font-proxima mq1050:gap-[2.5rem] mq750:gap-[2.125rem] mq450:gap-[1.5rem]">
          <section className="w-[60rem] max-w-full overflow-hidden flex flex-col items-center gap-[1.5rem] shrink-0 text-left text-[1rem] text-[#0bc111]">
            <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase">
              Industries We Serve
            </b>
            <div className="self-stretch flex flex-col items-center gap-[1rem] text-center text-[3rem] text-[#1A2530]">
              <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[3.625rem] font-bold font-[inherit] mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq800:text-[2rem] mq800:leading-[2.5rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
                Who We Serve
              </h2>
              <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[#1A2530] mq450:text-[1rem]">
                Wirero supports organizations across a wide range of industries,
                including:
              </div>
            </div>
          </section>

          {/* Industry Cards */}
          <div className="self-stretch flex items-center gap-[3rem] max-w-full shrink-0 text-[2.25rem] mq1050:flex-col mq1050:gap-[2rem] mq750:gap-[1.5rem] mq450:gap-[1.25rem]">
            <section className="w-[47.5rem] overflow-hidden shrink-0 flex flex-col items-center relative isolate gap-[0.625rem] max-w-full text-left text-[1.375rem] text-[#1A2530] font-proxima mq1050:w-full mq1050:order-2">
              <div
                ref={industryScrollRef}
                className="w-[42.5rem] max-w-full backdrop-blur-[8px] rounded-[28px] bg-[rgba(0,94,220,0.08)] flex items-start justify-start py-[3.75rem] px-[0rem] box-border gap-[1.25rem] z-[0] shrink-0 mq1050:w-full mq450:py-[2.438rem] overflow-x-auto scroll-smooth snap-x snap-mandatory touch-pan-x [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              >
                {industries.map((industry, index) => (
                  <div
                    key={index}
                    className={`w-[15.063rem] rounded-[16px] bg-color-white border-solid box-border overflow-hidden shrink-0 flex flex-col items-start snap-center transition-all duration-300 ease-out mq450:w-[13.5rem] ${
                      index === activeIndex
                        ? "border-[2px] border-[#005edc] shadow-[0px_8px_28px_rgba(0,94,220,0.18)] scale-[1.04] z-10"
                        : "border-[1px] border-color-white opacity-60 hover:opacity-100"
                    }`}
                  >
                    <Image
                      className="self-stretch h-[15rem] max-w-full overflow-hidden shrink-0 object-cover mq450:h-[12rem]"
                      width={241}
                      height={240}
                      sizes="100vw"
                      alt={industry.title}
                      src={industry.image}
                    />
                    <div className="self-stretch rounded-[16px] bg-color-white flex items-center p-[1.25rem] gap-[0.75rem] mt-[-1.25rem] relative mq450:p-[1rem]">
                      <h3 className="m-0 flex-1 min-w-0 relative text-[length:inherit] leading-[1.75rem] font-bold font-[inherit] mq450:text-[1.125rem] mq450:leading-[1.5rem] break-words">
                        {industry.title}
                      </h3>
                    </div>
                  </div>
                ))}
              </div>
              <div className="w-[2.75rem] h-full max-h-[29rem] absolute !m-0 top-[50%] -translate-y-1/2 left-[-0.25rem] bg-[linear-gradient(270deg,_rgba(255,_255,_255,_0.2),_#fff)] z-[1] shrink-0 pointer-events-none mq450:hidden" />
              <div className="w-[2.75rem] h-full max-h-[29rem] absolute !m-0 top-[50%] -translate-y-1/2 right-[-0.25rem] bg-[linear-gradient(270deg,_#fff,_rgba(255,_255,_255,_0.2))] z-[2] shrink-0 pointer-events-none mq450:hidden" />
              <div className="w-full !m-0 absolute top-[50%] -translate-y-1/2 left-0 right-0 px-[1rem] box-border flex items-center justify-between gap-[1.25rem] z-[3] shrink-0 pointer-events-none mq450:hidden">
                <button
                  onClick={() => scrollIndustry("left")}
                  className="pointer-events-auto rounded-[40px] bg-[#4d575f] flex flex-col items-center justify-center p-[0.5rem] cursor-pointer border-none hover:bg-[#3a444b] transition-colors"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-[1.75rem] h-[1.75rem] relative text-white" />
                </button>
                <button
                  onClick={() => scrollIndustry("right")}
                  className="pointer-events-auto rounded-[40px] bg-[#4d575f] flex flex-col items-center justify-center p-[0.5rem] cursor-pointer border-none hover:bg-[#3a444b] transition-colors"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-[1.75rem] h-[1.75rem] relative text-white" />
                </button>
              </div>
            </section>

            {/* Active Industry Detail Panel */}
            <div className="flex-1 overflow-hidden flex flex-col items-start py-[1.25rem] px-[0rem] box-border gap-[1.25rem] min-w-0 mq1050:w-full mq1050:order-1 mq1050:items-center mq1050:text-center mq1050:py-0">
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
              <div className="self-stretch flex flex-col items-start gap-[0.75rem] mq1050:items-center">
                <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[3rem] font-bold font-[inherit] mq1050:text-[1.813rem] mq1050:leading-[2.375rem] mq450:text-[1.375rem] mq450:leading-[1.813rem]">
                  {industries[activeIndex].title}
                </h2>
                <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] mq450:text-[1rem]">
                  {industries[activeIndex].description}
                </div>
              </div>
              {/* Dots indicator */}
              <div className="flex items-center gap-[0.5rem] pt-[0.5rem]">
                {industries.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToCard(index)}
                    className={`h-[0.5rem] rounded-full transition-all duration-300 cursor-pointer border-none ${
                      index === activeIndex
                        ? "w-[1.5rem] bg-[#005edc]"
                        : "w-[0.5rem] bg-[#c5cdd5] hover:bg-[#9aa5b0]"
                    }`}
                    aria-label={`Go to ${industries[index].title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Network Structure Section */}
      <section className="site-section self-stretch bg-[#f7fafd]">
        <div className="site-container flex flex-col items-center box-border gap-[3.5rem] max-w-full text-center font-proxima mq800:gap-[2rem] mq450:gap-[1.5rem]">
          <div className="flex flex-col items-center gap-[1.5rem] max-w-[60rem] w-full">
            <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase text-[#0bc111]">
              NETWORK STRUCTURE
            </b>
            <h2 className="m-0 relative text-[3rem] leading-[3.625rem] font-bold text-[#1a2530] mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq800:text-[2rem] mq800:leading-[2.5rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
              Structured across 10 industry-specific networks
            </h2>
            <div className="relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] max-w-[50rem] mq450:text-[1rem]">
              The Wirero infrastructure is organized into niche-focused domain
              categories designed for contextual and scalable distribution.
            </div>
          </div>
          <div className="self-stretch grid w-full auto-rows-fr grid-cols-3 gap-[1.25rem] text-left mq1050:grid-cols-2 mq450:grid-cols-1 mq450:gap-[0.75rem]">
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
        </div>
      </section>

      {/* How Distribution Works Section */}
      <section className="site-section self-stretch bg-color-white">
        <div className="site-container flex flex-col items-center box-border gap-[3.5rem] max-w-full text-center font-proxima mq800:gap-[2rem] mq450:gap-[1.5rem]">
          <div className="flex flex-col items-center gap-[1.5rem] max-w-[60rem] w-full">
            <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase text-[#0bc111]">
              HOW DISTRIBUTION WORKS
            </b>
            <h2 className="m-0 relative text-[3rem] leading-[3.625rem] font-bold text-[#1a2530] mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq800:text-[2rem] mq800:leading-[2.5rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
              Simple, centralized publishing workflow
            </h2>
            <div className="relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] max-w-[50rem] mq450:text-[1rem]">
              Wirero simplifies large-scale distribution through a controlled
              multi-domain infrastructure designed for fast and scalable
              deployment.
            </div>
          </div>

          <div className="self-stretch flex items-center justify-center flex-wrap gap-[1.25rem] max-w-full mq750:flex-col mq750:items-stretch mq750:gap-[1rem]">
            {[
              { number: "1", title: "Upload or Connect" },
              { number: "2", title: "Select Distribution" },
              { number: "3", title: "Publish at Scale" },
              { number: "4", title: "Access Reports" },
            ].map((step, index, arr) => (
              <div
                key={index}
                className="flex items-center gap-[1.25rem] mq750:gap-[0.75rem]"
              >
                <div className="flex items-center gap-[1rem] shrink-0">
                  <div className="h-[3.75rem] w-[3.75rem] rounded-[40px] bg-[#e2eff9] flex items-center justify-center shrink-0 mq450:h-[3rem] mq450:w-[3rem]">
                    <h3 className="m-0 relative text-[1.5rem] leading-[2.5rem] font-semibold text-[#1a8cd5] mq450:text-[1.25rem] mq450:leading-[2rem]">
                      {step.number}
                    </h3>
                  </div>
                  <b className="relative text-[1.125rem] leading-[1.5rem] font-bold text-[#1a2530] text-left shrink-0 w-[6.5rem] mq450:text-[1rem] mq450:w-auto mq450:flex-1">
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
