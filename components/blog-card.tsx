import type { NextPage } from "next";
import Link from "next/link";

export type BlogCardType = {
  className?: string;
  title: string;
  date: string;
  readTime?: string;
  category?: string;
  excerpt?: string;
  image?: string;
  href?: string;
};

function formatDate(raw: string): string {
  if (!raw) return "";
  try {
    const d = new Date(raw);
    if (isNaN(d.getTime())) return raw;
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    });
  } catch {
    return raw;
  }
}

const CalendarIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <rect
      x="2"
      y="3"
      width="12"
      height="11"
      rx="1.5"
      stroke="#64676f"
      strokeWidth="1.3"
    />
    <path
      d="M2 6.5H14"
      stroke="#64676f"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
    <path
      d="M5 1.5V4M11 1.5V4"
      stroke="#64676f"
      strokeWidth="1.3"
      strokeLinecap="round"
    />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
  >
    <circle cx="8" cy="8" r="6.25" stroke="#64676f" strokeWidth="1.3" />
    <path
      d="M8 4.5V8L10.25 9.5"
      stroke="#64676f"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const BlogCard: NextPage<BlogCardType> = ({
  className = "",
  title,
  date,
  readTime,
  category,
  excerpt,
  image,
  href = "#",
}) => {
  return (
    <Link
      href={href}
      className={`flex flex-col h-full rounded-[12px] bg-color-white border-[#e2e5e9] border-solid border-[1px] box-border overflow-hidden no-underline hover:shadow-[0px_2px_12px_rgba(26,38,48,0.12)] transition-shadow ${className}`}
    >
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={image}
          alt=""
          loading="lazy"
          className="w-full h-[10.5rem] object-cover"
        />
      ) : null}
      <div className="flex flex-col items-start gap-[0.625rem] py-[1.125rem] px-[1.125rem]">
        {category ? (
          <span className="inline-flex items-center rounded-[100px] bg-[#e7faea] px-[0.625rem] py-[0.25rem] text-[0.75rem] leading-[1rem] font-semibold text-[#0bc111]">
            {category}
          </span>
        ) : null}
        <b className="relative text-[1.0625rem] leading-[1.4375rem] font-bold font-proxima text-[#1a2530] line-clamp-3">
          {title}
        </b>
        {excerpt ? (
          <p className="relative text-[0.9375rem] leading-[1.375rem] font-proxima text-[#4d575f] line-clamp-3">
            {excerpt}
          </p>
        ) : null}
        <div className="flex items-center gap-[1rem] text-[0.8125rem] leading-[1.125rem] font-proxima text-[#64676f]">
          <span className="flex items-center gap-[0.375rem]">
            <CalendarIcon />
            {formatDate(date)}
          </span>
          {readTime ? (
            <span className="flex items-center gap-[0.375rem]">
              <ClockIcon />
              {readTime}
            </span>
          ) : null}
        </div>
      </div>
    </Link>
  );
};

export default BlogCard;
