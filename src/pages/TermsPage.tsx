import React from 'react';

export const TermsPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <section className="relative px-6 pt-36 pb-20 text-center sm:px-12 lg:px-24">
        <div className="relative z-10 mx-auto max-w-3xl">
          <span className="font-display text-xs uppercase tracking-widest text-(--color-cta)">Legal</span>
          <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-5xl">Terms of Service</h1>
          <p className="mt-3 text-xs text-foreground/60">Last updated: January 2025</p>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-3xl rounded-[28px] border border-(--color-border) bg-(--color-surface) p-8 sm:p-12 text-sm leading-relaxed text-foreground/80 flex flex-col gap-6">
          <h2 className="font-display text-xl font-bold text-foreground">1. Agreement to Terms</h2>
          <p>
            By accessing or using the services provided by AETH Digital Inc. ("AETH Digital"), you agree to be bound by these Terms of Service.
          </p>

          <h2 className="font-display text-xl font-bold text-foreground">2. Client Deliverables & Intellectual Property</h2>
          <p>
            Upon full payment of contractual invoices, all custom website design assets, written source code, graphics, and video production deliverables created for the client become the intellectual property of the client, unless explicitly agreed otherwise.
          </p>

          <h2 className="font-display text-xl font-bold text-foreground">3. Limitation of Liability</h2>
          <p>
            AETH Digital strives for 100% platform uptime and optimal search engine positioning. However, search engine algorithms and third-party hosting platforms operate independently, and AETH Digital is not liable for indirect damages or external outages.
          </p>
        </div>
      </section>
    </div>
  );
};
