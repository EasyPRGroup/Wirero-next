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

const faqItems = [
  {
    question: "What is Wirero?",
    answer:
      "Wirero is a multi-domain publishing infrastructure that allows you to distribute content across a controlled network of 1000 domains.",
  },
  {
    question: "Is this a traditional PR/newswire service?",
    answer:
      "No, Wirero is different from traditional PR/newswire services. While those services focus on media distribution to journalists, Wirero focuses on multi-domain publishing across our controlled network of websites, maximizing your content reach and SEO impact.",
  },
  {
    question: "How fast is distribution?",
    answer:
      "Distribution is incredibly fast with Wirero. Once you submit your content, it gets published across our network within minutes, ensuring your news reaches a wide audience quickly.",
  },
  {
    question: "Can I choose where my content is published?",
    answer:
      "Yes, you have full control over where your content is published. You can select specific categories, domains, or regions to target with your content distribution.",
  },
  {
    question: "Can I publish multiple times?",
    answer:
      "Absolutely! You can publish as many times as you need. There are no limits on the number of press releases or content pieces you can distribute through the platform.",
  },
  {
    question: "Are these real websites?",
    answer:
      "Yes, all websites in our network are real, active websites with genuine traffic. We maintain a curated network of quality sites across various niches to ensure your content reaches real audiences.",
  },
];

const Page = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openFaqIndex, setOpenFaqIndex] = useState(0);

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? -1 : index);
  };

  return (
    <div className="w-full relative bg-color-white overflow-hidden flex flex-col items-start leading-[normal] tracking-[normal]">

      {/* Hero Section */}
      <section className="self-stretch bg-[#f7fafd] flex items-center py-[4.25rem] px-[6.875rem] box-border max-w-full text-center text-[1rem] text-[#0bc111] font-abel">
        <div className="flex-1 overflow-hidden flex flex-col items-center py-[0rem] px-[7.5rem] box-border gap-[1.5rem] max-w-full mq1050:pl-[3.75rem] mq1050:pr-[3.75rem] mq1050:box-border mq750:pl-[1.875rem] mq750:pr-[1.875rem] mq750:box-border">
          <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase text-left shrink-0">
            FAQs
          </b>
          <div className="self-stretch flex flex-col items-start max-w-full shrink-0 text-[3.5rem] text-[#1a2530]">
            <h1 className="m-0 w-full relative text-[length:inherit] leading-[4.25rem] font-bold font-[inherit] inline-block max-w-[61.25rem] shrink-0 mq1050:text-[2.813rem] mq1050:leading-[3.375rem] mq1050:max-w-full mq450:text-[2.125rem] mq450:leading-[2.563rem]">
              Everything you need to know before publishing
            </h1>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="self-stretch flex items-start flex-wrap content-start pt-[4.25rem] px-[6.875rem] pb-[6.125rem] box-border gap-[4.25rem] max-w-full text-left text-[1.75rem] text-[#1a2530] font-abel mq750:gap-[2.125rem] mq750:pl-[3.438rem] mq750:pr-[3.438rem] mq750:box-border mq1050:pt-[2.75rem] mq1050:pb-[4rem] mq1050:box-border mq450:gap-[1.063rem] mq450:pt-[1.813rem] mq450:px-[1.25rem] mq450:pb-[2.625rem] mq450:box-border">
        {/* Categories Sidebar */}
        <section className="flex-1 flex flex-col items-start gap-[1.25rem] min-w-[9.5rem] max-w-[23.75rem] text-left text-[1.25rem] text-color-white font-abel">
          {faqCategories.map((category, index) => (
            <FaqCategory
              key={index}
              icon={category.icon}
              title={category.title}
              isActive={activeCategory === index}
              onClick={() => setActiveCategory(index)}
            />
          ))}
        </section>

        {/* FAQ Items */}
        <div className="flex-1 flex flex-col items-start gap-[1.25rem] min-w-[20.938rem] max-w-full">
          {faqItems.map((item, index) => (
            <FaqAccordion
              key={index}
              item={item}
              isOpen={openFaqIndex === index}
              onToggle={() => handleFaqToggle(index)}
            />
          ))}
        </div>
      </main>

      {/* CTA Section */}
      <section className="self-stretch flex flex-col items-start py-[3.75rem] px-[6.875rem] box-border max-w-full mq750:pl-[3.438rem] mq750:pr-[3.438rem] mq750:box-border mq450:py-[2.438rem] mq450:px-[1.25rem] mq450:box-border">
        <div className="self-stretch rounded-[24px] bg-[#0461c3] overflow-hidden flex items-center py-[3.75rem] px-[11.25rem] box-border relative isolate max-w-full mq1050:pl-[5.625rem] mq1050:pr-[5.625rem] mq1050:box-border mq750:pl-[2.813rem] mq750:pr-[2.813rem] mq750:box-border mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border">
          <Image
            className="h-[14.375rem] w-[30.25rem] absolute m-[0!important] bottom-[0rem] left-[2.25rem] object-cover z-[3] shrink-0"
            loading="lazy"
            width={484}
            height={230}
            alt=""
            src="/Vector-2@2x.png"
          />

          <section className="flex-1 flex flex-col items-center gap-[1.75rem] max-w-full z-[4] shrink-0 text-center text-[3rem] text-color-white font-abel">
            <div className="self-stretch overflow-hidden flex flex-col items-start gap-[0.75rem]">
              <h2 className="m-0 self-stretch relative text-[length:inherit] leading-[3.625rem] font-bold font-[inherit] mq1050:text-[2.375rem] mq1050:leading-[2.875rem] mq450:text-[1.813rem] mq450:leading-[2.188rem]">
                Still have questions?
              </h2>
              <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima-nova text-[#f5f5f5]">
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
              <div className="relative text-[1rem] leading-[1.25rem] font-semibold font-proxima-nova text-[#1a2530] text-center shrink-0">
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
      </section>

      <Footer />
    </div>
  );
};

export default Page;
