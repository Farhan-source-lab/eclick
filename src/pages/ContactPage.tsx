import React from 'react';
import { HomeContactSection } from '../components/HomeContactSection';
import { ScrollReveal } from '../components/ScrollReveal';

export const ContactPage: React.FC = () => {
  return (
    <main className="flex flex-1 flex-col bg-[#0a0a0a] overflow-hidden">
      {/* Hero Section */}
      <section className="relative -mt-24 flex min-h-[46vh] sm:min-h-[50vh] flex-col items-center justify-center px-6 pt-36 pb-6 text-center sm:px-12 sm:pt-44 lg:px-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-0 left-1/2 z-0 h-96 w-96 -translate-x-1/2 rounded-full bg-[#88E788]/20 blur-[150px]"
        />
        <div className="relative z-10 mx-auto flex max-w-2xl flex-col items-center gap-2">
          <ScrollReveal delay={0} yOffset={16}>
            <p className="font-body text-xs uppercase tracking-widest text-[#88E788] font-bold">
              Contact
            </p>
          </ScrollReveal>

          <ScrollReveal delay={100} yOffset={20}>
            <h1 className="mt-3 mb-2.5 font-display text-4xl font-bold leading-[1.15] text-white sm:text-5xl lg:text-[54px]">
              Get a Free Estimate
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={180} yOffset={20}>
            <p className="mb-2 max-w-xl text-sm sm:text-base leading-relaxed text-white/70">
              Tell us about your project and we'll be in touch shortly — no obligation, no pressure.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Unified Single Card Container */}
      <div className="-mt-10 sm:-mt-14">
        <HomeContactSection />
      </div>

      {/* Exploration Links */}
      <section className="px-6 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <p className="text-sm text-white/50">Not ready to reach out yet?</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="/services"
              className="rounded-full border border-white/10 px-5 py-2.5 text-xs font-body uppercase tracking-wider text-white/80 transition-all hover:border-[#88E788] hover:text-[#88E788]"
            >
              Browse services
            </a>
            <a
              href="/projects"
              className="rounded-full border border-white/10 px-5 py-2.5 text-xs font-body uppercase tracking-wider text-white/80 transition-all hover:border-[#88E788] hover:text-[#88E788]"
            >
              See our work
            </a>
            <a
              href="/faq"
              className="rounded-full border border-white/10 px-5 py-2.5 text-xs font-body uppercase tracking-wider text-white/80 transition-all hover:border-[#88E788] hover:text-[#88E788]"
            >
              Read the FAQ
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};
