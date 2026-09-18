import React, { useState } from 'react';
import { locationsData } from '../data/locationsData';
import { LocationsGlobe } from '../components/LocationsGlobe';
import { RollingButton } from '../components/RollingButton';
import { MarqueeTrusted } from '../components/MarqueeTrusted';
import { HomeContactSection } from '../components/HomeContactSection';
import { ScrollReveal } from '../components/ScrollReveal';

export const LocationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = locationsData.filter((loc) =>
    loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    loc.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* 1. HERO SECTION WITH 3D WEBGL GLOBE */}
      <section className="relative px-6 pt-36 pb-16 text-center sm:px-12 lg:px-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#88E788]/15 blur-[160px]"
        />

        <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
          <ScrollReveal direction="fade" delay={0.05}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#88E788]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#88E788]">Regional Coverage</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="font-display text-4xl font-extrabold sm:text-6xl text-white tracking-tight">
              Web Design & Digital Marketing Across Ontario
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p className="mt-5 text-base text-white/70 sm:text-xl max-w-2xl leading-relaxed">
              Aeth Digital helps service-based businesses grow online, city by city. Find your location below.
            </p>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.2}>
            <div className="mt-8 flex justify-center">
              <RollingButton href="/contact" text="Get a Free Estimate" variant="primary" icon={true} />
            </div>
          </ScrollReveal>

          {/* Interactive WebGL Globe */}
          <ScrollReveal direction="up" delay={0.25} className="w-full">
            <div className="mt-12 flex flex-col items-center">
              <LocationsGlobe />
              <p className="mt-4 font-mono text-xs uppercase tracking-[0.2em] text-white/50">
                25 cities and counting
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. TRUSTED MARQUEE */}
      <MarqueeTrusted />

      {/* 3. SEARCH & CITY DIRECTORY */}
      <section className="px-6 py-20 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal direction="up" delay={0.1}>
            <div className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row">
              <div>
                <h2 className="font-display text-2xl font-bold sm:text-4xl text-white">Ontario Cities We Serve</h2>
                <p className="mt-1 text-sm text-white/60">Select your municipality for localized web development & SEO strategies.</p>
              </div>

              {/* Live Search Input */}
              <div className="w-full sm:w-72">
                <input
                  type="text"
                  placeholder="Search city or region..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full rounded-full border border-white/10 bg-[#141416]/80 px-5 py-2.5 text-sm text-white placeholder:text-white/40 focus:border-[#88E788] focus:outline-none backdrop-blur-md transition-colors"
                />
              </div>
            </div>
          </ScrollReveal>

          {/* Grid of 25 Cities */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((loc, i) => (
              <ScrollReveal key={loc.slug} direction="up" delay={0.05 * (i % 8)}>
                <a
                  href={`/locations/${loc.slug}`}
                  className="group flex flex-col justify-between rounded-[24px] border border-white/10 bg-[#141416]/80 p-6 backdrop-blur-xl transition-all duration-300 hover:border-[#88E788]/60 hover:bg-[#18181c] hover:-translate-y-1 h-full"
                >
                  <div>
                    <span className="text-[10px] font-mono uppercase tracking-widest text-[#88E788]">
                      {loc.region}
                    </span>
                    <h3 className="mt-2 font-display text-xl font-bold text-white group-hover:text-[#88E788] transition-colors">
                      {loc.name}
                    </h3>
                    <p className="mt-2 text-xs leading-relaxed text-white/70 line-clamp-2">
                      {loc.description}
                    </p>
                  </div>

                  <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
                    <span className="text-xs font-medium text-white/60">View local services</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1 text-[#88E788]">
                      →
                    </span>
                  </div>
                </a>
              </ScrollReveal>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center text-white/60">
              No matching city found. Contact us for remote and custom Ontario coverage!
            </div>
          )}
        </div>
      </section>

      {/* 4. CONTACT CTA */}
      <HomeContactSection />
    </div>
  );
};
