import React, { useEffect, useRef, useState } from 'react';
import { testimonialsData } from '../data/testimonialsData';

export const MissionSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isTicking = useRef(false);
  const rafId = useRef<number>(0);

  const [page, setPage] = useState(0);
  const totalPages = Math.max(1, Math.ceil(testimonialsData.length / 3));

  // Auto-cycle testimonial pages every 6s
  useEffect(() => {
    if (totalPages <= 1) return;
    const timer = setInterval(() => {
      setPage((prev) => (prev + 1) % totalPages);
    }, 6000);
    return () => clearInterval(timer);
  }, [totalPages]);

  const currentTestimonials = testimonialsData.slice(page * 3, page * 3 + 3);

  // Exact scroll interpolation matching reference site
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateScroll = () => {
      isTicking.current = false;
      if (!el || !titleRef.current || !cardsRef.current) return;

      if (window.innerWidth < 480) {
        titleRef.current.style.opacity = '1';
        cardsRef.current.style.opacity = '1';
        cardsRef.current.style.pointerEvents = 'auto';
        return;
      }

      const rect = el.getBoundingClientRect();
      // progress r from 0 to 1
      const progress = Math.min(1, Math.max(0, -rect.top / (rect.height - window.innerHeight)));

      // Title fades out in first half
      const titleOpacity = Math.max(0, Math.min(1, 1 - progress * 2.2));
      titleRef.current.style.opacity = String(titleOpacity);

      // Cards fade in during second half
      const cardsOpacity = Math.max(0, Math.min(1, (progress - 0.35) * 2.2));
      cardsRef.current.style.opacity = String(cardsOpacity);
      cardsRef.current.style.pointerEvents = cardsOpacity > 0.6 ? 'auto' : 'none';
    };

    const onScroll = () => {
      if (!isTicking.current) {
        isTicking.current = true;
        rafId.current = requestAnimationFrame(updateScroll);
      }
    };

    updateScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative h-[200vh] pt-16 pb-16 max-[479px]:h-auto bg-[#141416]"
    >
      <div className="sticky top-0 flex h-screen w-full items-stretch justify-center overflow-hidden px-16 max-[479px]:static max-[479px]:h-auto max-[479px]:min-h-screen max-[479px]:px-6 sm:px-20 lg:px-24">
        <div className="relative flex w-full items-center justify-center">
          {/* 830px Radius Capsule matching reference site exactly */}
          <div 
            className="relative flex h-[120vh] w-full flex-row items-center justify-center overflow-hidden px-[5vw] max-[479px]:static max-[479px]:h-auto max-[479px]:min-h-screen max-[479px]:w-screen max-[479px]:flex-col max-[479px]:rounded-none! max-[479px]:filter-none!"
            style={{
              borderRadius: '830px',
              backgroundColor: '#141416',
              border: '1px solid rgba(238, 230, 193, 0.3)',
              boxShadow: '0 0 50px rgba(0, 0, 0, 0.6), inset 0 0 20px rgba(255, 170, 1, 0.05)',
            }}
          >
            {/* Top-Left Glowing Ambient Vector Blob */}
            <img 
              src="/brand/mission-vector-blob.svg" 
              alt="" 
              aria-hidden="true" 
              className="absolute top-[15%] left-[5%] w-[17%] blur-[20px] max-[479px]:hidden pointer-events-none select-none" 
            />

            {/* Bottom-Right Glowing Ambient Vector Blob */}
            <img 
              src="/brand/mission-vector-blob.svg" 
              alt="" 
              aria-hidden="true" 
              className="absolute right-[5%] bottom-[15%] w-[17%] rotate-180 blur-[20px] max-[479px]:hidden pointer-events-none select-none" 
            />

            {/* Centered Mission Title with exact Krona One font */}
            <div 
              ref={titleRef} 
              className="flex w-full flex-col items-center justify-center text-center max-[479px]:mb-4 transition-opacity duration-150 select-none"
            >
              <h2 className="font-display text-3xl leading-[1.2] font-semibold text-[#eee6c1] uppercase sm:text-[48px] max-w-4xl tracking-tight">
                Make all clients satisfied<br />is our mission
              </h2>
              <p className="mt-3 text-center text-sm text-[#b7af98]">
                Scroll to see what they have to say
              </p>
            </div>

            {/* Testimonials 3-Card Grid */}
            <div 
              ref={cardsRef} 
              className="absolute inset-0 flex items-center justify-center opacity-0 max-[479px]:static max-[479px]:flex-1 max-[479px]:overflow-y-auto transition-opacity duration-150 pointer-events-none px-6"
            >
              <div className="grid w-full grid-cols-1 gap-4 px-4 sm:grid-cols-3 sm:px-[8%]">
                {currentTestimonials.map((t, idx) => (
                  <div
                    key={`${t.id}-${idx}`}
                    className="rounded-[25px] border border-[#ffaa01]/50 bg-[#1c1d20] px-6 py-8 text-[#eee6c1] shadow-[0_0_15px_-2px_rgba(0,0,0,0.5)] flex flex-col justify-between"
                  >
                    <div>
                      {/* Star Rating */}
                      <div className="mb-3 flex justify-center gap-1 text-[#ffaa01]">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#ffaa01">
                            <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                          </svg>
                        ))}
                      </div>

                      {/* Quote */}
                      <p className="mb-6 text-center text-xs leading-[160%] text-[#eee6c1]/90 italic">
                        "{t.quote}"
                      </p>
                    </div>

                    {/* Author Information */}
                    <div className="flex items-center justify-center gap-3 border-t border-white/10 pt-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#ffaa01] font-display text-sm font-bold text-[#141416]">
                        {t.author.charAt(0)}
                      </div>
                      <div className="flex flex-col text-left">
                        <span className="text-xs font-semibold text-[#eee6c1]">{t.author}</span>
                        <span className="text-[11px] text-[#b7af98]">{t.role}, {t.company}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
