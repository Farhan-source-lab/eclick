import React from 'react';
import { projectsData } from '../data/projectsData';
import { RollingButton } from '../components/RollingButton';
import { HomeContactSection } from '../components/HomeContactSection';
import { ScrollReveal } from '../components/ScrollReveal';

interface ProjectDetailPageProps {
  slug: string;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ slug }) => {
  const project = projectsData.find((p) => p.slug === slug) || projectsData[0];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#0a0a0a]">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 pt-36 pb-16 text-center sm:px-12 sm:pt-44 lg:px-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#88E788]/10 blur-[180px]"
        />

        <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center">
          <ScrollReveal delay={0} yOffset={20}>
            <p className="font-body text-xs uppercase tracking-widest text-[#88E788] font-bold mb-3">
              Case Study
            </p>
          </ScrollReveal>

          <ScrollReveal delay={120} yOffset={24}>
            <h1 className="font-display text-3xl font-bold sm:text-5xl lg:text-6xl text-white leading-[1.1]">
              {project.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={220} yOffset={20}>
            <div className="mt-5 flex flex-wrap justify-center gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs font-body text-white/80"
                >
                  {tag}
                </span>
              ))}
            </div>
          </ScrollReveal>

          {/* Main Hero Showcase Mockup */}
          <ScrollReveal delay={320} yOffset={32} className="mt-12 w-full">
            <div className="relative aspect-video w-full overflow-hidden rounded-[28px] border border-white/10 bg-neutral-950 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <img
                src={project.mockup}
                alt={project.title}
                className="h-full w-full object-cover"
                loading="eager"
              />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. THE RESULTS & CLIENT OVERVIEW */}
      <section className="relative px-6 py-20 sm:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal delay={0} yOffset={24}>
            <p className="font-body text-xs uppercase tracking-widest text-[#88E788] font-bold mb-2">
              The Results
            </p>
            <h2 className="mt-2 mb-6 font-display text-3xl font-bold sm:text-4xl text-white">Project Impact & Metrics</h2>
          </ScrollReveal>

          {/* Client Info Strip */}
          <ScrollReveal delay={100} yOffset={24}>
            <div className="grid grid-cols-1 gap-6 rounded-[24px] border border-white/10 bg-[#141416]/80 backdrop-blur-xl p-6 sm:grid-cols-3 sm:p-8">
              <div>
                <p className="font-body text-xs tracking-widest text-white/50 uppercase font-bold">Client</p>
                <p className="mt-1 text-lg font-bold text-white font-display">{project.client}</p>
              </div>
              <div className="sm:border-l sm:border-white/10 sm:pl-6">
                <p className="font-body text-xs tracking-widest text-white/50 uppercase font-bold">Industry</p>
                <p className="mt-1 text-lg font-bold text-white font-display">{project.category}</p>
              </div>
              <div className="sm:border-l sm:border-white/10 sm:pl-6">
                <p className="font-body text-xs tracking-widest text-white/50 uppercase font-bold">Timeline</p>
                <p className="mt-1 text-lg font-bold text-white font-display">{project.year}</p>
              </div>
            </div>
          </ScrollReveal>

          {/* Metrics Grid */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {project.metrics.map((m, idx) => (
              <ScrollReveal key={idx} delay={150 + idx * 80} yOffset={24}>
                <div className="rounded-[24px] border border-white/10 bg-[#141416]/80 backdrop-blur-xl p-6 text-center hover:border-[#88E788]/50 transition-colors">
                  <p className="font-display text-3xl font-extrabold text-[#88E788] sm:text-4xl">{m.value}</p>
                  <p className="mt-2 text-sm text-white/60 font-body">{m.label}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          {/* Narrative: Challenge & Solution */}
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            <ScrollReveal delay={100} yOffset={24}>
              <div className="rounded-[28px] border border-white/10 bg-[#141416]/80 backdrop-blur-xl p-8 h-full">
                <h3 className="font-display text-xl font-bold text-white">The Challenge</h3>
                <p className="mt-4 leading-relaxed text-white/70 text-sm">{project.challenge}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={180} yOffset={24}>
              <div className="rounded-[28px] border border-white/10 bg-[#141416]/80 backdrop-blur-xl p-8 h-full">
                <h3 className="font-display text-xl font-bold text-white">The Solution</h3>
                <p className="mt-4 leading-relaxed text-white/70 text-sm">{project.solution}</p>
              </div>
            </ScrollReveal>
          </div>

          {/* Results List */}
          <ScrollReveal delay={240} yOffset={24} className="mt-8">
            <div className="rounded-[28px] border border-white/10 bg-[#141416]/80 backdrop-blur-xl p-8">
              <h3 className="font-display text-xl font-bold text-white mb-4">Key Accomplishments</h3>
              <ul className="flex flex-col gap-3">
                {project.results.map((res, i) => (
                  <li key={i} className="flex items-start gap-3 text-white/70 text-sm">
                    <span className="text-[#88E788] font-bold">✓</span>
                    <span>{res}</span>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. SHOWCASE MOCKUPS */}
      <section className="relative px-6 py-20 sm:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="mx-auto max-w-5xl">
          <ScrollReveal delay={0} yOffset={24}>
            <p className="font-body text-xs uppercase tracking-widest text-[#88E788] font-bold mb-2">
              The Showcase
            </p>
            <h2 className="mt-2 mb-8 font-display text-3xl font-bold sm:text-4xl text-white">See It In Action</h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <ScrollReveal delay={100} yOffset={28}>
              <div className="aspect-video w-full overflow-hidden rounded-[24px] border border-white/10 bg-neutral-950 shadow-xl">
                <img src={project.mockup} alt="" className="h-full w-full object-cover" />
              </div>
            </ScrollReveal>
            <ScrollReveal delay={200} yOffset={28}>
              <div className="aspect-video w-full overflow-hidden rounded-[24px] border border-white/10 bg-neutral-950 shadow-xl">
                <img src={project.mockup} alt="" className="h-full w-full object-cover filter contrast-110" />
              </div>
            </ScrollReveal>
          </div>

          <ScrollReveal delay={260} yOffset={20} className="mt-12 flex justify-center">
            <RollingButton href="/projects" text="View More Projects" variant="outline" icon={true} />
          </ScrollReveal>
        </div>
      </section>

      <HomeContactSection />
    </div>
  );
};
