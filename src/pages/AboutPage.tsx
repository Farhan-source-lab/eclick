import React from 'react';
import { RollingButton } from '../components/RollingButton';
import { MarqueeTrusted } from '../components/MarqueeTrusted';
import { HomeContactSection } from '../components/HomeContactSection';
import { ScrollReveal } from '../components/ScrollReveal';
import { AboutWorkflowSection } from '../components/AboutWorkflowSection';

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
    <div className="flex flex-col w-full overflow-hidden bg-[#0a0a0a]">
      {/* 1. HERO SECTION */}
      <section className="relative px-6 pt-36 pb-20 text-center sm:px-12 sm:pt-44 sm:pb-28 lg:px-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 left-1/2 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#88E788]/10 blur-[180px]"
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <ScrollReveal delay={0} yOffset={20}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-6">
              <span className="h-2 w-2 rounded-full bg-[#88E788]"></span>
              <span className="font-body text-xs uppercase tracking-widest text-[#88E788] font-bold">About Us</span>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={120} yOffset={24}>
            <h1 className="font-display text-4xl font-bold sm:text-6xl text-white leading-[1.1]">
              Crafting Digital Authority That Drives Real Growth
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={240} yOffset={24}>
            <p className="mt-6 text-base text-white/70 sm:text-lg leading-relaxed max-w-2xl mx-auto">
              We are a team of modern designers, software engineers, and search strategists passionate about building high-performance web systems for ambitious companies.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={340} yOffset={20}>
            <div className="mt-8 flex justify-center gap-4">
              <RollingButton href="/contact" text="Work With Us" variant="primary" icon={true} />
              <RollingButton href="/services" text="Our Services" variant="outline" />
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. STATS BANNER */}
      <section className="relative px-6 py-16 sm:px-12 lg:px-24 bg-[#0a0a0a]">
        <div className="mx-auto max-w-7xl">
          <ScrollReveal delay={100} yOffset={24}>
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 text-center rounded-[28px] border border-white/10 bg-[#141416]/80 backdrop-blur-xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.4)]">
              {stats.map((s, i) => (
                <div key={i}>
                  <p className="font-display text-3xl font-extrabold text-[#88E788] sm:text-5xl">{s.value}</p>
                  <p className="mt-2 text-xs sm:text-sm text-white/60 uppercase tracking-wider font-body font-semibold">{s.label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 3. WORKFLOW PROCESS SECTION (with winding illuminated path and markers) */}
      <AboutWorkflowSection />

      {/* 4. OUR PHILOSOPHY & PILLARS */}
      <section className="relative px-6 py-24 sm:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden">
        {/* Soft atmospheric ambient glow */}
        <div 
          aria-hidden="true" 
          className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-[#88E788]/5 blur-[200px]" 
        />
        <div className="relative z-10 mx-auto max-w-7xl">
          <ScrollReveal delay={0} yOffset={24}>
            <div className="mb-16 text-center max-w-2xl mx-auto">
              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 mb-3">
                <span className="h-2 w-2 rounded-full bg-[#88E788]"></span>
                <span className="font-body text-xs uppercase tracking-widest text-[#88E788] font-bold">Our Core Values</span>
              </div>
              <h2 className="font-display text-3xl font-bold sm:text-5xl text-white">The Standards We Live By</h2>
              <p className="mt-4 text-white/60 text-sm sm:text-base leading-relaxed">
                We operate on transparency, technical excellence, and an obsessive focus on user experience.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {pillars.map((p, i) => (
              <ScrollReveal key={i} delay={100 + i * 90} yOffset={28} className="h-full">
                <div
                  className="flex flex-col justify-between rounded-[28px] border border-white/10 bg-[#141416]/80 backdrop-blur-xl p-8 text-white transition-all duration-300 hover:border-[#88E788]/60 hover:bg-[#18181c] hover:shadow-[0_0_30px_rgba(136,231,136,0.15)] h-full"
                >
                  <div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#88E788]/15 border border-[#88E788]/20 mb-6">
                      <img src={p.icon} alt="" className="h-6 w-6 object-contain" />
                    </div>
                    <h3 className="font-display text-xl font-bold text-white mb-3">{p.title}</h3>
                    <p className="text-xs sm:text-sm leading-relaxed text-white/60">{p.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* 5. MARQUEE TRUSTED */}
      <MarqueeTrusted />

      {/* 6. CONTACT CTA */}
      <HomeContactSection />
    </div>
  );
};
