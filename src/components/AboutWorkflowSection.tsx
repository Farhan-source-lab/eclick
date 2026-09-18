import React, { useEffect, useRef, useState } from 'react';

// Exact ScrollRevealItem component replicating the reference site's scroll-linked translation and fade
const ScrollRevealItem: React.FC<{ children: React.ReactNode; className?: string }> = ({ 
  children, 
  className = '' 
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const update = () => {
      const top = el.getBoundingClientRect().top;
      const h = window.innerHeight;
      const start = 0.88 * h;
      const end = 0.20 * h;
      const progress = Math.min(1, Math.max(0, (start - top) / (start - end)));
      el.style.opacity = String(progress);
      el.style.transform = `translateX(${-50 * (1 - progress)}px)`;
    };

    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <div ref={ref} className={`will-change-[transform,opacity] transition-all duration-150 ease-out ${className}`}>
      {children}
    </div>
  );
};

// Mobile single-line timeline with scroll trigger and fade-in
const MobileWorkflowTimeline: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const fillLineRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      step: '01',
      tag: 'Step 01',
      title: 'PLANNING',
      desc: 'Discovery, user journey mapping, and conversion goals specification.',
    },
    {
      step: '02',
      tag: 'Step 02',
      title: 'CONCEPTION',
      desc: 'Wireframing, functional scope, creative direction, and rapid prototyping.',
    },
    {
      step: '03',
      tag: 'Step 03',
      title: 'DESIGN',
      desc: 'High-fidelity UI/UX design, custom micro-interactions, and visual assets.',
    },
    {
      step: '04',
      tag: 'Step 04',
      title: 'DEVELOPMENT',
      desc: 'Production engineering, speed optimization, and seamless deployment.',
    },
  ];

  useEffect(() => {
    const container = containerRef.current;
    const fillLine = fillLineRef.current;
    if (!container || !fillLine) return;

    const onScroll = () => {
      const rect = container.getBoundingClientRect();
      const h = window.innerHeight;
      const start = h * 0.78;
      const totalH = rect.height - 40;
      const scrolled = start - rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / Math.max(1, totalH)));

      // Grow illuminated green line dynamically
      fillLine.style.height = `${progress * 100}%`;

      // Determine active steps
      const nodes = container.querySelectorAll<HTMLElement>('.mobile-step-node');
      let currentActive = 0;
      nodes.forEach((node, index) => {
        const nodeRect = node.getBoundingClientRect();
        if (nodeRect.top <= h * 0.75) {
          currentActive = index + 1;
        }
      });
      setActiveStep(currentActive);
    };

    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div ref={containerRef} className="relative flex flex-col gap-12 sm:hidden pl-2 pr-2 py-4">
      {/* 1. Single continuous vertical baseline */}
      <div 
        aria-hidden="true" 
        className="absolute left-[27px] top-6 bottom-8 w-[2px] bg-white/10 rounded-full" 
      />

      {/* 2. Scroll-triggered illuminated green fill line */}
      <div 
        ref={fillLineRef}
        aria-hidden="true" 
        className="absolute left-[27px] top-6 w-[2px] bg-gradient-to-b from-[#88E788] via-[#88E788] to-[#5cdb5c] rounded-full shadow-[0_0_12px_rgba(136,231,136,0.85)] will-change-[height] max-h-[calc(100%-48px)] transition-[height] duration-75 ease-out" 
        style={{ height: '0%' }}
      />

      {/* 3. Steps with glowing badges and fade-in content */}
      {steps.map((s, idx) => {
        const isStepActive = activeStep >= idx + 1;
        return (
          <div key={s.step} className="mobile-step-node relative flex items-start gap-5">
            {/* Circular badge */}
            <div 
              className={`relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-full font-display text-xs font-bold transition-all duration-500 ${
                isStepActive
                  ? 'border-2 border-[#88E788] bg-[#0a0a0a] text-[#88E788] shadow-[0_0_20px_rgba(136,231,136,0.6)] scale-105'
                  : 'border border-white/20 bg-[#121214] text-white/35 scale-95'
              }`}
            >
              {s.step}
            </div>

            {/* Content with scroll trigger fade & slide */}
            <div 
              className={`flex flex-col transition-all duration-500 ease-out ${
                isStepActive 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-25 -translate-x-3'
              }`}
            >
              <div className="flex items-center gap-2 font-mono text-xs text-white/60">
                <img 
                  src="/brand/about/icon-select-multiple.svg" 
                  alt="" 
                  width={12} 
                  height={12} 
                  className={`transition-opacity duration-300 ${isStepActive ? 'opacity-90' : 'opacity-40'}`} 
                />
                <span className="uppercase tracking-widest">{s.tag}</span>
              </div>

              <h3 className="mt-1 font-display text-2xl font-bold tracking-wider text-white">
                {s.title}
              </h3>

              <p className="mt-2 text-xs sm:text-sm leading-relaxed text-white/70">
                {s.desc}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const AboutWorkflowSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    const path = pathRef.current;
    const container = containerRef.current;
    if (!path || !container) return;

    const length = path.getTotalLength();
    path.style.strokeDasharray = `${length}`;
    path.style.strokeDashoffset = `${length}`;

    const updateCurve = () => {
      const rect = container.getBoundingClientRect();
      const h = window.innerHeight;
      const start = h * 0.85;
      const totalDist = rect.height + h * 0.3;
      const scrolled = start - rect.top;
      const progress = Math.min(1, Math.max(0, scrolled / totalDist));
      path.style.strokeDashoffset = `${length * (1 - progress)}`;
    };

    updateCurve();
    window.addEventListener('scroll', updateCurve, { passive: true });
    window.addEventListener('resize', updateCurve);
    return () => {
      window.removeEventListener('scroll', updateCurve);
      window.removeEventListener('resize', updateCurve);
    };
  }, []);

  return (
    <section 
      ref={containerRef}
      className="relative px-6 py-20 sm:px-12 lg:px-24 bg-[#0a0a0a] overflow-hidden" 
      aria-labelledby="process-heading"
    >
      {/* Background radial glow in brand green (#88E788) */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 z-0 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#88E788]/15 blur-[180px]" 
      />
      
      {/* Organic mesh vector background in brand green */}
      <img 
        src="/brand/about/workflow-background.svg" 
        alt="" 
        width={739} 
        height={568} 
        aria-hidden="true" 
        className="pointer-events-none absolute top-1/2 left-1/2 z-0 -translate-x-1/2 -translate-y-1/2 opacity-70 blur-[80px]" 
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="mb-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md mb-4">
            <span className="h-1.5 w-1.5 rounded-full bg-[#88E788]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#88E788]">Workflow</span>
          </div>
          <h2 id="process-heading" className="font-display text-3xl font-bold sm:text-5xl lg:text-[48px] text-white tracking-tight leading-[1.2]">
            Our Process
          </h2>
        </div>

        {/* Desktop Workflow Graphic */}
        <div className="relative mx-auto hidden h-[1150px] w-full sm:block">
          {/* Animated Glowing Curve */}
          <div className="absolute top-8 left-1/2 w-[70%] max-w-[850px] -translate-x-1/2">
            <svg 
              viewBox="0 0 769 646" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg" 
              className="w-full h-auto drop-shadow-[0_0_25px_rgba(136,231,136,0.35)]"
            >
              {/* Subtle background track */}
              <path 
                d="M243.732 0.480957C243.732 0.480957 821.732 156.981 763.732 264.481C705.732 371.981 -66.7676 348.481 5.23242 457.981C77.2324 567.481 426.232 644.981 426.232 644.981" 
                stroke="#88E788" 
                strokeOpacity="0.15" 
                strokeWidth="1.5" 
              />
              {/* Dynamic scroll-drawn illuminated curve */}
              <path 
                ref={pathRef}
                d="M243.732 0.480957C243.732 0.480957 821.732 156.981 763.732 264.481C705.732 371.981 -66.7676 348.481 5.23242 457.981C77.2324 567.481 426.232 644.981 426.232 644.981" 
                stroke="#88E788" 
                strokeWidth="2" 
                strokeLinecap="round" 
              />
            </svg>
          </div>

          {/* Vertical Glowing Pins */}
          <ScrollRevealItem className="absolute w-6 bottom-[45vw] left-[38.5%]">
            <img src="/brand/about/group-11-marker.svg" alt="" width={18} height={208} className="w-full drop-shadow-[0_0_12px_rgba(136,231,136,0.5)]" />
          </ScrollRevealItem>

          <ScrollRevealItem className="absolute w-6 bottom-[26.5vw] right-[20.5%]">
            <img src="/brand/about/group-11-marker.svg" alt="" width={18} height={208} className="w-full drop-shadow-[0_0_12px_rgba(136,231,136,0.5)]" />
          </ScrollRevealItem>

          <ScrollRevealItem className="absolute w-6 bottom-[14.5vw] left-[20%]">
            <img src="/brand/about/group-11-marker.svg" alt="" width={18} height={208} className="w-full drop-shadow-[0_0_12px_rgba(136,231,136,0.5)]" />
          </ScrollRevealItem>

          <ScrollRevealItem className="absolute w-6 bottom-[0.5vw] right-[46%]">
            <img src="/brand/about/group-11-marker.svg" alt="" width={18} height={208} className="w-full drop-shadow-[0_0_12px_rgba(136,231,136,0.5)]" />
          </ScrollRevealItem>

          {/* Step 01: Planning */}
          <ScrollRevealItem className="absolute flex flex-col gap-1 top-0 left-[35%]">
            <div className="flex items-center gap-2 font-mono text-xs text-white/60">
              <img src="/brand/about/icon-select-multiple.svg" alt="" width={12} height={12} className="opacity-80" />
              <span>Step 01</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white tracking-wide">Planning</h3>
          </ScrollRevealItem>

          {/* Step 02: Conception */}
          <ScrollRevealItem className="absolute flex flex-col gap-1 top-[33%] right-[25%]">
            <div className="flex items-center gap-2 font-mono text-xs text-white/60">
              <img src="/brand/about/icon-select-multiple.svg" alt="" width={12} height={12} className="opacity-80" />
              <span>Step 02</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white tracking-wide">Conception</h3>
          </ScrollRevealItem>

          {/* Step 03: Design */}
          <ScrollRevealItem className="absolute flex flex-col gap-1 bottom-[42%] left-[25%]">
            <div className="flex items-center gap-2 font-mono text-xs text-white/60">
              <img src="/brand/about/icon-select-multiple.svg" alt="" width={12} height={12} className="opacity-80" />
              <span>Step 03</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white tracking-wide">Design</h3>
          </ScrollRevealItem>

          {/* Step 04: Development */}
          <ScrollRevealItem className="absolute flex flex-col gap-1 bottom-[25%] right-[25%]">
            <div className="flex items-center gap-2 font-mono text-xs text-white/60">
              <img src="/brand/about/icon-select-multiple.svg" alt="" width={12} height={12} className="opacity-80" />
              <span>Step 04</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-white tracking-wide">Development</h3>
          </ScrollRevealItem>
        </div>

        {/* Mobile Single Continuous Vertical Timeline */}
        <MobileWorkflowTimeline />
      </div>
    </section>
  );
};
