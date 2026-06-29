"use client";
import type { NextPage } from "next";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Option from "./option1";
import UserOutlined from "./user-outlined";

export type HeaderType = {
  className?: string;
  activeLink?: string;

  /** Variant props */
  property1?: "Default" | "Variant2";
};

const Header: NextPage<HeaderType> = ({
  className = "",
  property1: _property1 = "Default",
  activeLink = "",
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < 10) {
        setIsHeaderVisible(true);
      } else if (currentScrollY > lastScrollY.current + 5) {
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY.current - 5) {
        setIsHeaderVisible(true);
      }
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const showHeader = isHeaderVisible || isMobileMenuOpen;

  const optionItems = [
    {
      property1: "default" as const,
      showOption: true,
      features: "Network",
      isActive: activeLink === "Network",
      href: "/network",
    },
    {
      property1: "default" as const,
      showOption: true,
      features: "Agencies",
      isActive: activeLink === "Agencies",
      href: "/agency",
    },
    {
      property1: "default" as const,
      showOption: true,
      features: "FAQs",
      isActive: activeLink === "FAQs",
      href: "/faqs",
    },
    {
      property1: "default" as const,
      showOption: true,
      features: "Pricing",
      isActive: activeLink === "Pricing",
      href: "/pricing",
    },
    {
      property1: "default" as const,
      showOption: true,
      features: "About Us",
      isActive: activeLink === "About Us",
      href: "/about-us",
    },
    {
      property1: "default" as const,
      showOption: true,
      features: "Blog",
      isActive: activeLink === "Blog",
      href: "/blog",
    },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 site-gutters self-stretch bg-[#12171c] border-[rgba(122,131,140,0.2)] border-solid border-b-[1px] py-[1.25rem] text-left text-[1.75rem] text-color-white font-proxima transition-transform duration-300 will-change-transform ${showHeader ? "translate-y-0" : "-translate-y-full"} ${className} mq450:py-[1rem]`}
      >
        <div className="site-container flex items-center justify-between gap-[1.25rem]">
          <Link href="/" className="h-[2rem] w-[10rem] relative block mq450:w-[8rem]">
            <Image
              className="absolute top-[calc(50%_-_21px)] left-[0.188rem] w-[3.25rem] h-[2.625rem] object-cover shrink-0"
              loading="lazy"
              width={52}
              height={42}
              sizes="100vw"
              alt=""
              src="/Wirero-main-1@2x.png"
            />
            <h2 className="m-0 absolute top-[0rem] left-[3.688rem] text-[length:inherit] leading-[2rem] font-bold font-[inherit] shrink-0">
              Wirero
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="flex items-center gap-[2.5rem] mq1125:hidden">
            <nav className="m-0 rounded-[50px] flex items-center justify-center gap-[2.5rem] mq1125:gap-[1.5rem] text-left text-[1.125rem] text-[#64676f] font-proxima">
              {optionItems.map((item, index) => (
                <Option
                  key={index}
                  property1={item.property1}
                  showOption={item.showOption}
                  features={item.features}
                  isActive={item.isActive}
                  href={item.href}
                />
              ))}
            </nav>
            <Link href="/contact">
              <UserOutlined
                property1="Variant2"
                showUserOutlined
                userOutlined="/user-outlined.svg"
                showUserOutlinedIcon={false}
                cTAButton="Contact Us"
                arrowRight="/arrow-right.svg"
                showArrowRightIcon={false}
              />
            </Link>
          </div>

          {/* Hamburger Button */}
          <button
            className="hidden mq1125:flex flex-col justify-center items-center w-[2.75rem] h-[2.75rem] cursor-pointer bg-transparent border-none p-0 gap-[0.375rem]"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            <span
              className={`w-[1.5rem] h-[0.125rem] bg-color-white transition-all duration-300 ${isMobileMenuOpen ? "rotate-45 translate-y-[0.5rem]" : ""}`}
            />
            <span
              className={`w-[1.5rem] h-[0.125rem] bg-color-white transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`}
            />
            <span
              className={`w-[1.5rem] h-[0.125rem] bg-color-white transition-all duration-300 ${isMobileMenuOpen ? "-rotate-45 -translate-y-[0.5rem]" : ""}`}
            />
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 bg-[#12171c] z-50 flex flex-col items-center justify-center mq800:flex"
          onClick={closeMobileMenu}
        >
          <button
            className="absolute top-[1rem] right-[1.25rem] w-[2.75rem] h-[2.75rem] flex items-center justify-center cursor-pointer bg-transparent border-none p-0"
            onClick={closeMobileMenu}
            aria-label="Close menu"
          >
            <Image
              className="w-[1.5rem] h-[1.5rem]"
              width={24}
              height={24}
              alt="Close"
              src="/x.svg"
            />
          </button>
          <nav className="flex flex-col items-center gap-[2rem] text-left text-[1.5rem] text-color-white font-proxima">
            {optionItems.map((item, index) => (
              <Link
                key={index}
                href={item.href}
                className={`text-[1.25rem] leading-[2rem] font-medium transition-colors hover:text-[#0bc111] ${item.isActive ? "text-[#0bc111]" : "text-[#64676f]"}`}
                onClick={closeMobileMenu}
              >
                {item.features}
              </Link>
            ))}
            <Link
              href="/contact"
              className="mt-[1rem] px-[2rem] py-[0.75rem] bg-color-white text-[#12171c] rounded-lg text-[1rem] font-semibold"
              onClick={closeMobileMenu}
            >
              Contact Us
            </Link>
          </nav>
        </div>
      )}
    </>
  );
};

export default Header;
