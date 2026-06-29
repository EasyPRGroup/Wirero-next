import type { NextPage } from "next";
import Image from "next/image";
import ItemMenu from "./item-menu";

export type FrameComponent4Type = {
  className?: string;
};

/**
 * Footer links section component
 * Contains Resources, Company, and Legal link columns
 */
const FrameComponent4: NextPage<FrameComponent4Type> = ({ className = "" }) => {
  const resourceLinks = [
    { showItemMenu: true, aboutUs: "Blog", href: "/blog" },
    { showItemMenu: false, aboutUs: "Press Release Writing Guide" },
    { showItemMenu: false, aboutUs: "Case Studies" },
    { showItemMenu: true, aboutUs: "Contact Us", href: "/contact" },
    { showItemMenu: true, aboutUs: "FAQs", href: "/faqs" },
    { showItemMenu: true, aboutUs: "News Room", href: "/newsroom" },
  ];

  const companyLinks = [
    { showItemMenu: false, aboutUs: "Services" },
    { showItemMenu: true, aboutUs: "About", href: "/about-us" },
    { showItemMenu: true, aboutUs: "Media Network", href: "/network" },
    { showItemMenu: true, aboutUs: "Pricing", href: "/pricing" },
    { showItemMenu: false, aboutUs: "Distribution Process" },
    { showItemMenu: true, aboutUs: "Agencies", href: "/agency" },
  ];

  const legalLinks = [
    { showItemMenu: false, aboutUs: "Help Center" },
    { showItemMenu: true, aboutUs: "Terms of Service" },
    { showItemMenu: true, aboutUs: "Privacy Policy" },
    { showItemMenu: false, aboutUs: "Editorial Guidelines" },
  ];

  return (
    <div
      className={`w-full flex items-start gap-[1.75rem] text-left text-[1.25rem] text-[#1a2530] font-proxima ${className} mq1050:flex-wrap mq450:flex-col mq450:gap-[2rem]`}
    >
      <div className="self-stretch flex-1 flex flex-col items-start justify-between gap-[1.25rem] text-[#0f0928] font-proxima">
        <div className="self-stretch h-[3.25rem] flex flex-col items-start gap-[1rem]">
          <div className="w-[10rem] h-[2rem] relative hidden shrink-0">
            <div className="absolute top-[0.25rem] left-[2rem] leading-[1.5rem] capitalize font-semibold hidden">
              subscribe
            </div>
            <div className="absolute top-[0rem] left-[0rem] w-[10rem] h-[2rem] text-[1.75rem] font-proxima">
              <Image
                className="absolute top-[calc(50%_-_21px)] left-[0.188rem] w-[3.25rem] h-[2.625rem] object-cover shrink-0"
                width={52}
                height={42}
                sizes="100vw"
                alt=""
                src="/Wirero-main-1@2x.png"
              />
              <b className="absolute top-[0rem] left-[3.688rem] leading-[2rem] shrink-0">
                Wirero
              </b>
            </div>
          </div>
          <div className="w-[17.75rem] h-[8.75rem] hidden flex-col items-start shrink-0 text-[1.125rem] text-[#4d575f] font-proxima">
            <div className="self-stretch relative leading-[1.75rem]">
              Wirero connects your press release to a powerful network of 300+
              global mainstream media websites, helping your announcement reach
              the right audiences faster.
            </div>
          </div>
          <button className="cursor-pointer border-[#ddebf9] border-solid border-[1px] p-[0.75rem] bg-[rgba(4,97,195,0.12)] rounded-[40px] flex items-center justify-center gap-[0.625rem] shrink-0">
            <Image
              className="h-[1.25rem] w-[1.25rem] relative"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
              src="/mail.svg"
            />
            <div className="relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d575f] text-left">
              hello@wirero.com
            </div>
            <Image
              className="h-[1.25rem] w-[1.25rem] relative"
              width={20}
              height={20}
              sizes="100vw"
              alt=""
              src="/arrow-up-right.svg"
            />
          </button>
        </div>
        <div className="self-stretch flex flex-col items-start gap-[1rem] text-[#1a2530] font-proxima">
          <div className="w-[7.813rem] h-[1.5rem] relative">
            <h3 className="m-0 whitespace-nowrap absolute top-[0rem] left-[0rem] text-[length:inherit] leading-[1.5rem] capitalize font-semibold font-[inherit]">
              Follow us on:
            </h3>
          </div>
          <div className="self-stretch flex flex-col items-start">
            <div className="flex items-center gap-[0.5rem]">
              <div className="rounded-[40px] border-[#e2e5e9] border-solid border-[1px] flex items-center justify-center p-[0.75rem]">
                <Image
                  className="h-[1.25rem] w-full relative"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                  src="/facebook.svg"
                />
              </div>
              <div className="rounded-[40px] border-[#e2e5e9] border-solid border-[1px] flex items-center justify-center p-[0.75rem]">
                <Image
                  className="h-[1.25rem] w-full relative object-cover"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                  src="/twitter@2x.png"
                />
              </div>
              <div className="rounded-[40px] border-[#e2e5e9] border-solid border-[1px] flex items-center justify-center p-[0.75rem]">
                <Image
                  className="h-[1.25rem] w-full relative"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                  src="/linkedin-fill.svg"
                />
              </div>
              <div className="rounded-[40px] border-[#e2e5e9] border-solid border-[1px] flex items-center justify-center p-[0.75rem]">
                <Image
                  className="h-[1.25rem] w-full relative"
                  width={20}
                  height={20}
                  sizes="100vw"
                  alt=""
                  src="/instagram.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start gap-[1rem]">
        <div className="w-[5.813rem] h-[1.5rem] relative">
          <h3 className="m-0 absolute top-[0rem] left-[0rem] text-[length:inherit] leading-[1.5rem] capitalize font-semibold font-[inherit]">
            Resources
          </h3>
        </div>
        <div className="self-stretch flex flex-col items-start gap-[0.75rem] text-[1rem] text-[rgba(26,37,48,0.7)]">
          {resourceLinks.map((item, index) => (
            <ItemMenu
              key={index}
              showItemMenu={item.showItemMenu}
              aboutUs={item.aboutUs}
              href={item.href}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start gap-[1rem]">
        <div className="w-[5.375rem] h-[1.5rem] relative">
          <h3 className="m-0 absolute top-[0rem] left-[0rem] text-[length:inherit] leading-[1.5rem] capitalize font-semibold font-[inherit]">
            Company
          </h3>
        </div>
        <div className="self-stretch flex flex-col items-start gap-[0.75rem]">
          {companyLinks.map((item, index) => (
            <ItemMenu
              key={index}
              showItemMenu={item.showItemMenu}
              aboutUs={item.aboutUs}
              href={item.href}
            />
          ))}
        </div>
      </div>
      <div className="flex-1 flex flex-col items-start gap-[1rem]">
        <div className="w-[3.063rem] h-[1.5rem] relative">
          <h3 className="m-0 absolute top-[0rem] left-[0rem] text-[length:inherit] leading-[1.5rem] capitalize font-semibold font-[inherit]">
            Legal
          </h3>
        </div>
        <div className="self-stretch flex flex-col items-start gap-[0.75rem]">
          {legalLinks.map((item, index) => (
            <ItemMenu
              key={index}
              showItemMenu={item.showItemMenu}
              aboutUs={item.aboutUs}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FrameComponent4;
