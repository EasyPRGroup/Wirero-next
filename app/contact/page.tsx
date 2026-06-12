"use client";
import type { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import Footer from "../../components/footer";

const ContactPage: NextPage = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    companyName: "",
    companyType: "",
    message: "",
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add form submission logic here
  };

  return (
    <div className="w-full relative bg-color-white overflow-hidden flex flex-col items-start leading-[normal] tracking-[normal]">

      {/* Main Content */}
      <main className="self-stretch flex items-start justify-center flex-wrap content-start pt-[0.625rem] px-[1.875rem] pb-[2.5rem] box-border gap-[4.25rem] max-w-full">
        {/* Left Column */}
        <section className="flex-[1.1481] overflow-hidden flex flex-col items-start gap-[1.5rem] min-w-[19.375rem] max-w-[33.25rem] text-left text-[1rem] text-[#4d565f] font-proxima-nova">
          {/* Contact Label */}
          <b className="self-stretch relative tracking-[0.02em] leading-[1.25rem] uppercase text-[#0bc111]">
            Contact
          </b>

          {/* Title */}
          <div className="self-stretch flex flex-col items-start gap-[1rem] max-w-full text-[3.5rem]">
            <b className="self-stretch relative leading-[4.25rem] mq750:text-[2.813rem] mq750:leading-[3.375rem] mq450:text-[2.125rem] mq450:leading-[2.563rem]">
              Get in touch with Wirero
            </b>

            {/* Description */}
            <div className="self-stretch flex flex-col items-start gap-[1.25rem] max-w-full text-[1.125rem] text-[#64676f]">
              <div className="self-stretch relative leading-[1.75rem]">
                Have questions about distribution infrastructure, pricing,
                integrations, or network access? Our team is here to help you
                understand how Wirero works and how it can fit your publishing
                workflow.
              </div>
              <div className="self-stretch relative leading-[1.75rem]">
                Whether you are an agency, reseller platform, or high-frequency
                publishing team, we will help you find the right distribution
                setup for your needs.
              </div>
            </div>
          </div>

          {/* Contact Info Cards */}
          <div className="self-stretch flex flex-col items-start py-[1.25rem] px-[0rem] box-border gap-[1.25rem] max-w-full text-[1.25rem]">
            {/* Email Card */}
            <div className="self-stretch overflow-hidden flex items-start gap-[1rem] max-w-full">
              <div className="h-[2.75rem] w-[2.75rem] relative rounded-[12px] bg-[#d9f0ff] flex items-center justify-center">
                <Image
                  className="h-[1.5rem] w-[1.5rem] object-contain"
                  width={24}
                  height={24}
                  alt="Email icon"
                  src="/mail.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start gap-[0.25rem] min-w-[19.188rem] max-w-full">
                <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[1.625rem] font-semibold font-[inherit]">
                  Email Address:
                </h3>
                <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[#64676f]">
                  hello@wirero.com
                </div>
              </div>
            </div>

            {/* Phone Card */}
            <div className="self-stretch overflow-hidden flex items-start gap-[1rem] max-w-full">
              <div className="h-[2.75rem] w-[2.75rem] relative rounded-[12px] bg-[#d9f0ff] flex items-center justify-center">
                <Image
                  className="h-[1.5rem] w-[1.5rem] object-contain"
                  width={24}
                  height={24}
                  alt="Phone icon"
                  src="/phone.svg"
                />
              </div>
              <div className="flex-1 flex flex-col items-start gap-[0.25rem] min-w-[19.188rem] max-w-full">
                <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[1.625rem] font-semibold font-[inherit]">
                  Phone Number:
                </h3>
                <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[#64676f]">
                  +00 9812345678
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="self-stretch overflow-hidden flex items-start max-w-full">
              <div className="flex-1 flex flex-col items-start gap-[0.75rem] max-w-full">
                <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[1.625rem] font-semibold font-[inherit]">
                  Social Media:
                </h3>
                <div className="w-[12.5rem] h-[2.75rem] flex items-center gap-[0.5rem]">
                  <Link href="#" className="h-[2.75rem] w-[2.75rem] relative rounded-full flex items-center justify-center bg-[#d9f0ff] hover:bg-[#b8e0ff] transition-colors">
                    <Image
                      className="h-[1.25rem] w-[1.25rem] object-contain"
                      width={20}
                      height={20}
                      alt="Facebook"
                      src="/facebook.svg"
                    />
                  </Link>
                  <Link href="#" className="h-[2.75rem] w-[2.75rem] relative rounded-full flex items-center justify-center bg-[#d9f0ff] hover:bg-[#b8e0ff] transition-colors">
                    <Image
                      className="h-[1.25rem] w-[1.25rem] object-contain"
                      width={20}
                      height={20}
                      alt="Twitter"
                      src="/twitter@2x.png"
                    />
                  </Link>
                  <Link href="#" className="h-[2.75rem] w-[2.75rem] relative rounded-full flex items-center justify-center bg-[#d9f0ff] hover:bg-[#b8e0ff] transition-colors">
                    <Image
                      className="h-[1.25rem] w-[1.25rem] object-contain"
                      width={20}
                      height={20}
                      alt="LinkedIn"
                      src="/linkedin-fill.svg"
                    />
                  </Link>
                  <Link href="#" className="h-[2.75rem] w-[2.75rem] relative rounded-full flex items-center justify-center bg-[#d9f0ff] hover:bg-[#b8e0ff] transition-colors">
                    <Image
                      className="h-[1.25rem] w-[1.25rem] object-contain"
                      width={20}
                      height={20}
                      alt="Instagram"
                      src="/instagram.svg"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* New to Wirero Card */}
          <div className="self-stretch rounded-[16px] bg-[#0461c3] overflow-hidden flex items-start p-[1.25rem] box-border gap-[1.5rem] max-w-full text-[1.5rem] text-color-white">
            <div className="flex-1 flex items-start gap-[1rem] min-w-[17.375rem] max-w-full">
              <Image
                className="w-[3.5rem] relative max-h-full object-cover"
                width={56}
                height={56}
                loading="lazy"
                alt="New to Wirero"
                src="/Group-9.svg"
              />
              <div className="flex-1 flex flex-col items-start gap-[0.25rem] min-w-[14.438rem] max-w-full">
                <h3 className="m-0 self-stretch relative text-[length:inherit] leading-[1.875rem] font-bold font-[inherit]">
                  New to Wirero?
                </h3>
                <div className="w-full relative text-[1.125rem] leading-[1.75rem] text-[#d1d9e6] inline-block max-w-[22.25rem]">
                  Explore how our multi-domain distribution infrastructure works.
                </div>
              </div>
            </div>
            <Link href="#" className="h-[2.5rem] w-[2.5rem] relative rounded-full flex items-center justify-center bg-color-white/10 hover:bg-color-white/20 transition-colors">
              <Image
                className="h-[1.25rem] w-[1.25rem]"
                width={20}
                height={20}
                alt="Arrow"
                src="/arrow-right.svg"
              />
            </Link>
          </div>
        </section>

        {/* Right Column - Form */}
        <section className="flex-1 rounded-[28px] bg-[#f0f8ff] overflow-hidden flex flex-col items-start p-[2.5rem] box-border gap-[1.25rem] min-w-[19.375rem] max-w-[38.75rem] text-left text-[2.25rem] text-[#4d565f] font-proxima-nova">
          {/* Form Header */}
          <div className="self-stretch flex items-start gap-[1rem] max-w-full">
            <Image
              className="h-[3rem] w-[1.75rem] relative"
              width={28}
              height={48}
              alt="Message icon"
              src="/mail.svg"
            />
            <div className="flex-1 flex flex-col items-start min-w-[20.125rem] max-w-full">
              <h1 className="m-0 self-stretch relative text-[length:inherit] leading-[3rem] font-bold font-[inherit] shrink-0">
                Send Us a Message
              </h1>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="self-stretch flex flex-col items-start gap-[1rem] text-[1rem] text-[#64676f]">
            {/* Full Name */}
            <div className="self-stretch flex flex-col items-start gap-[0.375rem]">
              <label htmlFor="fullName" className="relative leading-[1.5rem] font-semibold">
                Full Name
              </label>
              <input
                id="fullName"
                name="fullName"
                type="text"
                placeholder="Enter your full name"
                value={formData.fullName}
                onChange={handleInputChange}
                className="self-stretch rounded-[8px] bg-color-white border-[#e2e5e9] border-solid border-[1px] overflow-hidden flex items-center py-[0.75rem] px-[0.875rem] gap-[0.5rem] w-full font-proxima-nova text-[1rem] text-[#1a2530] focus:border-[#0461c3] focus:outline-none transition-colors"
              />
            </div>

            {/* Email Address */}
            <div className="self-stretch flex flex-col items-start gap-[0.375rem]">
              <label htmlFor="email" className="relative leading-[1.5rem] font-semibold">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleInputChange}
                className="self-stretch rounded-[8px] bg-color-white border-[#e2e5e9] border-solid border-[1px] overflow-hidden flex items-center py-[0.75rem] px-[0.875rem] gap-[0.5rem] w-full font-proxima-nova text-[1rem] text-[#1a2530] focus:border-[#0461c3] focus:outline-none transition-colors"
              />
            </div>

            {/* Company Name (Optional) */}
            <div className="self-stretch flex flex-col items-start gap-[0.375rem]">
              <label htmlFor="companyName" className="relative leading-[1.5rem] font-semibold">
                Company Name (Optional)
              </label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                placeholder="Enter company name (Optional)"
                value={formData.companyName}
                onChange={handleInputChange}
                className="self-stretch rounded-[8px] bg-color-white border-[#e2e5e9] border-solid border-[1px] overflow-hidden flex items-center py-[0.75rem] px-[0.875rem] gap-[0.5rem] w-full font-proxima-nova text-[1rem] text-[#1a2530] focus:border-[#0461c3] focus:outline-none transition-colors"
              />
            </div>

            {/* Company Type */}
            <div className="self-stretch flex flex-col items-start gap-[0.375rem]">
              <label htmlFor="companyType" className="relative leading-[1.5rem] font-semibold">
                Company Type
              </label>
              <div className="self-stretch relative">
                <select
                  id="companyType"
                  name="companyType"
                  value={formData.companyType}
                  onChange={handleInputChange}
                  className="self-stretch rounded-[8px] bg-color-white border-[#e2e5e9] border-solid border-[1px] overflow-hidden flex items-center py-[0.75rem] px-[0.875rem] gap-[0.5rem] w-full font-proxima-nova text-[1rem] text-[#64676f] focus:border-[#0461c3] focus:outline-none transition-colors appearance-none cursor-pointer"
                >
                  <option value="">Select company type</option>
                  <option value="agency">Agency</option>
                  <option value="startup">Startup</option>
                  <option value="enterprise">Enterprise</option>
                  <option value="reseller">Reseller</option>
                  <option value="individual">Individual</option>
                </select>
                <Image
                  className="h-[1rem] w-[1rem] absolute right-[0.875rem] top-1/2 -translate-y-1/2 pointer-events-none"
                  width={16}
                  height={16}
                  alt="Dropdown"
                  src="/chevron-down.svg"
                />
              </div>
            </div>

            {/* Message */}
            <div className="self-stretch flex flex-col items-start gap-[0.375rem]">
              <label htmlFor="message" className="relative leading-[1.5rem] font-semibold">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Tell us about your distribution needs..."
                value={formData.message}
                onChange={handleInputChange}
                rows={5}
                className="self-stretch rounded-[8px] bg-color-white border-[#e2e5e9] border-solid border-[1px] overflow-hidden flex items-start py-[0.625rem] px-[0.875rem] w-full font-proxima-nova text-[1rem] text-[#1a2530] focus:border-[#0461c3] focus:outline-none transition-colors resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="cursor-pointer border-none py-[1rem] px-[2.5rem] bg-[#0461c3] h-[3.5rem] rounded-[8px] flex items-center justify-center box-border gap-[0.5rem] text-color-white hover:bg-[#0354a8] transition-colors font-proxima-nova"
            >
              <span className="relative text-[1rem] leading-[1.25rem] font-semibold">
                Send Message
              </span>
              <Image
                className="h-[1rem] w-[1rem] relative"
                width={16}
                height={16}
                alt="Arrow"
                src="/arrow-right1.svg"
              />
            </button>
          </form>
        </section>
      </main>

      {/* CTA Section 1 */}
      <section className="self-stretch flex flex-col items-center py-[2.5rem] px-[1.875rem] box-border max-w-full text-left text-[1.375rem] text-[#4d565f] font-proxima-nova">
        <div className="w-full rounded-[24px] bg-[#e6f4ff] flex items-center justify-center flex-wrap content-center py-[3.75rem] px-[1.875rem] box-border gap-[5rem] max-w-[76.25rem]">
          <section className="flex-1 flex flex-col items-start gap-[1.75rem] min-w-[15.625rem] max-w-[36.5rem] text-left text-[2.25rem] text-[#4d565f] font-proxima-nova">
            <div className="self-stretch overflow-hidden flex flex-col items-start gap-[0.75rem]">
              <b className="w-full relative leading-[3rem] inline-block max-w-[36.5rem]">
                Amplify Your Announcement Across Global Media
              </b>
              <div className="w-full relative text-[1.125rem] leading-[1.75rem] text-[#64676f] inline-block max-w-[36.5rem]">
                From startups to global enterprises, Wirero helps organizations
                distribute press releases worldwide through our trusted media network.
              </div>
            </div>
            <button className="cursor-pointer border-none py-[1rem] px-[2.5rem] bg-[#0461c3] h-[3.5rem] rounded-[8px] flex items-center justify-center box-border gap-[0.5rem] text-color-white hover:bg-[#0354a8] transition-colors font-proxima-nova">
              <span className="relative text-[1rem] leading-[1.25rem] font-semibold">
                Submit Press Release
              </span>
              <Image
                className="h-[1rem] w-[1rem] relative"
                width={16}
                height={16}
                alt="Arrow"
                src="/arrow-right1.svg"
              />
            </button>
          </section>
          <div className="h-[13.625rem] flex-1 relative min-w-[15.625rem] max-w-[27.25rem] mq750:max-w-full">
            <div className="absolute bottom-[0rem] left-[0rem] shadow-[0px_0px_12px_rgba(26,38,48,0.08)] rounded-[12px] bg-color-white border-color-white border-solid border-[4px] overflow-hidden flex flex-col items-center py-[0.687rem] pl-[1.687rem] pr-[1.25rem] opacity-[0.6]">
              <h3 className="m-0 relative text-[length:inherit] tracking-[0.02em] leading-[1.625rem] font-semibold font-[inherit] shrink-0">
                Growing Businesses
              </h3>
            </div>
            <div className="absolute top-[2.75rem] right-[2.688rem] shadow-[0px_0px_12px_rgba(26,38,48,0.08)] rounded-[12px] bg-color-white border-color-white border-solid border-[4px] overflow-hidden flex flex-col items-center py-[1rem] pl-[1.687rem] pr-[1.25rem] opacity-[0.6]">
              <h3 className="m-0 relative text-[length:inherit] tracking-[0.02em] leading-[1.625rem] font-semibold font-[inherit] shrink-0">
                Startups
              </h3>
            </div>
            <div className="absolute top-[0rem] left-[6.5rem] shadow-[0px_0px_12px_rgba(26,38,48,0.08)] rounded-[12px] bg-color-white border-color-white border-solid border-[4px] overflow-hidden flex flex-col items-center py-[1rem] px-[1.5rem] opacity-[0.6]">
              <h3 className="m-0 relative text-[length:inherit] tracking-[0.02em] leading-[1.625rem] font-semibold font-[inherit] shrink-0">
                Enterprise
              </h3>
            </div>
            <div className="absolute right-[0rem] bottom-[2.375rem] shadow-[0px_0px_12px_rgba(26,38,48,0.08)] rounded-[12px] bg-color-white border-color-white border-solid border-[4px] overflow-hidden flex flex-col items-center py-[0.687rem] px-[1.5rem] opacity-[0.6]">
              <h3 className="m-0 relative text-[length:inherit] tracking-[0.02em] leading-[1.625rem] font-semibold font-[inherit] shrink-0">
                PR Agencies
              </h3>
            </div>
            <div className="absolute top-[calc(50%_-_29px)] left-[3.875rem] shadow-[0px_0px_12px_rgba(26,38,48,0.08)] rounded-[12px] bg-color-white border-color-white border-solid border-[4px] overflow-hidden flex flex-col items-center py-[1rem] pl-[1.687rem] pr-[1.25rem]">
              <h3 className="m-0 relative text-[length:inherit] tracking-[0.02em] leading-[1.625rem] font-semibold font-[inherit] shrink-0">
                Global Brands
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section 2 */}
      <section className="self-stretch flex flex-col items-center py-[2.5rem] px-[1.875rem] box-border max-w-full text-left text-[1.375rem] text-[#4d565f] font-proxima-nova">
        <div className="w-[76.25rem] h-[23rem] relative rounded-[24px] bg-[#0461c3] max-w-full">
          <div className="absolute top-[3.75rem] left-[3.75rem] w-[36.813rem] flex flex-col items-start gap-[1.75rem] max-w-full text-left text-[2.25rem] text-color-white font-proxima-nova">
            <div className="self-stretch overflow-hidden flex flex-col items-start gap-[0.75rem]">
              <b className="self-stretch relative leading-[3rem]">
                Scale your distribution with centralized infrastructure
              </b>
              <div className="self-stretch relative text-[1.125rem] leading-[1.75rem] text-[#d1d9e6]">
                Publish across independently managed domains through a scalable
                multi-network system designed for fast and controlled distribution.
              </div>
            </div>
            <button className="cursor-pointer border-none py-[1rem] px-[2.5rem] bg-color-white h-[3.5rem] rounded-[8px] flex items-center justify-center box-border gap-[0.5rem] text-[#1a2530] hover:bg-[#f0f0f0] transition-colors font-proxima-nova">
              <span className="relative text-[1rem] leading-[1.25rem] font-semibold">
                Start Publishing
              </span>
              <Image
                className="h-[1rem] w-[1rem] relative"
                width={16}
                height={16}
                alt="Arrow"
                src="/arrow-right.svg"
              />
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ContactPage;
