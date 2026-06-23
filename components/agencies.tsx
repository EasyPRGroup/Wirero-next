import Image from "next/image";

export type AgenciesType = {
  className?: string;
  dedicatedProjectMa?: string;
  withLotsOfUnique?: string;
};

/**
 * Feature card component for the agencies section
 * Displays an icon with title and description
 */
const Agencies = ({
  className = "",
  dedicatedProjectMa,
  withLotsOfUnique,
}: AgenciesType) => {
  return (
    <article
      className={`flex w-full max-w-[24.125rem] flex-col items-center overflow-hidden rounded-[20px] border border-solid border-[#e2e5e9] bg-color-white text-center text-[1.5rem] text-[#1a2530] font-['Proxima_Nova'] ${className}`}
    >
      <div className="relative isolate flex h-[10rem] w-full items-center justify-center overflow-hidden">
        <div
          aria-hidden="true"
          className="absolute inset-[-1px] z-0 [background-image:linear-gradient(to_right,#e2e5e9_1px,transparent_1px),linear-gradient(to_bottom,#e2e5e9_1px,transparent_1px)] [background-size:2rem_2rem]"
        />
        <div
          aria-hidden="true"
          className="absolute inset-x-0 bottom-0 z-[1] h-[4.75rem] [background:linear-gradient(180deg,_rgba(255,_255,_255,_0.3)_10%,_rgba(255,_255,_255,_0.96)_27.95%)]"
        />
        <div className="z-[2] flex items-center rounded-3xl bg-color-white p-[0.5rem] shadow-[0px_4px_0px_rgba(26,_37,_48,_0.1)]">
          <div className="flex h-[5rem] w-[5rem] items-center justify-center rounded-2xl bg-[#1a8cd5] p-[1.25rem] mq450:h-[4.5rem] mq450:w-[4.5rem] mq450:p-[1rem]">
            <Image
              className="h-auto w-full"
              width={48}
              height={48}
              alt=""
              src="/solar-global-bold1.svg"
            />
          </div>
        </div>
      </div>
      <div className="flex w-full min-w-0 flex-col items-center gap-[1rem] p-[1.75rem] mq450:p-[1.25rem]">
        <h3 className="m-0 w-full break-words text-[length:inherit] leading-[1.875rem] font-bold font-[inherit] mq450:text-[1.25rem] mq450:leading-[1.625rem]">
          {dedicatedProjectMa}
        </h3>
        <p className="m-0 w-full break-words text-[1.125rem] leading-[1.75rem] text-[#4d565f] mq450:text-[1rem] mq450:leading-[1.625rem]">
          {withLotsOfUnique}
        </p>
      </div>
    </article>
  );
};

export default Agencies;
