import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { FaqAccordion } from '../components/FaqAccordion';
import { HomeContactSection } from '../components/HomeContactSection';
import { ScrollReveal } from '../components/ScrollReveal';

export const FaqPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Questions' },
    { id: 'general', label: 'General' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'Process' },
    { id: 'pricing', label: 'Pricing' },
  ];

  const filtered = selectedCategory === 'all'
    ? faqData
    : faqData.filter((item) => item.category === selectedCategory);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 pt-36 pb-16 text-center sm:px-12 lg:px-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#88E788]/15 blur-[160px]"
        />
        <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
          <ScrollReveal direction="fade" delay={0.05}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#88E788]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#88E788]">FAQ</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="font-display text-4xl font-extrabold sm:text-6xl text-white tracking-tight">
              Frequently Asked Questions
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p className="mt-5 text-base text-white/70 sm:text-xl max-w-2xl leading-relaxed">
              Everything you need to know before partnering with us. Don't see your question? Reach out any time.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. CATEGORY PILLS */}
      <section className="px-6 pb-12 sm:px-12 lg:px-24">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-2.5">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`rounded-full px-5 py-2 text-xs font-mono uppercase tracking-wider transition-all duration-300 ${
                  selectedCategory === c.id
                    ? 'bg-[#88E788] text-[#0a0a0a] font-bold shadow-lg shadow-[#88E788]/20 scale-105'
                    : 'border border-white/10 bg-[#141416]/80 text-white/70 hover:border-white/20 hover:text-white'
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        </ScrollReveal>
      </section>

      {/* 3. ACCORDION LIST */}
      <section className="px-6 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <ScrollReveal direction="up" delay={0.15}>
            <FaqAccordion items={filtered} />
          </ScrollReveal>
        </div>
      </section>

      {/* 4. STILL HAVE QUESTIONS CTA */}
      <HomeContactSection
        title="Still Have Questions?"
        subtitle="We're happy to talk through your project before you commit to anything — reach out any time."
      />
    </div>
  );
};
