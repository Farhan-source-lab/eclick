import React, { useState } from 'react';

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
    <section className="relative px-6 py-20 sm:px-16 lg:px-24 bg-[#141416]" aria-labelledby="faq-heading">
      <div className="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-0 max-w-7xl mx-auto">
        {/* Left Column: Heading + Glowing Ambient Vector Blob */}
        <div className="relative flex w-full flex-col items-center lg:w-auto lg:shrink lg:grow lg:basis-auto lg:items-start">
          <h2 
            id="faq-heading" 
            className="text-center font-display text-3xl leading-[1.2] text-[#eee6c1] sm:text-4xl lg:text-left"
          >
            Questions you've asked
          </h2>
          <img 
            alt="" 
            aria-hidden="true" 
            loading="lazy" 
            width="739" 
            height="568" 
            className="relative z-0 mt-8 ml-8 sm:ml-16 w-[75%] max-w-[420px] rotate-[200deg] blur-[35px] max-lg:hidden pointer-events-none select-none" 
            src="/brand/faq-blob.svg" 
          />
        </div>

        {/* Right Column: Interactive Accordion List */}
        <div className="relative z-10 flex w-full flex-col items-center lg:w-1/2 lg:shrink lg:grow-0 lg:basis-1/2">
          <div className="mb-8 flex flex-col w-full">
            {FAQ_ITEMS.map((item, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div 
                  key={idx} 
                  className="mb-3 rounded-[20px] bg-white/[0.07] border border-white/[0.05] p-3 sm:p-4 transition-colors hover:bg-white/[0.1]"
                >
                  <button
                    type="button"
                    onClick={() => toggle(idx)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-4 py-1 text-left cursor-pointer focus:outline-none"
                  >
                    <span className="font-body text-xs sm:text-sm font-semibold tracking-wide text-[#eee6c1] uppercase">
                      {item.question}
                    </span>
                    <span 
                      aria-hidden="true" 
                      className={`flex h-7 w-7 shrink-0 items-center justify-center transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      <svg viewBox="0 0 24 24" fill="none" className="h-5 w-5 text-[#eee6c1]">
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
                      <p className="pb-2 text-xs sm:text-sm text-[#b7af98] leading-relaxed">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* See all questions Pill Button */}
          <a 
            className="group relative inline-flex h-11 items-center justify-center overflow-hidden rounded-full bg-[#eee6c1] px-6 font-display text-xs font-semibold uppercase text-[#141416] transition-all hover:bg-[#ffaa01]" 
            href="/faq"
          >
            <span className="grid text-center leading-10 transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
              <span>See all questions</span>
              <span aria-hidden="true">See all questions</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};
