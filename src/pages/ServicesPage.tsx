import React from 'react';
import { servicesData } from '../data/servicesData';
import { LottieIcon } from '../components/LottieIcon';
import { RollingButton } from '../components/RollingButton';
import { HomeContactSection } from '../components/HomeContactSection';
import { ScrollReveal } from '../components/ScrollReveal';

export const ServicesPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#0a0a0a]">
      {/* Hero Header */}
      <section className="relative px-6 pt-36 pb-20 text-center sm:px-12 sm:pt-44 sm:pb-28 lg:px-24">
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#88E788]/10 blur-[180px]" 
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <ScrollReveal delay={0} yOffset={20}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#88E788]"></span>
              <span className="font-body text-xs uppercase tracking-widest text-[#88E788] font-bold">Capabilities</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120} yOffset={24}>
            <h1 className="font-display text-4xl font-bold sm:text-6xl text-white leading-[1.1]">
              Our Digital Services
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={240} yOffset={24}>
            <p className="mt-5 text-base text-white/70 sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Comprehensive digital strategy, custom engineering, and performance marketing built to turn your website into an enterprise revenue engine.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Services Grid (8 Services) */}
      <section className="relative px-6 py-16 sm:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-2">
          {servicesData.map((service, idx) => (
            <ScrollReveal key={service.slug} delay={100 + (idx % 2) * 120} yOffset={32}>
              <div
                className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-[#141416]/80 backdrop-blur-xl p-8 sm:p-10 transition-all duration-300 hover:border-[#88E788]/60 hover:bg-[#18181c] hover:shadow-[0_0_30px_rgba(136,231,136,0.15)] h-full"
              >
                <div>
                  {/* Lottie Animation Header */}
                  <div className="relative mb-6 flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl bg-black/40 border border-white/5 p-4 sm:h-56">
                    <LottieIcon path={service.lottieFile} className="h-44 w-44 sm:h-52 sm:w-52" />
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#88E788]/15 border border-[#88E788]/20">
                      <img src={service.icon} alt="" className="h-5 w-5 object-contain" />
                    </div>
                    <h2 className="font-display text-2xl font-bold text-white">
                      {service.title}
                    </h2>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                    {service.subtitle}
                  </p>

                  {/* Key Perks */}
                  <div className="mt-6 flex flex-col gap-2.5">
                    {service.perks.slice(0, 3).map((perk, i) => (
                      <div key={i} className="flex items-start gap-2.5 text-xs text-white/70 sm:text-sm">
                        <span className="text-[#88E788] font-bold">✓</span>
                        <span><strong className="text-white">{perk.title}:</strong> {perk.description}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom CTA */}
                <div className="mt-8 pt-6 border-t border-white/10 flex items-center justify-between">
                  <a
                    href={`/services/${service.slug}`}
                    className="group inline-flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-wider text-white hover:text-[#88E788] transition-colors"
                  >
                    <span>Explore Service Details</span>
                    <span className="transition-transform duration-300 group-hover:translate-x-1 text-[#88E788]">→</span>
                  </a>

                  <RollingButton href="/contact" text="Inquire" variant="primary" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </section>

      {/* Global Process Section */}
      <section className="relative px-6 py-24 sm:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden">
        {/* Soft atmospheric ambient glow */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#88E788]/5 blur-[200px]" 
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <ScrollReveal delay={0} yOffset={24}>
            <div className="text-center max-w-2xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-3">
                <span className="h-2 w-2 rounded-full bg-[#88E788]"></span>
                <span className="font-body text-xs uppercase tracking-widest text-[#88E788] font-bold">Our Methodology</span>
              </div>
              <h2 className="font-display text-3xl font-bold sm:text-5xl text-white">How We Deliver Results</h2>
              <p className="mt-4 text-white/60 text-sm sm:text-base leading-relaxed">A battle-tested 4-phase agile delivery framework ensuring zero surprises and transparent momentum.</p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { step: '01', title: 'Discover & Define', desc: 'In-depth market audit, competitor analysis, and audience intent mapping.' },
              { step: '02', title: 'Plan & Architecture', desc: 'Clickable wireframes, information hierarchy, and conversion-first user flows.' },
              { step: '03', title: 'Design & Build', desc: 'Pixel-perfect UI styling, high-performance React code, and rigorous QA testing.' },
              { step: '04', title: 'Launch & Scale', desc: 'Zero-downtime DNS deployment, search indexing, and ongoing continuous growth.' },
            ].map((st, idx) => (
              <ScrollReveal key={st.step} delay={100 + idx * 90} yOffset={28} className="h-full">
                <div className="group relative flex flex-col justify-between rounded-[28px] border border-white/10 bg-[#141416]/80 backdrop-blur-xl p-8 text-white transition-all duration-300 hover:border-[#88E788]/60 hover:bg-[#18181c] hover:shadow-[0_0_30px_rgba(136,231,136,0.15)] h-full">
                  <div>
                    <span className="inline-block rounded-[6px] bg-[#88E788]/15 px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#88E788]">Step {st.step}</span>
                    <h3 className="mt-5 mb-3 font-display text-lg font-bold text-white group-hover:text-[#88E788] transition-colors">{st.title}</h3>
                    <p className="text-xs leading-relaxed text-white/60">{st.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      <HomeContactSection />
    </div>
  );
};
