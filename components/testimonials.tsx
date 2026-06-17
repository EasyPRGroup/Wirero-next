import type { NextPage } from "next";
import Image from "next/image";

export type TestimonialsType = {
  className?: string;
  image83: string;

  /** Variant props */
  property1?: "Default" | "Variant2";
};

const Testimonials: NextPage<TestimonialsType> = ({
  className = "",
  property1: _property1 = "Default",
  image83,
}) => {
  return (
    <div
      className={`self-stretch rounded-[20px] bg-[#e2eff9] flex flex-col items-start p-[1.25rem] gap-[1.5rem] shrink-0 text-left text-[1.25rem] text-[#1a2530] font-['Proxima_Nova'] ${className}`}
    >
      <div className="self-stretch flex flex-col items-start gap-[1rem]">
        <div className="hidden items-center">
          <div className="flex items-start">
            <Image
              className="h-[1.5rem] w-[1.5rem] relative"
              width={24}
              height={24}
              sizes="100vw"
              alt=""
              src="/star-rounded.svg"
            />
            <Image
              className="h-[1.5rem] w-[1.5rem] relative"
              width={24}
              height={24}
              sizes="100vw"
              alt=""
              src="/star-rounded.svg"
            />
            <Image
              className="h-[1.5rem] w-[1.5rem] relative"
              width={24}
              height={24}
              sizes="100vw"
              alt=""
              src="/star-rounded.svg"
            />
            <Image
              className="h-[1.5rem] w-[1.5rem] relative"
              width={24}
              height={24}
              sizes="100vw"
              alt=""
              src="/star-rounded.svg"
            />
            <Image
              className="h-[1.5rem] w-[1.5rem] relative"
              width={24}
              height={24}
              sizes="100vw"
              alt=""
              src="/star-rounded.svg"
            />
          </div>
        </div>
        <div className="self-stretch flex flex-col items-center">
          <div className="self-stretch relative leading-[1.875rem] font-semibold">
            “We no longer waste time managing different PR platforms. Wirero
            gives us direct access to distribution.”
          </div>
        </div>
      </div>
      <div className="self-stretch flex items-start gap-[1rem] text-[1.5rem] text-[#1a2630]">
        <Image
          className="h-[2.5rem] w-[8.438rem] relative object-cover hidden shrink-0"
          width={135}
          height={40}
          sizes="100vw"
          alt=""
          src={image83}
        />
        <div className="flex-1 flex flex-col items-start gap-[0.5rem] shrink-0">
          <Image
            className="w-[3.5rem] h-[3.5rem] relative rounded-[50%] object-cover hidden shrink-0"
            width={56}
            height={56}
            sizes="100vw"
            alt=""
            src="/Ellipse-16@2x.png"
          />
          <div className="self-stretch flex flex-col items-start gap-[0.75rem] shrink-0">
            <div className="self-stretch flex flex-col items-start gap-[0.25rem] shrink-0">
              <div className="w-[21.188rem] relative leading-[1.875rem] font-semibold hidden shrink-0">
                Sarah Bennett
              </div>
              <div className="self-stretch relative text-[1.125rem] leading-[1.625rem] text-[#4d575f] shrink-0">
                Marketing Lead
              </div>
            </div>
            <div className="hidden items-start shrink-0">
              <Image
                className="h-[1.5rem] w-[1.5rem] relative"
                width={24}
                height={24}
                sizes="100vw"
                alt=""
                src="/star-rounded.svg"
              />
              <Image
                className="h-[1.5rem] w-[1.5rem] relative"
                width={24}
                height={24}
                sizes="100vw"
                alt=""
                src="/star-rounded.svg"
              />
              <Image
                className="h-[1.5rem] w-[1.5rem] relative"
                width={24}
                height={24}
                sizes="100vw"
                alt=""
                src="/star-rounded.svg"
              />
              <Image
                className="h-[1.5rem] w-[1.5rem] relative"
                width={24}
                height={24}
                sizes="100vw"
                alt=""
                src="/star-rounded.svg"
              />
              <Image
                className="h-[1.5rem] w-[1.5rem] relative"
                width={24}
                height={24}
                sizes="100vw"
                alt=""
                src="/star-rounded.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
