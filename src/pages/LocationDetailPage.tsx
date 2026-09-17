import React from 'react';
import { locationsData } from '../data/locationsData';
import { servicesData } from '../data/servicesData';
import { RollingButton } from '../components/RollingButton';
import { HomeContactSection } from '../components/HomeContactSection';

interface LocationDetailPageProps {
  slug: string;
}

export const LocationDetailPage: React.FC<LocationDetailPageProps> = ({ slug }) => {
  const location = locationsData.find((l) => l.slug === slug) || locationsData[0];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 pt-36 pb-20 text-center sm:px-12 lg:px-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-(--color-cta) opacity-20 blur-[160px]"
        />
        <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
          <div className="inline-block rounded-full border border-foreground/30 px-5 py-1.5 mb-6">
            <span className="font-display text-xs uppercase tracking-widest text-(--color-cta)">{location.region}</span>
          </div>

          <h1 className="font-display text-4xl font-extrabold sm:text-6xl">
            Web Design & SEO in {location.name}, Ontario
          </h1>

          <p className="mt-5 text-base text-foreground/75 sm:text-xl max-w-2xl leading-relaxed">
            {location.description}
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <RollingButton href="/contact" text={`Start Project in ${location.name}`} variant="primary" icon={true} />
            <RollingButton href="/locations" text="All Ontario Cities" variant="outline" />
          </div>
        </div>
      </section>

      {/* 2. LOCAL MARKET VALUE SECTION */}
      <section className="px-6 py-20 sm:px-12 lg:px-24 bg-(--color-surface)/30 border-y border-(--color-border)">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="font-display text-xs uppercase tracking-widest text-(--color-cta)">Local Growth Engine</span>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Why {location.name} Businesses Choose Aeth Digital
            </h2>
            <p className="mt-5 text-base text-foreground/80 leading-relaxed">
              In a crowded regional market like {location.name}, a generic website won’t cut it. Customers compare local options within seconds. We engineer custom digital platforms with localized schema markup, fast mobile speeds, and conversion-optimized call-to-actions that turn local searchers into booked calls.
            </p>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <span className="text-(--color-cta) font-bold text-lg">✓</span>
                <p className="text-sm text-foreground/80"><strong>Hyper-Local SEO Optimization:</strong> Ranking in Google Map Packs and local organic searches across {location.name}.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-(--color-cta) font-bold text-lg">✓</span>
                <p className="text-sm text-foreground/80"><strong>Sub-Second Mobile Load Times:</strong> Capturing on-the-go mobile customers looking for emergency and local trade services.</p>
              </div>
              <div className="flex items-start gap-3">
                <span className="text-(--color-cta) font-bold text-lg">✓</span>
                <p className="text-sm text-foreground/80"><strong>High-Trust Social Proof:</strong> Strategic reviews, client case studies, and modern aesthetics that establish immediate credibility.</p>
              </div>
            </div>
          </div>

          <div className="rounded-[28px] border border-(--color-border) bg-(--color-surface) p-8 sm:p-10">
            <h3 className="font-display text-xl font-bold text-foreground mb-6">
              Popular Services in {location.name}
            </h3>
            <div className="flex flex-col gap-4">
              {servicesData.slice(0, 4).map((s) => (
                <a
                  key={s.slug}
                  href={`/services/${s.slug}`}
                  className="group flex items-center justify-between rounded-xl border border-(--color-border) p-4 transition-all hover:border-(--color-cta) hover:bg-background/40"
                >
                  <div className="flex items-center gap-3">
                    <img src={s.icon} alt="" className="h-5 w-5 object-contain" />
                    <span className="font-display text-sm font-semibold">{s.title}</span>
                  </div>
                  <span className="text-(--color-cta) group-hover:translate-x-1 transition-transform">→</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. CONTACT CTA */}
      <HomeContactSection
        title={`Ready to Dominate Search in ${location.name}?`}
        subtitle={`Let’s build a custom web presence that outranks your competitors and generates a steady stream of qualified local leads.`}
      />
    </div>
  );
};
