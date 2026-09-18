import React from 'react';
import { ScrollReveal } from '../components/ScrollReveal';

export const PrivacyPage: React.FC = () => {
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
            <h1 className="font-display text-4xl font-extrabold sm:text-5xl text-white tracking-tight">Privacy Policy</h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p className="mt-3 text-xs font-mono text-white/50">Last updated: January 2025</p>
          </ScrollReveal>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-12 lg:px-24">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mx-auto max-w-3xl rounded-[28px] border border-white/10 bg-[#141416]/80 p-8 sm:p-12 text-sm leading-relaxed text-white/75 flex flex-col gap-6 backdrop-blur-xl shadow-2xl">
            <h2 className="font-display text-xl font-bold text-white">1. Information We Collect</h2>
            <p>
              When you contact us, request a project quote, or interact with our digital services, we may collect personal information such as your name, email address, phone number, and project specifications.
            </p>

            <h2 className="font-display text-xl font-bold text-white">2. How We Use Your Information</h2>
            <p>
              We use your data solely to communicate project proposals, deliver services, fulfill client contracts, and improve our digital experiences. We do not sell, rent, or trade your personal information to any third parties.
            </p>

            <h2 className="font-display text-xl font-bold text-white">3. Analytics & Cookies</h2>
            <p>
              Our website uses modern, privacy-focused analytics tools to measure traffic engagement and technical performance without tracking personally identifiable sensitive information.
            </p>

            <h2 className="font-display text-xl font-bold text-white">4. Contacting Us</h2>
            <p>
              If you have questions regarding this Privacy Policy or your personal data, please email us at <strong className="text-white">contact@aethdigital.com</strong>.
            </p>
          </div>
        </ScrollReveal>
      </section>
    </div>
  );
};
