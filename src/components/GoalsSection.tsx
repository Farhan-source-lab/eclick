import React, { useEffect, useRef } from 'react';

function clamp(val: number, min: number, max: number) {
  return Math.min(max, Math.max(min, val));
}

interface GoalItem {
  icon: string;
  label: string;
  position: string;
  outX: number;
  outY: number;
  baseTransform?: string;
}

const GOAL_ITEMS: GoalItem[] = [
  {
    icon: "/brand/icon-code-alt.svg",
    label: "Results-Driven\nDevelopment",
    position: "top-14 md:top-16 lg:top-20 left-[12%] md:left-[16%] lg:left-[20%]",
    outX: -85,
    outY: -42
  },
  {
    icon: "/brand/icon-bar-chart-alt.svg",
    label: "Performance-\nBacked Strategy",
    position: "bottom-14 md:bottom-16 lg:bottom-20 left-[12%] md:left-[16%] lg:left-[20%]",
    outX: -105,
    outY: 42
  },
  {
    icon: "/brand/icon-globe.svg",
    label: "Brand-Centered\nOnline Identity",
    position: "top-1/2 left-[8%] md:left-[10%] lg:left-[14%]",
    baseTransform: "translateY(-50%)",
    outX: -115,
    outY: 0
  },
  {
    icon: "/brand/icon-map.svg",
    label: "Targeted Local\nGrowth",
    position: "top-14 md:top-16 lg:top-20 right-[12%] md:right-[16%] lg:right-[20%]",
    outX: 115,
    outY: -42
  },
  {
    icon: "/brand/icon-mobile.svg",
    label: "Seamless Mobile\nExperiences",
    position: "top-1/2 right-[8%] md:right-[10%] lg:right-[14%]",
    baseTransform: "translateY(-50%)",
    outX: 115,
    outY: 0
  },
  {
    icon: "/brand/icon-partner.svg",
    label: "Long-Term\nPartnership",
    position: "bottom-14 md:bottom-16 lg:bottom-20 right-[12%] md:right-[16%] lg:right-[20%]",
    outX: 85,
    outY: 57
  }
];

export const GoalsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const centerTextRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<(HTMLDivElement | null)[]>([]);
  const isTicking = useRef(false);
  const rafId = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function update() {
      isTicking.current = false;
      if (!container || !headerRef.current || !centerTextRef.current || !ringRef.current) return;

      const rect = container.getBoundingClientRect();
      const totalScroll = rect.height - window.innerHeight;
      if (totalScroll <= 0) return;

      const scrolled = clamp(-rect.top, 0, totalScroll);
      const ratio = scrolled / totalScroll;
      
      // 1. SILKY SMOOTH GHOST FADE-OUT FOR TOP HEADER (Left and Right sides):
      // Fades out gently as user arrives at center stop (ratio 0.0 -> 0.22)
      const ghostProgress = clamp(ratio / 0.22, 0, 1);
      // Smooth cubic ease for natural dissipation
      const easeGhost = ghostProgress * ghostProgress * (3 - 2 * ghostProgress);
      const headerOpacity = 1 - easeGhost;
      const headerTranslateY = -28 * easeGhost;
      const headerBlur = 8 * easeGhost;

      headerRef.current.style.opacity = String(headerOpacity);
      headerRef.current.style.transform = `translateY(${headerTranslateY}px)`;
      headerRef.current.style.filter = `blur(${headerBlur}px)`;
      headerRef.current.style.pointerEvents = headerOpacity < 0.05 ? 'none' : 'auto';

      // 2. CENTER ANIMATION (Ring rotation & badge blossoming):
      // Starts smoothly once the text has gently faded out (ratio 0.22 -> 0.76)
      const animProgress = clamp((ratio - 0.22) / 0.52, 0, 1);
      const u = animProgress * animProgress * (3 - 2 * animProgress);

      centerTextRef.current.style.opacity = String(u);
      
      ringRef.current.style.opacity = String(1 - 0.35 * u);
      ringRef.current.style.transform = `rotate(${180 * u}deg) scale(${1 + 0.4 * u})`;

      GOAL_ITEMS.forEach((item, index) => {
        const el = badgesRef.current[index];
        if (!el) return;
        const base = item.baseTransform ? `${item.baseTransform} ` : '';
        el.style.transform = `${base}translate(${item.outX * u}px, ${item.outY * u}px)`;
      });
    }

    function onScroll() {
      if (!isTicking.current) {
        isTicking.current = true;
        rafId.current = requestAnimationFrame(update);
      }
    }

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <section id="goals-section" className="relative w-full bg-[#141416]">
      {/* MOBILE VIEW (Screens < 768px) */}
      <div className="flex flex-col items-center gap-8 px-6 py-20 text-center sm:px-12 md:hidden">
        <div>
          <h2 className="font-display text-[28px] sm:text-[32px] leading-[1.2] font-semibold text-[#eee6c1]">
            Marketing solutions that<br />work for you
          </h2>
          <p className="mt-4 text-base text-[#eee6c1]/80 max-w-lg mx-auto">
            As one of the top digital marketing agencies in Toronto, we provide data-driven solutions designed to increase visibility, improve conversions, and help your business scale sustainably.
          </p>
        </div>

        <div className="relative flex items-center justify-center my-4">
          <div aria-hidden="true" className="absolute inset-0 m-auto h-48 w-48 rounded-full bg-[#ffaa01] opacity-35 blur-[90px]" />
          <img 
            src="/brand/goals-ring.svg" 
            width={260} 
            height={260} 
            alt="" 
            aria-hidden="true" 
            className="relative z-10 select-none"
          />
        </div>

        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 max-w-xl mx-auto">
          {GOAL_ITEMS.map((item) => (
            <div 
              key={item.label}
              className="flex items-center gap-3.5 rounded-[24px] bg-[#d49925]/75 border border-[#ffaa01]/40 px-5 py-4 text-left backdrop-blur-md shadow-lg"
            >
              <img 
                src={item.icon} 
                alt="" 
                width={24} 
                height={24} 
                className="shrink-0 brightness-0" 
              />
              <span className="font-display text-xs sm:text-sm font-semibold whitespace-pre-line text-[#141416] leading-snug">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* DESKTOP & TABLET STICKY SCROLL VIEW (Screens >= 768px) */}
      <div 
        ref={containerRef} 
        className="relative hidden md:block h-[260vh]"
      >
        <div className="sticky top-0 flex h-screen w-full flex-col justify-between pt-24 sm:pt-28 pb-10 px-8 sm:px-14 lg:px-24 overflow-hidden">
          
          {/* Top Header: Left title + Right subtitle (Dissolves like a ghost on scroll) */}
          <div 
            ref={headerRef} 
            className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center will-change-transform"
          >
            <h3 className="font-display text-[26px] md:text-[30px] lg:text-[36px] leading-[1.2] font-semibold text-[#eee6c1]">
              Made with Goal.<br />Meant to be Useful.
            </h3>
            <p className="w-full text-sm sm:text-base text-[#eee6c1]/80 md:w-[32%] lg:w-[24%] leading-relaxed">
              Our team will run everything for you and provide promised results and goals to help you grow.
            </p>
          </div>

          {/* Center Canvas: Ring, Ambient Center Glow, Badges, and Cross-Fading Text */}
          <div className="relative flex flex-1 items-center justify-center my-auto">
            
            {/* Center Golden Ambient Glow */}
            <div 
              aria-hidden="true" 
              className="pointer-events-none absolute inset-0 m-auto h-72 w-72 rounded-full bg-[#ffaa01] opacity-40 blur-[130px]" 
            />

            {/* Central Rotating & Expanding Ring */}
            <div ref={ringRef} className="relative z-0 select-none will-change-transform">
              <img 
                src="/brand/goals-ring.svg" 
                alt="" 
                width={460} 
                height={460} 
                className="select-none pointer-events-none max-w-[340px] md:max-w-[400px] lg:max-w-[460px]"
              />
            </div>

            {/* Revealed Center Text (fades in when scrolled) */}
            <div 
              ref={centerTextRef} 
              className="pointer-events-none absolute z-20 w-full max-w-xl px-6 text-center opacity-0 transition-opacity duration-150"
            >
              <h2 className="font-display text-[30px] sm:text-[38px] lg:text-[44px] font-semibold leading-[1.2] text-[#eee6c1]">
                Marketing solutions that<br />work for you
              </h2>
              <p className="mt-4 text-sm sm:text-base lg:text-lg text-[#eee6c1]/85 leading-relaxed">
                As one of the top digital marketing agencies in Toronto, we provide data-driven solutions designed to increase visibility, improve conversions, and help your business scale sustainably.
              </p>
            </div>

            {/* 6 Golden Amber Pill Badges matching reference */}
            {GOAL_ITEMS.map((item, index) => (
              <div 
                key={item.label}
                ref={(el) => { badgesRef.current[index] = el; }}
                className={`absolute z-10 flex items-center gap-2.5 sm:gap-3.5 rounded-[30px] bg-[#d49925]/80 border border-[#ffaa01]/50 px-4 py-3 sm:px-5 sm:py-3.5 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.4)] will-change-transform ${item.position}`}
              >
                <img 
                  src={item.icon} 
                  alt="" 
                  width={22} 
                  height={22} 
                  className="shrink-0 brightness-0 sm:w-6 sm:h-6" 
                />
                <span className="font-display text-[11px] sm:text-xs lg:text-sm font-semibold whitespace-pre-line text-[#141416] leading-snug">
                  {item.label}
                </span>
              </div>
            ))}

          </div>

          {/* Bottom spacing to ensure balanced centering */}
          <div className="h-4 sm:h-6" aria-hidden="true" />

        </div>
      </div>
    </section>
  );
};
