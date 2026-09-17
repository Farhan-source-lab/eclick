import React from 'react';
import { RollingButton } from '../components/RollingButton';
import { MarqueeTrusted } from '../components/MarqueeTrusted';
import { HomeContactSection } from '../components/HomeContactSection';

export const AboutPage: React.FC = () => {
  const pillars = [
    {
      icon: '/brand/about/icon-bullseye.svg',
      title: 'Results First',
      desc: 'We don’t build digital art for vanity — we engineer high-converting digital platforms built strictly around measurable business ROI.'
    },
    {
      icon: '/brand/about/icon-devices.svg',
      title: 'Modern Architecture',
      desc: 'Built on high-speed React, Vite, and modern cloud stacks, eliminating bloated WordPress plugins and slow load times.'
    },
    {
      icon: '/brand/about/icon-select-multiple.svg',
      title: 'Precision Craft',
      desc: 'From custom micro-interactions to algorithmic SEO schemas, every detail is considered and relentlessly refined.'
    },
    {
      icon: '/brand/about/icon-support.svg',
      title: 'Long-Term Partnership',
      desc: 'We act as your dedicated digital team, providing continuous support, conversion tune-ups, and proactive strategy.'
    },
  ];

  const stats = [
    { value: '100+', label: 'Delivered Projects' },
    { value: '99%', label: 'Client Retention Rate' },
    { value: '4.9★', label: 'Average Client Rating' },
    { value: '3.5x', label: 'Average Lead Lift' },
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 pt-36 pb-20 text-center sm:px-12 lg:px-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-(--color-cta) opacity-20 blur-[160px]"
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="inline-block rounded-full border border-foreground/30 px-5 py-1.5 mb-6">
            <span className="font-display text-xs uppercase tracking-widest text-(--color-cta)">About Us</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold sm:text-6xl">
            Crafting Digital Authority That Drives Real Growth
          </h1>
          <p className="mt-6 text-base text-foreground/75 sm:text-xl leading-relaxed">
            We are a team of modern designers, software engineers, and search strategists passionate about building high-performance web systems for ambitious companies.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <RollingButton href="/contact" text="Work With Us" variant="primary" icon={true} />
            <RollingButton href="/services" text="Our Services" variant="outline" />
          </div>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <section className="px-6 py-12 sm:px-12 lg:px-24 bg-(--color-surface)/40 border-y border-(--color-border)">
        <div className="mx-auto max-w-7xl grid grid-cols-2 gap-8 md:grid-cols-4 text-center">
          {stats.map((s, i) => (
            <div key={i}>
              <p className="font-display text-3xl font-extrabold text-(--color-cta) sm:text-5xl">{s.value}</p>
              <p className="mt-2 text-xs sm:text-sm text-foreground/70 uppercase tracking-wider font-display">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. OUR PHILOSOPHY & PILLARS */}
      <section className="relative px-6 py-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl">
          <div className="mb-16 text-center max-w-2xl mx-auto">
            <span className="font-display text-xs uppercase tracking-widest text-(--color-cta)">Our Core Values</span>
            <h2 className="mt-3 font-display text-3xl font-semibold sm:text-5xl">The Standards We Live By</h2>
            <p className="mt-4 text-foreground/70">
              We operate on transparency, technical excellence, and an obsessive focus on user experience.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="flex flex-col rounded-[24px] border border-(--color-border) bg-(--color-surface) p-8 transition-all duration-300 hover:border-(--color-cta) hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-(--color-cta)/20 mb-6">
                  <img src={p.icon} alt="" className="h-6 w-6 object-contain" />
                </div>
                <h3 className="font-display text-xl font-bold text-foreground mb-3">{p.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/70">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. MARQUEE TRUSTED */}
      <MarqueeTrusted />

      {/* 5. CONTACT CTA */}
      <HomeContactSection />
    </div>
  );
};
