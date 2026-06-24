import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/footer";

const Agency: NextPage = () => {
  const noNeedItems = [
    "Build publisher relationships",
    "Manage outreach",
    "Negotiate placements",
    "Coordinate fulfillment manually",
  ];

  const howAgenciesUse = [
    {
      icon: "/solar-global-bold2.svg",
      title: "Multi-domain publishing",
      description:
        "Wirero is designed to remove unnecessary steps from the distribution process. From submission to distribution, everything is streamlined so you can publish content quickly without dealing with complex workflows or manual coordination.",
    },
    {
      icon: "/ic-layers-48px.svg",
      title: "Industry-specific distribution",
      description:
        "Skip the time-consuming process of contacting individual websites or managing multiple submissions. Wirero provides direct access to a distribution network, allowing you to publish across platforms without manual outreach.",
    },
    {
      icon: "/gis-layer-upload.svg",
      title: "Rapid turnaround (<1 hour)",
      description:
        "Whether you publish occasionally or on a regular schedule, Wirero supports a consistent workflow. Manage and distribute content in a structured way without starting from scratch every time.",
    },
  ];

  const useCases = [
    {
      image: "/image-137@2x.png",
      title: "PR Agencies",
      description:
        "Deliver high-volume distribution without increasing operational workload.",
    },
    {
      image: "/image-1372@2x.png",
      title: "Crypto & Forex Marketing Firms",
      description: "Deploy frequent campaigns across relevant niche domains.",
    },
    {
      image: "/image-1371@2x.png",
      title: "News Platforms & Blogs",
      description: "Extend your offering with â€œexpanded distributionâ€ packages.",
    },
  ];

  const integrationOptions = [
    {
      title: "Manual Publishing",
      heading: "On-demand campaign distribution",
      description:
        "Upload content, select distribution targets, and launch campaigns whenever needed through a simple centralized workflow.",
      bestFor:
        "Agencies managing custom client campaigns or one-time announcements.",
      image: "/Rectangle-111@2x.png",
    },
    {
      title: "RSS Automation",
      heading: "Automate continuous publishing",
      description:
        "Connect your RSS feed or publishing system to distribute content automatically without manual uploads or repetitive tasks.",
      bestFor:
        "News platforms, blogs, media companies, and high-frequency publishing teams.",
      image: "/Rectangle-111@2x.png",
    },
    {
      title: "Bulk Distribution",
      heading: "Manage multiple campaigns at scale",
      description:
        "Publish and manage several client campaigns simultaneously from a single dashboard designed for operational efficiency.",
      bestFor: "PR agencies, reseller platforms, and enterprise distribution teams.",
      image: "/Rectangle-111@2x.png",
    },
  ];

  const whyItWorks = [
    {
      title: "No dependency on external publishers",
      description:
        "Run campaigns without relying on manual outreach or publisher coordination. Publish faster with a system built for direct execution.",
    },
    {
      title: "No per-placement costs",
      description:
        "Avoid unpredictable pricing tied to individual placements. With a streamlined distribution model, you can manage campaigns more efficiently while protecting your margins.",
    },
    {
      title: "Instant scalability",
      description:
        "Handle growing client demand without increasing operational complexity. Launch multiple campaigns simultaneously through a single distribution system built for volume.",
    },
    {
      title: "Predictable pricing",
      description:
        "Keep your distribution costs consistent and easier to forecast. This makes it simpler to build recurring packages, retainers, and long-term client offerings.",
    },
    {
      title: "Centralized control",
      description:
        "Manage distribution, campaigns, and publishing workflows from one place. Gain better visibility, faster execution, and improved operational efficiency across all client accounts.",
    },
    {
      title: "Faster Turnaround",
      description:
        "Distribute content quickly with infrastructure optimized for rapid publishing and high-frequency campaign delivery.",
    },
  ];

  const youControl = [
    "Pricing to your clients",
    "Packaging and bundling",
    "Distribution scope",
  ];

  return (
    <div className="w-full relative bg-color-white overflow-hidden flex flex-col items-start leading-[normal] tracking-[normal]">
      {/* Hero Section */}
      <section className="self-stretch bg-color-white flex items-center py-[4.25rem] px-[6.875rem] box-border gap-[4.25rem] max-w-full mq1050:flex-wrap mq750:gap-[2.125rem] mq750:py-[2.75rem] mq750:px-[3.438rem] mq750:box-border mq450:gap-[1.063rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
        <section className="flex-1 overflow-hidden flex flex-col items-start gap-[1.5rem] min-w-[28.938rem] text-left text-[1rem] text-[#0bc111] font-abel mq750:min-w-full">
          <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase">
            AGENCY
          </b>
          <div className="self-stretch flex flex-col items-start gap-[1rem] text-[3.5rem] text-[#1a2530]">
            <b className="self-stretch relative leading-[4.25rem] mq1050:text-[2.813rem] mq1050:leading-[3.375rem] mq450:text-[2.125rem] mq450:leading-[2.563rem]">
              Expand your PR offering without expanding your costs
            </b>
            <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d565f]">
              Give your clients large-scale multi-domain distribution through a
              dedicated backend infrastructure built for agencies, reseller
              platforms, and high-volume campaigns.
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-[1rem] px-[2.5rem] bg-[#0461c3] h-[3.5rem] rounded-[8px] flex items-center justify-center box-border gap-[0.5rem]">
            <div className="relative text-[1rem] leading-[1.25rem] font-semibold font-proxima text-color-white text-center shrink-0">
              Become a Partner
            </div>
            <Image
              className="h-[1rem] w-[1rem] relative shrink-0"
              width={16}
              height={16}
              sizes="100vw"
              alt=""
              src="/arrow-right1.svg"
            />
          </button>
        </section>
        <Image
          className="w-[27.5rem] relative rounded-[20px] max-h-full object-cover max-w-full mq1050:flex-1"
          loading="lazy"
          width={440}
          height={495}
          sizes="100vw"
          alt=""
          src="/IMG1@2x.png"
        />
      </section>

      {/* Built for agencies Section */}
      <section className="self-stretch flex flex-col items-start pt-[4.25rem] px-[6.875rem] pb-[6.125rem] box-border gap-[3rem] max-w-full mq750:gap-[1.5rem] mq750:pt-[2.75rem] mq750:px-[3.438rem] mq750:pb-[4rem] mq750:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
        <section className="self-stretch overflow-hidden flex flex-col items-start gap-[1.5rem] max-w-full text-left">
          <div className="self-stretch flex items-start gap-[3rem] max-w-full text-[3rem] text-[#1a2530] mq1350:flex-wrap mq750:gap-[1.5rem]">
            <h1 className="m-0 w-[33.75rem] relative text-[length:inherit] leading-[3.625rem] font-bold font-abel inline-block shrink-0 max-w-full mq1350:w-full mq1350:min-w-full mq1050:flex-1 mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq1050:min-w-full mq450:text-[1.813rem] mq450:leading-[2.188rem]">
              Built for agencies and distribution platforms
            </h1>
            <div className="flex-1 flex flex-col items-start gap-[1.25rem] min-w-[25.688rem] text-[1.125rem] text-[#4d565f] font-proxima mq1350:min-w-full mq750:min-w-full">
              <div className="self-stretch relative leading-[1.75rem]">
                If you already offer PR, SEO, media placement, or content
                distribution services, Wirero becomes your backend publishing
                infrastructure.
              </div>
            </div>
          </div>
        </section>

        {/* No need to: */}
        <section className="self-stretch bg-color-white flex flex-col items-start gap-[1.5rem]">
          <div className="self-stretch overflow-hidden flex flex-col items-start gap-[1.5rem]">
            <h2 className="m-0 self-stretch relative text-[2.25rem] leading-[2.625rem] font-semibold font-proxima text-[#1a2530] text-left mq1050:text-[1.813rem] mq1050:leading-[2.125rem] mq450:text-[1.375rem] mq450:leading-[1.563rem]">
              No need to:
            </h2>
            <div className="self-stretch grid grid-cols-4 gap-[1rem] mq1050:grid-cols-2 mq750:grid-cols-2 mq450:grid-cols-1">
              {noNeedItems.map((item, index) => (
                <div
                  key={index}
                  className="rounded-[12px] bg-[#f7fafd] overflow-hidden flex items-center p-[1.25rem] box-border gap-[0.75rem]"
                >
                  <div className="h-[3rem] w-[3rem] rounded-[12px] bg-[#eaf5fb] flex items-center justify-center p-[0.625rem] box-border shrink-0">
                    <Image
                      className="h-[1.75rem] w-[1.75rem] relative"
                      width={28}
                      height={28}
                      sizes="100vw"
                      alt=""
                      src="/rocket-sharp.svg"
                    />
                  </div>
                  <b className="flex-1 relative text-[1.125rem] leading-[1.5rem] font-proxima text-[#1a2530]">
                    {item}
                  </b>
                </div>
              ))}
            </div>
          </div>
          <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d565f]">
            You get instant Infrastructure ready to deploy at scale.
          </div>
        </section>
      </section>

      {/* How Agencies Use Wirero */}
      <section className="self-stretch bg-[#f7fafd] flex flex-col items-center py-[6.125rem] px-[6.875rem] box-border gap-[4.25rem] text-center max-w-full mq750:gap-[2.125rem] mq750:py-[4rem] mq750:px-[3.438rem] mq750:box-border mq450:gap-[1.063rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
        <div className="w-[60rem] max-w-full overflow-hidden flex flex-col items-center gap-[1.5rem]">
          <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase text-[#0bc111] font-abel">
            HOW AGENCIES USE WIRERO
          </b>
          <h1 className="m-0 self-stretch relative text-[3rem] leading-[3.625rem] font-bold font-abel text-[#1a2530] mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
            Sell distribution packages at scale
          </h1>
        </div>
        <section className="self-stretch flex flex-col items-start gap-[2.5rem] text-left mq750:gap-[1.25rem]">
          <div className="self-stretch flex items-start flex-wrap content-start gap-[2.5rem] mq750:gap-[1.25rem]">
            {howAgenciesUse.map((item, index) => (
              <div
                key={index}
                className="flex-1 overflow-hidden flex items-start gap-[1.25rem] min-w-[17.813rem] mq450:flex-wrap mq450:min-w-full"
              >
                <div className="h-[4.25rem] w-[4.25rem] rounded-[16px] bg-[#eaf5fb] flex items-center justify-center p-[1rem] box-border shrink-0">
                  <Image
                    className="h-[2.25rem] w-[2.25rem] relative object-contain"
                    loading="lazy"
                    width={36}
                    height={36}
                    sizes="100vw"
                    alt=""
                    src={item.icon}
                  />
                </div>
                <div className="flex-1 flex flex-col items-start gap-[1rem] min-w-[11.875rem]">
                  <h3 className="m-0 self-stretch relative text-[1.5rem] leading-[1.875rem] font-bold font-abel text-[#1a2530] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                    {item.title}
                  </h3>
                  <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d565f]">
                    {item.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* Increase margins instantly */}
      <section className="self-stretch rounded-[24px] bg-color-white flex flex-col items-center py-[6.125rem] px-[6.875rem] box-border max-w-full mq750:gap-[1.5rem] mq750:py-[4rem] mq750:px-[3.438rem] mq750:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
        <div className="w-full rounded-[20px] bg-[#eef5fb] overflow-hidden flex items-center p-[3.75rem] box-border gap-[3.75rem] max-w-full mq1350:flex-wrap mq1050:gap-[1.875rem] mq1050:pl-[1.875rem] mq1050:pr-[1.875rem] mq1050:box-border mq750:gap-[0.938rem] mq450:pt-[2.438rem] mq450:pb-[2.438rem] mq450:box-border">
          <section className="flex-1 flex flex-col items-start gap-[1.25rem] min-w-[19.5rem]">
            <div className="self-stretch overflow-hidden flex flex-col items-start gap-[1.5rem]">
              <div className="self-stretch flex flex-col items-start gap-[1rem] text-left text-[3rem] text-[#1a2530]">
                <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[3.625rem] font-bold font-abel mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
                  Increase margins instantly
                </h1>
              </div>
            </div>
            <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d565f] text-left">
              If you already offer PR, SEO, media placement, or content
              distribution services, Wirero becomes your backend publishing
              infrastructure.
            </div>
          </section>
          <section className="w-[35rem] shadow-[-2px_2px_16px_rgba(26,_38,_48,_0.06)] rounded-[16px] bg-color-white overflow-hidden shrink-0 flex flex-col items-start p-[3rem] box-border relative isolate gap-[1.5rem] max-w-full text-left mq1350:flex-1 mq1350:min-w-full mq1050:flex-1 mq750:pl-[1.5rem] mq750:pr-[1.5rem] mq750:box-border mq1050:min-w-full">
            <div className="self-stretch flex items-center gap-[0.75rem] z-[2] shrink-0 mq750:flex-wrap">
              <div className="rounded-[48px] bg-[#eef5fb] flex items-center justify-center p-[0.625rem]">
                <Image
                  className="w-[2.25rem] relative max-h-full"
                  loading="lazy"
                  width={36}
                  height={36}
                  sizes="100vw"
                  alt=""
                  src="/settings-2.svg"
                />
              </div>
              <h2 className="m-0 flex-1 relative text-[1.75rem] leading-[2.125rem] font-bold font-abel text-[#1a2530] min-w-[7.063rem] mq450:text-[1.375rem] mq450:leading-[1.688rem]">
                You control
              </h2>
            </div>
            <div className="self-stretch flex flex-col items-start gap-[0.75rem] z-[3] shrink-0 text-[1.25rem]">
              {youControl.map((item, index) => (
                <div
                  key={index}
                  className="self-stretch flex items-center gap-[0.75rem]"
                >
                  <Image
                    className="w-[1.25rem] relative max-h-full"
                    loading="lazy"
                    width={20}
                    height={20}
                    sizes="100vw"
                    alt=""
                    src="/check-check.svg"
                  />
                  <h3 className="m-0 flex-1 relative text-[length:inherit] leading-[1.75rem] font-semibold font-proxima text-transparent !bg-clip-text [background:linear-gradient(#1a2530,_#1a2530),_linear-gradient(180deg,_#0461c3,_#0bc111)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent] mq450:text-[1rem] mq450:leading-[1.375rem]">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
            <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d565f] z-[4] shrink-0">
              Wirero stays in the background as your execution layer.
            </div>
          </section>
        </div>
      </section>

      {/* Use Cases (Dark) */}
      <section className="self-stretch bg-[#12171c] flex flex-col items-center py-[6.125rem] px-[6.875rem] box-border gap-[3rem] text-center max-w-full mq750:gap-[1.5rem] mq750:py-[4rem] mq750:px-[3.438rem] mq750:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
        <div className="w-[51.25rem] max-w-full overflow-hidden flex flex-col items-center gap-[1.5rem]">
          <h2 className="m-0 self-stretch relative text-[3rem] leading-[3.625rem] font-bold font-abel text-[#eee] mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
            Use Cases
          </h2>
        </div>
        <section className="self-stretch flex flex-col items-start gap-[2.5rem] text-left mq750:gap-[1.25rem]">
          <div className="self-stretch flex items-start flex-wrap content-start gap-[2.5rem] mq750:gap-[1.25rem]">
            {useCases.map((useCase, index) => (
              <div
                key={index}
                className="flex-1 overflow-hidden flex flex-col items-start gap-[1.5rem] min-w-[17.813rem] mq450:min-w-full"
              >
                <div className="self-stretch h-[12.5rem] rounded-[16px] bg-[#181f25] border-[rgba(122,131,140,0.2)] border-solid border-[1px] box-border flex flex-col items-center justify-center gap-[0.75rem]">
                  <Image
                    className="w-[10rem] relative max-h-full object-cover shrink-0"
                    loading="lazy"
                    width={160}
                    height={160}
                    sizes="100vw"
                    alt=""
                    src={useCase.image}
                  />
                </div>
                <div className="self-stretch rounded-[16px] flex flex-col items-start py-[0rem] px-[0.25rem] gap-[0.75rem]">
                  <h3 className="m-0 self-stretch relative text-[1.5rem] leading-[1.875rem] font-bold font-abel text-[#eee] mq450:text-[1.188rem] mq450:leading-[1.5rem]">
                    {useCase.title}
                  </h3>
                  <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[rgba(238,238,238,0.8)]">
                    {useCase.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </section>

      {/* Integration Options */}
      <main className="self-stretch bg-[#f7fafd] flex flex-col items-center py-[6.125rem] px-[6.875rem] box-border gap-[3rem] max-w-full text-center mq1050:pt-[4rem] mq1050:pb-[4rem] mq1050:px-[3.438rem] mq1050:box-border mq750:gap-[1.5rem] mq750:py-[2.625rem] mq750:px-[3.438rem] mq750:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
        <div className="w-[51.25rem] max-w-full overflow-hidden flex flex-col items-center gap-[1.5rem]">
          <h2 className="m-0 self-stretch relative text-[3rem] leading-[3.625rem] font-bold font-abel text-[#1a2530] mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
            Integration Options
          </h2>
        </div>
        <div className="self-stretch flex flex-col items-start gap-[4.25rem] max-w-full mq750:gap-[2.125rem] mq450:gap-[1.063rem]">
          {integrationOptions.map((option, index) => (
            <section
              key={index}
              className={`self-stretch overflow-hidden flex items-center gap-[3rem] max-w-full text-left mq1050:flex-wrap mq750:gap-[1.5rem] ${
                index % 2 === 1 ? "mq1050:flex-wrap-reverse" : ""
              }`}
            >
              <div className="flex-1 rounded-[16px] flex flex-col items-start py-[1.25rem] px-[0rem] box-border gap-[1.75rem] min-w-[23.25rem] mq750:min-w-full">
                <div className="self-stretch flex items-center gap-[0.75rem] mq750:flex-wrap">
                  <Image
                    className="w-[2rem] relative max-h-full"
                    loading="lazy"
                    width={32}
                    height={32}
                    sizes="100vw"
                    alt=""
                    src="/target-fill.svg"
                  />
                  <h2 className="m-0 flex-1 relative text-[2rem] leading-[2.375rem] font-bold font-abel text-[#1a2530] min-w-[11.625rem] mq1050:text-[1.625rem] mq1050:leading-[1.875rem] mq450:text-[1.188rem] mq450:leading-[1.438rem]">
                    {option.title}
                  </h2>
                </div>
                <div className="self-stretch flex flex-col items-start gap-[1.25rem]">
                  <div className="self-stretch flex flex-col items-start gap-[0.5rem]">
                    <h3 className="m-0 self-stretch relative text-[1.375rem] leading-[1.75rem] font-semibold font-proxima text-[#1a2530] mq450:text-[1.125rem] mq450:leading-[1.375rem]">
                      {option.heading}
                    </h3>
                    <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d565f]">
                      {option.description}
                    </div>
                  </div>
                  <div className="self-stretch rounded-[16px] bg-[#eef5fb] flex flex-col items-start py-[1rem] px-[1.25rem] gap-[0.25rem]">
                    <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-semibold font-proxima text-[#1a2530]">
                      Best for:
                    </div>
                    <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d565f]">
                      {option.bestFor}
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-[22.5rem] w-[37.5rem] rounded-[20px] [background:linear-gradient(180deg,_#d4e9f7,_#eff5fb)] flex flex-col items-center justify-end max-w-full mq1050:flex-1 mq1050:min-w-full overflow-hidden">
                <Image
                  className="w-full max-w-[28.938rem] relative rounded-[16px] max-h-full object-cover mq1050:self-stretch mq1050:w-full"
                  loading="lazy"
                  width={463}
                  height={360}
                  sizes="100vw"
                  alt=""
                  src={option.image}
                />
              </div>
            </section>
          ))}
        </div>
      </main>

      {/* Why It Works */}
      <section className="self-stretch bg-color-white flex flex-col items-center py-[6.125rem] px-[6.875rem] box-border gap-[4.25rem] max-w-full text-center mq1050:pt-[4rem] mq1050:pb-[4rem] mq1050:px-[3.438rem] mq1050:box-border mq750:gap-[2.125rem] mq750:py-[2.625rem] mq750:px-[3.438rem] mq750:box-border mq450:gap-[1.063rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
        <section className="self-stretch overflow-hidden flex flex-col items-start gap-[1.5rem] max-w-full text-left text-[1rem] text-[#0bc111]">
          <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase font-abel">
            WHY IT WORKS
          </b>
          <div className="self-stretch flex items-start gap-[4.25rem] max-w-full text-[3rem] text-[#1a2530] mq1350:flex-wrap mq750:gap-[2.125rem] mq450:gap-[1.063rem]">
            <h1 className="m-0 w-[40rem] relative text-[length:inherit] leading-[3.625rem] font-bold font-abel inline-block shrink-0 max-w-full mq1350:w-full mq1350:min-w-full mq1050:flex-1 mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq1050:min-w-full mq450:text-[1.813rem] mq450:leading-[2.188rem]">
              Reliable infrastructure built for scalable PR distribution
            </h1>
            <div className="flex-1 relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d565f] inline-block min-w-[20.813rem] mq1350:min-w-full">
              Wirero gives agencies and resellers a faster, more controllable
              way to manage large-scale distribution without relying on
              fragmented publisher relationships or costly manual operations.
            </div>
          </div>
        </section>
        <div className="self-stretch grid grid-cols-3 gap-[1.75rem] text-left mq750:grid-cols-2 mq450:grid-cols-1">
          {whyItWorks.map((item, index) => (
            <div
              key={index}
              className="rounded-[20px] bg-color-white border-[#e2e5e9] border-solid border-[1px] overflow-hidden flex flex-col items-start p-[1.5rem] gap-[1.25rem]"
            >
              <div className="rounded-[16px] flex items-center justify-center p-[0.25rem]">
                <Image
                  className="w-[3rem] relative max-h-full"
                  width={48}
                  height={48}
                  sizes="100vw"
                  alt=""
                  src="/solar-global-bold3.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start gap-[1rem]">
                <h3 className="m-0 self-stretch relative text-[1.5rem] leading-[1.875rem] font-bold font-abel text-[#1a2530]">
                  {item.title}
                </h3>
                <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d565f]">
                  {item.description}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="self-stretch flex flex-col items-start pt-[2.5rem] px-[6.875rem] pb-[6.125rem] box-border mq750:pt-[1.625rem] mq750:px-[3.438rem] mq750:pb-[4rem] mq750:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
        <div className="self-stretch min-h-[22.5rem] rounded-[24px] bg-[#0461c3] overflow-hidden flex items-center justify-center py-[4.25rem] px-[3rem] relative isolate text-center mq750:min-h-[18rem] mq750:py-[3.25rem] mq750:px-[2rem] mq450:min-h-0 mq450:py-[2.5rem] mq450:px-[1.25rem]">
          <div className="absolute left-[-7rem] top-[-5rem] z-[0] h-[22rem] w-[30rem] rounded-full bg-[#1a8cd5] opacity-60 blur-[120px]" />
          <div className="absolute bottom-[-6rem] right-[10%] z-[0] h-[14rem] w-[24rem] rounded-full bg-[#1a8cd5] opacity-45 blur-[110px]" />
          <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_18%_35%,_rgba(26,140,213,0.45),_transparent_28%),radial-gradient(circle_at_78%_83%,_rgba(26,140,213,0.38),_transparent_30%)]" />
          <section className="relative z-[2] flex w-full max-w-[52rem] flex-col items-center gap-[1.75rem] text-center text-[3rem] text-color-white">
            <div className="self-stretch flex flex-col items-center gap-[0.875rem]">
              <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[3.625rem] font-bold font-proxima mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
                Turn Distribution into a Scalable Revenue Stream
              </h1>
              <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[rgba(238,238,238,0.82)]">
                Start using Wirero as your backend infrastructure.
              </div>
            </div>
            <Link
              href="/contact"
              className="cursor-pointer [border:none] py-[1rem] px-[2.5rem] bg-color-white h-[3.5rem] rounded-[8px] flex items-center justify-center box-border gap-[0.625rem] no-underline shadow-[0px_8px_24px_rgba(0,0,0,0.08)] hover:bg-[#f7fafd] transition-colors"
            >
              <div className="relative text-[1rem] leading-[1.25rem] font-semibold font-proxima text-[#1a2530] text-center shrink-0">
                Get Started
              </div>
              <Image
                className="h-[1.125rem] w-[1.125rem] relative shrink-0 brightness-0"
                width={18}
                height={18}
                sizes="100vw"
                alt=""
                src="/arrow-right1.svg"
              />
            </Link>
          </section>
        </div>
      </section>

      <Footer property1="Variant2" />
    </div>
  );
};

export default Agency;
