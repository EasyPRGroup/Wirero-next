import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/footer";
import FeatureItem from "../../components/feature-item";
import NetworkTag from "../../components/network-tag";
import DistributionStep from "../../components/distribution-step";
import IndustryTag from "../../components/industry-tag";
import NetworkCategory from "../../components/network-category";
import DomainCard from "../../components/domain-card";
import CtaBanner from "../../components/cta-banner";

const Network: NextPage = () => {
  const industryCategories = [
    "Blockchain & Cryptocurrency",
    "Casino & Gambling",
    "Fintech, Forex & ETFs",
    "Healthcare",
    "Technology & Internet",
    "Cannabis Industry",
    "Real Estate",
    "Consumer & Cosmetics",
    "Travel & Hospitality",
    "Food & Beverage",
  ];

  const eachPlacementTags = [
    "Uniquely hosted",
    "Naturally structured",
    "Published consistently across the network",
  ];

  const domainNetworks = [
    {
      name: "Crypto Network",
      domains: [
        { name: "Crypto Domain", url: "https://www.cryptodomain1.com" },
        { name: "Block Insight News", url: "https://www.blockinsightnews.com" },
        { name: "Token Report Daily", url: "https://www.tokenreportdaily.com" },
        { name: "Chainwire Hub", url: "https://www.chainwirehub.com" },
      ],
    },
    {
      name: "Tech Network",
      domains: [
        { name: "Crypto Domain", url: "https://www.cryptodomain1.com" },
        { name: "Block Insight News", url: "https://www.blockinsightnews.com" },
        { name: "Token Report Daily", url: "https://www.tokenreportdaily.com" },
        { name: "Newsmax", url: "https://www.newsmax.com/" },
      ],
    },
    {
      name: "Healthcare Network",
      domains: [
        { name: "Crypto Domain", url: "https://www.cryptodomain1.com" },
        { name: "Block Insight News", url: "https://www.blockinsightnews.com" },
        { name: "Token Report Daily", url: "https://www.tokenreportdaily.com" },
        { name: "Newsmax", url: "https://www.newsmax.com/" },
      ],
    },
  ];

  const domainCharacteristics = [
    {
      title: "Independently Hosted",
      description: "Each domain operates on separate hosting infrastructure.",
    },
    {
      title: "Optimized for Distribution",
      description: "Structured for rapid publishing and indexing workflows.",
    },
    {
      title: "Categorized by Industry",
      description:
        "Networks are segmented by niche relevance and topical organization.",
    },
    {
      title: "Built for Scale",
      description:
        "Designed for deployment consistency—not editorial branding.",
    },
  ];

  const controlChecklist = [
    "Select industry-specific networks",
    "Deploy across 10 to 1000 domains",
    "Publish selectively or network-wide",
    "Adjust campaigns instantly",
  ];

  return (
    <div className="w-full relative bg-color-white flex flex-col items-start leading-[normal] tracking-[normal]">

      {/* Hero Section */}
      <section className="self-stretch bg-[#f7fafd] flex items-center py-[4.25rem] px-[6.875rem] box-border gap-[4.25rem] max-w-full lg:flex-wrap mq750:gap-[2.125rem] mq750:py-[2.75rem] mq750:px-[3.438rem] mq750:box-border mq450:gap-[1.063rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
        <section className="flex-1 overflow-hidden flex flex-col items-start gap-[1.5rem] min-w-[27.5rem] text-left text-[1rem] text-[#0bc111] font-abel mq750:min-w-full">
          <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase">
            Network
          </b>
          <div className="self-stretch flex flex-col items-start gap-[1rem] text-[3.5rem] text-[#1a2530]">
            <b className="self-stretch relative leading-[4.25rem] mq1050:text-[2.813rem] mq1050:leading-[3.375rem] mq450:text-[2.125rem] mq450:leading-[2.563rem]">
              See the infrastructure behind Wirero
            </b>
            <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d565f]">
              A controlled network of 1000 independent domains, structured for
              targeted distribution at scale.
            </div>
          </div>
          <Link
            href="/contact"
            className="cursor-pointer [border:none] py-[1rem] px-[2.5rem] bg-[#0461c3] h-[3.5rem] rounded-[8px] flex items-center justify-center box-border gap-[0.5rem] no-underline hover:bg-[#0354a8] transition-colors"
          >
            <div className="relative text-[1rem] leading-[1.25rem] font-semibold font-proxima text-color-white text-center shrink-0">
              View Sample Domains
            </div>
            <Image
              className="h-[1rem] w-[1rem] relative shrink-0"
              width={16}
              height={16}
              sizes="100vw"
              alt=""
              src="/arrow-right1.svg"
            />
          </Link>
        </section>
        <Image
          className="h-[30.938rem] w-[29.688rem] relative rounded-[20px] object-contain max-w-full lg:flex-1"
          loading="lazy"
          width={475}
          height={495}
          sizes="100vw"
          alt=""
          src="/IMG@2x.png"
        />
      </section>

      {/* Built as Infrastructure Section */}
      <section className="self-stretch flex flex-col items-start pt-[4.25rem] px-[6.875rem] pb-[6.125rem] box-border gap-[3rem] max-w-full text-left text-[1.125rem] text-[#4d565f] font-proxima mq750:gap-[1.5rem] mq750:pl-[3.438rem] mq750:pr-[3.438rem] mq750:box-border mq1050:pt-[2.75rem] mq1050:pb-[4rem] mq1050:box-border mq450:pt-[1.813rem] mq450:px-[1.25rem] mq450:pb-[2.625rem] mq450:box-border">
        <section className="self-stretch overflow-hidden flex flex-col items-start gap-[1.5rem] max-w-full text-left text-[1rem] text-[#0bc111] font-abel">
          <div
            className="self-stretch flex items-start gap-[4.25rem] max-w-full text-[3rem] text-[#1a2530] lg:flex-wrap mq750:gap-[2.125rem] mq450:gap-[1.063rem]"
          >
            <b className="w-[40rem] relative leading-[3.625rem] inline-block shrink-0 max-w-full lg:flex-1 mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq1050:min-w-full mq450:text-[1.813rem] mq450:leading-[2.188rem]">
              Built as infrastructure — not a publisher marketplace
            </b>
            <div className="flex-1 flex flex-col items-start gap-[1.25rem] min-w-[20.813rem] text-[1.125rem] text-[#4d565f] font-proxima">
              <div className="self-stretch relative leading-[1.75rem]">
                Wirero operates a privately managed distribution network
                engineered for scalable deployment across multiple industries.
                Unlike traditional PR marketplaces, the system is fully
                controlled internally, allowing faster publishing, cleaner
                workflows, and predictable execution.
              </div>
            </div>
          </div>
        </section>

        <div className="self-stretch flex items-start justify-center gap-[4.25rem] max-w-full lg:flex-wrap mq750:gap-[2.125rem] mq450:gap-[1.063rem]">
          {/* Visual element - abstract shapes */}
          <div className="h-[23.75rem] w-[35.125rem] relative max-w-full lg:flex-1 mq1050:min-w-full">
            <div className="absolute top-[2.25rem] left-[20.125rem] rounded-[16px] bg-[#87ceeb] w-[15rem] h-[17.5rem]"></div>
            <div className="absolute h-full top-[0rem] bottom-[0rem] left-[0rem] rounded-[16px] bg-[#64676f] w-[18.625rem]"></div>
            <div className="absolute top-[6rem] left-[7.188rem] shadow-[0px_23px_54px_rgba(26,37,48,0.24)] rounded-[16px] bg-[#0461c3] w-[20.75rem] h-[11.25rem] z-[1]"></div>
          </div>

          {/* Features List */}
          <section className="h-[29rem] flex-1 flex items-start min-w-[23.938rem] max-w-full text-left text-[1.25rem] text-[#1a8cd5] font-urbanist mq750:h-auto mq750:min-w-full">
            <div className="w-[36.875rem] flex flex-col items-start gap-[2rem] max-w-full mq750:gap-[1rem]">
              <FeatureItem
                number="1"
                title="Independently hosted"
                description="Each domain operates on its own hosting environment for better distribution stability and network separation."
              />
              <FeatureItem
                number="2"
                title="Categorized by industry"
                description="Domains are organized into niche-specific networks to support more relevant and targeted distribution."
              />
              <FeatureItem
                number="3"
                title="Structured for content distribution"
                description="Every domain is optimized to efficiently publish and manage large-scale content deployment."
              />
              <FeatureItem
                number="4"
                title="Maintained within a centralized system"
                description="The entire network is managed through a unified infrastructure for consistent control and streamlined operations."
              />
            </div>
          </section>
        </div>

        {/* Tags */}
        <div className="self-stretch flex items-start justify-center gap-[1.25rem] mq1050:flex-wrap">
          <NetworkTag icon="/Frame-266@2x.png" text="No outreach." />
          <NetworkTag icon="/Frame-2681@2x.png" text="No third-party dependency." />
          <div className="rounded-[40px] bg-[#1a8cd5] flex items-center py-[0.375rem] px-[0.75rem] gap-[0.5rem]">
            <Image
              className="h-[1.25rem] w-[1.25rem] relative object-cover"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
              src="/Frame-267@2x.png"
            />
            <div className="relative leading-[1.5rem] font-semibold">
              No placement negotiation.
            </div>
          </div>
        </div>
      </section>

      {/* Network Structure Section */}
      <section className="w-[90rem] bg-[#12171c] flex flex-col items-center py-[6.125rem] px-[6.875rem] box-border gap-[3rem] max-w-full text-center text-[1rem] text-[#0bc111] font-abel lg:pt-[4rem] lg:pb-[4rem] lg:box-border mq750:gap-[1.5rem] mq750:py-[2.625rem] mq750:px-[3.438rem] mq750:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
        <div className="w-[60rem] overflow-hidden flex flex-col items-center gap-[1rem]">
          <h1 className="m-0 self-stretch relative text-[3rem] leading-[3.625rem] font-bold font-[inherit] text-[#eee] mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
            Network Structure
          </h1>
          <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[rgba(238,238,238,0.8)]">
            The network is divided into specialized industry segments to help
            content stay contextually aligned and operationally scalable.
          </div>
        </div>

        <div className="self-stretch flex flex-col items-start gap-[2.5rem] max-w-full text-left text-[2.25rem] text-[#eee] font-proxima mq750:gap-[1.25rem]">
          <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[2.625rem] font-semibold font-[inherit] mq1050:text-[1.813rem] mq1050:leading-[2.125rem] mq450:text-[1.375rem] mq450:leading-[1.563rem]">
            Industry Networks
          </h2>

          <div className="self-stretch rounded-[16px] overflow-hidden flex flex-col items-center gap-[1.25rem] text-center text-[1.25rem] text-color-white">
            {/* First row of category cards */}
            <section className="self-stretch flex items-start flex-wrap content-start gap-[1.25rem] text-left text-[1.5rem] text-[#1a2530] font-abel">
              {industryCategories.slice(0, 3).map((category, index) => (
                <NetworkCategory
                  key={index}
                  name={category}
                />
              ))}
            </section>

            {/* Second row of category cards */}
            <section className="self-stretch flex items-start flex-wrap content-start gap-[1.25rem] text-left text-[1.5rem] text-[#1a2530] font-abel">
              {industryCategories.slice(3, 6).map((category, index) => (
                <NetworkCategory
                  key={index + 3}
                  name={category}
                />
              ))}
            </section>

            {/* Third row of category cards */}
            <section className="self-stretch flex items-start flex-wrap content-start gap-[1.25rem] text-left text-[1.5rem] text-[#1a2530] font-abel">
              {industryCategories.slice(6, 9).map((category, index) => (
                <NetworkCategory
                  key={index + 6}
                  name={category}
                />
              ))}
            </section>

            {/* Fourth row - single category */}
            <section className="self-stretch flex items-start gap-[1.25rem] text-left text-[1.5rem] text-[#1a2530] font-abel">
              <NetworkCategory name="Food & Beverage" />
            </section>

            <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[rgba(238,238,238,0.8)]">
              Each category includes 100 independent domains, allowing you to
              distribute content where it actually fits.
            </div>
          </div>

          {/* Industry tags at bottom */}
          <section className="self-stretch flex flex-col items-center gap-[1rem] max-w-full text-center text-[1.25rem] text-[rgba(238,238,238,0.8)] font-proxima">
            <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[2rem] font-semibold font-[inherit] mq450:text-[1rem] mq450:leading-[1.625rem]">
              Each network is built to ensure:
            </h3>
            <div className="self-stretch flex items-start justify-center gap-[1.25rem] max-w-full mq1050:flex-wrap">
              <IndustryTag text="Contextual relevance" />
              <IndustryTag text="Clean categorization" />
              <IndustryTag text="Scalable distribution within a niche" />
            </div>
          </section>
        </div>
      </section>

      {/* How Distribution Works Section */}
      <main className="w-[90rem] bg-[#f7fafd] flex flex-col items-center py-[6.125rem] px-[6.875rem] box-border gap-[4.25rem] text-center text-[1rem] text-[#0bc111] font-abel lg:pt-[4rem] lg:pb-[4rem] lg:box-border mq750:gap-[2.125rem] mq750:py-[2.625rem] mq750:px-[3.438rem] mq750:box-border mq450:gap-[1.063rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
        <div className="self-stretch flex flex-col items-center gap-[3rem] mq750:gap-[1.5rem]">
          <div className="w-[51.25rem] overflow-hidden flex flex-col items-center gap-[1.5rem]">
            <h2 className="m-0 self-stretch relative text-[3rem] leading-[3.625rem] font-bold font-[inherit] text-[#1a2530] mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
              How Distribution Works
            </h2>
          </div>

          <div className="self-stretch flex flex-col items-center gap-[2.5rem] text-left text-[2rem] text-[#1a2530] mq750:gap-[1.25rem]">
            <div className="w-[40rem] flex flex-col items-center justify-center gap-[0.75rem]">
              <h2 className="m-0 relative text-[length:inherit] leading-[2.375rem] font-bold font-[inherit] mq1050:text-[1.625rem] mq1050:leading-[1.875rem] mq450:text-[1.188rem] mq450:leading-[1.438rem]">
                When you publish:
              </h2>
              <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d565f] text-center">
                Your content enters the distribution system instantly.
              </div>
            </div>

            <section className="w-[40rem] flex flex-col items-center relative isolate gap-[2rem] text-left text-[2rem] text-[#1a8cd5] font-proxima mq750:gap-[1rem]">
              <DistributionStep
                number="1"
                title="Your content is deployed across selected domains"
                description="It is automatically pushed to relevant sites in the network."
              />
              <DistributionStep
                number="2"
                title="Each placement is uniquely hosted"
                description="Every domain hosts its own separate version of the content."
              />
              <DistributionStep
                number="3"
                title="Links are embedded naturally within content"
                description="Links are placed contextually inside the article body."
              />
              <DistributionStep
                number="4"
                title="Pages go live within ~1 hour"
                description="Content is published and accessible quickly after deployment."
              />
            </section>
          </div>
        </div>

        {/* Each placement is: */}
        <section className="self-stretch rounded-[20px] bg-[#0461c3] flex flex-col items-center py-[3rem] px-[4.25rem] box-border gap-[2.5rem] max-w-full text-center text-[2rem] text-color-white font-proxima mq750:gap-[1.5rem] mq750:py-[2.625rem] mq750:px-[2.125rem] mq750:box-border mq450:px-[1.25rem] mq450:box-border">
          <h2 className="m-0 relative text-[length:inherit] leading-[2.375rem] font-bold font-[inherit] mq1050:text-[1.625rem] mq1050:leading-[1.875rem] mq450:text-[1.188rem] mq450:leading-[1.438rem]">
            Each placement is:
          </h2>
          <div className="self-stretch grid grid-cols-3 gap-[1.25rem] text-left text-[1.125rem] mq750:grid-cols-1">
            {eachPlacementTags.map((tag, index) => (
              <div
                key={index}
                className="rounded-[12px] bg-[rgba(255,255,255,0.1)] flex items-center p-[1.25rem] box-border gap-[0.75rem]"
              >
                <Image
                  className="h-[1.5rem] w-[1.5rem] relative shrink-0"
                  width={24}
                  height={24}
                  sizes="100vw"
                  alt=""
                  src="/diamond-sharp.svg"
                />
                <b className="flex-1 relative leading-[1.5rem] font-semibold">
                  {tag}
                </b>
              </div>
            ))}
          </div>
          <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[rgba(238,238,238,0.8)]">
            Distribution is fully system-controlled — not dependent on manual
            outreach or publisher approval workflows.
          </div>
        </section>
      </main>

      {/* Explore Domains Section */}
      <section className="self-stretch bg-color-white flex flex-col items-start py-[6.125rem] px-[6.875rem] box-border gap-[3rem] max-w-full text-left text-[3rem] text-[#1a2530] font-abel mq1050:pt-[4rem] mq1050:pb-[4rem] mq1050:box-border mq750:gap-[1.5rem] mq750:px-[3.438rem] mq750:box-border mq450:pt-[2.625rem] mq450:px-[1.25rem] mq450:pb-[2.625rem] mq450:box-border">
        <div className="self-stretch flex items-start gap-[4.25rem] max-w-full lg:flex-wrap mq750:gap-[2.125rem] mq450:gap-[1.063rem]">
          <h2 className="m-0 w-[33.75rem] relative text-[length:inherit] leading-[3.625rem] font-bold font-[inherit] inline-block shrink-0 max-w-full lg:flex-1 mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq1050:min-w-full mq450:text-[1.813rem] mq450:leading-[2.188rem]">
            Explore domains across the network
          </h2>
          <div className="flex-1 flex flex-col items-start min-w-[20.813rem] text-[1.125rem] text-[#4d565f] font-proxima mq750:min-w-full">
            <div className="self-stretch relative leading-[1.75rem]">
              Preview example domains from different industry categories within
              the Wirero infrastructure.
            </div>
          </div>
        </div>

        <div className="self-stretch flex flex-col items-start gap-[2rem]">
          {domainNetworks.map((network, index) => (
            <div
              key={index}
              className="self-stretch flex flex-col items-start gap-[1.25rem]"
            >
              <h3 className="m-0 relative text-[1.5rem] leading-[1.875rem] font-bold font-[inherit] text-[#1a2530] mq450:text-[1.375rem] mq450:leading-[1.75rem]">
                {network.name}
              </h3>
              <div className="self-stretch grid grid-cols-4 gap-[1.25rem] mq1050:grid-cols-2 mq450:grid-cols-1">
                {network.domains.map((domain, i) => (
                  <DomainCard key={i} name={domain.name} url={domain.url} />
                ))}
              </div>
            </div>
          ))}
        </div>

        <Link
          href="/contact"
          className="cursor-pointer [border:none] py-[1rem] px-[2.5rem] bg-[#0461c3] h-[3.5rem] rounded-[8px] flex items-center justify-center box-border gap-[0.5rem] no-underline hover:bg-[#0354a8] transition-colors"
        >
          <div className="relative text-[1rem] leading-[1.25rem] font-semibold font-proxima text-color-white text-center shrink-0">
            View Full List
          </div>
          <Image
            className="h-[1rem] w-[1rem] relative shrink-0"
            width={16}
            height={16}
            sizes="100vw"
            alt=""
            src="/arrow-right1.svg"
          />
        </Link>
      </section>

      {/* Domain Characteristics Section */}
      <section className="self-stretch bg-[#12171c] flex flex-col items-center py-[6.125rem] px-[6.875rem] box-border gap-[3rem] max-w-full text-center text-[3rem] text-[#eee] font-abel mq1050:pt-[4rem] mq1050:pb-[4rem] mq1050:box-border mq750:gap-[1.5rem] mq750:px-[3.438rem] mq750:box-border mq450:pt-[2.625rem] mq450:px-[1.25rem] mq450:pb-[2.625rem] mq450:box-border">
        <div className="w-[60rem] max-w-full overflow-hidden flex flex-col items-center gap-[1rem]">
          <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[3.625rem] font-bold font-[inherit] mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
            Domain Characteristics
          </h2>
          <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[rgba(238,238,238,0.8)]">
            Transparency over hype.
          </div>
        </div>

        <div className="self-stretch grid grid-cols-2 gap-[1.5rem] text-left text-[1.25rem] mq750:grid-cols-1">
          {domainCharacteristics.map((item, index) => (
            <FeatureItem
              key={index}
              icon="/solar-global-bold.svg"
              title={item.title}
              description={item.description}
              className="rounded-[16px] bg-[#181f25] border-[#2d3640] border-solid border-[1px] p-[1.5rem] box-border"
              badgeClassName="rounded-[10px] bg-[rgba(26,140,213,0.1)]"
              titleColor="text-[#eee]"
              descriptionColor="text-[rgba(238,238,238,0.7)]"
            />
          ))}
        </div>
      </section>

      {/* Control Distribution Your Way Section */}
      <section className="self-stretch bg-color-white flex flex-col items-center py-[6.125rem] px-[6.875rem] box-border gap-[4.25rem] max-w-full text-center text-[3rem] text-[#1a2530] font-abel mq1050:pt-[4rem] mq1050:pb-[4rem] mq1050:box-border mq750:gap-[2.125rem] mq750:px-[3.438rem] mq750:box-border mq450:gap-[1.063rem] mq450:pt-[2.625rem] mq450:px-[1.25rem] mq450:pb-[2.625rem] mq450:box-border">
        <div className="w-[51.25rem] max-w-full overflow-hidden flex flex-col items-center gap-[1.5rem]">
          <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[3.625rem] font-bold font-[inherit] mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
            Control Distribution Your Way
          </h2>
          <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d565f]">
            Choose industries, placement volume, and deployment structure with
            full control over every campaign.
          </div>
        </div>

        <div className="self-stretch flex items-center justify-center gap-[4.25rem] max-w-full lg:flex-wrap mq750:gap-[2.125rem]">
          {/* Left visual */}
          <div className="h-[20rem] w-[24rem] relative max-w-full shrink-0 mq450:scale-[0.85]">
            {/* Decorative green dots */}
            <div className="absolute top-[6rem] left-[0rem] grid grid-cols-5 gap-[0.625rem]">
              {Array.from({ length: 25 }).map((_, i) => (
                <div
                  key={i}
                  className="h-[0.375rem] w-[0.375rem] rounded-full bg-[#0bc111]"
                />
              ))}
            </div>

            {/* Gray background card */}
            <div className="absolute top-[1.25rem] left-[4rem] rounded-[20px] bg-[#e2e5e9] w-[13rem] h-[17rem]"></div>

            {/* White placement card */}
            <div className="absolute top-[3.5rem] left-[10.5rem] w-[12.5rem] shadow-[0px_8px_24px_rgba(26,37,48,0.12)] rounded-[12px] bg-color-white box-border flex items-center gap-[0.75rem] py-[0.875rem] px-[1rem] z-[3]">
              <div className="rounded-[8px] bg-[rgba(4,97,195,0.1)] flex items-center justify-center p-[0.5rem] shrink-0">
                <Image
                  className="h-[1.25rem] w-[1.25rem] relative"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                  src="/stack-fill.svg"
                />
              </div>
              <div className="flex flex-col items-start text-left">
                <b className="relative text-[1.125rem] leading-[1.5rem] font-proxima text-[#1a2530]">
                  1–1000
                </b>
                <div className="relative text-[0.875rem] leading-[1.25rem] font-proxima text-[#4d565f]">
                  Placement Range
                </div>
              </div>
            </div>

            {/* Blue distribution card */}
            <div className="absolute top-[7.5rem] left-[11.5rem] w-[11rem] shadow-[0px_12px_32px_rgba(4,97,195,0.32)] rounded-[16px] bg-[#0461c3] box-border flex flex-col items-center py-[1.25rem] px-[1.25rem] gap-[0.75rem] z-[2]">
              <div className="self-stretch flex items-center gap-[0.5rem]">
                <div className="flex-1 h-[0.5rem] rounded-full bg-color-white"></div>
                <div className="h-[0.625rem] w-[0.625rem] rounded-full bg-[#12171c] shrink-0"></div>
              </div>
              <b className="relative text-[1.5rem] leading-[1.875rem] font-proxima text-color-white">
                100%
              </b>
              <div className="self-stretch relative text-[0.875rem] leading-[1.25rem] font-proxima text-[rgba(255,255,255,0.8)] text-center">
                System-Controlled Distribution
              </div>
            </div>
          </div>

          {/* Right checklist */}
          <div className="flex-1 flex flex-col items-start gap-[1.75rem] min-w-[20rem] text-left text-[1.875rem] mq750:min-w-full">
            <h2 className="m-0 relative text-[length:inherit] leading-[2.375rem] font-bold font-[inherit] mq450:text-[1.375rem] mq450:leading-[1.75rem]">
              You decide
            </h2>
            <div className="self-stretch flex flex-col items-start gap-[1.25rem] text-[1.125rem] text-[#1a2530] font-proxima">
              {controlChecklist.map((item, index) => (
                <div key={index} className="flex items-center gap-[0.75rem]">
                  <Image
                    className="h-[1.25rem] w-[1.25rem] relative shrink-0"
                    width={20}
                    height={20}
                    sizes="100vw"
                    alt=""
                    src="/check-check.svg"
                  />
                  <div className="relative leading-[1.75rem] font-semibold">
                    {item}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaBanner
        title="Access the full network and start publishing instantly"
        buttonText="Start Publishing"
        buttonHref="/contact"
      />

      <Footer />
    </div>
  );
};

export default Network;
