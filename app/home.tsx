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
    <div className="relative flex w-full min-w-0 flex-col items-stretch overflow-x-clip bg-color-white leading-[normal] tracking-[normal] text-left text-[1rem] text-[#005edc] font-proxima">
      <Bannerheader />
      <Clients />
      <section className="site-section self-stretch text-left text-[3rem] text-[#0461c3] font-proxima">
        <div className="site-container flex min-w-0 items-center gap-[3rem] mq800:gap-[1.5rem] mq1350:flex-wrap">
          <FrameComponent2 />
          <div className="relative h-[27.5rem] w-[39.25rem] max-w-full shrink-0 overflow-hidden rounded-[20px] mq800:hidden mq1125:min-w-full mq1350:flex-1">
            <Image
              className="absolute inset-y-0 right-0 h-full w-[57.3%] rounded-[20px] object-cover"
              loading="lazy"
              width={360}
              height={440}
              sizes="(max-width: 1350px) 50vw, 360px"
              alt=""
              src="/wirero-distribute-content.jpg"
            />
            <Image
              className="absolute left-0 top-[5rem] h-[21rem] w-[39.5%] rounded-[20px] object-cover"
              width={248}
              height={336}
              sizes="(max-width: 1350px) 40vw, 248px"
              alt=""
              src="/wirero-checklist-card.jpg"
            />
          </div>
        </div>
      </section>
      <About />
      <section className="site-section self-stretch bg-[#12171c] text-center text-[1rem] text-[#0bc111] font-proxima">
        <div className="site-container flex flex-col items-center gap-[4.25rem] mq450:gap-[1.063rem] mq800:gap-[2.125rem]">
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
      <CtaSection />
      <WhyChooseUs />
      <section className="site-section self-stretch flex flex-col items-center gap-[4.25rem] bg-[#12171c] mq450:gap-[1.063rem] mq800:gap-[2.125rem]">
        <div className="w-[60rem] max-w-full overflow-hidden flex flex-col items-center gap-[1.5rem] text-center text-[3.5rem] text-[#eee] font-proxima">
          <b className="self-stretch relative text-[1rem] tracking-[0.02em] leading-[1.25rem] uppercase text-[#0bc111]">
            NETWORK STRUCTURE
          </b>
          <div className="self-stretch flex flex-col items-center gap-[1rem]">
            <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[4.25rem] font-bold font-[inherit] mq450:text-[2.125rem] mq450:leading-[2.563rem] mq800:text-[2.813rem] mq800:leading-[3.375rem]">
              Precision distribution across 10 industry-specific networks
            </h1>
            <h3 className="m-0 self-stretch relative text-[1.25rem] leading-[2rem] font-normal font-[inherit] text-[rgba(238,238,238,0.8)] mq450:text-[1rem] mq450:leading-[1.625rem]">
              Wirero is structured for targeted reach—not random placement.
            </h3>
          </div>
        </div>
        <List className="site-container" />
        <Title className="site-container" />
      </section>
      <main className="site-section self-stretch flex flex-col items-center gap-[6.125rem] bg-[#f7fafd] mq450:gap-[1.5rem] mq800:gap-[3.063rem]">
        <FrameComponent3 className="site-container" />
        <FrameComponent6 className="site-container" />
      </main>
      <PressReleases />
      <CtaSection1 />
      <Footer property1="Variant2" />
    </div>
  );
};

export default Home;
