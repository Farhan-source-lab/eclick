import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What services does Eclick Tech Solutions offer?",
    answer: "We offer end-to-end technology and creative solutions, including Software Development, AI Solutions (Gen AI, Agentic AI, AI Automations, Custom & Enterprise AI, and AI Analytics), Digital Transformation, Result-Driven Digital Marketing (SEO, SMM, Lead Generation, Content & Branding), Graphic Design & Brand Identity, and Video Editing & Motion Graphics.",
  },
  {
    question: "Who does Eclick Tech Solutions work with?",
    answer: "We partner with startups, growing businesses, and enterprises across diverse industries worldwide—including Saudisoft, Techno Paints, Amana, Boxoo, Pfizer, AIM United Global, GDH Academy, Redesign Dental Clinics, and WallCraft Panels. Operating across India, USA, KSA, and UAE, we tailor every solution to our clients' unique growth targets.",
  },
  {
    question: "How do your AI solutions and automations help businesses?",
    answer: "Our AI services empower businesses to automate repetitive workflows, improve brand visibility, enhance customer engagement, and gain predictive business intelligence. From intelligent RevOps copilots and AI lead threat intelligence to custom agentic workflows, we build systems that drive measurable ROI and operational scale.",
  },
  {
    question: "How do you communicate during a project?",
    answer: "We believe in transparent communication, dedicated account management, and long-term support. You have direct access to our core specialists with regular milestone reviews, status demos, and collaborative communication tailored to your timezone across India, USA, KSA, and UAE.",
  },
  {
    question: "I have a complex or large-scale enterprise project. Can you handle it?",
    answer: "Yes. Our engineering and creative teams have the technical infrastructure, high-concurrency cloud expertise, and enterprise design capabilities to build large-scale web platforms, custom AI systems, and multi-database architectures with maximum security and reliability.",
  },
];

export const HomeFaqSection: React.FC = () => {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  const toggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="relative px-6 py-20 sm:px-16 lg:px-24 bg-[#0a0a0a]" aria-labelledby="faq-heading">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-0">
          {/* Left Column: Heading + Subtle Ambient Blob */}
          <ScrollReveal delay={0} yOffset={24} className="relative flex w-full flex-col items-center lg:w-auto lg:shrink lg:grow lg:basis-auto lg:items-start">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
              <span className="h-2 w-2 rounded-full bg-[#88E788]"></span>
              <span className="font-body text-xs font-bold uppercase tracking-widest text-[#88E788]">
                FAQ
              </span>
            </div>
            <h2 
              id="faq-heading" 
              className="text-center font-display text-3xl leading-[1.15] text-white sm:text-5xl lg:text-left font-bold"
            >
              Questions you've asked
            </h2>
            <img 
              alt="" 
              aria-hidden="true" 
              loading="lazy" 
              width="739" 
              height="568" 
              className="relative z-0 mt-8 ml-8 sm:ml-16 w-[75%] max-w-[420px] rotate-[200deg] opacity-20 blur-[60px] max-lg:hidden pointer-events-none select-none" 
              src="/brand/faq-blob.svg" 
            />
          </ScrollReveal>

          {/* Right Column: Interactive Accordion List */}
          <div className="relative z-10 flex w-full flex-col items-center lg:w-1/2 lg:shrink lg:grow-0 lg:basis-1/2">
            <div className="mb-8 flex flex-col w-full">
              {FAQ_ITEMS.map((item, idx) => {
                const isOpen = openIdx === idx;
                return (
                  <ScrollReveal key={idx} delay={100 + idx * 70} yOffset={20} className="w-full">
                    <div 
                      className={`mb-3 rounded-[20px] bg-[#141416] border p-3.5 sm:p-4 transition-all duration-200 ${
                        isOpen ? 'border-[#88E788]/60 bg-[#161616]' : 'border-white/10 hover:border-white/25'
                      }`}
                    >
                      <button
                        type="button"
                        onClick={() => toggle(idx)}
                        aria-expanded={isOpen}
                        className="flex w-full items-center justify-between gap-4 py-1 text-left cursor-pointer focus:outline-none"
                      >
                        <span className="font-body text-xs sm:text-sm font-semibold tracking-wide text-white uppercase">
                          {item.question}
                        </span>
                        <span 
                          aria-hidden="true" 
                          className={`flex h-7 w-7 shrink-0 items-center justify-center transition-transform duration-300 ${
                            isOpen ? 'rotate-180 text-[#88E788]' : 'rotate-0 text-white/60'
                          }`}
                        >
                          <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5">
                            <path 
                              d="M7.087 9.023c.101 0 .178.03.256.109l4.303 4.327.353.355 4.683-4.683c.077-.078.144-.1.224-.097.095.003.176.036.262.122.078.078.109.155.109.256 0 .1-.03.177-.109.255l-4.919 4.919a.5.5 0 0 1-.125.108.4.4 0 0 1-.124.023.4.4 0 0 1-.067-.004l-.058-.017-.052-.03a.7.7 0 0 1-.098-.09l-4.945-4.943a.4.4 0 0 1-.126-.239.4.4 0 0 1 .122-.274.4.4 0 0 1 .261-.108z" 
                              fill="currentColor" 
                            />
                          </svg>
                        </span>
                      </button>

                      <div 
                        className={`grid transition-[grid-template-rows] duration-300 ease-in-out ${
                          isOpen ? 'grid-rows-[1fr] opacity-100 mt-2' : 'grid-rows-[0fr] opacity-0'
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="pb-2 text-xs sm:text-sm text-white/60 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>

            {/* See all questions Pill Button with animated diagonal arrow */}
            <ScrollReveal delay={100 + FAQ_ITEMS.length * 70} yOffset={16}>
              <a 
                href="/faq"
                className="group relative inline-flex h-11 items-center justify-center rounded-full bg-[#88E788] px-6 font-display text-xs uppercase tracking-wider font-semibold text-[#0a0a0a] transition-all duration-300 hover:bg-[#88E788]/90 hover:shadow-[0_0_20px_rgba(136,231,136,0.35)]" 
              >
                <div className="flex items-center gap-2">
                  {/* Rolling text with exact 44px container */}
                  <div className="h-11 overflow-hidden">
                    <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                      <span className="flex h-11 items-center whitespace-nowrap">See All Questions</span>
                      <span className="flex h-11 items-center whitespace-nowrap" aria-hidden="true">See All Questions</span>
                    </div>
                  </div>

                  {/* Animated diagonal arrow beside text */}
                  <span className="relative flex h-3.5 w-3.5 items-center justify-center overflow-hidden shrink-0" aria-hidden="true">
                    <svg 
                      viewBox="0 0 12 12" 
                      className="absolute h-3 w-3 stroke-[#0a0a0a] stroke-[2.2] fill-none transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:-translate-y-3"
                    >
                      <path d="M2 10L10 2M10 2H4M10 2V8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <svg 
                      viewBox="0 0 12 12" 
                      className="absolute h-3 w-3 stroke-[#0a0a0a] stroke-[2.2] fill-none -translate-x-3 translate-y-3 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                    >
                      <path d="M2 10L10 2M10 2H4M10 2V8" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
              </a>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
