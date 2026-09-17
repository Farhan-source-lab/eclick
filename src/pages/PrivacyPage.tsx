import React from 'react';

export const PrivacyPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <section className="relative px-6 pt-36 pb-20 text-center sm:px-12 lg:px-24">
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="font-display text-xs uppercase tracking-widest text-(--color-cta)">Legal</span>
          <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">Privacy Policy</h1>
          <p className="mt-3 text-xs text-foreground/60">Last updated: January 2025</p>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-(--color-border) bg-(--color-surface) p-8 sm:p-12 text-sm leading-relaxed text-foreground/80 flex flex-col gap-6">
          <h2 className="font-display text-xl font-bold text-foreground">1. Information We Collect</h2>
          <p>
            When you contact us, request a project quote, or interact with our digital services, we may collect personal information such as your name, email address, phone number, and project specifications.
          </p>

          <h2 className="font-display text-xl font-bold text-foreground">2. How We Use Your Information</h2>
          <p>
            We use your data solely to communicate project proposals, deliver services, fulfill client contracts, and improve our digital experiences. We do not sell, rent, or trade your personal information to any third parties.
          </p>

          <h2 className="font-display text-xl font-bold text-foreground">3. Analytics & Cookies</h2>
          <p>
            Our website uses modern, privacy-focused analytics tools to measure traffic engagement and technical performance without tracking personally identifiable sensitive information.
          </p>

          <h2 className="font-display text-xl font-bold text-foreground">4. Contacting Us</h2>
          <p>
            If you have questions regarding this Privacy Policy or your personal data, please email us at <strong>contact@aethdigital.com</strong>.
          </p>
        </div>
      </section>
    </div>
  );
};
