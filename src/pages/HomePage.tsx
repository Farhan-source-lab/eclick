import React from 'react';
import { HeroMark } from '../components/HeroMark';
import { RollingButton } from '../components/RollingButton';
import { MarqueeTrusted } from '../components/MarqueeTrusted';
import { GoalsSection } from '../components/GoalsSection';
import { ServicesBentoSection } from '../components/ServicesBentoSection';
import { MissionSection } from '../components/MissionSection';
import { HomeFaqSection } from '../components/HomeFaqSection';
import { HomeContactSection } from '../components/HomeContactSection';
import { ScrollReveal } from '../components/ScrollReveal';
import { projectsData } from '../data/projectsData';

export const HomePage: React.FC = () => {
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <div className="flex flex-col w-full overflow-x-clip">
      {/* 1. HERO SECTION (Exact code and proportions from downloaded extension website) */}
      <section className="relative overflow-hidden px-6 pt-24 pb-12 sm:h-[120vh] sm:px-20 sm:pt-0 sm:pb-[20vh] lg:px-24">
        <div className="relative flex h-full w-full flex-col items-center gap-10 sm:block">
          
          {/* Left Headline */}
          <ScrollReveal 
            className="w-full text-center sm:absolute sm:top-6 sm:left-0 sm:z-10 sm:w-[52%] lg:w-[48%] sm:text-left" 
            delay={100} 
            duration={900}
            yOffset={20}
            threshold={0.01}
            rootMargin="0px"
          >
            <h1 className="font-display text-[26px] sm:text-[34px] lg:text-[40px] xl:text-[44px] font-semibold uppercase leading-[1.2]">
              Innovating business<br className="hidden sm:inline" /> through smart technology
            </h1>
          </ScrollReveal>

          {/* Center 3D Mark: sm:absolute sm:inset-0 sm:z-[1] sm:m-auto sm:w-[46%] sm:max-w-none lg:w-[37%] */}
          <HeroMark />

          {/* Right Column: sm:absolute sm:top-1/2 sm:right-0 sm:z-10 sm:w-[30%] sm:max-w-none sm:text-left */}
          <ScrollReveal 
            className="w-full max-w-sm text-center sm:absolute sm:top-1/2 sm:right-0 sm:z-10 sm:w-[30%] sm:max-w-none sm:text-left"
            delay={280}
            duration={900}
            yOffset={20}
            threshold={0.01}
            rootMargin="0px"
          >
            <p className="font-display text-xl leading-snug">
              Your business deserves more than a website
            </p>
            <p className="mt-4 text-base text-foreground/80 leading-relaxed">
              From smart AI automations to enterprise web development and result-driven marketing, we create digital solutions designed to help modern businesses thrive.
            </p>
            <div className="mx-auto mt-5 h-px w-full bg-foreground/20 sm:mx-0" aria-hidden="true" />
            <a 
              href="/contact"
              className="group relative mt-5 inline-flex h-11 items-center justify-center rounded-full bg-[#88E788] px-6 font-display text-xs uppercase tracking-wider font-semibold text-[#0a0a0a] transition-all duration-300 hover:bg-[#88E788]/90 hover:shadow-[0_0_20px_rgba(136,231,136,0.35)]" 
            >
              <div className="flex items-center gap-2">
                {/* Rolling text with exact 44px container */}
                <div className="h-11 overflow-hidden">
                  <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
                    <span className="flex h-11 items-center whitespace-nowrap">Start Project</span>
                    <span className="flex h-11 items-center whitespace-nowrap" aria-hidden="true">Start Project</span>
                  </div>
                </div>

                {/* Animated diagonal arrow beside text */}
                <span className="relative flex h-3.5 w-3.5 items-center justify-center overflow-hidden shrink-0" aria-hidden="true">
                  <svg 
                    viewBox="0 0 12 12" 
                    className="absolute h-3 w-3 stroke-[#0a0a0a] stroke-[2.2] fill-none transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:-translate-y-3"
                  >
                    <path d="M2 10L10 2M10 2H4M10 2V8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <svg 
                    viewBox="0 0 12 12" 
                    className="absolute h-3 w-3 stroke-[#0a0a0a] stroke-[2.2] fill-none -translate-x-3 translate-y-3 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
                  >
                    <path d="M2 10L10 2M10 2H4M10 2V8" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </div>
            </a>
          </ScrollReveal>

          {/* Scroll Down Interactive Option */}
          <ScrollReveal 
            className="sm:absolute sm:inset-x-0 sm:bottom-8 sm:z-10 sm:flex sm:justify-center"
            delay={450}
            duration={900}
            yOffset={16}
            threshold={0.01}
            rootMargin="0px"
          >
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('services-section');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
                }
              }}
              className="group flex cursor-pointer items-center gap-2 transition-transform duration-300 hover:translate-y-1 focus:outline-none"
              aria-label="Scroll down to services"
            >
              <img 
                alt="" 
                loading="lazy" 
                width="16" 
                height="19" 
                className="brightness-0 invert opacity-75 transition-opacity group-hover:opacity-100" 
                src="/brand/icon-scroll-arrows.svg" 
              />
              <p className="font-display text-base uppercase text-foreground/75 transition-colors group-hover:text-foreground">
                Scroll down
              </p>
            </button>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. SERVICES BENTO GRID SECTION (Exact layout, golden ambient blurs, and Lottie animations) */}
      <ServicesBentoSection />

      {/* 3. MADE WITH A GOAL STICKY ROTATING & BLOSSOMING SECTION (Exact layout as 1st reference image) */}
      <GoalsSection />


      {/* 5. FEATURED CASE STUDIES / CRAFT SECTION - Slides up with depth shadow and curved top corners over the sinking section */}
      <section 
        className="relative z-20 px-6 pt-28 pb-32 sm:px-12 sm:pt-36 sm:pb-44 lg:px-24 bg-[#0a0a0a] rounded-t-[40px] sm:rounded-t-[64px] lg:rounded-t-[80px] border-t border-white/15 shadow-[0_-50px_120px_rgba(0,0,0,0.95)] overflow-hidden" 
        aria-labelledby="featured-projects-heading"
      >
        {/* Soft atmospheric color mix received from Goals section */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[75vw] max-w-5xl h-72 rounded-full bg-[#88E788]/5 blur-[160px]" 
        />

        <div className="relative z-10 mx-auto max-w-7xl">
          {/* Section Header */}
          <ScrollReveal delay={0} yOffset={24}>
            <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <div>
                <p className="font-body text-xs uppercase tracking-widest text-[#88E788] font-bold mb-3">
                  Selected Case Studies
                </p>
                <h2 id="featured-projects-heading" className="font-display text-3xl font-bold sm:text-5xl text-white">
                  Our Craft, Your Expression.
                </h2>
              </div>

              <RollingButton href="/projects" text="View All Projects" variant="outline" icon={true} arrow="horizontal" />
            </div>
          </ScrollReveal>

          {/* 2-Column Grid: Staggered Cards (Option B Cascade) */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {featuredProjects.map((project, idx) => (
              <ScrollReveal key={project.slug} delay={100 + idx * 120} yOffset={32}>
                <a
                  href={`/projects/${project.slug}`}
                  className="group block rounded-[28px] border border-white/10 bg-[#161616] p-4 transition-all duration-300 hover:border-[#88E788]/60 hover:shadow-2xl h-full"
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
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 transition-transform duration-300 group-hover:border-[#88E788] group-hover:text-[#88E788] group-hover:translate-x-1 group-hover:-translate-y-1">
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
        </div>
      </section>

      {/* 5. MISSION SECTION (Sticky Stadium Capsule + Testimonials) */}
      <MissionSection />

      {/* 6. FAQ SECTION (Questions you've asked) */}
      <HomeFaqSection />

      {/* 7. TRUSTED BY MARQUEE */}
      <MarqueeTrusted />

      {/* 8. CONTACT SECTION (Let's create something wonderful / Let's talk) */}
      <HomeContactSection />
    </div>
  );
};
