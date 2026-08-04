import type { NextPage } from "next";
import Image from "next/image";

export type ClientsType = {
  className?: string;
};

const Clients: NextPage<ClientsType> = ({ className = "" }) => {
  const clientLogos = [
    {
      src: "/mm-logo-2x.webp",
      alt: "Marketersmedia",
      width: 180,
      height: 40,
      className: "w-full h-[2.5rem] relative object-contain",
    },
    {
      src: "/FinanceFeeds-Logo.png",
      alt: "FinanceFeeds",
      width: 180,
      height: 40,
      className: "w-full h-[2.5rem] relative object-contain",
    },
    {
      src: "/EIN_claim-color_positive.svg",
      alt: "EIN Presswire",
      width: 160,
      height: 40,
      className: "w-full h-[2.5rem] relative object-contain",
    },
    // {
    //   src: "/openpr-logo-slogan.svg",
    //   alt: "Newswire",
    //   width: 160,
    //   height: 40,
    //   className: "w-full h-[2.5rem] relative object-contain",
    // },
    // {
    //   src: "/Logo Horizontal Color.svg",
    //   alt: "Newswire",
    //   width: 160,
    //   height: 40,
    //   className: "w-full h-[2.5rem] relative object-contain",
    // },
  ];

  return (
    <section
      className={`site-section-band self-stretch bg-[#f7fafd] flex flex-col items-center box-border gap-[1.75rem] max-w-full text-center text-[1.125rem] text-[#1a2530] font-proxima ${className}`}
    >
      <div className="w-[76.25rem] max-w-full overflow-hidden flex flex-col items-center gap-[0.75rem]">
        <b className="self-stretch relative tracking-[0.01em] leading-[1.625rem] uppercase shrink-0">
          Trusted by Top Brands
        </b>
      </div>
      <div className="w-full max-w-[69rem] px-4 mx-auto">
        <div className="flex items-center justify-center flex-wrap gap-12 mq800:gap-8 mq450:gap-6">
          {clientLogos.map((logo, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center min-w-[140px]"
            >
              <div className="flex flex-col items-start pt-[0.125rem] pb-[0rem] px-[0.5rem]">
                <Image
                  className={logo.className}
                  width={logo.width}
                  height={logo.height}
                  sizes="(max-width: 640px) 140px, 180px"
                  alt={logo.alt}
                  src={logo.src}
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
