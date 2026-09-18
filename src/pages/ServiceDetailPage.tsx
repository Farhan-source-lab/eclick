import React from 'react';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { LottieIcon } from '../components/LottieIcon';
import { RollingButton } from '../components/RollingButton';
import { FaqAccordion } from '../components/FaqAccordion';
import { HomeContactSection } from '../components/HomeContactSection';
import { ScrollReveal } from '../components/ScrollReveal';

interface ServiceDetailPageProps {
  slug: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug }) => {
  const service = servicesData.find((s) => s.slug === slug) || servicesData[0];
  const matchedProjects = projectsData.filter((p) => 
    p.category.toLowerCase().includes(service.shortTitle.toLowerCase()) ||
    service.shortTitle.toLowerCase().includes(p.category.toLowerCase()) ||
    p.tags.some((t) => t.toLowerCase().includes(service.shortTitle.toLowerCase()))
  );
  const relatedProjects = (matchedProjects.length >= 2 ? matchedProjects : projectsData).slice(0, 4);

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#0a0a0a]">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 pt-36 pb-20 text-center sm:px-12 sm:pt-44 sm:pb-28 lg:px-24">
        {/* Ambient atmospheric green glow */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#88E788]/10 blur-[180px]" 
        />
        <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center">
          <ScrollReveal delay={0} yOffset={20}>
            <p className="font-body text-xs font-bold uppercase tracking-widest text-[#88E788] mb-3">
              {service.shortTitle}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120} yOffset={24}>
            <h1 className="font-display text-4xl font-bold sm:text-6xl lg:text-7xl text-white leading-[1.1]">
              {service.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={240} yOffset={24}>
            <p className="mt-6 text-base text-white/70 sm:text-lg max-w-2xl leading-relaxed mx-auto">
              {service.subtitle}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={340} yOffset={20}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <RollingButton href="/contact" text="Get a Proposal" variant="primary" icon={true} />
              <RollingButton href="/projects" text="View Case Studies" variant="outline" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION with Ambient Vector */}
      <section className="relative px-6 py-20 sm:px-12 lg:px-24">
        {/* Soft background ambient glow */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/2 left-10 h-[500px] w-[500px] rounded-full bg-[#88E788]/5 blur-[180px]" 
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <ScrollReveal delay={0} yOffset={20}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#88E788]"></span>
              <span className="font-body text-xs uppercase tracking-widest text-[#88E788] font-bold">
                Service Overview
              </span>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:items-center">
            <div>
              <ScrollReveal delay={100} yOffset={24}>
                <h2 className="font-display text-3xl font-bold sm:text-5xl leading-tight text-white">
                  {service.overview}
                </h2>
                <p className="mt-6 text-base text-white/70 sm:text-lg leading-relaxed">
                  {service.description}
                </p>
              </ScrollReveal>

              {/* Perks Grid */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {service.perks.map((perk, i) => (
                  <ScrollReveal key={i} delay={150 + i * 80} yOffset={20}>
                    <div className="rounded-[20px] border border-white/10 bg-[#141416]/80 backdrop-blur-xl p-5 transition-all duration-300 hover:border-[#88E788]/40 hover:bg-[#18181c] h-full">
                      <h4 className="font-display text-sm font-semibold text-white">{perk.title}</h4>
                      <p className="mt-1.5 text-xs text-white/60 leading-relaxed">{perk.description}</p>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>

            {/* Lottie Animation Display */}
            <ScrollReveal delay={200} yOffset={32}>
              <div className="relative flex items-center justify-center rounded-[32px] border border-white/10 bg-[#141416]/80 backdrop-blur-xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
                <img 
                  src="/brand/about/vector-2-bg.svg" 
                  alt="" 
                  aria-hidden="true" 
                  className="pointer-events-none absolute inset-0 m-auto w-full opacity-30 blur-[40px]" 
                />
                <LottieIcon path={service.lottieFile} className="relative z-10 h-64 w-64 sm:h-80 sm:w-80" />
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* 3. STEP PROCESS SECTION */}
      <section className="relative px-6 py-24 sm:px-12 sm:py-28 lg:px-24 bg-[#0a0a0a] overflow-hidden">
        {/* Radiant green ambient glow behind process */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#88E788]/5 blur-[200px]" 
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <ScrollReveal delay={0} yOffset={24}>
            <div className="mb-14 text-center sm:text-left">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-3">
                <span className="h-2 w-2 rounded-full bg-[#88E788]"></span>
                <span className="font-body text-xs uppercase tracking-widest text-[#88E788] font-bold">
                  Workflow
                </span>
              </div>
              <h2 className="font-display text-3xl font-bold sm:text-5xl text-white">Our Process</h2>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step, idx) => (
              <ScrollReveal key={step.step} delay={100 + idx * 90} yOffset={28} className="h-full">
                <div className="group relative flex flex-col justify-between rounded-[28px] border border-white/10 bg-[#141416]/80 backdrop-blur-xl p-8 text-white transition-all duration-300 hover:border-[#88E788]/60 hover:bg-[#18181c] hover:shadow-[0_0_30px_rgba(136,231,136,0.15)] h-full">
                  <div>
                    <span className="inline-block rounded-[6px] bg-[#88E788]/15 px-3 py-1 font-body text-xs font-bold uppercase tracking-wider text-[#88E788]">
                      Step {step.step}
                    </span>
                    <h3 className="mt-5 mb-3 font-display text-lg font-bold text-white group-hover:text-[#88E788] transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-white/60">
                      {step.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RELATED PROJECTS GRID */}
      {relatedProjects.length > 0 && (
        <section className="relative px-6 py-24 sm:px-12 lg:px-24 bg-[#0a0a0a]">
          <div className="relative z-10 mx-auto max-w-7xl">
            <ScrollReveal delay={0} yOffset={24}>
              <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
                <div>
                  <p className="font-body text-xs uppercase tracking-widest text-[#88E788] font-bold mb-3">
                    Work Showcase
                  </p>
                  <h2 className="font-display text-3xl font-bold sm:text-5xl text-white">Our Craft, Your Expression.</h2>
                </div>
                <RollingButton href="/projects" text="View All" variant="outline" icon={true} />
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {relatedProjects.map((p, idx) => (
                <ScrollReveal key={p.slug} delay={100 + idx * 120} yOffset={32}>
                  <a
                    href={`/projects/${p.slug}`}
                    className="group block rounded-[28px] border border-white/10 bg-[#141416]/80 backdrop-blur-xl p-4 transition-all duration-300 hover:border-[#88E788]/60 hover:shadow-2xl h-full"
                  >
                    <div className="aspect-video w-full overflow-hidden rounded-[20px] bg-neutral-900 mb-4">
                      <img src={p.mockup} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-2">
                      <span className="text-xs uppercase tracking-widest text-[#88E788] font-bold">{p.category}</span>
                      <div className="mt-2 flex items-center justify-between">
                        <h3 className="font-display text-xl font-bold text-white group-hover:text-[#88E788] transition-colors">{p.title}</h3>
                        <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white group-hover:border-[#88E788] group-hover:text-[#88E788] transition-colors">↗</span>
                      </div>
                    </div>
                  </a>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. SERVICE FAQS */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="relative px-6 py-20 sm:px-12 lg:px-24 bg-[#0a0a0a]">
          <div className="relative z-10 mx-auto max-w-3xl">
            <ScrollReveal delay={0} yOffset={24}>
              <div className="text-center mb-12">
                <p className="font-body text-xs uppercase tracking-widest text-[#88E788] font-bold mb-3">
                  FAQ
                </p>
                <h2 className="font-display text-3xl font-bold sm:text-4xl text-white">Questions About {service.shortTitle}</h2>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={120} yOffset={20}>
              <FaqAccordion items={service.faqs} />
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* 6. CONTACT CTA */}
      <HomeContactSection />
    </div>
  );
};
