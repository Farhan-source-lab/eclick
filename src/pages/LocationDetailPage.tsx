import React from 'react';
import { locationsData } from '../data/locationsData';
import { servicesData } from '../data/servicesData';
import { RollingButton } from '../components/RollingButton';
import { HomeContactSection } from '../components/HomeContactSection';
import { ScrollReveal } from '../components/ScrollReveal';

interface LocationDetailPageProps {
  slug: string;
}

export const LocationDetailPage: React.FC<LocationDetailPageProps> = ({ slug }) => {
  const location = locationsData.find((l) => l.slug === slug) || locationsData[0];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 pt-36 pb-20 text-center sm:px-12 lg:px-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#88E788]/15 blur-[160px]"
        />
        <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
          <ScrollReveal direction="fade" delay={0.05}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#88E788]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#88E788]">{location.region}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="font-display text-4xl font-extrabold sm:text-6xl text-white tracking-tight">
              Web Design & SEO in {location.name}, Ontario
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p className="mt-5 text-base text-white/70 sm:text-xl max-w-2xl leading-relaxed">
              {location.description}
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="mt-8 flex flex-wrap justify-center gap-4">
              <RollingButton href="/contact" text={`Start Project in ${location.name}`} variant="primary" icon={true} />
              <RollingButton href="/locations" text="All Ontario Cities" variant="outline" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. LOCAL MARKET VALUE SECTION */}
      <section className="px-6 py-24 sm:px-12 lg:px-24 border-t border-white/10 bg-white/[0.01]">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
          <ScrollReveal direction="left" delay={0.1}>
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#88E788]">Local Growth Engine</span>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl text-white">
                Why {location.name} Businesses Choose Aeth Digital
              </h2>
              <p className="mt-5 text-base text-white/70 leading-relaxed">
                In a crowded regional market like {location.name}, a generic website won’t cut it. Customers compare local options within seconds. We engineer custom digital platforms with localized schema markup, fast mobile speeds, and conversion-optimized call-to-actions that turn local searchers into booked calls.
              </p>

              <div className="mt-8 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <span className="text-[#88E788] font-bold text-lg">✓</span>
                  <p className="text-sm text-white/80"><strong className="text-white">Hyper-Local SEO Optimization:</strong> Ranking in Google Map Packs and local organic searches across {location.name}.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#88E788] font-bold text-lg">✓</span>
                  <p className="text-sm text-white/80"><strong className="text-white">Sub-Second Mobile Load Times:</strong> Capturing on-the-go mobile customers looking for emergency and local trade services.</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-[#88E788] font-bold text-lg">✓</span>
                  <p className="text-sm text-white/80"><strong className="text-white">High-Trust Social Proof:</strong> Strategic reviews, client case studies, and modern aesthetics that establish immediate credibility.</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="rounded-[28px] border border-white/10 bg-[#141416]/80 p-8 sm:p-10 backdrop-blur-xl">
              <h3 className="font-display text-xl font-bold text-white mb-6">
                Popular Services in {location.name}
              </h3>
              <div className="flex flex-col gap-4">
                {servicesData.slice(0, 4).map((s) => (
                  <a
                    key={s.slug}
                    href={`/services/${s.slug}`}
                    className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4 transition-all duration-300 hover:border-[#88E788]/60 hover:bg-white/[0.05]"
                  >
                    <div className="flex items-center gap-3">
                      <img src={s.icon} alt="" className="h-5 w-5 object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                      <span className="font-display text-sm font-semibold text-white group-hover:text-[#88E788] transition-colors">{s.title}</span>
                    </div>
                    <span className="text-[#88E788] group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>
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
