import type { NextPage } from "next";
import Link from "next/link";

export type DomainCardType = {
  className?: string;
  name: string;
  url: string;
};

const DomainCard: NextPage<DomainCardType> = ({
  className = "",
  name,
  url,
}) => {
  return (
    <Link
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className={`rounded-[12px] bg-[#f7fafd] border-[#e2e5e9] border-solid border-[1px] box-border flex flex-col items-start py-[1.25rem] px-[1.25rem] gap-[0.5rem] no-underline hover:border-[#1a8cd5] transition-colors ${className}`}
    >
      <b className="relative text-[1.125rem] leading-[1.5rem] font-bold font-proxima text-[#1a2530]">
        {name}
      </b>
      <div className="relative text-[0.875rem] leading-[1.25rem] font-proxima text-[#1a8cd5] break-words">
        {url}
      </div>
    </Link>
  );
};

export default DomainCard;
