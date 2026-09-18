import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

export const TermsPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#0a0a0a] text-white">
      <section className="relative px-6 pt-36 pb-16 text-center sm:px-12 lg:px-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#88E788]/15 blur-[160px]"
        />
        <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
          <ScrollReveal direction="fade" delay={0.05}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#88E788]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#88E788]">Legal</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="font-display text-4xl font-extrabold sm:text-5xl text-white tracking-tight">Terms of Service</h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p className="mt-3 text-xs font-mono text-white/50">Last updated: January 2025</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-12 lg:px-24">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mx-auto max-w-3xl rounded-[28px] border border-white/10 bg-[#141416]/80 p-8 sm:p-12 text-sm leading-relaxed text-white/75 flex flex-col gap-6 backdrop-blur-xl shadow-2xl">
            <h2 className="font-display text-xl font-bold text-white">1. Agreement to Terms</h2>
            <p>
              By accessing or using the services provided by AETH Digital Inc. ("AETH Digital"), you agree to be bound by these Terms of Service.
            </p>

            <h2 className="font-display text-xl font-bold text-white">2. Client Deliverables & Intellectual Property</h2>
            <p>
              Upon full payment of contractual invoices, all custom website design assets, written source code, graphics, and video production deliverables created for the client become the intellectual property of the client, unless explicitly agreed otherwise.
            </p>

            <h2 className="font-display text-xl font-bold text-white">3. Limitation of Liability</h2>
            <p>
              AETH Digital strives for 100% platform uptime and optimal search engine positioning. However, search engine algorithms and third-party hosting platforms operate independently, and AETH Digital is not liable for indirect damages or external outages.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
