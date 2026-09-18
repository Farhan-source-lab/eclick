import React from 'react';
import { LottieIcon } from './LottieIcon';
import { ScrollReveal } from './ScrollReveal';

export const ServicesBentoSection: React.FC = () => {
  return (
    <section 
      id="services-section" 
      className="relative px-6 py-20 sm:px-16 sm:py-28 lg:px-24 overflow-hidden" 
      aria-labelledby="services-heading"
    >
      {/* Radiant Golden Ambient Glows Backside of the Cards at exact positions */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-32 right-10 sm:right-32 h-[550px] w-[550px] rounded-full bg-[#88E788] opacity-10 blur-[180px]" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-[40%] left-0 sm:left-10 h-[600px] w-[600px] rounded-full bg-[#88E788] opacity-10 blur-[180px]" 
      />
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute right-0 bottom-10 z-0 h-[620px] w-[620px] rounded-full bg-[#88E788] opacity-10 blur-[180px]" 
      />

      {/* Section Heading */}
      <ScrollReveal delay={0} yOffset={24}>
        <h2 
          id="services-heading" 
          className="relative mb-16 text-center font-display text-3xl font-normal sm:text-[40px] leading-tight text-white"
        >
          How we help service-based businesses grow
        </h2>
      </ScrollReveal>

      {/* 3-Column Bento Grid matching original reference */}
      <div className="relative z-10 mx-auto max-w-7xl grid grid-cols-1 gap-6 sm:grid-cols-3">
        
        {/* CARD 1: Web Design (2 columns) */}
        <ScrollReveal className="sm:col-span-2 flex flex-col" delay={80} yOffset={32}>
          <a 
            href="/services/web-design" 
            className="group relative flex min-w-0 w-full flex-col justify-between overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] sm:bg-[#141416]/80 backdrop-blur-[50px] p-7 sm:p-9 text-white shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[#18181c] hover:border-[#88E788]/60 hover:shadow-[0_0_25px_-5px_rgba(136,231,136,0.25)] sm:h-[500px] sm:flex-row"
          >
            {/* SVG Visual (scaled up for impact) */}
            <div className="h-64 sm:h-full sm:w-[48%] flex items-center justify-center overflow-hidden">
              <div className="h-full w-full max-h-80 flex items-center justify-center transform scale-110 sm:scale-125 transition-transform duration-500 group-hover:scale-130">
                <LottieIcon path="/lottie/web-design.json" className="h-full w-full object-contain" />
              </div>
            </div>

            {/* Content Column */}
            <div className="min-w-0 flex-1 flex flex-col justify-between pl-0 sm:pl-4">
              <div className="mb-6 sm:mb-10">
                <span className="inline-block rounded-[4px] bg-[#88E788] px-2.5 py-0.5 font-body text-xs font-bold uppercase tracking-wider text-[#141416]">
                  ENGINE
                </span>
                <h3 className="mt-5 mb-2.5 font-display text-2xl font-semibold leading-[1.2] sm:text-[32px] text-white">
                  Web Design
                </h3>
                <p className="max-w-md text-xs leading-[1.6] text-white/60">
                  We create modern, responsive websites that do more than just look good — they’re built to convert visitors into customers. Every design is customized to reflect your brand and deliver results.
                </p>
              </div>

              <div className="flex items-end gap-2 border-t border-white/10 pt-4">
                <div className="border-r border-white/20 pr-3">
                  <p className="mb-2 text-[11px] font-bold tracking-wider text-white/60">BUSINESSES HAVE WEBSITE</p>
                  <p className="flex items-center gap-2 font-display text-[28px] sm:text-[32px] leading-none font-normal text-white">
                    ~72%
                    <img alt="" width="16" height="16" src="/brand/icon-arrow-rising.svg" className="brightness-0 invert" />
                  </p>
                </div>
                <span className="pb-1 text-[10px] text-white/60">Forbes</span>
              </div>
            </div>
          </a>
        </ScrollReveal>

        {/* CARD 2: SEO (1 column) */}
        <ScrollReveal className="sm:col-span-1 flex flex-col" delay={200} yOffset={32}>
          <a 
            href="/services/seo" 
            className="group relative flex min-w-0 w-full flex-col justify-between overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] sm:bg-[#141416]/80 backdrop-blur-[50px] p-7 sm:p-9 text-white shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[#18181c] hover:border-[#88E788]/60 hover:shadow-[0_0_25px_-5px_rgba(136,231,136,0.25)] sm:h-[500px]"
          >
            {/* SVG Visual (scaled up) */}
            <div className="w-full h-48 sm:h-56 flex items-center justify-center overflow-hidden">
              <div className="h-full w-full flex items-center justify-center transform scale-120 sm:scale-130 transition-transform duration-500 group-hover:scale-135">
                <LottieIcon path="/lottie/seo.json" className="h-full w-full object-contain" />
              </div>
            </div>

            <div className="min-w-0 flex-1 flex flex-col justify-end">
              <div>
                <span className="inline-block rounded-[4px] bg-[#88E788] px-2.5 py-0.5 font-body text-xs font-bold uppercase tracking-wider text-[#141416]">
                  VISIBILITY
                </span>
                <h3 className="mt-5 mb-2.5 font-display text-2xl font-semibold leading-[1.2] sm:text-[32px] text-white">
                  SEO
                </h3>
                <p className="text-xs leading-[1.6] text-white/60">
                  Our SEO strategies improve your visibility on Google and other search engines, making it easier for local and industry-specific clients to find you. We focus on sustainable growth and long-term results.
                </p>
              </div>
            </div>
          </a>
        </ScrollReveal>

        {/* CARD 3: E-Commerce Solutions (1 column) */}
        <ScrollReveal className="sm:col-span-1 flex flex-col" delay={80} yOffset={32}>
          <a 
            href="/services/e-commerce-solutions" 
            className="group relative flex min-w-0 w-full flex-col justify-between overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] sm:bg-[#141416]/80 backdrop-blur-[50px] p-7 sm:p-9 text-white shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[#18181c] hover:border-[#88E788]/60 hover:shadow-[0_0_25px_-5px_rgba(136,231,136,0.25)] sm:h-[500px]"
          >
            {/* SVG Visual (scaled up avatar cluster) */}
            <div className="w-full h-48 sm:h-56 flex items-center justify-center overflow-hidden">
              <div className="h-full w-full flex items-center justify-center transform scale-115 sm:scale-125 transition-transform duration-500 group-hover:scale-130">
                <LottieIcon path="/lottie/e-commerce-solutions.json" className="h-full w-full object-contain" />
              </div>
            </div>

            <div className="min-w-0 flex-1 flex flex-col justify-end">
              <div>
                <span className="inline-block rounded-[4px] bg-[#88E788] px-2.5 py-0.5 font-body text-xs font-bold uppercase tracking-wider text-[#141416]">
                  REACH
                </span>
                <h3 className="mt-5 mb-2.5 font-display text-2xl font-semibold leading-[1.2] sm:text-[32px] text-white">
                  E-Commerce Solutions
                </h3>
                <p className="text-xs leading-[1.6] text-white/60">
                  Build, scale, and optimize your online store with a system designed to convert. From seamless user experience to high-performance checkout flows, we create e-commerce platforms that drive revenue, not just traffic.
                </p>
              </div>
            </div>
          </a>
        </ScrollReveal>

        {/* CARD 4: Social Media Marketing (2 columns, reversed) */}
        <ScrollReveal className="sm:col-span-2 flex flex-col" delay={200} yOffset={32}>
          <a 
            href="/services/social-media-marketing" 
            className="group relative flex min-w-0 w-full flex-col justify-between overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] sm:bg-[#141416]/80 backdrop-blur-[50px] p-7 sm:p-9 text-white shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[#18181c] hover:border-[#88E788]/60 hover:shadow-[0_0_25px_-5px_rgba(136,231,136,0.25)] sm:h-[500px] sm:flex-row sm:flex-row-reverse"
          >
            {/* SVG Visual (scaled up line chart) */}
            <div className="h-48 sm:h-full sm:w-[48%] flex items-center justify-center overflow-hidden">
              <div className="h-full w-full max-h-80 flex items-center justify-center transform scale-110 sm:scale-125 transition-transform duration-500 group-hover:scale-130">
                <LottieIcon path="/lottie/social-media-marketing.json" className="h-full w-full object-contain" />
              </div>
            </div>

            {/* Content Column */}
            <div className="min-w-0 flex-1 flex flex-col justify-between pr-0 sm:pr-4">
              <div className="mb-6 sm:mb-10">
                <span className="inline-block rounded-[4px] bg-[#88E788] px-2.5 py-0.5 font-body text-xs font-bold uppercase tracking-wider text-[#141416]">
                  ENGINE
                </span>
                <h3 className="mt-5 mb-2.5 font-display text-2xl font-semibold leading-[1.2] sm:text-[32px] text-white">
                  Social Media Marketing
                </h3>
                <p className="max-w-md text-xs leading-[1.6] text-white/60">
                  We design campaigns that engage your audience, build community, and grow your brand’s presence across platforms. Our approach strengthens awareness while driving meaningful interactions and leads.
                </p>
              </div>

              <div className="flex items-end gap-2 border-t border-white/10 pt-4">
                <div className="border-r border-white/20 pr-3">
                  <p className="mb-2 text-[11px] font-bold tracking-wider text-white/60">INCREASING ROI BY UP TO</p>
                  <p className="flex items-center gap-2 font-display text-[28px] sm:text-[32px] leading-none font-normal text-white">
                    30%
                    <img alt="" width="16" height="16" src="/brand/icon-arrow-rising.svg" className="brightness-0 invert" />
                  </p>
                </div>
                <span className="pb-1 text-[10px] text-white/60">Australian Government Business Department</span>
              </div>
            </div>
          </a>
        </ScrollReveal>

        {/* CARD 5: Mobile Development (2 columns) */}
        <ScrollReveal className="sm:col-span-2 flex flex-col" delay={80} yOffset={32}>
          <a 
            href="/services/mobile-app-development" 
            className="group relative flex min-w-0 w-full flex-col justify-between overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] sm:bg-[#141416]/80 backdrop-blur-[50px] p-7 sm:p-9 text-white shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[#18181c] hover:border-[#88E788]/60 hover:shadow-[0_0_25px_-5px_rgba(136,231,136,0.25)] sm:h-[500px] sm:flex-row"
          >
            {/* SVG Visual (scaled up 3D isometric app cubes) */}
            <div className="h-64 sm:h-full sm:w-[48%] flex items-center justify-center overflow-hidden">
              <div className="h-full w-full max-h-80 flex items-center justify-center transform scale-110 sm:scale-120 transition-transform duration-500 group-hover:scale-125">
                <LottieIcon path="/lottie/mobile-app-development.json" className="h-full w-full object-contain" />
              </div>
            </div>

            <div className="min-w-0 flex-1 flex flex-col justify-between pl-0 sm:pl-4">
              <div className="mb-6 sm:mb-10">
                <span className="inline-block rounded-[4px] bg-[#88E788] px-2.5 py-0.5 font-body text-xs font-bold uppercase tracking-wider text-[#141416]">
                  ENGINE
                </span>
                <h3 className="mt-5 mb-2.5 font-display text-2xl font-semibold leading-[1.2] sm:text-[32px] text-white">
                  Mobile Development
                </h3>
                <p className="max-w-md text-xs leading-[1.6] text-white/60">
                  Turn your idea into a powerful, user-friendly mobile experience. We design and develop high-performance apps that are fast, intuitive, and built to keep users engaged.
                </p>
              </div>

              <div className="flex items-end gap-2 border-t border-white/10 pt-4">
                <div className="border-r border-white/20 pr-3">
                  <p className="mb-2 text-[11px] font-bold tracking-wider text-white/60">BUSINESSES HAVE WEBSITE</p>
                  <p className="flex items-center gap-2 font-display text-[28px] sm:text-[32px] leading-none font-normal text-white">
                    ~72%
                    <img alt="" width="16" height="16" src="/brand/icon-arrow-rising.svg" className="brightness-0 invert" />
                  </p>
                </div>
                <span className="pb-1 text-[10px] text-white/60">Forbes</span>
              </div>
            </div>
          </a>
        </ScrollReveal>

        {/* CARD 6: AI/Automation (1 column) */}
        <ScrollReveal className="sm:col-span-1 flex flex-col" delay={200} yOffset={32}>
          <a 
            href="/services/ai-automations" 
            className="group relative flex min-w-0 w-full flex-col justify-between overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] sm:bg-[#141416]/80 backdrop-blur-[50px] p-7 sm:p-9 text-white shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[#18181c] hover:border-[#88E788]/60 hover:shadow-[0_0_25px_-5px_rgba(136,231,136,0.25)] sm:h-[500px]"
          >
            {/* SVG Visual (scaled up 3D platform) */}
            <div className="w-full h-48 sm:h-56 flex items-center justify-center overflow-hidden">
              <div className="h-full w-full flex items-center justify-center transform scale-120 sm:scale-130 transition-transform duration-500 group-hover:scale-135">
                <LottieIcon path="/lottie/ai-automations.json" className="h-full w-full object-contain" />
              </div>
            </div>

            <div className="min-w-0 flex-1 flex flex-col justify-end">
              <div>
                <span className="inline-block rounded-[4px] bg-[#88E788] px-2.5 py-0.5 font-body text-xs font-bold uppercase tracking-wider text-[#141416]">
                  VISIBILITY
                </span>
                <h3 className="mt-5 mb-2.5 font-display text-2xl font-semibold leading-[1.2] sm:text-[32px] text-white">
                  AI/Automation
                </h3>
                <p className="text-xs leading-[1.6] text-white/60">
                  Automate operations, capture more leads, and eliminate manual work. We implement intelligent systems that streamline your business and unlock scalable growth.
                </p>
              </div>
            </div>
          </a>
        </ScrollReveal>

        {/* CARD 7: Videography (1 column) */}
        <ScrollReveal className="sm:col-span-1 flex flex-col" delay={80} yOffset={32}>
          <a 
            href="/services/videography" 
            className="group relative flex min-w-0 w-full flex-col justify-between overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] sm:bg-[#141416]/80 backdrop-blur-[50px] p-7 sm:p-9 text-white shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[#18181c] hover:border-[#88E788]/60 hover:shadow-[0_0_25px_-5px_rgba(136,231,136,0.25)] sm:h-[500px]"
          >
            {/* SVG Visual */}
            <div className="w-full h-48 sm:h-56 flex items-center justify-center overflow-hidden">
              <div className="h-full w-full flex items-center justify-center transform scale-120 sm:scale-130 transition-transform duration-500 group-hover:scale-135">
                <LottieIcon path="/lottie/videography.json" className="h-full w-full object-contain" />
              </div>
            </div>

            <div className="min-w-0 flex-1 flex flex-col justify-end">
              <div>
                <span className="inline-block rounded-[4px] bg-[#88E788] px-2.5 py-0.5 font-body text-xs font-bold uppercase tracking-wider text-[#141416]">
                  REACH
                </span>
                <h3 className="mt-5 mb-2.5 font-display text-2xl font-semibold leading-[1.2] sm:text-[32px] text-white">
                  Videography
                </h3>
                <p className="text-xs leading-[1.6] text-white/60">
                  We produce scroll-stopping video content — brand stories, product demos, and social-first reels — that captures attention and builds trust.
                </p>
              </div>
            </div>
          </a>
        </ScrollReveal>

        {/* CARD 8: Paid Ads (2 columns, reversed) */}
        <ScrollReveal className="sm:col-span-2 flex flex-col" delay={200} yOffset={32}>
          <a 
            href="/services/paid-ads" 
            className="group relative flex min-w-0 w-full flex-col justify-between overflow-hidden rounded-[30px] border border-white/10 bg-white/[0.035] sm:bg-[#141416]/80 backdrop-blur-[50px] p-7 sm:p-9 text-white shadow-[0_0_20px_rgba(0,0,0,0.3)] transition-all duration-300 hover:bg-[#18181c] hover:border-[#88E788]/60 hover:shadow-[0_0_25px_-5px_rgba(136,231,136,0.25)] sm:h-[500px] sm:flex-row sm:flex-row-reverse"
          >
            {/* SVG Visual (scaled up ads visual) */}
            <div className="h-64 sm:h-full sm:w-[48%] flex items-center justify-center overflow-hidden">
              <div className="h-full w-full max-h-80 flex items-center justify-center transform scale-110 sm:scale-120 transition-transform duration-500 group-hover:scale-125">
                <LottieIcon path="/lottie/paid-ads.json" className="h-full w-full object-contain" />
              </div>
            </div>

            <div className="min-w-0 flex-1 flex flex-col justify-between pr-0 sm:pr-4">
              <div className="mb-6 sm:mb-10">
                <span className="inline-block rounded-[4px] bg-[#88E788] px-2.5 py-0.5 font-body text-xs font-bold uppercase tracking-wider text-[#141416]">
                  ENGINE
                </span>
                <h3 className="mt-5 mb-2.5 font-display text-2xl font-semibold leading-[1.2] sm:text-[32px] text-white">
                  Paid Ads
                </h3>
                <p className="max-w-md text-xs leading-[1.6] text-white/60">
                  We run targeted ad campaigns across Google and social platforms that put your business in front of ready-to-buy customers. Every dollar is tracked and optimized for real leads.
                </p>
              </div>

              <div className="flex items-end gap-2 border-t border-white/10 pt-4">
                <div className="border-r border-white/20 pr-3">
                  <p className="mb-2 text-[11px] font-bold tracking-wider text-white/60">AVERAGE RETURN FOR EVERY $1 IN AD SPEND</p>
                  <p className="flex items-center gap-2 font-display text-[28px] sm:text-[32px] leading-none font-normal text-white">
                    $8
                    <img alt="" width="16" height="16" src="/brand/icon-arrow-rising.svg" className="brightness-0 invert" />
                  </p>
                </div>
                <span className="pb-1 text-[10px] text-white/60">Google Economic Impact Report</span>
              </div>
            </div>
          </a>
        </ScrollReveal>

      </div>
    </section>
  );
};
