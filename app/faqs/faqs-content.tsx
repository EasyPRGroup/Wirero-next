"use client";
import { useState } from "react";
import Link from "next/link";
import Footer from "../../components/footer";
import FaqAccordion from "../../components/faq-accordion";
import FaqCategory from "../../components/faq-category";
import Image from "next/image";

const faqCategories = [
  { icon: "/info.svg", title: "General Questions" },
  { icon: "/cast.svg", title: "Distribution" },
  { icon: "/globe.svg", title: "Domains" },
  { icon: "/link.svg", title: "Backlinks" },
  { icon: "/file-chart-column-increasing.svg", title: "Reporting" },
  { icon: "/settings.svg", title: "Automation" },
  { icon: "/puzzle.svg", title: "Use Case" },
  { icon: "/shield.svg", title: "Safety / Positioning" },
];

const faqItemsByCategory: Record<number, { question: string; answer: string }[]> = {
  0: [
    {
      question: "What is Wirero?",
      answer:
        "Wirero is multi-domain publishing infrastructure that lets you distribute content across a controlled network of up to 1000 independent domains from one centralized workflow.",
    },
    {
      question: "Is this a traditional PR or newswire service?",
      answer:
        "No. Traditional newswires focus on sending releases to journalists and media desks. Wirero focuses on multi-domain publishing across a privately managed network so you can scale placement, reach, and SEO impact without publisher outreach.",
    },
    {
      question: "Who is Wirero built for?",
      answer:
        "Wirero is built for PR agencies, brands, crypto and forex firms, reseller platforms, and media teams that need high-frequency distribution across industry-specific networks.",
    },
    {
      question: "How does pricing work?",
      answer:
        "Wirero uses flat-rate plans instead of per-placement fees. Starter starts at $250/month for controlled access and placement limits. Unlimited is $500/month for full network access. Banner and email/widget placements are available as separate network-wide options.",
    },
    {
      question: "Do I need to negotiate with publishers?",
      answer:
        "No. You publish through Wirero’s controlled infrastructure. There is no publisher outreach, no placement negotiation, and no manual coordination across individual websites.",
    },
    {
      question: "How quickly can I get started?",
      answer:
        "Once you have access, you can upload content or connect an RSS feed, select your reach, and launch campaigns from the dashboard. Most campaigns go live across selected domains in about one hour.",
    },
  ],
  1: [
    {
      question: "How fast is distribution?",
      answer:
        "Average publishing time is under one hour. After you submit content and select targets, Wirero deploys pages across the selected domains through a centralized publishing workflow.",
    },
    {
      question: "Can I choose where my content is published?",
      answer:
        "Yes. You can select industry-specific networks and control how many domains each campaign uses, from targeted niche placement to large-scale deployment across the full network.",
    },
    {
      question: "Can I publish multiple times?",
      answer:
        "Yes. Wirero is designed for recurring campaigns and high-volume usage. Plan limits depend on your subscription: Starter includes monthly placement caps, while Unlimited supports unlimited distributions.",
    },
    {
      question: "What content can I distribute?",
      answer:
        "You can distribute press releases, announcements, market updates, educational content, and other campaign assets suited for multi-domain publishing across industry networks.",
    },
    {
      question: "Is distribution manual or automated?",
      answer:
        "Both. You can upload content manually for on-demand campaigns or connect RSS feeds for continuous automated distribution without repeated manual uploads.",
    },
    {
      question: "How many domains can a campaign reach?",
      answer:
        "Depending on your plan and selected networks, campaigns can publish across selected niche domains or scale up to the full network of around 1000 domains.",
    },
  ],
  2: [
    {
      question: "Are these real websites?",
      answer:
        "Yes. Wirero operates a controlled network of independent publishing domains. Content is deployed to real sites within that infrastructure rather than temporary or disposable pages.",
    },
    {
      question: "How is the network structured?",
      answer:
        "The network is organized into industry-specific groups so distribution can be targeted by category instead of random placement across unrelated sites.",
    },
    {
      question: "How many domains are in the network?",
      answer:
        "Wirero provides access to a controlled network of up to 1000 independent domains, with reach based on your plan and selected industry networks.",
    },
    {
      question: "Can I target specific industries?",
      answer:
        "Yes. Wirero supports niche targeting across categorized networks such as tech, business, finance, and other industry groups so content is placed in relevant context.",
    },
    {
      question: "Do I get access to all domains on every plan?",
      answer:
        "Not always. Starter includes access to selected niche networks with placement limits. Unlimited includes access to all industry networks and publishing across up to 1000 domains.",
    },
    {
      question: "Can I review the media network?",
      answer:
        "Yes. You can explore Wirero’s media network pages to understand network structure and available distribution categories before launching campaigns.",
    },
  ],
  3: [
    {
      question: "Does Wirero provide dofollow backlinks?",
      answer:
        "Yes. Distributed content can include dofollow backlinks so placements support both visibility and link-building goals.",
    },
    {
      question: "Can I use custom anchor text?",
      answer:
        "Yes. Wirero supports custom anchors so you can control how links appear across placements instead of relying only on default branded anchors.",
    },
    {
      question: "Where do backlinks appear?",
      answer:
        "Backlinks are included naturally within the distributed content published across selected domains in the network.",
    },
    {
      question: "Are banner or widget placements different from article links?",
      answer:
        "Yes. Banner network placement and email/widget placement options provide persistent network-wide visibility with embedded backlink support, separate from standard article distribution campaigns.",
    },
    {
      question: "Can agencies control links for client campaigns?",
      answer:
        "Yes. Agencies can manage anchors, targets, and distribution scope per campaign, then export live URLs and reports for client delivery.",
    },
    {
      question: "Is link placement negotiated per site?",
      answer:
        "No. Link inclusion is handled through Wirero’s publishing infrastructure, so you do not negotiate individual publisher placements for each campaign.",
    },
  ],
  4: [
    {
      question: "What reporting do I get after distribution?",
      answer:
        "You can track completed placements and access the live URLs generated by each campaign so you always know where content was published.",
    },
    {
      question: "Can I export reports?",
      answer:
        "Yes. Reporting can be exported for teams, clients, or internal records. Starter includes CSV export access, while Unlimited includes CSV and PDF exports.",
    },
    {
      question: "Are reports available in real time?",
      answer:
        "Campaign reporting is available from the platform after distribution completes, including live placement URLs you can download anytime.",
    },
    {
      question: "Can I share reports with clients?",
      answer:
        "Yes. Exportable reports are designed for agency and team workflows so you can deliver clear placement records without rebuilding them manually.",
    },
    {
      question: "What is included in standard reporting?",
      answer:
        "Standard reporting covers campaign placements, live URLs, and export access based on your plan. Higher-tier access expands export formats and full reporting features.",
    },
    {
      question: "Do I need a separate tool to track placements?",
      answer:
        "No. Placement tracking and report export are built into Wirero, so you can manage distribution and delivery records from one system.",
    },
  ],
  5: [
    {
      question: "Does Wirero support RSS automation?",
      answer:
        "Yes. You can connect RSS feeds to automate recurring content distribution without uploading every item manually.",
    },
    {
      question: "How does automated distribution work?",
      answer:
        "Connect your feed, define distribution targets, and Wirero handles continuous publishing through the same multi-domain infrastructure used for manual campaigns.",
    },
    {
      question: "Can I still publish manually when needed?",
      answer:
        "Yes. Manual publishing and RSS automation both work in Wirero. Use manual campaigns for custom launches and automation for recurring content flows.",
    },
    {
      question: "Is automation available on all plans?",
      answer:
        "Manual or RSS publishing is available on Starter. Unlimited includes RSS automation with full infrastructure access for high-volume and agency workflows.",
    },
    {
      question: "What is best for high-frequency publishing?",
      answer:
        "RSS automation plus unlimited plan access is ideal for teams that publish frequently, such as agencies, news platforms, and market-update driven brands.",
    },
    {
      question: "Do automated campaigns still generate reports?",
      answer:
        "Yes. Automated distributions still produce placement tracking and exportable campaign records just like manual campaigns.",
    },
  ],
  6: [
    {
      question: "How do PR agencies use Wirero?",
      answer:
        "Agencies use Wirero for multi-domain publishing, rapid turnaround, and white-label style delivery so they can offer expanded distribution without building publisher relationships or managing outreach.",
    },
    {
      question: "Is Wirero useful for crypto and forex teams?",
      answer:
        "Yes. Crypto and forex firms often need frequent market updates and announcements. Wirero supports high-frequency publishing across finance-focused and related niche domains.",
    },
    {
      question: "Can resellers or platforms offer Wirero as a service?",
      answer:
        "Yes. Reseller and platform teams can extend their offering with distribution packages powered by Wirero’s infrastructure instead of building their own publisher network.",
    },
    {
      question: "Does Wirero work for media and content platforms?",
      answer:
        "Yes. Media and content teams can scale editorial and promotional content across multiple publishing endpoints with centralized workflow and automation.",
    },
    {
      question: "What if I only need occasional campaigns?",
      answer:
        "Starter is designed for smaller campaigns and testing, with monthly placement limits and access to selected niche networks.",
    },
    {
      question: "What if I need continuous high-volume distribution?",
      answer:
        "Unlimited is built for agencies, platforms, and scaling brands that need recurring campaigns, full network access, and automated distribution.",
    },
  ],
  7: [
    {
      question: "How is Wirero positioned versus traditional PR tools?",
      answer:
        "Wirero is publishing infrastructure, not a journalist outreach desk. It is designed for controlled multi-domain deployment, predictable scaling, and operational efficiency.",
    },
    {
      question: "Is the network privately managed?",
      answer:
        "Yes. Wirero operates through a controlled distribution network, so campaigns run on managed infrastructure rather than depending on ad-hoc external publisher deals.",
    },
    {
      question: "Does Wirero remove outreach risk and delays?",
      answer:
        "Yes. Because placement happens inside Wirero’s network, you avoid the uncertainty of cold outreach, negotiation cycles, and inconsistent publisher response times.",
    },
    {
      question: "Is this suitable for brand-safe distribution?",
      answer:
        "Wirero is structured for intentional, category-based placement rather than random site spraying, which helps keep campaigns aligned with industry context and distribution goals.",
    },
    {
      question: "Can I scale without increasing operational complexity?",
      answer:
        "Yes. Flat-rate access, centralized publishing, RSS automation, and exportable reporting are designed so volume can grow without adding manual coordination work.",
    },
    {
      question: "Where can I get help if I still have questions?",
      answer:
        "Contact the Wirero team through the contact page or email hello@wirero.com. You can also review pricing, network, and agency pages before starting distribution.",
    },
  ],
};

const FaqsContent = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const faqItems = faqItemsByCategory[activeCategory] ?? faqItemsByCategory[0];

  const handleCategoryChange = (index: number) => {
    setActiveCategory(index);
    setOpenFaqIndex(0);
  };

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <div className="relative flex w-full min-w-0 flex-col items-stretch overflow-x-clip bg-color-white leading-[normal] tracking-[normal]">

      {/* Hero Section */}
      <section className="site-section-hero self-stretch bg-[#f7fafd]">
        <div className="site-container flex items-center box-border max-w-full text-center text-[1rem] text-[#0bc111] font-proxima">
        <div className="flex-1 overflow-hidden flex flex-col items-center py-[0rem] box-border gap-[1.5rem] max-w-full">
          <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase text-left shrink-0">
            FAQs
          </b>
          <div className="self-stretch flex flex-col items-center max-w-full shrink-0 text-[3.5rem] text-[#1a2530]">
            <h1 className="m-0 w-full relative text-[length:inherit] leading-[4.25rem] font-bold font-[inherit] max-w-[61.25rem] shrink-0 text-center mq1050:text-[2.813rem] mq1050:leading-[3.375rem] mq1050:max-w-full mq450:text-[2.125rem] mq450:leading-[2.563rem]">
              Everything you need to know before publishing
            </h1>
          </div>
        </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="site-section-hero self-stretch">
        <div className="site-container flex items-start flex-wrap content-start box-border gap-[4.25rem] max-w-full text-left text-[1.75rem] text-[#1a2530] font-proxima mq750:gap-[2.125rem] mq450:gap-[1.063rem]">
        {/* Categories Sidebar */}
        <section className="flex-1 flex flex-col items-start gap-[1.25rem] min-w-0 max-w-[23.75rem] text-left text-[1.25rem] text-color-white font-proxima">
          {faqCategories.map((category, index) => (
            <FaqCategory
              key={index}
              icon={category.icon}
              title={category.title}
              isActive={activeCategory === index}
              onClick={() => handleCategoryChange(index)}
            />
          ))}
        </section>

        {/* FAQ Items */}
        <div className="flex-1 flex flex-col items-start gap-[1.25rem] min-w-0 max-w-full">
          {faqItems.map((item, index) => (
            <FaqAccordion
              key={index}
              item={item}
              isOpen={openFaqIndex === index}
              onToggle={() => handleFaqToggle(index)}
            />
          ))}
        </div>
        </div>
      </main>

      {/* CTA Section */}
      <section className="site-section-cta self-stretch">
        <div className="site-container flex flex-col items-center box-border max-w-full">
        <div className="self-stretch rounded-[24px] bg-[#0461c3] overflow-hidden flex items-center justify-center py-[3.75rem] px-[2.5rem] box-border relative isolate max-w-full mq1050:py-[3rem] mq750:py-[2.5rem] mq450:px-[1.25rem] mq450:py-[2rem] mq450:box-border">
          <Image
            className="h-[14.375rem] w-[30.25rem] absolute m-[0!important] bottom-[0rem] left-[2.25rem] object-cover z-[3] shrink-0 mq750:hidden"
            loading="lazy"
            width={484}
            height={230}
            alt=""
            src="/Vector-2@2x.png"
          />

          <section className="site-container flex w-full flex-col items-center gap-[1.75rem] max-w-full z-[4] shrink-0 text-center text-[3rem] text-color-white font-proxima">
            <div className="self-stretch overflow-hidden flex flex-col items-center gap-[0.75rem]">
              <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[3.625rem] font-bold font-[inherit] mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
                Still have questions?
              </h2>
              <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#f5f5f5]">
                Contact us or start publishing to see how it works.
              </div>
            </div>
            <Link
              href="/contact"
              className="cursor-pointer border-none py-[1rem] px-[2.5rem] bg-color-white h-[3.5rem] rounded-[8px] flex items-center justify-center box-border gap-[0.5rem] no-underline"
            >
              <Image
                className="h-[1rem] w-[1rem] relative hidden shrink-0"
                width={16}
                height={16}
                alt=""
                src="/search.svg"
              />
              <div className="relative text-[1rem] leading-[1.25rem] font-semibold font-proxima text-[#1a2530] text-center shrink-0">
                Contact us
              </div>
              <Image
                className="h-[1rem] w-[1rem] relative shrink-0"
                width={16}
                height={16}
                alt=""
                src="/arrow-right1.svg"
              />
            </Link>
          </section>
        </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FaqsContent;
