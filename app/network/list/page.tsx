"use client";

import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "../../../components/footer";
import NetworkList from "../../../components/network-list";

export type DomainEntry = {
  tag: string;
  name: string;
  url: string;
};

const NetworkListPage: NextPage = () => {
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
        console.error("Failed to load network list:", err);
        setError(err instanceof Error ? err.message : "Failed to load network list");
      } finally {
        setLoading(false);
      }
    };

    fetchDomains();
  }, []);

  const visibleDomains = domains.filter((domain) => domain.tag !== "Untagged");

  if (loading) {
    return (
      <div className="relative flex w-full min-w-0 flex-col items-stretch overflow-x-clip bg-color-white leading-[normal] tracking-[normal]">
        <section className="site-section-hero self-stretch bg-[#f7fafd]">
          <div className="site-container flex flex-col items-start box-border gap-[1.5rem] max-w-full text-left text-[1rem] text-[#0bc111] font-proxima mq750:gap-[1.25rem] mq450:gap-[1rem]">
            <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase mq450:text-[0.875rem]">
              Network List
            </b>
            <div className="self-stretch min-w-0 flex flex-col items-start gap-[1rem] text-[3rem] text-[#1a2530] mq1050:text-[2.375rem] mq750:gap-[0.75rem] mq450:text-[1.813rem] mq450:gap-[0.625rem]">
              <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[3.625rem] font-bold font-[inherit] mq1050:leading-[2.875rem] mq450:leading-[2.188rem]">
                Full domain directory
              </h1>
              <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d565f] max-w-[48rem] mq750:text-[1rem] mq750:leading-[1.5rem] mq450:text-[0.9375rem] mq450:leading-[1.375rem]">
                Loading domains...
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="relative flex w-full min-w-0 flex-col items-stretch overflow-x-clip bg-color-white leading-[normal] tracking-[normal]">
        <section className="site-section-hero self-stretch bg-[#f7fafd]">
          <div className="site-container flex flex-col items-start box-border gap-[1.5rem] max-w-full text-left text-[1rem] text-[#0bc111] font-proxima mq750:gap-[1.25rem] mq450:gap-[1rem]">
            <Link
              href="/network"
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
              <span className="relative text-[0.9375rem] leading-[1.25rem] font-semibold mq450:text-[0.875rem]">
                Back to Network
              </span>
            </Link>
            <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase mq450:text-[0.875rem]">
              Network List
            </b>
            <div className="self-stretch min-w-0 flex flex-col items-start gap-[1rem] text-[3rem] text-[#1a2530] mq1050:text-[2.375rem] mq750:gap-[0.75rem] mq450:text-[1.813rem] mq450:gap-[0.625rem]">
              <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[3.625rem] font-bold font-[inherit] mq1050:leading-[2.875rem] mq450:leading-[2.188rem]">
                Full domain directory
              </h1>
              <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d565f] max-w-[48rem] mq750:text-[1rem] mq750:leading-[1.5rem] mq450:text-[0.9375rem] mq450:leading-[1.375rem]">
                {error}
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="relative flex w-full min-w-0 flex-col items-stretch overflow-x-clip bg-color-white leading-[normal] tracking-[normal]">
      <section className="site-section-hero self-stretch bg-[#f7fafd]">
        <div className="site-container flex flex-col items-start box-border gap-[1.5rem] max-w-full text-left text-[1rem] text-[#0bc111] font-proxima mq750:gap-[1.25rem] mq450:gap-[1rem]">
          <Link
            href="/network"
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
            <span className="relative text-[0.9375rem] leading-[1.25rem] font-semibold mq450:text-[0.875rem]">
              Back to Network
            </span>
          </Link>

          <b className="relative tracking-[0.02em] leading-[1.25rem] uppercase mq450:text-[0.875rem]">
            Network List
          </b>

          <div className="self-stretch min-w-0 flex flex-col items-start gap-[1rem] text-[3rem] text-[#1a2530] mq1050:text-[2.375rem] mq750:gap-[0.75rem] mq450:text-[1.813rem] mq450:gap-[0.625rem]">
            <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[3.625rem] font-bold font-[inherit] mq1050:leading-[2.875rem] mq450:leading-[2.188rem]">
              Full domain directory
            </h1>
            <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] font-proxima text-[#4d565f] max-w-[48rem] mq750:text-[1rem] mq750:leading-[1.5rem] mq450:text-[0.9375rem] mq450:leading-[1.375rem]">
              Browse all domains from the Wirero network, organized by industry
              tag. Click any URL to open the domain in a new tab.
            </div>
          </div>
        </div>
      </section>

      <section className="site-section self-stretch bg-color-white">
        <div className="site-container flex flex-col items-start box-border max-w-full min-w-0">
          <NetworkList domains={visibleDomains} />
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default NetworkListPage;
