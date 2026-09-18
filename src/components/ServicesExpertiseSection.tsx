import React, { useState } from 'react';
import { servicesData } from '../data/servicesData';
import { LottieIcon } from './LottieIcon';
import { ScrollReveal } from './ScrollReveal';

export const ServicesExpertiseSection: React.FC = () => {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const currentService = servicesData[selectedIdx];

  return (
    <section className="px-6 py-20 sm:px-12 lg:px-24 bg-[#0a0a0a] text-white" aria-labelledby="services-expertise-heading">
      <div className="mx-auto max-w-7xl">
        <ScrollReveal direction="up" delay={0.1}>
          <div className="mb-12 flex flex-col items-start gap-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#88E788]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#88E788]">Our Expertise</span>
            </div>
            <h2 id="services-expertise-heading" className="font-display text-3xl font-bold sm:text-5xl text-white tracking-tight">
              Built for conversion. Engineered to last.
            </h2>
            <p className="max-w-2xl text-base text-white/70 sm:text-lg">
              Every digital service we offer is synchronized into a cohesive growth engine designed to attract, engage, and convert your ideal customers.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
          {/* Left Column: Selector Buttons */}
          <div className="flex flex-col gap-3 lg:col-span-5">
            {servicesData.map((service, idx) => {
              const isSelected = idx === selectedIdx;
              return (
                <button
                  key={service.slug}
                  onClick={() => setSelectedIdx(idx)}
                  className={`group flex items-center justify-between rounded-2xl border p-5 text-left transition-all duration-300 ${
                    isSelected
                      ? 'border-[#88E788]/60 bg-[#18181c] shadow-lg shadow-[#88E788]/10 scale-[1.01]'
                      : 'border-white/10 bg-[#141416]/50 hover:border-white/20 hover:bg-[#141416]/80'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex h-10 w-10 items-center justify-center rounded-xl transition-colors ${
                      isSelected ? 'bg-[#88E788] text-[#0a0a0a]' : 'bg-white/5 text-white'
                    }`}>
                      <img 
                        src={service.icon} 
                        alt="" 
                        aria-hidden="true" 
                        className="h-5 w-5 object-contain" 
                      />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-semibold text-white">
                        {service.shortTitle}
                      </h3>
                      <p className="line-clamp-1 text-xs text-white/60">
                        {service.subtitle}
                      </p>
                    </div>
                  </div>

                  <span className={`text-xl font-bold transition-transform duration-300 ${
                    isSelected ? 'translate-x-1 text-[#88E788]' : 'text-white/30 group-hover:translate-x-1'
                  }`}>
                    →
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Column: Lottie & Details */}
          <div className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-[#141416]/80 p-8 sm:p-12 lg:col-span-7 backdrop-blur-xl shadow-2xl">
            <div>
              <div className="relative mb-8 flex h-64 w-full items-center justify-center overflow-hidden rounded-2xl bg-black/40 p-6 sm:h-80 border border-white/5">
                <div 
                  aria-hidden="true" 
                  className="pointer-events-none absolute inset-0 m-auto h-40 w-40 rounded-full bg-[#88E788]/15 blur-[80px]" 
                />
                <LottieIcon 
                  path={currentService.lottieFile} 
                  className="relative z-10 h-56 w-56 sm:h-72 sm:w-72" 
                />
              </div>

              <span className="font-mono text-xs uppercase tracking-widest text-[#88E788]">
                Featured Capability
              </span>
              <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl text-white">
                {currentService.title}
              </h3>
              <p className="mt-4 leading-relaxed text-white/70">
                {currentService.description}
              </p>

              <div className="mt-8 grid grid-cols-2 gap-4 border-t border-white/10 pt-6 sm:grid-cols-4">
                {currentService.stats.map((stat, i) => (
                  <div key={i}>
                    <p className="font-display text-xl font-bold text-[#88E788] sm:text-2xl">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-xs text-white/60">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-10 flex flex-wrap items-center justify-between gap-4 border-t border-white/10 pt-6">
              <a
                href={`/services/${currentService.slug}`}
                className="group inline-flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-wider text-white hover:text-[#88E788] transition-colors"
              >
                <span>Learn more about {currentService.shortTitle}</span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>

              <a
                href="/contact"
                className="rounded-full bg-[#88E788] px-5 py-2.5 font-display text-xs font-semibold uppercase text-[#0a0a0a] transition-all hover:bg-[#88E788]/90 hover:scale-105"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
