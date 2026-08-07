"use client";

import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export type DomainEntry = {
  tag: string;
  name: string;
  url: string;
};

const SampleReportPage: NextPage = () => {
  const [domains, setDomains] = useState<DomainEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDomains = async () => {
      try {
        setLoading(true);
        setError(null);

        const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
        const apiKey = process.env.NEXT_PUBLIC_API_KEY;

        if (!apiBaseUrl || !apiKey) {
          throw new Error("API configuration is missing");
        }

        const baseUrl = apiBaseUrl.replace(/\/client\/?$/, "").replace(/\/$/, "");
        const response = await fetch(`${baseUrl}/client/sites`, {
          headers: {
            "x-api-key": apiKey,
          },
          next: { revalidate: 60 },
        });

        if (!response.ok) {
          throw new Error(`Failed to fetch sites: ${response.status}`);
        }

        const data = await response.json();
        const sites = data.sites || [];

        const formatted = sites.map((site: { name: string; url: string; tag: string }) => ({
          tag: site.tag || "Untagged",
          name: site.name,
          url: site.url,
        }));

        setDomains(formatted);
      } catch (err) {
        console.error("Failed to load sample report:", err);
        setError(err instanceof Error ? err.message : "Failed to load sample report");
      } finally {
        setLoading(false);
      }
    };

    fetchDomains();
  }, []);

  const previewDomains = domains
    .filter((domain) => domain.tag !== "Untagged")
    .sort(() => Math.random() - 0.5)
    .slice(0, 10);

  return (
    <div className="relative flex w-full min-w-0 flex-col items-stretch overflow-x-clip bg-color-white leading-[normal] tracking-[normal]">
      {/* Hero Section */}
      <section className="site-section-hero self-stretch bg-[#f7fafd]">
        <div className="site-container flex flex-col items-start box-border gap-[1.5rem] max-w-full text-left text-[1rem] text-[#0bc111] font-proxima">
          <Link
            href="/"
            className="inline-flex items-center gap-[0.5rem] no-underline text-[#0461c3] hover:text-[#0354a8] transition-colors"
          >
            <Image
              className="h-[1rem] w-[1rem] relative rotate-180 shrink-0"
              width={16}
              height={16}
              sizes="100vw"
              alt=""
              src="/arrow-right1.svg"
            />
            <span className="relative text-[0.9375rem] leading-[1.25rem] font-semibold">
              Back to Wirero
            </span>
          </Link>
          <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase">
            Sample Report
          </b>
          <div className="self-stretch min-w-0 flex flex-col items-start gap-[1rem] text-[3rem] text-[#1a2530]">
            <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[3.625rem] font-bold font-[inherit]">
              Preview Our Distribution Report
            </h1>
            <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d565f] max-w-[48rem]">
              This is a sample of how your press release distribution report will look. Download the full report to see all domains, or release your press release to get started.
            </div>
          </div>
        </div>
      </section>

      {/* Preview Section */}
      <section className="site-section self-stretch bg-color-white">
        <div className="site-container flex flex-col items-start box-border max-w-full min-w-0 gap-[2.5rem]">
          {loading ? (
            <div className="self-stretch rounded-[24px] bg-[#f7fafd] border border-[#e2e5e9] overflow-hidden flex flex-col items-start p-[2rem]">
              <p className="m-0 self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d565f]">
                Loading sample report...
              </p>
            </div>
          ) : error ? (
            <div className="self-stretch rounded-[24px] bg-[#f7fafd] border border-[#e2e5e9] overflow-hidden flex flex-col items-start p-[2rem]">
              <p className="m-0 self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#ef6060]">
                {error}
              </p>
            </div>
          ) : (
            <>
              {/* Sample Report Card */}
              <div className="self-stretch rounded-[24px] bg-[#f7fafd] border border-[#e2e5e9] overflow-hidden flex flex-col items-start">
                {/* Card Header */}
                <div className="self-stretch bg-[#0461c3] flex items-center justify-between px-[2rem] py-[1.25rem] box-border">
                  <div className="flex flex-col items-start gap-[0.25rem]">
                    <h2 className="m-0 relative text-[1.5rem] leading-[1.875rem] font-bold font-proxima text-color-white">
                      Sample Report
                    </h2>
                    <p className="m-0 relative text-[0.875rem] leading-[1.25rem] font-proxima text-[#f0f4f8]">
                      Press Release Distribution Preview
                    </p>
                  </div>
                  <div className="flex items-center gap-[0.75rem]">
                    <span className="inline-flex rounded-[40px] bg-[rgba(255,255,255,0.15)] px-[0.75rem] py-[0.25rem] text-[0.75rem] leading-[1rem] font-semibold text-color-white">
                      {domains.length}+ Domains
                    </span>
                    <span className="inline-flex rounded-[40px] bg-[rgba(255,255,255,0.15)] px-[0.75rem] py-[0.25rem] text-[0.75rem] leading-[1rem] font-semibold text-color-white">
                      10 Networks
                    </span>
                  </div>
                </div>

                {/* Table Preview */}
                <div className="self-stretch overflow-x-auto">
                  <table className="w-full border-collapse text-left">
                    <thead>
                      <tr className="bg-[#f0f4f8]">
                        <th className="px-[1.25rem] py-[0.875rem] text-[0.875rem] leading-[1.25rem] font-semibold uppercase tracking-[0.02em] text-[#4d565f] border-b border-solid border-[#e2e5e9]">
                          #
                        </th>
                        <th className="px-[1.25rem] py-[0.875rem] text-[0.875rem] leading-[1.25rem] font-semibold uppercase tracking-[0.02em] text-[#4d565f] border-b border-solid border-[#e2e5e9]">
                          Media Category
                        </th>
                        <th className="px-[1.25rem] py-[0.875rem] text-[0.875rem] leading-[1.25rem] font-semibold uppercase tracking-[0.02em] text-[#4d565f] border-b border-solid border-[#e2e5e9]">
                          Site Name
                        </th>
                        <th className="px-[1.25rem] py-[0.875rem] text-[0.875rem] leading-[1.25rem] font-semibold uppercase tracking-[0.02em] text-[#4d565f] border-b border-solid border-[#e2e5e9]">
                          Site URL
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {previewDomains.map((domain, index) => (
                        <tr key={`${domain.name}-${domain.url}-${index}`} className="hover:bg-[#f7fafd] transition-colors">
                          <td className="px-[1.25rem] py-[0.875rem] text-[1rem] leading-[1.5rem] font-semibold text-[#1a2530] border-b border-solid border-[#eef1f4]">
                            {index + 1}
                          </td>
                          <td className="px-[1.25rem] py-[0.875rem] text-[0.9375rem] leading-[1.375rem] text-[#4d565f] border-b border-solid border-[#eef1f4]">
                            <span className="inline-flex rounded-[40px] bg-[#eaf5fb] px-[0.75rem] py-[0.25rem] text-[0.8125rem] leading-[1.125rem] font-semibold text-[#0461c3]">
                              {domain.tag}
                            </span>
                          </td>
                          <td className="px-[1.25rem] py-[0.875rem] text-[1rem] leading-[1.5rem] font-semibold text-[#1a2530] border-b border-solid border-[#eef1f4]">
                            {domain.name}
                          </td>
                          <td className="px-[1.25rem] py-[0.875rem] text-[0.9375rem] leading-[1.375rem] text-[#0461c3] border-b border-solid border-[#eef1f4]">
                            <a href={domain.url} target="_blank" rel="noopener noreferrer" className="no-underline hover:underline">
                              {domain.url}
                            </a>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Card Footer */}
                <div className="self-stretch flex flex-col items-start gap-[0.75rem] p-[1.25rem] border-t border-solid border-[#e2e5e9] bg-color-white">
                  <p className="m-0 self-stretch relative text-[0.875rem] leading-[1.25rem] font-proxima text-[#4d565f]">
                    This is a preview of your sample report showing {previewDomains.length} of {domains.filter((d) => d.tag !== "Untagged").length} domains. Download the full report to see all domains across 10 industry networks.
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="self-stretch flex flex-wrap items-center gap-[1rem]">
                <Link
                  href="/report/download"
                  className="cursor-pointer self-stretch h-[3.5rem] rounded-[8px] flex items-center justify-center gap-[0.5rem] py-[1rem] px-[1.5rem] box-border no-underline font-proxima bg-[#0461c3] border-[1px] border-solid border-[#0461c3] text-color-white hover:bg-[#0554af] transition-colors"
                >
                  <Image
                    className="h-[1.25rem] w-[1.25rem] relative"
                    width={20}
                    height={20}
                    sizes="100vw"
                    alt=""
                    src="/file-chart-column-increasing.svg"
                  />
                  <div className="relative min-w-0 text-[1rem] leading-[1.25rem] font-semibold font-proxima text-center">
                    Download Report
                  </div>
                </Link>
                <Link
                  href="/contact"
                  className="cursor-pointer self-stretch h-[3.5rem] rounded-[8px] flex items-center justify-center gap-[0.5rem] py-[1rem] px-[1.5rem] box-border no-underline font-proxima bg-transparent border-[1px] border-solid border-[#0461c3] text-[#0461c3] hover:bg-[#f7fafd] transition-colors"
                >
                  <div className="relative min-w-0 text-[1rem] leading-[1.25rem] font-semibold font-proxima text-center">
                    Release Press Release
                  </div>
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default SampleReportPage;
