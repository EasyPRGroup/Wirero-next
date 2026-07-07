import type { NextPage } from "next";
import Link from "next/link";

export type NewsroomCardType = {
  className?: string;
  title: string;
  date: string;
  href?: string;
  excerpt?: string;
  image?: string;
};

const NewsroomCard: NextPage<NewsroomCardType> = ({
  className = "",
  title,
  date,
  href = "#",
  excerpt,
  image,
}) => {
  return (
    <Link
      href={href}
      className={`flex flex-col h-full rounded-[12px] bg-color-white border-[#e2e5e9] border-solid border-[1px] box-border py-[1.25rem] px-[1.25rem] no-underline hover:shadow-[0px_2px_12px_rgba(26,38,48,0.12)] transition-shadow ${className}`}
    >
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt=""
          loading="lazy"
          className="w-full h-[9.5rem] object-cover rounded-[8px] mb-[0.875rem]"
        />
      ) : null}
      <b className="relative text-[1.125rem] leading-[1.5rem] font-bold font-proxima text-[#1a2530]">
        {title}
      </b>
      {excerpt ? (
        <p className="relative mt-[0.5rem] text-[0.9375rem] leading-[1.375rem] font-proxima text-[#4d575f] line-clamp-3">
          {excerpt}
        </p>
      ) : null}
      <div className="relative mt-[0.75rem] text-[0.875rem] leading-[1.25rem] font-proxima text-[#64676f]">
        {date}
      </div>
    </Link>
  );
};

export default NewsroomCard;
