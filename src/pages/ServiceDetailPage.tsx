import React from 'react';
import { servicesData } from '../data/servicesData';
import { projectsData } from '../data/projectsData';
import { LottieIcon } from '../components/LottieIcon';
import { RollingButton } from '../components/RollingButton';
import { FaqAccordion } from '../components/FaqAccordion';
import { HomeContactSection } from '../components/HomeContactSection';

interface ServiceDetailPageProps {
  slug: string;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({ slug }) => {
  const service = servicesData.find((s) => s.slug === slug) || servicesData[0];
  const relatedProjects = projectsData.filter((p) => 
    p.category.toLowerCase().includes(service.shortTitle.toLowerCase()) ||
    service.shortTitle.toLowerCase().includes(p.category.toLowerCase())
  ).slice(0, 4);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 pt-36 pb-20 text-center sm:px-12 lg:px-24">
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/3 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-(--color-cta) opacity-20 blur-[160px]" 
        />
        <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
          <span className="font-display text-sm font-semibold uppercase tracking-widest text-(--color-cta)">
            {service.shortTitle}
          </span>
          <h1 className="mt-4 font-display text-4xl font-extrabold sm:text-6xl">
            {service.title}
          </h1>
          <p className="mt-6 text-base text-foreground/80 sm:text-xl max-w-2xl leading-relaxed">
            {service.subtitle}
          </p>

          <div className="mt-8 flex items-center gap-4">
            <RollingButton href="/contact" text="Get a Proposal" variant="primary" icon={true} />
            <RollingButton href="/projects" text="View Case Studies" variant="outline" />
          </div>
        </div>
      </section>

      {/* 2. OVERVIEW SECTION with Ambient Vector */}
      <section className="relative px-6 py-20 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="inline-block rounded-full border border-foreground/30 px-5 py-1.5 mb-6">
            <span className="font-display text-xs uppercase tracking-widest text-(--color-cta)">Service Overview</span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <h2 className="font-display text-3xl font-bold sm:text-5xl leading-tight">
                {service.overview}
              </h2>
              <p className="mt-6 text-base text-foreground/80 sm:text-lg leading-relaxed">
                {service.description}
              </p>

              {/* Perks Grid */}
              <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
                {service.perks.map((perk, i) => (
                  <div key={i} className="rounded-xl border border-(--color-border) bg-(--color-surface) p-4">
                    <h4 className="font-display text-sm font-semibold text-foreground">{perk.title}</h4>
                    <p className="mt-1.5 text-xs text-foreground/70 leading-relaxed">{perk.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Lottie Animation Display */}
            <div className="relative flex items-center justify-center rounded-3xl border border-(--color-border) bg-(--color-surface)/60 p-8">
              <img 
                src="/brand/about/vector-2-bg.svg" 
                alt="" 
                aria-hidden="true" 
                className="pointer-events-none absolute inset-0 m-auto w-full opacity-40 blur-[35px]" 
              />
              <LottieIcon path={service.lottieFile} className="relative z-10 h-64 w-64 sm:h-80 sm:w-80" />
            </div>
          </div>
        </div>
      </section>

      {/* 3. STEP PROCESS SECTION */}
      <section className="px-6 py-20 sm:px-12 lg:px-24 bg-(--color-surface)/30 border-y border-(--color-border)">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12">
            <div className="inline-block rounded-full border border-foreground/30 px-5 py-1.5 mb-3">
              <span className="font-display text-xs uppercase tracking-widest text-(--color-cta)">Workflow</span>
            </div>
            <h2 className="font-display text-3xl font-semibold sm:text-5xl">Our Process</h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {service.process.map((step) => (
              <div
                key={step.step}
                className="flex flex-col justify-between rounded-[24px] border border-(--color-cta) bg-(--color-ink)/90 p-8 text-(--color-ink-contrast)"
              >
                <div>
                  <span className="font-display text-xl font-bold text-(--color-cta)">Step {step.step}</span>
                  <h3 className="mt-4 mb-3 font-display text-xl font-semibold text-(--color-ink-contrast)">{step.title}</h3>
                  <p className="text-xs leading-relaxed text-(--color-ink-contrast)/70">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. RELATED PROJECTS GRID */}
      {relatedProjects.length > 0 && (
        <section className="px-6 py-24 sm:px-12 lg:px-24">
          <div className="mx-auto max-w-7xl">
            <div className="mb-12 flex items-center justify-between">
              <div>
                <span className="font-display text-xs uppercase tracking-widest text-(--color-cta)">Work Showcase</span>
                <h2 className="mt-2 font-display text-3xl font-semibold sm:text-5xl">Our Craft, Your Expression.</h2>
              </div>
              <RollingButton href="/projects" text="View All" variant="outline" icon={true} />
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {relatedProjects.map((p) => (
                <a
                  key={p.slug}
                  href={`/projects/${p.slug}`}
                  className="group block rounded-[28px] border border-(--color-border) bg-(--color-surface) p-4 transition-all duration-300 hover:border-(--color-cta)"
                >
                  <div className="aspect-video w-full overflow-hidden rounded-[20px] bg-neutral-900 mb-4">
                    <img src={p.mockup} alt={p.title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-300" />
                  </div>
                  <span className="text-xs uppercase tracking-widest text-(--color-cta) font-semibold">{p.category}</span>
                  <div className="mt-2 flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold">{p.title}</h3>
                    <span>↗</span>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. SERVICE FAQS */}
      {service.faqs && service.faqs.length > 0 && (
        <section className="px-6 py-20 sm:px-12 lg:px-24 bg-(--color-surface)/20 border-t border-(--color-border)">
          <div className="mx-auto max-w-3xl">
            <div className="text-center mb-12">
              <span className="font-display text-xs uppercase tracking-widest text-(--color-cta)">FAQ</span>
              <h2 className="mt-2 font-display text-3xl font-semibold sm:text-4xl">Questions About {service.shortTitle}</h2>
            </div>
            <FaqAccordion items={service.faqs} />
          </div>
        </section>
      )}

      {/* 6. CONTACT CTA */}
      <HomeContactSection />
    </div>
  );
};
