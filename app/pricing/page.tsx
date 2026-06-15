"use client";
import type { NextPage } from "next";
import Footer from "../../components/footer";
import PricingCard from "../../components/pricing-card";
import FrameComponent6 from "../../components/frame-component6";
import FeatureItem from "../../components/feature-item";
import CtaBanner from "../../components/cta-banner";

const PricingPill = ({
  icon,
  text,
}: {
  icon: "negotiations" | "outreach" | "limitations";
  text: string;
}) => {
  const icons = {
    negotiations: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="12" cy="12" r="10" stroke="#0461c3" strokeWidth="2" />
        <path
          d="M8 12L11 15L16 9"
          stroke="#0461c3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    outreach: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21"
          stroke="#0461c3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="9" cy="7" r="4" stroke="#0461c3" strokeWidth="2" />
        <path
          d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13"
          stroke="#0461c3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11683 19.0078 7.005C19.0078 7.89318 18.7122 8.75608 18.1676 9.45769C17.623 10.1593 16.8604 10.6597 16 10.88"
          stroke="#0461c3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    limitations: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M18 6L6 18"
          stroke="#0461c3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6 6L18 18"
          stroke="#0461c3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="12" r="10" stroke="#0461c3" strokeWidth="2" />
      </svg>
    ),
  };

  return (
    <button className="cursor-pointer py-[0.375rem] px-[0.75rem] bg-[#f0f4f8] rounded-[40px] flex items-center gap-[0.5rem] hover:bg-[#e0e8f0] transition-colors">
      {icons[icon]}
      <div className="relative text-[1.125rem] leading-[1.5rem] font-semibold font-['Proxima_Nova'] text-[#64676f] text-left whitespace-nowrap">
        {text}
      </div>
    </button>
  );
};

const Pricing: NextPage = () => {
  const pricingCards = [
    {
      icon: "rocket" as const,
      planName: "Starter Plan",
      description: "Controlled access for smaller campaigns and testing.",
      price: "$250",
      features: [
        "100 total placements/month",
        "Access to selected niche networks",
        "Standard reporting",
        "CSV export access",
        "Manual or RSS publishing",
        "Average publishing time under 1 hour",
      ],
      bestFor: "Best for testing campaigns and smaller distribution needs",
      ctaText: "Start with Starter",
      ctaVariant: "outline" as const,
      isPopular: false,
    },
    {
      icon: "target" as const,
      planName: "Unlimited Plan",
      description: "Full infrastructure access for agencies and high-volume publishing.",
      price: "$500",
      features: [
        "Unlimited distributions",
        "Access to all 10 industry networks",
        "Publish across up to 1000 domains",
        "RSS automation included",
        "Full reporting access",
        "CSV + PDF exports",
      ],
      bestFor: "Built for agencies, platforms, and scaling brands",
      ctaText: "Get Unlimited Access",
      ctaVariant: "filled" as const,
      isPopular: true,
    },
    {
      icon: "diamond" as const,
      planName: "Banner Network Placement",
      description: "Fixed banner placement across the entire domain network.",
      price: "$1000",
      features: [
        "Placement across 1000 domains",
        "Backlink included",
        "Persistent network-wide visibility",
        "Ideal for brand awareness campaigns",
      ],
      bestFor: "High-volume visibility across the network",
      ctaText: "Launch Banner Placement",
      ctaVariant: "outline" as const,
      isPopular: false,
    },
    {
      icon: "diamond" as const,
      planName: "Email / Widget Placement",
      description: "Deploy widgets or email placements across network properties.",
      price: "$1000",
      features: [
        "Placement across network domains",
        "Embedded backlink support",
        "Consistent visibility",
        "Suitable for lead generation and promotions",
      ],
      bestFor: "Extend exposure beyond article distribution",
      ctaText: "Get Widget Access",
      ctaVariant: "outline" as const,
      isPopular: false,
    },
  ];

  const pricingBenefits = [
    {
      title: "Multi-Domain Publishing",
      description: "Distribute content across hundreds of domains from one dashboard.",
    },
    {
      title: "Niche Targeting",
      description: "Choose specific industries or deploy across the full network.",
    },
    {
      title: "RSS Automation",
      description: "Automate distribution directly from your publishing feeds.",
    },
    {
      title: "Dofollow Backlinks",
      description: "Include backlinks naturally within distributed content.",
    },
    {
      title: "Custom Anchors",
      description: "Control how links appear across placements.",
    },
    {
      title: "Exportable Reporting",
      description: "Download live URLs and reporting anytime.",
    },
  ];

  return (
    <div className="w-full relative bg-color-white flex flex-col items-start leading-[normal] tracking-[normal] text-left text-[1rem] text-[#64676f] font-['Proxima_Nova']">
      <main className="self-stretch flex flex-col items-start pt-[4.25rem] px-[6.875rem] pb-[6.125rem] gap-[4.25rem] lg:pt-[2.75rem] lg:pb-[4rem] mq800:gap-[2.125rem] mq800:pt-[1.813rem] mq800:px-[3.438rem] mq800:pb-[2.625rem] mq450:gap-[1.063rem] mq450:px-[1.25rem]">
        {/* Hero Section */}
        <section className="self-stretch overflow-hidden flex flex-col items-center py-[0rem] px-[7.5rem] gap-[1.5rem] lg:pl-[3.75rem] lg:pr-[3.75rem] mq750:pl-[1.875rem] mq750:pr-[1.875rem]">
          <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase text-[#0bc111]">
            Pricing
          </b>
          <div className="self-stretch flex flex-col items-center gap-[1rem] text-center">
            <h1 className="self-stretch relative text-[3.5rem] leading-[4.25rem] font-bold text-[#4d565f] mq800:text-[2.813rem] mq800:leading-[3.375rem] mq450:text-[2.125rem] mq450:leading-[2.563rem]">
              Simple pricing for large-scale distribution
            </h1>
            <p className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[#64676f]">
              Flat-rate access to a controlled network of 1000 independent
              publishing domains.
            </p>
          </div>
          <div className="self-stretch flex items-start justify-center gap-[1.25rem] lg:flex-wrap">
            <PricingPill
              icon="negotiations"
              text="No per-placement negotiations."
            />
            <PricingPill
              icon="outreach"
              text="No publisher outreach."
            />
            <PricingPill
              icon="limitations"
              text="No scaling limitations."
            />
          </div>
        </section>

        {/* Pricing Cards Grid */}
        <div className="self-stretch flex flex-col items-start mq800:gap-[1.25rem]">
          <div className="self-stretch flex items-start justify-center flex-wrap content-start gap-[0.5rem] lg:h-auto">
            {pricingCards.map((card, index) => (
              <PricingCard
                key={index}
                icon={card.icon}
                planName={card.planName}
                description={card.description}
                price={card.price}
                features={card.features}
                bestFor={card.bestFor}
                ctaText={card.ctaText}
                ctaVariant={card.ctaVariant}
                isPopular={card.isPopular}
              />
            ))}
          </div>
        </div>
      </main>

      {/* Why flat-rate pricing comparison */}
      <section className="self-stretch bg-[#f7fafd] flex flex-col items-start py-[6.125rem] px-[6.875rem] box-border max-w-full mq800:py-[2.625rem] mq800:px-[3.438rem] mq800:box-border mq450:py-[1.688rem] mq450:px-[1.25rem] mq450:box-border">
        <FrameComponent6
          eyebrow=""
          title="Why flat-rate pricing changes distribution economics"
          positiveLabel="With Wirero"
          positiveItems={[
            "Predictable monthly pricing",
            "Instant multi-domain publishing",
            "Infrastructure built for scale",
            "Automated RSS distribution",
            "Unlimited publishing capability",
          ]}
          negativeLabel="Traditional Distribution"
          negativeItems={[
            "Pay per placement",
            "Manual publisher outreach",
            "Slow approval cycles",
            "Increasing costs at scale",
            "Limited operational efficiency",
          ]}
        />
      </section>

      {/* Why flat-rate pricing works */}
      <section className="self-stretch bg-color-white flex flex-col items-center py-[6.125rem] px-[6.875rem] box-border gap-[3.5rem] max-w-full text-center text-[#1a2530] font-['Proxima_Nova'] mq800:gap-[2rem] mq800:py-[2.625rem] mq800:px-[3.438rem] mq800:box-border mq450:px-[1.25rem]">
        <h2 className="m-0 relative text-[3.5rem] leading-[4.25rem] font-bold mq450:text-[2.125rem] mq450:leading-[2.563rem] mq800:text-[2.813rem] mq800:leading-[3.375rem]">
          Why flat-rate pricing works
        </h2>
        <div className="self-stretch flex items-start justify-center flex-wrap gap-[1.5rem] text-left text-[1.25rem]">
          {pricingBenefits.map((item, index) => (
            <FeatureItem
              key={index}
              vertical
              icon="/globe.svg"
              title={item.title}
              description={item.description}
              badgeClassName="h-[3rem] w-[3rem] rounded-[12px] bg-color-white shadow-[0px_2px_8px_rgba(26,37,48,0.08)]"
              className="grow basis-[calc((100%_-_3rem)/3)] min-w-[15rem] rounded-2xl bg-[#f7fafd] p-[1.75rem] box-border"
            />
          ))}
        </div>
      </section>

      <CtaBanner
        title="Choose Your Plan and Start Publishing Instantly"
        subtitle="Stop relying on third-party networks and fragmented outreach workflows."
        pills={[
          { text: "Publish once" },
          { text: "Distribute instantly" },
          { text: "Scale without limits" },
        ]}
        buttonText="Start Publishing with Wirero"
        buttonHref="/contact"
      />

      <Footer />
    </div>
  );
};

export default Pricing;