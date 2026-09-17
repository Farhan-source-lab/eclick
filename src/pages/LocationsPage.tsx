import React, { useState } from 'react';
import { locationsData } from '../data/locationsData';
import { LocationsGlobe } from '../components/LocationsGlobe';
import { RollingButton } from '../components/RollingButton';
import { MarqueeTrusted } from '../components/MarqueeTrusted';
import { HomeContactSection } from '../components/HomeContactSection';

export const LocationsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const filtered = locationsData.filter((loc) =>
    loc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    loc.region.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION WITH 3D WEBGL GLOBE */}
      <section className="relative px-6 pt-36 pb-16 text-center sm:px-12 lg:px-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-(--color-cta) opacity-20 blur-[160px]"
        />

        <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
          <div className="inline-block rounded-full border border-foreground/30 px-5 py-1.5 mb-6">
            <span className="font-display text-xs uppercase tracking-widest text-(--color-cta)">Regional Coverage</span>
          </div>

          <h1 className="font-display text-4xl font-extrabold sm:text-6xl">
            Web Design & Digital Marketing Across Ontario
          </h1>

          <p className="mt-5 text-base text-foreground/75 sm:text-xl max-w-2xl leading-relaxed">
            Aeth Digital helps service-based businesses grow online, city by city. Find your location below.
          </p>

          <div className="mt-8 flex justify-center">
            <RollingButton href="/contact" text="Get a Free Estimate" variant="primary" icon={true} />
          </div>

          {/* Interactive WebGL Globe */}
          <div className="mt-12 flex flex-col items-center">
            <LocationsGlobe />
            <p className="mt-4 font-display text-xs uppercase tracking-[0.2em] text-(--color-text-muted)">
              25 cities and counting
            </p>
          </div>
        </div>
      </section>

      {/* 2. TRUSTED MARQUEE */}
      <MarqueeTrusted />

      {/* 3. SEARCH & CITY DIRECTORY */}
      <section className="px-6 py-20 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div>
              <h2 className="font-display text-2xl font-bold sm:text-4xl">Ontario Cities We Serve</h2>
              <p className="mt-1 text-sm text-foreground/70">Select your municipality for localized web development & SEO strategies.</p>
            </div>

            {/* Live Search Input */}
            <div className="w-full sm:w-72">
              <input
                type="text"
                placeholder="Search city or region..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full rounded-full border border-(--color-border) bg-(--color-surface) px-5 py-2.5 text-sm text-foreground placeholder:text-foreground/40 focus:border-(--color-cta) focus:outline-none"
              />
            </div>
          </div>

          {/* Grid of 25 Cities */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {filtered.map((loc) => (
              <a
                key={loc.slug}
                href={`/locations/${loc.slug}`}
                className="group flex flex-col justify-between rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 transition-all duration-300 hover:border-(--color-cta) hover:shadow-lg"
              >
                <div>
                  <span className="text-[10px] font-display uppercase tracking-widest text-(--color-cta)">
                    {loc.region}
                  </span>
                  <h3 className="mt-2 font-display text-xl font-bold text-foreground group-hover:text-(--color-cta) transition-colors">
                    {loc.name}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-foreground/70 line-clamp-2">
                    {loc.description}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between border-t border-(--color-border) pt-4">
                  <span className="text-xs font-semibold text-foreground/60">View local services</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1 text-(--color-cta)">
                    →
                  </span>
                </div>
              </a>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="py-16 text-center text-foreground/60">
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
