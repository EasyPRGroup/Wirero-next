import type { NextPage } from "next";
import Image from "next/image";
import Bannerheader from "../components/bannerheader";
import Clients from "../components/clients";
import FrameComponent2 from "../components/frame-component2";

import About from "../components/about";
import FrameComponent5 from "../components/frame-component5";
import CtaSection from "../components/cta-section";
import WhyChooseUs from "../components/why-choose-us";
import List from "../components/list";
import Title from "../components/title";
import FrameComponent3 from "../components/frame-component3";
import FrameComponent6 from "../components/frame-component6";
import PressReleases from "../components/press-releases";
import CtaSection1 from "../components/cta-section1";
import Footer from "../components/footer";

const Home: NextPage = () => {
  return (
    <div className="w-full relative bg-color-white overflow-hidden flex flex-col items-start leading-[normal] tracking-[normal] text-left text-[1rem] text-[#005edc] font-[Urbanist]">
      <Bannerheader />
      <Clients />
      <section className="self-stretch flex items-center py-[5rem] px-[6.875rem] box-border gap-[3rem] max-w-full text-left text-[3rem] text-[#0461c3] font-['Proxima_Nova'] mq450:flex-col mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:py-[2.5rem] mq450:box-border mq800:gap-[1.5rem] mq800:py-[3.25rem] mq800:px-[3.438rem] mq800:box-border mq1350:flex-wrap">
        <FrameComponent2 />
        <div className="h-[27.5rem] w-[39.25rem] relative rounded-[20px] overflow-hidden shrink-0 max-w-full mq450:hidden mq800:hidden mq1125:min-w-full mq1350:flex-1">
          <Image
            className="absolute h-full top-[0rem] right-[0rem] bottom-[0rem] rounded-[20px] max-h-full w-[22.5rem] object-cover"
            loading="lazy"
            width={360}
            height={440}
            sizes="100vw"
            alt=""
            src="/IMG-BG@2x.png"
          />
          <Image
            className="absolute top-[5rem] left-[calc(50%_-_314px)] rounded-[20px] w-[15.5rem] h-[21rem] object-cover"
            width={248}
            height={336}
            sizes="100vw"
            alt=""
            src="/IMG-BG@2x.png"
          />
        </div>
        <div className="h-[28rem] w-[15rem] hidden flex-col items-start justify-between py-[1.5rem] px-[0rem] box-border gap-[1.25rem]">
          <div className="self-stretch flex flex-col items-start relative isolate gap-[0.375rem]">
            <div className="relative leading-[2.5rem] font-extrabold z-[0] shrink-0 mq450:text-[1.813rem] mq450:leading-[1.5rem] mq800:text-[2.375rem] mq800:leading-[2rem]">
              1000+
            </div>
            <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] opacity-[0.9] z-[1] shrink-0">
              Distribution Platforms
            </div>
            <Image
              className="w-[3rem] h-[3rem] absolute !m-0 top-[-0.625rem] left-[7.5rem] object-cover z-[2] shrink-0"
              width={48}
              height={48}
              sizes="100vw"
              alt=""
              src="/globe@2x.png"
            />
          </div>
          <div className="self-stretch flex flex-col items-start relative isolate gap-[0.375rem]">
            <Image
              className="w-[3rem] h-[3rem] absolute !m-0 top-[-0.625rem] left-[10.375rem] object-cover z-[0] shrink-0"
              width={48}
              height={48}
              sizes="100vw"
              alt=""
              src="/Mask-group@2x.png"
            />
            <div className="relative leading-[2.5rem] font-extrabold z-[1] shrink-0 mq450:text-[1.813rem] mq450:leading-[1.5rem] mq800:text-[2.375rem] mq800:leading-[2rem]">
              Multiple
            </div>
            <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] opacity-[0.9] z-[2] shrink-0">
              Content Categories
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start relative isolate gap-[0.375rem]">
            <Image
              className="w-[3rem] h-[3rem] absolute !m-0 top-[-0.625rem] left-[5.5rem] object-cover hidden z-[0] shrink-0"
              width={48}
              height={48}
              sizes="100vw"
              alt=""
              src="/Mask-group2@2x.png"
            />
            <Image
              className="w-[3rem] h-[3rem] absolute !m-0 top-[-0.625rem] left-[10.688rem] object-cover z-[1] shrink-0"
              width={48}
              height={48}
              sizes="100vw"
              alt=""
              src="/broadcast-1@2x.png"
            />
            <div className="relative leading-[2.5rem] font-extrabold z-[2] shrink-0 mq450:text-[1.813rem] mq450:leading-[1.5rem] mq800:text-[2.375rem] mq800:leading-[2rem]">
              Global
            </div>
            <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[#4d565f] opacity-[0.9] z-[3] shrink-0">
              Distribution Network
            </div>
          </div>
        </div>
      </section>
      <About />
      <section className="self-stretch bg-[#12171c] flex flex-col items-center py-[6.125rem] px-[6.875rem] box-border gap-[4.25rem] max-w-full text-center text-[1rem] text-[#0bc111] font-['Proxima_Nova'] mq450:gap-[1.063rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq800:gap-[2.125rem] mq800:py-[2.625rem] mq800:px-[3.438rem] mq800:box-border mq1125:pt-[4rem] mq1125:pb-[4rem] mq1125:box-border">
        <div className="w-[60rem] max-w-full overflow-hidden flex flex-col items-center gap-[1.5rem]">
          <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase">
            How Wirero Works
          </b>
          <h1 className="m-0 self-stretch relative text-[3.5rem] leading-[4.25rem] font-bold font-[inherit] text-[#eee] mq450:text-[2.125rem] mq450:leading-[2.563rem] mq800:text-[2.813rem] mq800:leading-[3.375rem]">
            Simple Access to Global Distribution
          </h1>
        </div>
        <div className="self-stretch flex flex-col items-start pt-[0rem] px-[0rem] pb-[1.75rem] box-border max-w-full">
          <FrameComponent5 />
        </div>
      </section>
      <CtaSection />
      <div className="w-[90rem] hidden flex-col items-center py-[6.125rem] px-[1.25rem] box-border gap-[4.25rem] text-[#0bc111] font-['Proxima_Nova']">
        <div className="w-[76.25rem] overflow-hidden flex flex-col items-center gap-[1.5rem]">
          <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase">
            Network Categories
          </b>
          <div className="self-stretch flex items-start gap-[4.25rem] text-center text-[3.5rem] text-[#1a2530]">
            <b className="flex-1 relative leading-[4.25rem] shrink-0 mq450:text-[2.125rem] mq450:leading-[2.563rem] mq800:text-[2.813rem] mq800:leading-[3.375rem]">
              Distribution Across Multiple Categories
            </b>
            <div className="w-[36rem] relative text-[1.125rem] leading-[1.75rem] text-[#4d575f] text-left hidden shrink-0">
              Wirero helps startups, enterprises, PR agencies, and growing
              brands distribute their press releases and reach global audiences
              through our media network.
            </div>
          </div>
        </div>
        <div className="w-[76.25rem] flex flex-col items-start relative isolate gap-[0.625rem] text-[1.375rem] text-[#1a2530]">
          <div className="self-stretch overflow-x-auto flex items-start py-[1.25rem] px-[0rem] gap-[1.75rem] z-[0]">
            <div className="w-[15.063rem] rounded-3xl bg-color-white border-[#e2e5e9] border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-center p-[1.5rem] gap-[3rem]">
              <div className="self-stretch flex flex-col items-start">
                <b className="self-stretch relative leading-[1.75rem]">{`Technology & Startups`}</b>
              </div>
              <div className="w-[7.55rem] h-[7.5rem] relative">
                <Image
                  className="absolute right-[0rem] bottom-[0rem] w-[7.5rem] h-[7.5rem] object-cover"
                  width={120}
                  height={120}
                  sizes="100vw"
                  alt=""
                  src="/image-95@2x.png"
                />
                <div className="absolute top-[0rem] left-[0rem] bg-[#1e2226] w-[7.55rem] h-[7.5rem] mix-blend-overlay" />
              </div>
            </div>
            <div className="w-[15.063rem] shadow-[0px_2px_12px_rgba(26,_38,_48,_0.12)] rounded-3xl bg-color-white border-[#005edc] border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-center p-[1.5rem] gap-[3rem]">
              <div className="self-stretch flex flex-col items-start">
                <b className="self-stretch relative tracking-[-0.08px] leading-[1.75rem]">{`Business & Finance`}</b>
              </div>
              <div className="w-[7.55rem] h-[7.5rem] relative">
                <Image
                  className="absolute right-[0rem] bottom-[0rem] w-[7.5rem] h-[7.5rem] object-cover"
                  width={120}
                  height={120}
                  sizes="100vw"
                  alt=""
                  src="/image-95@2x.png"
                />
                <div className="absolute top-[0rem] left-[0rem] bg-[#1e2226] w-[7.55rem] h-[7.5rem] mix-blend-overlay" />
              </div>
            </div>
            <div className="w-[15.063rem] rounded-3xl bg-color-white border-[#e2e5e9] border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-center p-[1.5rem] gap-[3rem]">
              <div className="self-stretch flex flex-col items-start">
                <b className="self-stretch relative leading-[1.75rem]">{`Lifestyle & Media<br/>`}</b>
              </div>
              <div className="w-[7.55rem] h-[7.5rem] relative">
                <Image
                  className="absolute right-[0rem] bottom-[0rem] w-[7.5rem] h-[7.5rem] object-cover"
                  width={120}
                  height={120}
                  sizes="100vw"
                  alt=""
                  src="/image-95@2x.png"
                />
                <div className="absolute top-[0rem] left-[0rem] bg-[#1e2226] w-[7.55rem] h-[7.5rem] mix-blend-overlay" />
              </div>
            </div>
            <div className="w-[15.063rem] rounded-3xl bg-color-white border-[#e2e5e9] border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-center p-[1.5rem] gap-[3rem]">
              <div className="self-stretch flex flex-col items-start">
                <b className="self-stretch relative leading-[1.75rem]">{`E-commerce & Retail`}</b>
              </div>
              <div className="w-[7.55rem] h-[7.5rem] relative">
                <Image
                  className="absolute right-[0rem] bottom-[0rem] w-[7.5rem] h-[7.5rem] object-cover"
                  width={120}
                  height={120}
                  sizes="100vw"
                  alt=""
                  src="/image-95@2x.png"
                />
                <div className="absolute top-[0rem] left-[0rem] bg-[#1e2226] w-[7.55rem] h-[7.5rem] mix-blend-overlay" />
              </div>
            </div>
            <div className="w-[15.063rem] rounded-3xl bg-color-white border-[#e2e5e9] border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-center p-[1.5rem] gap-[3rem]">
              <div className="self-stretch flex flex-col items-start">
                <b className="self-stretch relative leading-[1.75rem]">{`Corporate & Industry News`}</b>
              </div>
              <div className="w-[7.55rem] h-[7.5rem] relative">
                <Image
                  className="absolute right-[0rem] bottom-[0rem] w-[7.5rem] h-[7.5rem] object-cover"
                  width={120}
                  height={120}
                  sizes="100vw"
                  alt=""
                  src="/image-95@2x.png"
                />
                <div className="absolute top-[0rem] left-[0rem] bg-[#1e2226] w-[7.55rem] h-[7.5rem] mix-blend-overlay" />
              </div>
            </div>
            <div className="w-[15.063rem] rounded-3xl bg-color-white border-[#e2e5e9] border-solid border-[1px] box-border overflow-hidden shrink-0 flex flex-col items-center p-[1.5rem] gap-[3rem]">
              <div className="self-stretch flex flex-col items-start">
                <b className="self-stretch relative leading-[1.75rem]">
                  General News Platforms
                </b>
              </div>
              <div className="w-[7.55rem] h-[7.5rem] relative">
                <Image
                  className="absolute right-[0rem] bottom-[0rem] w-[7.5rem] h-[7.5rem] object-cover"
                  width={120}
                  height={120}
                  sizes="100vw"
                  alt=""
                  src="/image-95@2x.png"
                />
                <div className="absolute top-[0rem] left-[0rem] bg-[#1e2226] w-[7.55rem] h-[7.5rem] mix-blend-overlay" />
              </div>
            </div>
          </div>
          <div className="w-[5.75rem] h-full absolute !m-0 top-[0rem] right-[0rem] bottom-[0rem] [background:linear-gradient(270deg,_#fff,_rgba(255,_255,_255,_0))] z-[1]" />
          <div className="!m-0 absolute top-[calc(50%_-_22px)] right-[0rem] flex items-center justify-end gap-[0.75rem] z-[2]">
            <div className="rounded-[40px] bg-[#1a2630] hidden flex-col items-center justify-center p-[0.5rem]">
              <Image
                className="w-full h-[1.75rem] relative"
                width={28}
                height={28}
                sizes="100vw"
                alt=""
                src="/arrow-left.svg"
              />
            </div>
            <div className="rounded-[40px] bg-[#12171c] flex flex-col items-center justify-center p-[0.5rem]">
              <Image
                className="w-full h-[1.75rem] relative"
                width={28}
                height={28}
                sizes="100vw"
                alt=""
                src="/arrow-right1.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <WhyChooseUs />
      <section className="self-stretch bg-[#12171c] flex flex-col items-center py-[6.125rem] px-[6.875rem] gap-[4.25rem] mq450:gap-[1.063rem] mq450:pl-[1.25rem] mq450:pr-[1.25rem] mq450:box-border mq800:gap-[2.125rem] mq800:py-[2.625rem] mq800:px-[3.438rem] mq800:box-border mq1350:pt-[4rem] mq1350:pb-[4rem] mq1350:box-border">
        <section className="w-[60rem] max-w-full overflow-hidden flex flex-col items-center gap-[1.5rem] text-center text-[3.5rem] text-[#eee] font-['Proxima_Nova']">
          <b className="self-stretch relative text-[1rem] tracking-[0.02em] leading-[1.25rem] uppercase text-[#0bc111]">
            NETWORK STRUCTURE
          </b>
          <b className="w-[47.5rem] relative leading-[4.25rem] hidden font-[Urbanist] mq450:text-[2.125rem] mq450:leading-[2.563rem] mq800:text-[2.813rem] mq800:leading-[3.375rem]">
            See Why Clients Choose Wirero
          </b>
          <div className="self-stretch flex flex-col items-center gap-[1rem]">
            <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[4.25rem] font-bold font-[inherit] mq450:text-[2.125rem] mq450:leading-[2.563rem] mq800:text-[2.813rem] mq800:leading-[3.375rem]">
              Precision distribution across 10 industry-specific networks
            </h1>
            <h3 className="m-0 self-stretch relative text-[1.25rem] leading-[2rem] font-normal font-[inherit] text-[rgba(238,238,238,0.8)] mq450:text-[1rem] mq450:leading-[1.625rem]">
              Wirero is structured for targeted reach—not random placement.
            </h3>
          </div>
        </section>
        <List />
        <Title />
      </section>
      <main className="self-stretch bg-[#f7fafd] flex flex-col items-start py-[6.125rem] px-[6.875rem] box-border gap-[6.125rem] max-w-full mq450:gap-[1.5rem] mq450:py-[1.688rem] mq450:px-[1.25rem] mq450:box-border mq800:gap-[3.063rem] mq800:py-[2.625rem] mq800:px-[3.438rem] mq800:box-border mq1350:pt-[4rem] mq1350:pb-[4rem] mq1350:box-border">
        <FrameComponent3 />
        <FrameComponent6 />
      </main>
      <PressReleases />
      <CtaSection1 />
      <Footer property1="Variant2" />
    </div>
  );
};

export default Home;
