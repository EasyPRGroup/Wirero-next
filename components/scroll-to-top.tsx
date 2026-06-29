"use client";
import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      type="button"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-[1.5rem] right-[1.5rem] z-50 h-[3rem] w-[3rem] rounded-full bg-[#0461c3] text-white shadow-[0_4px_16px_rgba(4,97,195,0.35)] flex items-center justify-center cursor-pointer border-none transition-all duration-300 hover:bg-[#0354a8] focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-[3px] focus-visible:outline-[#0bc111] mq450:bottom-[1rem] mq450:right-[1rem] mq450:h-[2.75rem] mq450:w-[2.75rem] ${
        isVisible
          ? "opacity-100 translate-y-0 pointer-events-auto"
          : "opacity-0 translate-y-2 pointer-events-none"
      }`}
    >
      <ChevronUp className="w-[1.5rem] h-[1.5rem]" />
    </button>
  );
};

export default ScrollToTop;
