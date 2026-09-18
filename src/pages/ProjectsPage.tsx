import React, { useState } from 'react';
import { projectsData } from '../data/projectsData';
import { RollingButton } from '../components/RollingButton';
import { HomeContactSection } from '../components/HomeContactSection';
import { ScrollReveal } from '../components/ScrollReveal';

export const ProjectsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'AI Solutions', 'Software Development', 'Web Design', 'E-Commerce', 'Creative Services'];

  const filtered = activeCategory === 'All'
    ? projectsData
    : projectsData.filter((p) => p.category.toLowerCase() === activeCategory.toLowerCase());

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
            <p className="font-body text-xs uppercase tracking-widest text-[#88E788] font-bold mb-4">
              Our Portfolio
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120} yOffset={24}>
            <h1 className="font-display text-4xl font-bold sm:text-6xl text-white leading-[1.1]">
              Recent Growing Projects
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={240} yOffset={24}>
            <p className="mt-5 text-base text-white/70 sm:text-lg leading-relaxed max-w-2xl mx-auto">
              Explore how we empower businesses worldwide through smart AI solutions, enterprise software development, modern web design, and high-impact creative services.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={340} yOffset={20}>
            <div className="mt-8 flex justify-center">
              <RollingButton href="/contact" text="Start Your Project" variant="primary" icon={true} />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Category Filter Pills */}
      <section className="px-6 pb-12 sm:px-12 lg:px-24">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`rounded-full px-5 py-2 text-xs font-display uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-[#88E788] text-[#0a0a0a] font-bold shadow-[0_0_20px_rgba(136,231,136,0.35)]'
                  : 'border border-white/10 bg-[#141416]/80 text-white/75 hover:border-[#88E788]/50 hover:text-white'
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
          {filtered.map((project, idx) => (
            <ScrollReveal key={project.slug} delay={100 + (idx % 2) * 120} yOffset={32}>
              <a
                href={`/projects/${project.slug}`}
                className="group block rounded-[28px] border border-white/10 bg-[#141416]/80 backdrop-blur-xl p-4 transition-all duration-300 hover:border-[#88E788]/60 hover:bg-[#18181c] hover:shadow-[0_0_30px_rgba(136,231,136,0.15)] h-full"
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
                  <span className="text-xs uppercase tracking-widest text-[#88E788] font-bold">
                    {project.category}
                  </span>
                  <div className="mt-2 flex items-center justify-between">
                    <h3 className="font-display text-xl font-bold sm:text-2xl text-white group-hover:text-[#88E788] transition-colors">
                      {project.title}
                    </h3>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 text-white transition-all duration-300 group-hover:border-[#88E788] group-hover:text-[#88E788] group-hover:translate-x-1 group-hover:-translate-y-1">
                      ↗
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-white/60 line-clamp-2">
                    {project.summary}
                  </p>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <HomeContactSection />
    </div>
  );
};
