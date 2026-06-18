import type { NextPage } from "next";
import Link from "next/link";

export type NewsroomCardType = {
  className?: string;
  title: string;
  date: string;
  href?: string;
};

const NewsroomCard: NextPage<NewsroomCardType> = ({
  className = "",
  title,
  date,
  href = "#",
}) => {
  return (
    <Link
      href={href}
      className={`mb-[1.5rem] block break-inside-avoid rounded-[12px] bg-color-white border-[#e2e5e9] border-solid border-[1px] box-border py-[1.25rem] px-[1.25rem] no-underline hover:shadow-[0px_2px_12px_rgba(26,38,48,0.12)] transition-shadow ${className}`}
    >
      <b className="relative text-[1.125rem] leading-[1.5rem] font-bold font-['Proxima_Nova'] text-[#1a2530]">
        {title}
      </b>
      <div className="relative mt-[0.75rem] text-[0.875rem] leading-[1.25rem] font-['Proxima_Nova'] text-[#64676f]">
        {date}
      </div>
    </Link>
  );
};

export default NewsroomCard;
