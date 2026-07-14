"use client";

import type { NextPage } from "next";
import { useMemo, useState } from "react";
import Link from "next/link";

export type DomainEntry = {
  tag: string;
  name: string;
  url: string;
};

export type NetworkListType = {
  className?: string;
  domains: DomainEntry[];
};

const NetworkList: NextPage<NetworkListType> = ({
  className = "",
  domains,
}) => {
  const tags = useMemo(() => {
    const unique = Array.from(new Set(domains.map((d) => d.tag)));
    return unique.sort((a, b) => {
      if (a === "Untagged") return 1;
      if (b === "Untagged") return -1;
      return a.localeCompare(b);
    });
  }, [domains]);

  const [activeTag, setActiveTag] = useState<string>("All");

  const grouped = useMemo(() => {
    const map = new Map<string, DomainEntry[]>();
    for (const domain of domains) {
      if (activeTag !== "All" && domain.tag !== activeTag) continue;
      const list = map.get(domain.tag) ?? [];
      list.push(domain);
      map.set(domain.tag, list);
    }

    const orderedTags =
      activeTag === "All"
        ? tags.filter((tag) => map.has(tag))
        : tags.filter((tag) => tag === activeTag && map.has(tag));

    return orderedTags.map((tag) => ({
      tag,
      domains: (map.get(tag) ?? []).sort((a, b) =>
        a.name.localeCompare(b.name),
      ),
    }));
  }, [domains, tags, activeTag]);

  const totalVisible = grouped.reduce(
    (sum, group) => sum + group.domains.length,
    0,
  );

  const filterButtonClass = (isActive: boolean) =>
    `cursor-pointer shrink-0 rounded-[40px] border-solid border-[1px] py-[0.5rem] px-[1rem] text-[0.9375rem] leading-[1.25rem] font-semibold font-proxima transition-colors mq750:py-[0.4375rem] mq750:px-[0.875rem] mq750:text-[0.875rem] mq450:py-[0.375rem] mq450:px-[0.75rem] mq450:text-[0.8125rem] ${
      isActive
        ? "bg-[#0461c3] border-[#0461c3] text-color-white"
        : "bg-color-white border-[#e2e5e9] text-[#4d565f] hover:border-[#1a8cd5]"
    }`;

  return (
    <section
      className={`self-stretch min-w-0 flex flex-col items-start gap-[2rem] text-left text-[#1a2530] font-proxima mq750:gap-[1.5rem] mq450:gap-[1.25rem] ${className}`}
    >
      {/* Filter chips: wrap on larger screens, horizontal scroll on small */}
      <div className="self-stretch min-w-0 -mx-[0.125rem] px-[0.125rem]">
        <div className="flex flex-wrap items-center gap-[0.75rem] mq750:flex-nowrap mq750:overflow-x-auto mq750:pb-[0.25rem] mq750:gap-[0.5rem] mq450:gap-[0.375rem] [scrollbar-width:thin]">
          <button
            type="button"
            onClick={() => setActiveTag("All")}
            className={filterButtonClass(activeTag === "All")}
          >
            All ({domains.length})
          </button>
          {tags.map((tag) => {
            const count = domains.filter((d) => d.tag === tag).length;
            return (
              <button
                key={tag}
                type="button"
                onClick={() => setActiveTag(tag)}
                className={filterButtonClass(activeTag === tag)}
              >
                <span className="whitespace-nowrap">
                  {tag} ({count})
                </span>
              </button>
            );
          })}
        </div>
      </div>

      <div className="self-stretch relative text-[1rem] leading-[1.5rem] text-[#4d565f] mq450:text-[0.875rem] mq450:leading-[1.375rem]">
        Showing {totalVisible} domain{totalVisible === 1 ? "" : "s"}
        {activeTag !== "All" ? ` in ${activeTag}` : ""}.
      </div>

      <div className="self-stretch min-w-0 flex flex-col items-start gap-[2.5rem] mq750:gap-[1.75rem] mq450:gap-[1.5rem]">
        {grouped.map((group) => (
          <div
            key={group.tag}
            className="self-stretch min-w-0 flex flex-col items-start gap-[1rem] mq450:gap-[0.75rem]"
          >
            <div className="self-stretch flex flex-wrap items-center justify-between gap-[0.5rem]">
              <h2 className="m-0 relative text-[1.5rem] leading-[1.875rem] font-bold text-[#1a2530] mq800:text-[1.375rem] mq800:leading-[1.75rem] mq450:text-[1.1875rem] mq450:leading-[1.5rem]">
                {group.tag}
              </h2>
              <span className="relative text-[0.9375rem] leading-[1.25rem] font-semibold text-[#4d565f] mq450:text-[0.8125rem]">
                {group.domains.length} domain
                {group.domains.length === 1 ? "" : "s"}
              </span>
            </div>

            {/* Desktop / tablet table */}
            <div className="self-stretch min-w-0 overflow-x-auto rounded-[12px] border-[#e2e5e9] border-solid border-[1px] bg-color-white mq750:hidden">
              <table className="w-full min-w-[36rem] border-collapse text-left mq800:min-w-[32rem]">
                <thead>
                  <tr className="bg-[#f7fafd]">
                    <th className="px-[1.25rem] py-[0.875rem] text-[0.875rem] leading-[1.25rem] font-semibold uppercase tracking-[0.02em] text-[#4d565f] border-b border-solid border-[#e2e5e9] mq800:px-[1rem]">
                      Domain Name
                    </th>
                    <th className="px-[1.25rem] py-[0.875rem] text-[0.875rem] leading-[1.25rem] font-semibold uppercase tracking-[0.02em] text-[#4d565f] border-b border-solid border-[#e2e5e9] mq800:px-[1rem]">
                      URL
                    </th>
                    <th className="px-[1.25rem] py-[0.875rem] text-[0.875rem] leading-[1.25rem] font-semibold uppercase tracking-[0.02em] text-[#4d565f] border-b border-solid border-[#e2e5e9] mq800:px-[1rem]">
                      Tag
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {group.domains.map((domain, index) => (
                    <tr
                      key={`${domain.tag}-${domain.name}-${domain.url}-${index}`}
                      className="hover:bg-[#f7fafd] transition-colors"
                    >
                      <td className="px-[1.25rem] py-[0.875rem] text-[1rem] leading-[1.5rem] font-semibold text-[#1a2530] border-b border-solid border-[#eef1f4] break-words mq800:px-[1rem] mq800:text-[0.9375rem]">
                        {domain.name}
                      </td>
                      <td className="px-[1.25rem] py-[0.875rem] text-[0.9375rem] leading-[1.375rem] border-b border-solid border-[#eef1f4] mq800:px-[1rem] mq800:text-[0.875rem]">
                        {domain.url ? (
                          <Link
                            href={domain.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#1a8cd5] no-underline break-all hover:underline"
                          >
                            {domain.url}
                          </Link>
                        ) : (
                          <span className="text-[#4d565f]">—</span>
                        )}
                      </td>
                      <td className="px-[1.25rem] py-[0.875rem] text-[0.9375rem] leading-[1.375rem] text-[#4d565f] border-b border-solid border-[#eef1f4] mq800:px-[1rem]">
                        <span className="inline-flex max-w-full rounded-[40px] bg-[#eaf5fb] px-[0.75rem] py-[0.25rem] text-[0.8125rem] leading-[1.125rem] font-semibold text-[#0461c3] break-words">
                          {domain.tag}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile card list */}
            <div className="hidden self-stretch min-w-0 flex-col gap-[0.75rem] mq750:flex">
              {group.domains.map((domain, index) => (
                <article
                  key={`${domain.tag}-${domain.name}-${domain.url}-card-${index}`}
                  className="self-stretch min-w-0 rounded-[12px] border-[#e2e5e9] border-solid border-[1px] bg-color-white p-[1rem] flex flex-col gap-[0.625rem] mq450:p-[0.875rem] mq450:gap-[0.5rem]"
                >
                  <div className="self-stretch flex flex-wrap items-start justify-between gap-[0.5rem]">
                    <h3 className="m-0 min-w-0 flex-1 relative text-[1.0625rem] leading-[1.375rem] font-bold text-[#1a2530] break-words mq450:text-[1rem] mq450:leading-[1.25rem]">
                      {domain.name}
                    </h3>
                    <span className="inline-flex max-w-full shrink-0 rounded-[40px] bg-[#eaf5fb] px-[0.625rem] py-[0.1875rem] text-[0.75rem] leading-[1rem] font-semibold text-[#0461c3] break-words">
                      {domain.tag}
                    </span>
                  </div>

                  {domain.url ? (
                    <Link
                      href={domain.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative text-[0.875rem] leading-[1.25rem] text-[#1a8cd5] no-underline break-all hover:underline"
                    >
                      {domain.url}
                    </Link>
                  ) : (
                    <span className="relative text-[0.875rem] leading-[1.25rem] text-[#4d565f]">
                      —
                    </span>
                  )}
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default NetworkList;
