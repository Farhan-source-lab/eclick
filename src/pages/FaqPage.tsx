import React, { useState } from 'react';
import { faqData } from '../data/faqData';
import { FaqAccordion } from '../components/FaqAccordion';
import { HomeContactSection } from '../components/HomeContactSection';

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
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 pt-36 pb-16 text-center sm:px-12 lg:px-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-(--color-cta) opacity-20 blur-[160px]"
        />
        <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
          <div className="inline-block rounded-full border border-foreground/30 px-5 py-1.5 mb-6">
            <span className="font-display text-xs uppercase tracking-widest text-(--color-cta)">FAQ</span>
          </div>

          <h1 className="font-display text-4xl font-extrabold sm:text-6xl">
            Frequently Asked Questions
          </h1>

          <p className="mt-5 text-base text-foreground/75 sm:text-xl max-w-2xl leading-relaxed">
            Everything you need to know before partnering with us. Don't see your question? Reach out any time.
          </p>
        </div>
      </section>

      {/* 2. CATEGORY PILLS */}
      <section className="px-6 pb-10 sm:px-12 lg:px-24">
        <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-2.5">
          {categories.map((c) => (
            <button
              key={c.id}
              onClick={() => setSelectedCategory(c.id)}
              className={`rounded-full px-5 py-2 text-xs font-display uppercase tracking-wider transition-all duration-300 ${
                selectedCategory === c.id
                  ? 'bg-(--color-cta) text-(--color-cta-contrast) font-bold shadow-md'
                  : 'border border-(--color-border) bg-(--color-surface) text-foreground/80 hover:border-(--color-cta)'
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>
      </section>

      {/* 3. ACCORDION LIST */}
      <section className="px-6 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl">
          <FaqAccordion items={filtered} />
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
