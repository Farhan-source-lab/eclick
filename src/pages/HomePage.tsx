import React from 'react';
import { HeroMark } from '../components/HeroMark';
import { RollingButton } from '../components/RollingButton';
import { MarqueeTrusted } from '../components/MarqueeTrusted';
import { GoalsSection } from '../components/GoalsSection';
import { ServicesBentoSection } from '../components/ServicesBentoSection';
import { MissionSection } from '../components/MissionSection';
import { HomeFaqSection } from '../components/HomeFaqSection';
import { HomeContactSection } from '../components/HomeContactSection';
import { projectsData } from '../data/projectsData';

export const HomePage: React.FC = () => {
  const featuredProjects = projectsData.slice(0, 4);

  return (
    <div className="flex flex-col w-full overflow-x-clip">
      {/* 1. HERO SECTION (Exact code and proportions from downloaded extension website) */}
      <section className="relative overflow-hidden px-6 pt-24 pb-12 sm:h-[120vh] sm:px-20 sm:pt-0 sm:pb-[20vh] lg:px-24">
        <div className="relative flex h-full w-full flex-col items-center gap-10 sm:block">
          
          {/* Left Headline: sm:absolute sm:top-8 sm:left-0 sm:z-10 sm:w-[52%] lg:w-[48%] sm:text-left */}
          <h1 className="w-full text-center font-display text-[26px] sm:text-[34px] lg:text-[40px] xl:text-[44px] font-semibold uppercase leading-[1.2] sm:absolute sm:top-6 sm:left-0 sm:z-10 sm:w-[52%] lg:w-[48%] sm:text-left">
            Innovating business<br className="hidden sm:inline" /> through smart technology
          </h1>

          {/* Center 3D Mark: sm:absolute sm:inset-0 sm:z-[1] sm:m-auto sm:w-[46%] sm:max-w-none lg:w-[37%] */}
          <HeroMark />

          {/* Right Column: sm:absolute sm:top-1/2 sm:right-0 sm:z-10 sm:w-[30%] sm:max-w-none sm:text-left */}
          <div className="w-full max-w-sm text-center sm:absolute sm:top-1/2 sm:right-0 sm:z-10 sm:w-[30%] sm:max-w-none sm:text-left">
            <p className="font-display text-xl leading-snug">
              Your business deserves more than a website
            </p>
            <p className="mt-4 text-base text-foreground/80 leading-relaxed">
              From smart AI automations to enterprise web development and result-driven marketing, we create digital solutions designed to help modern businesses thrive.
            </p>
            <div className="mx-auto mt-5 h-px w-full bg-foreground/20 sm:mx-0" aria-hidden="true" />
            <a 
              className="group relative mt-5 inline-flex h-10 items-start justify-center overflow-hidden rounded-full bg-foreground px-5 font-display text-xs uppercase text-background transition-all hover:bg-(--color-cta)" 
              href="/contact"
            >
              <span className="grid text-center leading-10 transition-transform duration-300 ease-out group-hover:-translate-y-1/2 font-semibold">
                <span>Start project</span>
                <span aria-hidden="true">Start project</span>
              </span>
            </a>
          </div>

          {/* Scroll Down Interactive Option */}
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
            className="group flex cursor-pointer items-center gap-2 transition-transform duration-300 hover:translate-y-1 sm:absolute sm:inset-x-0 sm:bottom-8 sm:z-10 sm:justify-center focus:outline-none"
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
        </div>
      </section>

      {/* 2. SERVICES BENTO GRID SECTION (Exact layout, golden ambient blurs, and Lottie animations) */}
      <ServicesBentoSection />

      {/* 3. MADE WITH A GOAL STICKY ROTATING & BLOSSOMING SECTION (Exact layout as 1st reference image) */}
      <GoalsSection />


      {/* 5. FEATURED CASE STUDIES / CRAFT SECTION */}
      <section className="px-6 py-24 sm:px-12 lg:px-24" aria-labelledby="featured-projects-heading">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <div className="inline-block rounded-full border border-foreground/30 px-5 py-1.5 mb-3">
                <span className="font-display text-xs uppercase tracking-widest text-(--color-cta)">Selected Case Studies</span>
              </div>
              <h2 id="featured-projects-heading" className="font-display text-3xl font-semibold sm:text-5xl">
                Our Craft, Your Expression.
              </h2>
            </div>

            <RollingButton href="/projects" text="View All 16 Projects" variant="outline" icon={true} />
          </div>

          {/* 2-Column Grid */}
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-10">
            {featuredProjects.map((project) => (
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
