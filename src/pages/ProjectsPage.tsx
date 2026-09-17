import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { RollingButton } from '../components/RollingButton';
import { HomeContactSection } from '../components/HomeContactSection';

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Web Design', 'E-Commerce Solutions', 'SEO', 'Branding'];

  const filtered = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

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
            <span className="font-display text-xs uppercase tracking-widest text-(--color-cta)">Our Portfolio</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold sm:text-6xl">
            Recent Growing Projects
          </h1>
          <p className="mt-5 text-base text-foreground/75 sm:text-xl leading-relaxed">
            See how we’ve helped businesses grow online through custom web design, high-converting e-commerce, and data-driven SEO.
          </p>

          <div className="mt-8 flex justify-center">
            <RollingButton href="/contact" text="Start Your Project" variant="primary" icon={true} />
          </div>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="px-6 pb-12 sm:px-12 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs font-display uppercase tracking-wider transition-all duration-300 ${
                activeCategory === cat
                  ? 'bg-(--color-cta) text-(--color-cta-contrast) font-bold shadow-md'
                  : 'border border-(--color-border) bg-(--color-surface) text-foreground/80 hover:border-(--color-cta)'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* Projects Grid (All 16 Projects) */}
      <section className="px-6 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
          {filtered.map((project) => (
            <a
              key={project.slug}
              href={`/projects/${project.slug}`}
              className="group block rounded-[28px] border border-(--color-border) bg-(--color-surface) p-4 transition-all duration-300 hover:border-(--color-cta) hover:shadow-xl"
            >
              <div className="relative aspect-video w-full overflow-hidden rounded-[22px] bg-neutral-900 mb-5">
                <img
                  src={project.mockup}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              <div className="p-2">
                <span className="text-xs uppercase tracking-widest text-(--color-cta) font-semibold">
                  {project.category}
                </span>
                <div className="mt-2 flex items-center justify-between">
                  <h3 className="font-display text-xl font-bold sm:text-2xl text-foreground group-hover:text-(--color-cta) transition-colors">
                    {project.title}
                  </h3>
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-(--color-border) transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                    ↗
                  </span>
                </div>
                <p className="mt-2 text-sm text-foreground/70 line-clamp-2">
                  {project.summary}
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <HomeContactSection />
    </div>
  );
};
