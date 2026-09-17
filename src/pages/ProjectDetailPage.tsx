import React from 'react';
import { projectsData } from '../data/projectsData';
import { RollingButton } from '../components/RollingButton';
import { HomeContactSection } from '../components/HomeContactSection';

interface ProjectDetailPageProps {
  slug: string;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ slug }) => {
  const project = projectsData.find((p) => p.slug === slug) || projectsData[0];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 pt-36 pb-16 text-center sm:px-12 lg:px-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-(--color-cta) opacity-20 blur-[160px]"
        />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
          <p className="flex items-center gap-1 font-semibold text-(--color-cta) text-sm uppercase tracking-widest">
            <span>•</span> Case Study
          </p>

          <h1 className="mt-3 font-display text-3xl font-bold sm:text-5xl lg:text-6xl">
            {project.title}
          </h1>

          <div className="mt-4 flex flex-wrap justify-center gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-(--color-border) bg-(--color-surface) px-4 py-1 text-xs font-display text-foreground/80"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Main Hero Showcase Mockup */}
          <div className="mt-12 w-full drop-shadow-[0_20px_40px_rgba(0,0,0,0.25)]">
            <div className="relative aspect-video w-full overflow-hidden rounded-[28px] border border-(--color-border) bg-neutral-900 shadow-2xl">
              <img
                src={project.mockup}
                alt={project.title}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 2. THE RESULTS & CLIENT OVERVIEW */}
      <section className="px-6 py-16 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-5xl">
          <p className="flex items-center gap-1 font-semibold text-(--color-cta) text-sm uppercase tracking-widest">
            <span>•</span> The Results
          </p>
          <h2 className="mt-2 mb-4 font-display text-3xl font-bold sm:text-4xl">Project Impact & Metrics</h2>
          <div className="mb-8 h-px w-24 bg-(--color-cta)" aria-hidden="true" />

          {/* Client Info Strip */}
          <div className="grid grid-cols-1 gap-6 rounded-2xl border border-(--color-border) bg-(--color-surface) p-6 sm:grid-cols-3 sm:p-8">
            <div>
              <p className="font-display text-xs tracking-widest text-(--color-text-muted) uppercase">Client</p>
              <p className="mt-1 text-lg font-semibold text-foreground">{project.client}</p>
            </div>
            <div className="sm:border-l sm:border-(--color-border) sm:pl-6">
              <p className="font-display text-xs tracking-widest text-(--color-text-muted) uppercase">Industry</p>
              <p className="mt-1 text-lg font-semibold text-foreground">{project.category}</p>
            </div>
            <div className="sm:border-l sm:border-(--color-border) sm:pl-6">
              <p className="font-display text-xs tracking-widest text-(--color-text-muted) uppercase">Timeline</p>
              <p className="mt-1 text-lg font-semibold text-foreground">{project.year}</p>
            </div>
          </div>

          {/* Metrics Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {project.metrics.map((m, idx) => (
              <div key={idx} className="rounded-2xl border border-(--color-border) bg-(--color-surface)/50 p-6 text-center">
                <p className="font-display text-3xl font-extrabold text-(--color-cta) sm:text-4xl">{m.value}</p>
                <p className="mt-2 text-sm text-foreground/70">{m.label}</p>
              </div>
            ))}
          </div>

          {/* Narrative: Challenge & Solution */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-8">
              <h3 className="font-display text-xl font-bold text-foreground">The Challenge</h3>
              <p className="mt-4 leading-relaxed text-foreground/80">{project.challenge}</p>
            </div>

            <div className="rounded-2xl border border-(--color-border) bg-(--color-surface) p-8">
              <h3 className="font-display text-xl font-bold text-foreground">The Solution</h3>
              <p className="mt-4 leading-relaxed text-foreground/80">{project.solution}</p>
            </div>
          </div>

          {/* Results List */}
          <div className="mt-8 rounded-2xl border border-(--color-border) bg-(--color-surface) p-8">
            <h3 className="font-display text-xl font-bold text-foreground mb-4">Key Accomplishments</h3>
            <ul className="flex flex-col gap-3">
              {project.results.map((res, i) => (
                <li key={i} className="flex items-start gap-3 text-foreground/80">
                  <span className="text-(--color-cta) font-bold">✓</span>
                  <span>{res}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. SHOWCASE MOCKUPS */}
      <section className="px-6 py-16 sm:px-12 lg:px-24 bg-(--color-surface)/30 border-y border-(--color-border)">
        <div className="mx-auto max-w-5xl">
          <p className="flex items-center gap-1 font-semibold text-(--color-cta) text-sm uppercase tracking-widest">
            <span>•</span> The Showcase
          </p>
          <h2 className="mt-2 mb-4 font-display text-3xl font-bold sm:text-4xl">See It In Action</h2>
          <div className="mb-10 h-px w-24 bg-(--color-cta)" aria-hidden="true" />

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-(--color-border) bg-neutral-900 shadow-lg">
              <img src={project.mockup} alt="" className="h-full w-full object-cover" />
            </div>
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-(--color-border) bg-neutral-900 shadow-lg">
              <img src={project.mockup} alt="" className="h-full w-full object-cover filter contrast-125" />
            </div>
          </div>

          <div className="mt-12 flex justify-center">
            <RollingButton href="/projects" text="View More Projects" variant="outline" icon={true} />
          </div>
        </div>
      </section>

      <HomeContactSection />
    </div>
  );
};
