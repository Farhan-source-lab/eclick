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
    icon: "/brand/icon-code-alt-green.svg",
    label: "Results-Driven\nDevelopment",
    position: "top-4 sm:top-8 md:top-14 lg:top-16 left-[2%] sm:left-[6%] md:left-[10%] lg:left-[14%]",
    outX: -70,
    outY: -30
  },
  {
    icon: "/brand/icon-bar-chart-alt-green.svg",
    label: "Performance-\nBacked Strategy",
    position: "bottom-4 sm:bottom-8 md:bottom-14 lg:bottom-16 left-[2%] sm:left-[6%] md:left-[10%] lg:left-[14%]",
    outX: -80,
    outY: 30
  },
  {
    icon: "/brand/icon-globe-green.svg",
    label: "Brand-Centered\nOnline Identity",
    position: "top-1/2 left-[1%] sm:left-[3%] md:left-[6%] lg:left-[9%]",
    baseTransform: "translateY(-50%)",
    outX: -90,
    outY: 0
  },
  {
    icon: "/brand/icon-map-green.svg",
    label: "Targeted Local\nGrowth",
    position: "top-4 sm:top-8 md:top-14 lg:top-16 right-[2%] sm:right-[6%] md:right-[10%] lg:right-[14%]",
    outX: 70,
    outY: -30
  },
  {
    icon: "/brand/icon-mobile-green.svg",
    label: "Seamless Mobile\nExperiences",
    position: "top-1/2 right-[1%] sm:right-[3%] md:right-[6%] lg:right-[9%]",
    baseTransform: "translateY(-50%)",
    outX: 90,
    outY: 0
  },
  {
    icon: "/brand/icon-partner-green.svg",
    label: "Long-Term\nPartnership",
    position: "bottom-4 sm:bottom-8 md:bottom-14 lg:bottom-16 right-[2%] sm:right-[6%] md:right-[10%] lg:right-[14%]",
    outX: 80,
    outY: 30
  }
];

export const GoalsSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyContentRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const centerTextRef = useRef<HTMLDivElement>(null);
  const ringGoldRef = useRef<HTMLDivElement>(null);
  const ringGreenRef = useRef<HTMLDivElement>(null);
  const glowGoldRef = useRef<HTMLDivElement>(null);
  const glowGreenRef = useRef<HTMLDivElement>(null);
  const badgesRef = useRef<(HTMLDivElement | null)[]>([]);
  const isTicking = useRef(false);
  const rafId = useRef(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    function update() {
      isTicking.current = false;
      if (!container || !headerRef.current || !centerTextRef.current || !stickyContentRef.current) return;

      const rect = container.getBoundingClientRect();
      const totalScroll = rect.height - window.innerHeight;
      if (totalScroll <= 0) return;

      const scrolled = clamp(-rect.top, 0, totalScroll);
      const ratio = scrolled / totalScroll;
      
      // 1. TOP HEADER FADE-OUT (ratio 0.0 -> 0.22)
      const ghostProgress = clamp(ratio / 0.22, 0, 1);
      const easeGhost = ghostProgress * ghostProgress * (3 - 2 * ghostProgress);
      const headerOpacity = 1 - easeGhost;
      const headerTranslateY = -24 * easeGhost;
      const headerBlur = 8 * easeGhost;

      headerRef.current.style.opacity = String(headerOpacity);
      headerRef.current.style.transform = `translateY(${headerTranslateY}px)`;
      headerRef.current.style.filter = `blur(${headerBlur}px)`;
      headerRef.current.style.pointerEvents = headerOpacity < 0.05 ? 'none' : 'auto';

      // 2. CENTER ANIMATION (Ring rotation & grand expansion + Gold to Green color morph):
      // Ratio 0.22 -> 0.74
      const animProgress = clamp((ratio - 0.22) / 0.52, 0, 1);
      const u = animProgress * animProgress * (3 - 2 * animProgress);

      centerTextRef.current.style.opacity = String(u);

      // Grand circle expansion matching original scale
      const ringScaleFactor = window.innerWidth < 640 ? 0.25 : 0.35;
      const ringTransform = `rotate(${180 * u}deg) scale(${1 + ringScaleFactor * u})`;
      
      // Golden when small (u=0), morphs smoothly into brand green when expanded (u=1)
      if (ringGoldRef.current && ringGreenRef.current) {
        ringGoldRef.current.style.transform = ringTransform;
        ringGreenRef.current.style.transform = ringTransform;
        
        ringGoldRef.current.style.opacity = String((1 - u) * (1 - 0.25 * u));
        ringGreenRef.current.style.opacity = String(u * (1 - 0.25 * u));
      }

      // Ambient backlight morphs from Gold to Green
      if (glowGoldRef.current && glowGreenRef.current) {
        glowGoldRef.current.style.opacity = String((1 - u) * 0.4);
        glowGreenRef.current.style.opacity = String(u * 0.45);
      }

      // Responsive badge float offset for mobile vs desktop
      const isSmallMobile = window.innerWidth < 480;
      const isTablet = window.innerWidth < 768;
      const spread = isSmallMobile ? 0.4 : isTablet ? 0.65 : 1.0;

      GOAL_ITEMS.forEach((item, index) => {
        const el = badgesRef.current[index];
        if (!el) return;
        const base = item.baseTransform ? `${item.baseTransform} ` : '';
        el.style.transform = `${base}translate(${item.outX * u * spread}px, ${item.outY * u * spread}px)`;
      });

      // 3. PARALLAX DEPTH EXIT (Section scales down, blurs, and fades out toward next section):
      // Begins when ratio moves from 0.78 to 0.98
      const exitProgress = clamp((ratio - 0.78) / 0.20, 0, 1);
      const easeExit = exitProgress * exitProgress * (3 - 2 * exitProgress);
      const exitScale = 1 - 0.10 * easeExit;
      const exitOpacity = 1 - easeExit;
      const exitBlur = 8 * easeExit;

      stickyContentRef.current.style.transform = `scale(${exitScale})`;
      stickyContentRef.current.style.opacity = String(exitOpacity);
      stickyContentRef.current.style.filter = `blur(${exitBlur}px)`;
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
    <section id="goals-section" className="relative w-full bg-[#0a0a0a]">
      {/* UNIFIED INTERACTIVE STICKY SCROLL VIEW (Seamless on both Mobile & Desktop) */}
      <div 
        ref={containerRef} 
        className="relative w-full h-[260vh] md:h-[300vh]"
      >
        <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
          
          {/* Inner content that scales down, blurs, and fades out as user scrolls */}
          <div 
            ref={stickyContentRef}
            className="flex h-screen w-full flex-col justify-between pt-16 sm:pt-20 pb-8 sm:pb-16 px-4 sm:px-12 lg:px-20 will-change-transform"
          >
            {/* Top Header: Centered short tag + Headline & Subtitle */}
            <div 
              ref={headerRef} 
              className="flex flex-col gap-2.5 sm:gap-5 will-change-transform max-w-6xl mx-auto w-full"
            >
              {/* Tag */}
              <div className="text-center select-none">
                <span className="font-display text-[11px] sm:text-sm font-semibold tracking-[0.25em] uppercase text-[#88E788]">
                  Our Strategic Goals
                </span>
              </div>

              <div className="flex flex-col items-center text-center md:text-left md:flex-row md:items-center md:justify-between gap-3 sm:gap-6">
                <div>
                  <h3 className="font-display text-xl sm:text-2xl md:text-[32px] lg:text-[40px] leading-[1.2] md:leading-[1.15] font-bold text-white tracking-tight">
                    Made with Clear Goals.<br className="hidden sm:inline" />
                    <span className="text-[#88E788]"> Meant to Deliver Real Impact.</span>
                  </h3>
                </div>
                <p className="w-full text-xs sm:text-sm md:text-base text-white/75 md:w-[36%] lg:w-[28%] leading-relaxed max-w-md md:max-w-none">
                  We align advanced AI workflows, custom engineering, and data-backed strategies to achieve your business goals.
                </p>
              </div>
            </div>

            {/* Center Canvas: Full Grand Ring (Gold to Green), Ambient Glows, Badges, and Cross-Fading Text */}
            <div className="relative flex flex-1 items-center justify-center my-auto w-full max-w-6xl mx-auto overflow-visible">
              
              {/* Center Ambient Glows: Gold when small, Green when expanded */}
              <div 
                ref={glowGoldRef}
                aria-hidden="true" 
                className="pointer-events-none absolute inset-0 m-auto h-48 w-48 sm:h-80 sm:w-80 rounded-full bg-[#FFAA01] opacity-40 blur-[90px] sm:blur-[140px] will-change-transform" 
              />
              <div 
                ref={glowGreenRef}
                aria-hidden="true" 
                className="pointer-events-none absolute inset-0 m-auto h-48 w-48 sm:h-80 sm:w-80 rounded-full bg-[#88E788] opacity-0 blur-[90px] sm:blur-[140px] will-change-transform" 
              />

              {/* Central Rotating & Expanding Rings */}
              <div className="relative z-0 select-none flex items-center justify-center">
                {/* Golden Ring */}
                <div ref={ringGoldRef} className="select-none will-change-transform flex items-center justify-center">
                  <img 
                    src="/brand/goals-ring.svg" 
                    alt="" 
                    width={480} 
                    height={480} 
                    className="select-none pointer-events-none w-[230px] sm:w-[340px] md:w-[440px] lg:w-[480px] max-w-none"
                  />
                </div>
                {/* Green Ring */}
                <div ref={ringGreenRef} className="absolute inset-0 select-none opacity-0 will-change-transform flex items-center justify-center">
                  <img 
                    src="/brand/goals-ring-green.svg" 
                    alt="" 
                    width={480} 
                    height={480} 
                    className="select-none pointer-events-none w-[230px] sm:w-[340px] md:w-[440px] lg:w-[480px] max-w-none"
                  />
                </div>
              </div>

              {/* Revealed Center Text */}
              <div 
                ref={centerTextRef} 
                className="pointer-events-none absolute z-20 w-full max-w-xl px-4 text-center opacity-0 transition-opacity duration-150"
              >
                <h2 className="font-display text-xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-[1.2] text-white tracking-tight">
                  Engineered for Results<br />that Work for You
                </h2>
              </div>

              {/* 6 Floating Badges with Responsive Spacing & Sizing */}
              {GOAL_ITEMS.map((item, index) => (
                <div 
                  key={item.label}
                  ref={(el) => { badgesRef.current[index] = el; }}
                  className={`absolute z-10 flex items-center gap-2 sm:gap-3 rounded-[20px] sm:rounded-[30px] bg-[#161616]/92 border border-[#88E788]/40 px-2.5 py-2 sm:px-4 sm:py-3 md:px-5 md:py-3.5 backdrop-blur-md shadow-[0_8px_30px_rgba(0,0,0,0.6)] will-change-transform ${item.position}`}
                >
                  <img 
                    src={item.icon} 
                    alt="" 
                    width={22} 
                    height={22} 
                    className="shrink-0 w-3.5 h-3.5 sm:w-5 sm:h-5 md:w-6 md:h-6" 
                  />
                  <span className="font-display text-[9px] sm:text-xs lg:text-sm font-semibold whitespace-pre-line text-white leading-tight">
                    {item.label}
                  </span>
                </div>
              ))}

            </div>

            {/* Bottom spacer */}
            <div className="h-2 sm:h-6" aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
};
