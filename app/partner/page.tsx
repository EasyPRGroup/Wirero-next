import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import Footer from "../../components/footer";

const Partner: NextPage = () => {

  const benefits = [
    {
      icon: "/solar-global-bold2.svg",
      title: "No infrastructure cost",
      description: "Use Wirero's existing network without building your own infrastructure.",
    },
    {
      icon: "/ic-layers-48px.svg",
      title: "Instant scalability",
      description: "Scale from 10 to 10,000 distributions without operational complexity.",
    },
    {
      icon: "/rocket-sharp.svg",
      title: "Increase margins",
      description: "Set your own pricing and keep the difference between cost and sale price.",
    },
    {
      icon: "/target-fill.svg",
      title: "Industry targeting",
      description: "Distribute across specific industry domains for targeted campaigns.",
    },
    {
      icon: "/gis-layer-upload.svg",
      title: "Unlimited campaigns",
      description: "Run as many campaigns as you need with no per-placement limits.",
    },
    {
      icon: "/settings-2.svg",
      title: "Centralized control",
      description: "Manage all client campaigns from a single dashboard.",
    },
  ];

  const packages = [
    {
      name: "Starter Distribution Package",
      description: "Essential distribution for smaller campaigns and testing",
      features: ["100 total placements/month", "Access to selected niche networks", "Standard reporting with CSV export", "Manual or RSS publishing options", "Average publishing time under 1 hour"],
      bestFor: "Small agencies and freelancers starting with distribution",
      isPopular: false,
    },
    {
      name: "Unlimited Distribution Package",
      description: "Full infrastructure access for agencies and high-volume publishing",
      features: ["Unlimited distributions", "Access to all 10 industry networks", "Publish across up to 1000 domains", "RSS automation included", "Full reporting access with CSV + PDF exports"],
      bestFor: "Agencies, platforms, and scaling brands",
      isPopular: true,
    },
    {
      name: "Banner Network Package",
      description: "Fixed banner placement across the entire domain network",
      features: ["Placement across 1000 domains", "Backlink included", "Persistent network-wide visibility", "Ideal for brand awareness campaigns"],
      bestFor: "High-volume visibility across the network",
      isPopular: false,
    },
  ];

  const idealPartners = [
    {
      icon: "/solar-global-bold2.svg",
      title: "PR Agencies",
    },
    {
      icon: "/ic-layers-48px.svg",
      title: "Marketing Agencies",
    },
    {
      icon: "/target-fill.svg",
      title: "Crypto / Forex firms",
    },
    {
      icon: "/rocket-sharp.svg",
      title: "SEO Agencies",
    },
    {
      icon: "/gis-layer-upload.svg",
      title: "Media platforms",
    },
  ];

  const integrationOptions = [
    {
      icon: "/settings-2.svg",
      title: "Manual publishing",
      description: "Upload content and launch campaigns on-demand",
    },
    {
      icon: "/target-fill.svg",
      title: "RSS automation",
      description: "Connect your feed for automatic distribution",
    },
    {
      icon: "/ic-layers-48px.svg",
      title: "Bulk distribution",
      description: "Manage multiple campaigns simultaneously",
    },
  ];

  const steps = [
    {
      number: "01",
      title: "Onboard",
      description: "Sign up and get access to the distribution dashboard",
    },
    {
      number: "02",
      title: "Package your services",
      description: "Create distribution packages that fit your clients",
    },
    {
      number: "03",
      title: "Sell to clients",
      description: "Offer distribution as part of your service suite",
    },
    {
      number: "04",
      title: "Execute instantly",
      description: "Launch campaigns through Wirero's infrastructure",
    },
    {
      number: "05",
      title: "Deliver reports",
      description: "Provide clients with distribution reports and analytics",
    },
  ];

  return (
    <div className="relative flex w-full min-w-0 flex-col items-stretch overflow-x-clip bg-color-white leading-[normal] tracking-[normal]">

      {/* 1. HERO SECTION */}
      <section id="hero" className="site-section-hero self-stretch bg-color-white">
        <div className="site-container flex items-center box-border gap-[4.25rem] max-w-full mq1050:flex-wrap mq800:gap-[2.5rem] mq450:gap-[2rem]">
          <section className="flex-1 overflow-hidden flex flex-col items-start gap-[1.5rem] min-w-0 max-w-full text-left text-[1rem] text-[#0bc111] font-proxima mq800:gap-[1.25rem] mq450:gap-[1rem]">
            <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase mq450:text-[0.875rem]">
              PARTNERSHIP
            </b>
            <div className="self-stretch flex flex-col items-start gap-[1rem] text-[3.5rem] text-[#1a2530] mq450:gap-[0.75rem]">
              <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[4.25rem] font-bold font-[inherit] mq1050:text-[2.5rem] mq1050:leading-[3rem] mq800:text-[2rem] mq800:leading-[2.5rem] mq450:text-[1.75rem] mq450:leading-[2.125rem]">
                Turn distribution into your revenue engine
              </h1>
              <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d565f] mq800:text-[1.063rem] mq800:leading-[1.625rem] mq450:text-[1rem] mq450:leading-[1.5rem]">
                Partner with Wirero and offer large-scale multi-domain publishing to your clients—without building infrastructure.
              </div>
            </div>
            <a
              href="#how-it-works"
              className="cursor-pointer [border:none] py-[1rem] px-[2.5rem] bg-transparent border-[#0461c3] border-solid border-[1px] h-[3.5rem] rounded-[8px] flex items-center justify-center box-border gap-[0.5rem] hover:bg-[#f7fafd] transition-colors mq450:w-full mq450:h-auto mq450:py-[0.875rem] mq450:px-[1.5rem] no-underline"
            >
              <div className="relative text-[1rem] leading-[1.25rem] font-semibold font-proxima text-[#0461c3] text-center shrink-0 mq450:text-[0.938rem]">
                See How It Works
              </div>
            </a>
          </section>
          <div className="w-[27.5rem] relative rounded-[20px] max-h-full max-w-full mq800:block mq1050:flex-1">
            <Image
              className="w-full h-full rounded-[20px] object-cover"
              loading="lazy"
              width={440}
              height={495}
              sizes="(max-width: 1050px) 50vw, 440px"
              alt="Partner with Wirero"
              src="/network-infrastructure.jpg"
            />
          </div>
        </div>
      </section>

      {/* 2. WHAT PARTNERSHIP MEANS (TwoColumnSection) */}
      <section className="site-section self-stretch bg-[#f7fafd]">
        <div className="site-container flex items-center gap-[3.75rem] max-w-full mq1050:flex-wrap mq750:gap-[1.875rem]">
          <section className="flex-1 flex flex-col items-start gap-[1.25rem] min-w-0 max-w-full">
            <div className="self-stretch overflow-hidden flex flex-col items-start gap-[1.5rem]">
              <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase text-[#0bc111] font-proxima">
                WHAT PARTNERSHIP MEANS
              </b>
              <div className="self-stretch flex flex-col items-start gap-[1rem] text-[3rem] text-[#1a2530]">
                <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[3.625rem] font-bold font-proxima mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
                  You sell, Wirero executes
                </h2>
              </div>
              <div className="self-stretch flex flex-col items-start gap-[1rem] text-[1.125rem] text-[#4d565f] font-proxima">
                <div className="self-stretch relative leading-[1.75rem]">
                  No need to build network or manage publishers. Wirero works as backend infrastructure that handles the heavy lifting while you focus on client relationships and growing your business.
                </div>
              </div>
            </div>
            <Link
              href="/contact"
              className="cursor-pointer [border:none] py-[1rem] px-[2.5rem] bg-[#0461c3] h-[3.5rem] rounded-[8px] flex items-center justify-center box-border gap-[0.5rem] hover:bg-[#0554af] transition-colors mq450:w-full mq450:h-auto mq450:py-[0.875rem] mq450:px-[1.5rem] no-underline"
            >
              <div className="relative text-[1rem] leading-[1.25rem] font-semibold font-proxima text-color-white text-center shrink-0 mq450:text-[0.938rem]">
                Start Partnership
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
          <div className="w-[35rem] h-[25rem] rounded-[20px] [background:linear-gradient(180deg,_#d4e9f7,_#eff5fb)] flex items-center justify-center max-w-full mq1050:flex-1 mq1050:min-w-full">
            <Image
              className="w-full max-w-[28.938rem] relative rounded-[16px] max-h-full object-cover"
              loading="lazy"
              width={463}
              height={360}
              sizes="100vw"
              alt="Wirero backend infrastructure"
              src="/wirero-distribute-content.jpg"
            />
          </div>
        </div>
      </section>

      {/* 3. HOW IT WORKS (StepSection) */}
      <section id="how-it-works" className="site-section self-stretch bg-color-white">
        <div className="site-container flex flex-col items-center box-border gap-[4.25rem] max-w-full text-center mq800:gap-[2.5rem] mq450:gap-[1.5rem]">
          <div className="w-full max-w-[60rem] min-w-0 overflow-hidden flex flex-col items-center gap-[1.5rem] mq450:gap-[1rem]">
            <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase text-[#0bc111] font-proxima mq450:text-[0.875rem] mq450:leading-[1.125rem]">
              HOW IT WORKS
            </b>
            <h2 className="m-0 self-stretch relative text-[3rem] leading-[3.625rem] font-bold font-proxima text-[#1a2530] mq1050:text-[2.25rem] mq1050:leading-[2.75rem] mq800:text-[2rem] mq800:leading-[2.5rem] mq450:text-[1.75rem] mq450:leading-[2.125rem]">
              Start earning in 5 simple steps
            </h2>
          </div>
          <div className="self-stretch flex flex-col items-start gap-[2.5rem] text-left mq800:gap-[2rem] mq450:gap-[1.5rem]">
            <div className="self-stretch grid grid-cols-5 gap-[1.5rem] mq1050:grid-cols-3 mq750:grid-cols-2 mq450:grid-cols-1">
              {steps.map((step, index) => (
                <div
                  key={index}
                  className="rounded-[20px] bg-[#f7fafd] overflow-hidden flex flex-col items-start p-[1.5rem] gap-[1rem] mq450:gap-[0.75rem] hover:shadow-[0px_4px_20px_rgba(26,37,48,0.08)] transition-shadow border-[1px] border-transparent hover:border-[#e2e5e9]"
                >
                  <div className="rounded-[16px] bg-[#0461c3] flex items-center justify-center p-[0.75rem]">
                    <h3 className="m-0 relative text-[1.5rem] leading-[1.875rem] font-bold font-proxima text-color-white">
                      {step.number}
                    </h3>
                  </div>
                  <div className="self-stretch flex flex-col items-start gap-[0.5rem]">
                    <h3 className="m-0 self-stretch relative text-[1.25rem] leading-[1.625rem] font-bold font-proxima text-[#1a2530] mq450:text-[1.125rem] mq450:leading-[1.5rem]">
                      {step.title}
                    </h3>
                    <div className="self-stretch relative text-[1rem] leading-[1.5rem] font-proxima text-[#4d565f] mq450:text-[0.938rem] mq450:leading-[1.375rem]">
                      {step.description}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. BENEFITS SECTION (FeatureGrid) */}
      <section className="site-section self-stretch bg-[#f7fafd]">
        <div className="site-container flex flex-col items-center box-border gap-[4.25rem] max-w-full text-center mq800:gap-[2.5rem] mq450:gap-[1.5rem]">
          <div className="w-full max-w-[60rem] min-w-0 overflow-hidden flex flex-col items-center gap-[1.5rem] mq450:gap-[1rem]">
            <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase text-[#0bc111] font-proxima mq450:text-[0.875rem] mq450:leading-[1.125rem]">
              BENEFITS
            </b>
            <h2 className="m-0 self-stretch relative text-[3rem] leading-[3.625rem] font-bold font-proxima text-[#1a2530] mq1050:text-[2.25rem] mq1050:leading-[2.75rem] mq800:text-[2rem] mq800:leading-[2.5rem] mq450:text-[1.75rem] mq450:leading-[2.125rem]">
              Why partners choose Wirero
            </h2>
          </div>
          <div className="self-stretch grid grid-cols-3 gap-[1.75rem] text-left mq750:grid-cols-2 mq450:grid-cols-1">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-[20px] bg-color-white border-[#e2e5e9] border-solid border-[1px] overflow-hidden flex flex-col items-start p-[1.5rem] gap-[1.25rem] hover:shadow-[0px_4px_20px_rgba(26,37,48,0.08)] transition-shadow hover:border-[#0461c3]"
              >
                <div className="rounded-[16px] bg-[#eaf5fb] flex items-center justify-center p-[0.75rem]">
                  <Image
                    className="h-[2rem] w-[2rem] relative"
                    width={32}
                    height={32}
                    sizes="100vw"
                    alt=""
                    src={benefit.icon}
                  />
                </div>
                <div className="self-stretch flex flex-col items-start gap-[0.5rem]">
                  <h3 className="m-0 self-stretch relative text-[1.25rem] leading-[1.625rem] font-bold font-proxima text-[#1a2530] mq450:text-[1.125rem] mq450:leading-[1.5rem]">
                    {benefit.title}
                  </h3>
                  <div className="self-stretch relative text-[1rem] leading-[1.5rem] font-proxima text-[#4d565f] mq450:text-[0.938rem] mq450:leading-[1.375rem]">
                    {benefit.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. WHAT YOU CAN SELL (PricingCards style UI) */}
      <section className="site-section self-stretch bg-color-white">
        <div className="site-container flex flex-col items-center box-border gap-[4.25rem] max-w-full text-center mq800:gap-[2.5rem] mq450:gap-[1.5rem]">
          <div className="w-full max-w-[60rem] min-w-0 overflow-hidden flex flex-col items-center gap-[1.5rem] mq450:gap-[1rem]">
            <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase text-[#0bc111] font-proxima mq450:text-[0.875rem] mq450:leading-[1.125rem]">
              WHAT YOU CAN SELL
            </b>
            <h2 className="m-0 self-stretch relative text-[3rem] leading-[3.625rem] font-bold font-proxima text-[#1a2530] mq1050:text-[2.25rem] mq1050:leading-[2.75rem] mq800:text-[2rem] mq800:leading-[2.5rem] mq450:text-[1.75rem] mq450:leading-[2.125rem]">
              Example packages we can offer
            </h2>
          </div>
          <div className="self-stretch flex items-start flex-wrap content-start gap-[2rem] mq450:gap-[1.5rem]">
            {packages.map((pkg, index) => (
              <div
                key={index}
                className={`flex-1 overflow-hidden rounded-[24px] flex flex-col items-start p-[0.5rem] gap-[1.25rem] text-left text-[0.75rem] font-proxima min-w-[calc(33.333%-1.333rem)] mq1050:min-w-[calc(50%-1rem)] mq450:min-w-full transition-shadow hover:shadow-[0px_8px_30px_rgba(26,37,48,0.15)] ${pkg.isPopular ? "bg-[#0461c3] shadow-[0px_2px_20px_rgba(26,37,48,0.12)] border-[2px] border-[#0461c3]" : "bg-[#f7fafd] shadow-[0px_2px_8px_rgba(26,37,48,0.04)]"}`}
              >
                <div
                  className={`self-stretch rounded-[16px] flex flex-col items-start pt-[1.25rem] px-[1.25rem] pb-[1.75rem] gap-[1.5rem] ${pkg.isPopular ? "bg-[#0461c3]" : "bg-color-white"}`}
                >
                  <div className="self-stretch flex flex-col items-start gap-[0.5rem]">
                    <h3
                      className={`m-0 self-stretch relative text-[1.5rem] leading-[1.875rem] font-bold font-[inherit] ${pkg.isPopular ? "text-color-white" : "text-[#4d565f]"}`}
                    >
                      {pkg.name}
                    </h3>
                    <div
                      className={`self-stretch relative text-[1rem] leading-[1.375rem] ${pkg.isPopular ? "text-[#f0f4f8]" : "text-[#64676f]"}`}
                    >
                      {pkg.description}
                    </div>
                  </div>
                </div>
                <div
                  className={`self-stretch flex-1 flex flex-col items-start pt-[1rem] px-[1rem] pb-[1.25rem] gap-[1.75rem] text-[1.125rem] ${pkg.isPopular ? "text-[#f0f4f8]" : "text-[#64676f]"}`}
                >
                  <div className="self-stretch flex flex-col items-start gap-[1rem] shrink-0">
                    <div className="self-stretch relative leading-[1.75rem] opacity-[0.9]">
                      Features Included:
                    </div>
                    <div className="self-stretch flex flex-col items-start gap-[1rem]">
                      {pkg.features.map((feature, fIndex) => (
                        <div key={fIndex} className="self-stretch flex items-start gap-[0.75rem]">
                          <div className="h-[1.625rem] flex items-center">
                            <div className="rounded-[52px] bg-[#0461c3] flex items-center justify-center p-[0.25rem]">
                              <Image
                                className="h-[0.75rem] w-[0.75rem] relative"
                                width={12}
                                height={12}
                                sizes="100vw"
                                alt=""
                                src="/check.svg"
                              />
                            </div>
                          </div>
                          <div className="flex-1 relative leading-[1.625rem] font-semibold">
                            {feature}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`self-stretch flex flex-col items-start gap-[1rem] ${pkg.isPopular ? "text-color-white" : "text-[#4d565f]"}`}
                  >
                    <div
                      className={`self-stretch rounded-[8px] flex items-center py-[0.5rem] px-[0.75rem] ${pkg.isPopular ? "bg-[#181f25]" : "bg-color-white"}`}
                    >
                      <div className="flex-1 relative leading-[1.5rem] font-semibold">
                        Best for: {pkg.bestFor}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. RESELLER CONTROL (Dark Section) */}
      <section className="site-section self-stretch bg-[#12171c] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] rounded-full bg-[#0461c3] opacity-10 blur-[120px]" />
          <div className="absolute bottom-[-10%] left-[-5%] w-[35rem] h-[35rem] rounded-full bg-[#1a8cd5] opacity-15 blur-[100px]" />
        </div>
        <div className="site-container relative z-10 flex flex-col items-center box-border gap-[3rem] text-center max-w-full mq800:gap-[2.5rem] mq450:gap-[2rem]">
          <div className="w-full max-w-[51.25rem] min-w-0 overflow-hidden flex flex-col items-center gap-[1.5rem] mq450:gap-[1rem]">
            <h2 className="m-0 self-stretch relative text-[3rem] leading-[3.625rem] font-bold font-proxima text-[#eee] mq1050:text-[2.25rem] mq1050:leading-[2.75rem] mq800:text-[2rem] mq800:leading-[2.5rem] mq450:text-[1.75rem] mq450:leading-[2.125rem]">
              You stay in control
            </h2>
          </div>
          <div className="self-stretch flex flex-col items-start gap-[2.5rem] text-left mq800:gap-[2rem] mq450:gap-[1.5rem]">
            <div className="self-stretch flex items-start flex-wrap content-start gap-[2.5rem] mq800:gap-[2rem] mq450:gap-[1.5rem]">
              {[
                "You control pricing",
                "You control packaging",
                "You control distribution",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex-1 overflow-hidden flex items-start gap-[1.25rem] min-w-0 max-w-full mq1050:min-w-full mq800:min-w-[calc(50%-1rem)] mq450:min-w-full"
                >
                  <div className="h-[3rem] w-[3rem] rounded-[16px] bg-[#181f25] flex items-center justify-center p-[0.75rem] box-border shrink-0">
                    <Image
                      className="h-[1.5rem] w-[1.5rem] relative"
                      width={24}
                      height={24}
                      sizes="100vw"
                      alt=""
                      src="/check-check.svg"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-start gap-[0.5rem]">
                    <h3 className="m-0 self-stretch relative text-[1.5rem] leading-[1.875rem] font-bold font-proxima text-[#eee] mq800:text-[1.375rem] mq800:leading-[1.75rem] mq450:text-[1.25rem] mq450:leading-[1.625rem]">
                      {item}
                    </h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 7. IDEAL PARTNERS (IconList or Grid) */}
      <section className="site-section self-stretch bg-[linear-gradient(135deg,_#f0f9ff_0%,_#e0f2fe_100%)] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[5%] left-[10%] w-[30rem] h-[30rem] rounded-full bg-[#0bc111] opacity-5 blur-[100px]" />
          <div className="absolute bottom-[10%] right-[5%] w-[25rem] h-[25rem] rounded-full bg-[#0461c3] opacity-5 blur-[80px]" />
        </div>
        <div className="site-container relative z-10 flex flex-col items-center box-border gap-[4.25rem] max-w-full text-center mq800:gap-[2.5rem] mq450:gap-[1.5rem]">
          <div className="w-full max-w-[60rem] min-w-0 overflow-hidden flex flex-col items-center gap-[1.5rem] mq450:gap-[1rem]">
            <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase text-[#0bc111] font-proxima mq450:text-[0.875rem] mq450:leading-[1.125rem]">
              IDEAL PARTNERS
            </b>
            <h2 className="m-0 self-stretch relative text-[3rem] leading-[3.625rem] font-bold font-proxima text-[#1a2530] mq1050:text-[2.25rem] mq1050:leading-[2.75rem] mq800:text-[2rem] mq800:leading-[2.5rem] mq450:text-[1.75rem] mq450:leading-[2.125rem]">
              Who we work with
            </h2>
          </div>
          <div className="self-stretch flex items-start flex-wrap content-start gap-[2.5rem] mq800:gap-[2rem] mq450:gap-[1.5rem]">
            {idealPartners.map((partner, index) => (
              <div
                key={index}
                className="flex-1 overflow-hidden flex flex-col items-center gap-[1rem] min-w-0 max-w-full mq1050:min-w-[calc(33.333%-1.667rem)] mq800:min-w-[calc(50%-1rem)] mq450:min-w-full hover:transform hover:scale-105 transition-transform duration-300"
              >
                <div className="h-[4.25rem] w-[4.25rem] rounded-[16px] bg-[#eaf5fb] flex items-center justify-center p-[1rem] box-border shrink-0 mq450:h-[3.5rem] mq450:w-[3.5rem] mq450:p-[0.75rem] hover:bg-[#0461c3] transition-colors group">
                  <Image
                    className="h-[2.25rem] w-[2.25rem] relative object-contain mq450:h-[2rem] mq450:w-[2rem] group-hover:brightness-0 group-hover:invert"
                    loading="lazy"
                    width={36}
                    height={36}
                    sizes="100vw"
                    alt=""
                    src={partner.icon}
                  />
                </div>
                <h3 className="m-0 self-stretch relative text-[1.25rem] leading-[1.625rem] font-bold font-proxima text-[#1a2530] text-center mq450:text-[1.125rem] mq450:leading-[1.5rem]">
                  {partner.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. INTEGRATION OPTIONS (FeatureGrid small) */}
      <section className="site-section self-stretch bg-color-white">
        <div className="site-container flex flex-col items-center box-border gap-[4.25rem] max-w-full text-center mq800:gap-[2.5rem] mq450:gap-[1.5rem]">
          <div className="w-full max-w-[60rem] min-w-0 overflow-hidden flex flex-col items-center gap-[1.5rem] mq450:gap-[1rem]">
            <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase text-[#0bc111] font-proxima mq450:text-[0.875rem] mq450:leading-[1.125rem]">
              INTEGRATION OPTIONS
            </b>
            <h2 className="m-0 self-stretch relative text-[3rem] leading-[3.625rem] font-bold font-proxima text-[#1a2530] mq1050:text-[2.25rem] mq1050:leading-[2.75rem] mq800:text-[2rem] mq800:leading-[2.5rem] mq450:text-[1.75rem] mq450:leading-[2.125rem]">
              How you distribute
            </h2>
          </div>
          <div className="self-stretch grid grid-cols-3 gap-[2rem] text-left mq750:grid-cols-2 mq450:grid-cols-1">
            {integrationOptions.map((option, index) => (
              <div
                key={index}
                className="rounded-[20px] bg-color-white border-[#e2e5e9] border-solid border-[1px] overflow-hidden flex flex-col items-start p-[1.5rem] gap-[1.25rem] hover:shadow-[0px_4px_20px_rgba(26,37,48,0.08)] transition-shadow"
              >
                <div className="rounded-[16px] bg-[#eaf5fb] flex items-center justify-center p-[0.75rem]">
                  <Image
                    className="h-[2rem] w-[2rem] relative"
                    width={32}
                    height={32}
                    sizes="100vw"
                    alt=""
                    src={option.icon}
                  />
                </div>
                <div className="self-stretch flex flex-col items-start gap-[0.5rem]">
                  <h3 className="m-0 self-stretch relative text-[1.25rem] leading-[1.625rem] font-bold font-proxima text-[#1a2530] mq450:text-[1.125rem] mq450:leading-[1.5rem]">
                    {option.title}
                  </h3>
                  <div className="self-stretch relative text-[1rem] leading-[1.5rem] font-proxima text-[#4d565f] mq450:text-[0.938rem] mq450:leading-[1.375rem]">
                    {option.description}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. TRUST / TRANSPARENCY SECTION */}
      <section className="site-section self-stretch bg-[#12171c] relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-[8%] left-[5%] w-[32rem] h-[32rem] rounded-full bg-[#0461c3] opacity-10 blur-[110px]" />
          <div className="absolute bottom-[12%] right-[8%] w-[26rem] h-[26rem] rounded-full bg-[#1a8cd5] opacity-10 blur-[85px]" />
        </div>
        <div className="site-container relative z-10 flex flex-col items-center box-border gap-[4.25rem] max-w-full text-center mq800:gap-[2.5rem] mq450:gap-[1.5rem]">
          <div className="w-full max-w-[60rem] min-w-0 overflow-hidden flex flex-col items-center gap-[1.5rem] mq450:gap-[1rem]">
            <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase text-[#0bc111] font-proxima mq450:text-[0.875rem] mq450:leading-[1.125rem]">
              TRUST & TRANSPARENCY
            </b>
            <h2 className="m-0 self-stretch relative text-[3rem] leading-[3.625rem] font-bold font-proxima text-[#eee] mq1050:text-[2.25rem] mq1050:leading-[2.75rem] mq800:text-[2rem] mq800:leading-[2.5rem] mq450:text-[1.75rem] mq450:leading-[2.125rem]">
              What Wirero is (and isn't)
            </h2>
          </div>
          <div className="self-stretch grid grid-cols-2 gap-[2rem] text-left mq750:grid-cols-1">
            {[
              { text: "Not a traditional PR service", icon: "/newspaper.svg" },
              { text: "No external publisher dependency", icon: "/shield.svg" },
              { text: "Built for distribution scale", icon: "/rocket-sharp.svg" },
              { text: "Not positioned as high-traffic media", icon: "/chart-line.svg" },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-[20px] bg-[#1e293b] border-[#334155] border-solid border-[1px] overflow-hidden flex items-center p-[1.5rem] gap-[1rem] hover:shadow-[0px_4px_20px_rgba(0,0,0,0.3)] transition-shadow"
              >
                <div className="h-[3rem] w-[3rem] rounded-[12px] bg-[#0461c3] flex items-center justify-center p-[0.625rem] box-border shrink-0">
                  <Image
                    className="h-[1.75rem] w-[1.75rem] relative brightness-0 invert"
                    width={28}
                    height={28}
                    sizes="100vw"
                    alt=""
                    src={item.icon}
                  />
                </div>
                <div className="flex-1 relative text-[1.125rem] leading-[1.5rem] font-semibold font-proxima text-[#eee]">
                  {item.text}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 8. REVENUE MODEL SECTION (Highlight Box) */}
      <section className="site-section self-stretch bg-[#f7fafd]">
        <div className="site-container flex flex-col items-center box-border gap-[3rem] max-w-full mq800:gap-[2.5rem] mq450:gap-[2rem]">
          <div className="self-stretch rounded-[24px] bg-[#0461c3] overflow-hidden flex items-center justify-center py-[4.25rem] px-[3rem] relative isolate text-center mq750:min-h-[18rem] mq750:py-[3.25rem] mq450:min-h-0 mq450:py-[2.5rem]">
            <div className="absolute left-[-7rem] top-[-5rem] z-[0] h-[22rem] w-[30rem] rounded-full bg-[#1a8cd5] opacity-60 blur-[120px]" />
            <div className="absolute bottom-[-6rem] right-[10%] z-[0] h-[14rem] w-[24rem] rounded-full bg-[#1a8cd5] opacity-45 blur-[110px]" />
            <div className="absolute inset-0 z-[1] bg-[radial-gradient(circle_at_18%_35%,_rgba(26,140,213,0.45),_transparent_28%),radial-gradient(circle_at_78%_83%,_rgba(26,140,213,0.38),_transparent_30%)]" />
            <section className="site-container relative z-[2] flex w-full flex-col items-center gap-[1.75rem] text-center text-[3rem] text-color-white">
              <div className="self-stretch flex flex-col items-center gap-[0.875rem]">
                <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[3.625rem] font-bold font-proxima mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
                  Simple revenue model
                </h1>
                <div className="self-stretch flex flex-col items-center gap-[1rem] text-[1.125rem] leading-[1.75rem] font-proxima text-[rgba(238,238,238,0.82)]">
                  <div className="flex items-center gap-[0.75rem]">
                    <Image className="h-[1.25rem] w-[1.25rem]" width={20} height={20} sizes="100vw" alt="" src="/ion-cash.svg" />
                    <span>Flat monthly cost for access</span>
                  </div>
                  <div className="flex items-center gap-[0.75rem]">
                    <Image className="h-[1.25rem] w-[1.25rem]" width={20} height={20} sizes="100vw" alt="" src="/rocket-sharp.svg" />
                    <span>Sell per distribution at your price</span>
                  </div>
                  <div className="flex items-center gap-[0.75rem]">
                    <Image className="h-[1.25rem] w-[1.25rem]" width={20} height={20} sizes="100vw" alt="" src="/chart-line.svg" />
                    <span>Unlimited scaling potential</span>
                  </div>
                </div>
              </div>
              <Link
                href="/contact"
                className="cursor-pointer [border:none] py-[1rem] px-[2.5rem] bg-color-white h-[3.5rem] rounded-[8px] flex items-center justify-center box-border gap-[0.625rem] shadow-[0px_8px_24px_rgba(0,0,0,0.08)] hover:bg-[#f7fafd] transition-colors no-underline"
              >
                <div className="relative text-[1rem] leading-[1.25rem] font-semibold font-proxima text-[#1a2530] text-center shrink-0">
                  Start Earning
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
        </div>
      </section>

      <Footer property1="Variant2" />
    </div>
  );
};

export default Partner;
