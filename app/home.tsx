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
    <div className="relative flex w-full min-w-0 flex-col items-stretch overflow-x-clip bg-color-white leading-[normal] tracking-[normal] text-left text-[1rem] text-[#005edc] font-[Urbanist]">
      <Bannerheader />
      <Clients className="home-gutters" />
      <section className="home-gutters self-stretch py-[5rem] text-left text-[3rem] text-[#0461c3] font-['Proxima_Nova'] mq450:py-[2.5rem] mq800:py-[3.25rem]">
        <div className="home-container flex min-w-0 items-center gap-[3rem] mq800:gap-[1.5rem] mq1350:flex-wrap">
          <FrameComponent2 className="px-0" />
          <div className="relative h-[27.5rem] w-[39.25rem] max-w-full shrink-0 overflow-hidden rounded-[20px] mq800:hidden mq1125:min-w-full mq1350:flex-1">
            <Image
              className="absolute inset-y-0 right-0 h-full w-[57.3%] rounded-[20px] object-cover"
              loading="lazy"
              width={360}
              height={440}
              sizes="(max-width: 1350px) 50vw, 360px"
              alt=""
              src="/IMG-BG@2x.png"
            />
            <Image
              className="absolute left-0 top-[5rem] h-[21rem] w-[39.5%] rounded-[20px] object-cover"
              width={248}
              height={336}
              sizes="(max-width: 1350px) 40vw, 248px"
              alt=""
              src="/IMG-BG@2x.png"
            />
          </div>
        </div>
      </section>
      <About className="home-gutters" />
      <section className="home-gutters self-stretch bg-[#12171c] py-[6.125rem] text-center text-[1rem] text-[#0bc111] font-['Proxima_Nova'] mq450:py-[2.625rem] mq800:py-[2.625rem] mq1125:py-[4rem]">
        <div className="home-container flex flex-col items-center gap-[4.25rem] mq450:gap-[1.063rem] mq800:gap-[2.125rem]">
          <div className="flex w-full max-w-[60rem] flex-col items-center gap-[1.5rem] overflow-hidden">
            <b className="self-stretch tracking-[0.02em] leading-[1.25rem] uppercase">
              How Wirero Works
            </b>
            <h1 className="m-0 self-stretch text-[3.5rem] leading-[4.25rem] font-bold font-[inherit] text-[#eee] mq450:text-[2.125rem] mq450:leading-[2.563rem] mq800:text-[2.813rem] mq800:leading-[3.375rem]">
              Simple Access to Global Distribution
            </h1>
          </div>
          <FrameComponent5 className="pb-[1.75rem]" />
        </div>
      </section>
      <CtaSection className="home-gutters" />
      <WhyChooseUs className="home-gutters" />
      <section className="home-gutters flex self-stretch flex-col items-center gap-[4.25rem] bg-[#12171c] py-[6.125rem] mq450:gap-[1.063rem] mq800:gap-[2.125rem] mq800:py-[2.625rem] mq1350:py-[4rem]">
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
        <List className="home-container" />
        <Title className="home-container" />
      </section>
      <main className="home-gutters flex self-stretch flex-col items-center gap-[6.125rem] bg-[#f7fafd] py-[6.125rem] mq450:gap-[1.5rem] mq450:py-[1.688rem] mq800:gap-[3.063rem] mq800:py-[2.625rem] mq1350:py-[4rem]">
        <FrameComponent3 className="home-container" />
        <FrameComponent6 className="home-container" />
      </main>
      <PressReleases className="home-gutters" />
      <CtaSection1 className="home-gutters" />
      <Footer className="home-gutters" property1="Variant2" />
    </div>
  );
};

export default Home;
