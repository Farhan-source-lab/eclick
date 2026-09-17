import React from 'react';
import { servicesData } from '../data/servicesData';
import { LottieIcon } from '../components/LottieIcon';
import { RollingButton } from '../components/RollingButton';
import { HomeContactSection } from '../components/HomeContactSection';

export const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Header */}
      <section className="relative px-6 pt-36 pb-20 text-center sm:px-12 lg:px-24">
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/3 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-(--color-cta) opacity-20 blur-[160px]" 
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="inline-block rounded-full border border-foreground/30 px-5 py-1.5 mb-6">
            <span className="font-display text-xs uppercase tracking-widest text-(--color-cta)">Capabilities</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold sm:text-6xl">
            Our Digital Services
          </h1>
          <p className="mt-5 text-base text-foreground/75 sm:text-xl">
            Comprehensive digital strategy, custom engineering, and performance marketing built to turn your website into an enterprise revenue engine.
          </p>
        </div>
      </section>

      {/* Services Grid (8 Services) */}
      <section className="px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-2">
          {servicesData.map((service) => (
            <div
              key={service.slug}
              className="flex flex-col justify-between rounded-[28px] border border-(--color-border) bg-(--color-surface) p-8 sm:p-10 transition-all duration-300 hover:border-(--color-cta)/70 hover:shadow-xl"
            >
              <div>
                {/* Lottie Animation Header */}
                <div className="relative mb-6 flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl bg-background/40 p-4 sm:h-56">
                  <LottieIcon path={service.lottieFile} className="h-44 w-44 sm:h-52 sm:w-52" />
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--color-cta)/20">
                    <img src={service.icon} alt="" className="h-5 w-5 object-contain" />
                  </div>
                  <h2 className="font-display text-2xl font-bold text-foreground">
                    {service.title}
                  </h2>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-foreground/80 sm:text-base">
                  {service.subtitle}
                </p>

                {/* Key Perks */}
                <div className="mt-6 flex flex-col gap-2.5">
                  {service.perks.slice(0, 3).map((perk, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs text-foreground/75 sm:text-sm">
                      <span className="text-(--color-cta) font-bold">✓</span>
                      <span><strong>{perk.title}:</strong> {perk.description}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom CTA */}
              <div className="mt-8 pt-6 border-t border-(--color-border) flex items-center justify-between">
                <a
                  href={`/services/${service.slug}`}
                  className="group inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-foreground hover:text-(--color-cta)"
                >
                  <span>Explore Service Details</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </a>

                <RollingButton href="/contact" text="Inquire" variant="primary" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Global Process Section */}
      <section className="px-6 py-20 sm:px-12 lg:px-24 bg-(--color-surface)/30 border-y border-(--color-border)">
        <div className="mx-auto max-w-7xl">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="font-display text-xs uppercase tracking-widest text-(--color-cta)">Our Methodology</span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">How We Deliver Results</h2>
            <p className="mt-4 text-foreground/70">A battle-tested 4-phase agile delivery framework ensuring zero surprises and transparent momentum.</p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', title: 'Discover & Define', desc: 'In-depth market audit, competitor analysis, and audience intent mapping.' },
              { step: '02', title: 'Plan & Architecture', desc: 'Clickable wireframes, information hierarchy, and conversion-first user flows.' },
              { step: '03', title: 'Design & Build', desc: 'Pixel-perfect UI styling, high-performance React code, and rigorous QA testing.' },
              { step: '04', title: 'Launch & Scale', desc: 'Zero-downtime DNS deployment, search indexing, and ongoing continuous growth.' },
            ].map((st) => (
              <div key={st.step} className="rounded-2xl border border-(--color-cta)/30 bg-(--color-ink)/80 p-8 text-(--color-ink-contrast)">
                <span className="font-display text-2xl font-bold text-(--color-cta)">Step {st.step}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-(--color-ink-contrast)">{st.title}</h3>
                <p className="mt-3 text-xs leading-relaxed text-(--color-ink-contrast)/70">{st.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <HomeContactSection />
    </div>
  );
};
