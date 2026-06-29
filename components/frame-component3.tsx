import Agencies from "./agencies";

export type FrameComponent3Type = {
  className?: string;
};

const audiences = [
  {
    title: "Agencies",
    description:
      "Expand your distribution capacity without increasing operational complexity or publishing overhead.",
    className: "mt-[9.75rem] mq1350:mt-0",
  },
  {
    title: "Reseller Platforms",
    description:
      "Offer scalable distribution services directly to your customers without building your own publishing network.",
    className: "mt-[4.125rem] mq1350:mt-0",
  },
  {
    title: "High-Frequency Industries",
    description:
      "Built for industries where speed, publishing volume, and continuous visibility matter.",
    className: "",
  },
];

const FrameComponent3 = ({ className = "" }: FrameComponent3Type) => {
  return (
    <section
      className={`flex w-full flex-col items-center gap-[3rem] font-proxima mq800:gap-[2rem] ${className}`}
    >
      <header className="flex w-full max-w-[60rem] flex-col items-center gap-[1.5rem] text-center text-[1rem] text-[#0bc111]">
        <b className="tracking-[0.02em] leading-[1.25rem] uppercase">
          Made For Scale
        </b>
        <div className="flex w-full flex-col items-center gap-[1rem] text-[3.5rem] text-[#1a2530]">
          <h2 className="m-0 w-full text-[length:inherit] leading-[4.25rem] font-bold font-[inherit] mq800:text-[2.813rem] mq800:leading-[3.375rem] mq450:text-[2.125rem] mq450:leading-[2.563rem]">
            Who is Wirero For?
          </h2>
          <p className="m-0 w-full text-[1.125rem] leading-[1.75rem] text-[#4d565f]">
            Built for agencies, reseller platforms, and high-volume industries
            that need faster distribution without added operational complexity.
          </p>
        </div>
      </header>

      <div className="flex w-full max-w-[76.25rem] flex-wrap items-start justify-center gap-[2rem] mq800:gap-[1rem]">
        {audiences.map(({ title, description, className: cardClassName }) => (
          <Agencies
            key={title}
            className={`min-w-0 flex-[1_1_22rem] ${cardClassName}`}
            dedicatedProjectMa={title}
            withLotsOfUnique={description}
          />
        ))}
      </div>
    </section>
  );
};

export default FrameComponent3;
