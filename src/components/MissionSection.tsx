import React, { useEffect, useRef, useState } from 'react';
import { testimonialsData } from '../data/testimonialsData';

export const MissionSection: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isTicking = useRef(false);
  const rafId = useRef<number>(0);

  // Desktop pagination (6 per page)
  const [desktopPage, setDesktopPage] = useState(0);
  const [cardsInView, setCardsInView] = useState(false);
  const desktopPageSize = 6;
  const totalDesktopPages = Math.max(1, Math.ceil(testimonialsData.length / desktopPageSize));
  const currentDesktopTestimonials = testimonialsData.slice(
    desktopPage * desktopPageSize,
    desktopPage * desktopPageSize + desktopPageSize
  );

  // Mobile carousel index (1 per slide on mobile)
  const [mobileIndex, setMobileIndex] = useState(0);
  const totalMobileReviews = testimonialsData.length;
  const currentMobileReview = testimonialsData[mobileIndex];

  // Touch swipe support for mobile
  const touchStartX = useRef<number | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    if (diffX > 40) {
      // Swiped left -> Next
      setMobileIndex((prev) => (prev + 1) % totalMobileReviews);
    } else if (diffX < -40) {
      // Swiped right -> Prev
      setMobileIndex((prev) => (prev > 0 ? prev - 1 : totalMobileReviews - 1));
    }
    touchStartX.current = null;
  };

  // Scroll interpolation for desktop sticky view
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateScroll = () => {
      isTicking.current = false;
      if (!el || !titleRef.current || !cardsRef.current) return;

      if (window.innerWidth < 768) {
        return;
      }

      const rect = el.getBoundingClientRect();
      const totalScroll = rect.height - window.innerHeight;
      if (totalScroll <= 0) return;

      const progress = Math.min(1, Math.max(0, -rect.top / totalScroll));

      // Title fades out in first half (0 to 0.35)
      const titleOpacity = Math.max(0, Math.min(1, 1 - progress * 2.6));
      titleRef.current.style.opacity = String(titleOpacity);

      // Cards fade in during second half (0.28 to 0.65)
      const cardsOpacity = Math.max(0, Math.min(1, (progress - 0.28) * 2.5));
      cardsRef.current.style.opacity = String(cardsOpacity);
      cardsRef.current.style.pointerEvents = cardsOpacity > 0.5 ? 'auto' : 'none';

      setCardsInView(cardsOpacity > 0.2);
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
    <section id="reviews-section" className="relative w-full bg-[#0a0a0a]">
      {/* MOBILE REVIEWS SECTION (< 768px) - Clean, touch-swipeable card carousel with Google branding */}
      <div className="block md:hidden px-4 py-16 sm:px-8">
        <div className="mx-auto max-w-lg rounded-[28px] border border-white/10 bg-[#121214] p-6 shadow-2xl">
          {/* Header */}
          <div className="text-center mb-6">
            <span className="font-display text-[11px] font-bold uppercase tracking-[0.25em] text-[#88E788]">
              Client Validation
            </span>
            <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-white">
              Make all clients satisfied<br />
              <span className="text-[#88E788]">is our mission</span>
            </h2>
          </div>

          {/* Swipeable Single Card */}
          <div 
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
            className="relative overflow-hidden rounded-[20px] border border-white/10 bg-[#18181b] p-5 text-white shadow-lg transition-all duration-300"
          >
            {/* Card Header: Verified + Stars */}
            <div className="mb-3 flex items-center justify-between border-b border-white/10 pb-2.5">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#88E788]">
                  Verified
                </span>
                <span className="text-[10px] text-white/50">• {currentMobileReview.date || 'Recent'}</span>
              </div>

              {/* 5 Yellow Stars */}
              <div className="flex items-center gap-0.5 text-[#FBBF24]">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
                    <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                  </svg>
                ))}
                <span className="ml-1 text-[11px] font-bold text-[#FBBF24]">5.0</span>
              </div>
            </div>

            {/* Quote */}
            <p className="text-sm leading-relaxed text-white/90 min-h-[85px]">
              "{currentMobileReview.quote}"
            </p>

            {/* Author Footer */}
            <div className="mt-4 flex items-center gap-3 border-t border-white/10 pt-3">
              <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#88E788] font-display text-xs font-bold text-[#0a0a0a]">
                {currentMobileReview.author.charAt(0)}
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-sm font-semibold text-white truncate">{currentMobileReview.author}</span>
                <span className="text-xs text-white/60 truncate">{currentMobileReview.role}, {currentMobileReview.company}</span>
              </div>
            </div>
          </div>

          {/* Navigation Controls: Arrows + Counter + Dots */}
          <div className="mt-5 flex items-center justify-between px-1">
            <span className="font-mono text-xs font-semibold text-white/60">
              {mobileIndex + 1} of {totalMobileReviews}
            </span>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setMobileIndex((prev) => (prev > 0 ? prev - 1 : totalMobileReviews - 1))}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#88E788] hover:text-[#0a0a0a] transition-all cursor-pointer active:scale-95"
                aria-label="Previous review"
              >
                ←
              </button>
              <button
                type="button"
                onClick={() => setMobileIndex((prev) => (prev + 1) % totalMobileReviews)}
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white hover:bg-[#88E788] hover:text-[#0a0a0a] transition-all cursor-pointer active:scale-95"
                aria-label="Next review"
              >
                →
              </button>
            </div>
          </div>

          {/* Progress dots bar */}
          <div className="mt-4 flex items-center justify-center gap-1.5">
            {testimonialsData.map((_, i) => (
              <button
                key={i}
                type="button"
                onClick={() => setMobileIndex(i)}
                aria-label={`Go to review ${i + 1}`}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  i === mobileIndex ? 'w-6 bg-[#88E788]' : 'w-1.5 bg-white/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* DESKTOP & TABLET VIEW (>= 768px) - Iconic Architectural Warm Cream Capsule with Scroll Interpolation */}
      <div 
        ref={containerRef} 
        className="relative hidden md:block h-[220vh] pt-16 pb-16 bg-[#0a0a0a]"
      >
        <div className="sticky top-0 flex h-screen w-full items-stretch justify-center overflow-hidden px-6 sm:px-16 lg:px-24">
          <div className="relative flex w-full items-center justify-center">
            {/* Designed Architectural Warm Cream Capsule */}
            <div 
              className="relative flex h-[120vh] w-full flex-row items-center justify-center overflow-hidden px-6 sm:px-10 lg:px-16"
              style={{
                borderRadius: '830px',
                backgroundColor: '#eee6c1',
                border: '2px solid rgba(20, 20, 22, 0.18)',
                boxShadow: '0 35px 120px -20px rgba(0, 0, 0, 0.95), 0 0 0 1px rgba(255, 255, 255, 0.1), inset 0 2px 6px rgba(255, 255, 255, 0.6)',
              }}
            >
              {/* Centered Mission Title */}
              <div 
                ref={titleRef} 
                className="flex w-full flex-col items-center justify-center text-center transition-opacity duration-200 select-none px-4"
              >
                <p className="mb-4 font-display text-xs sm:text-sm font-bold uppercase tracking-[0.25em] text-[#141416]/70">
                  Client Validation
                </p>
                <h2 className="font-display text-3xl leading-[1.15] font-bold text-[#141416] sm:text-5xl lg:text-6xl max-w-4xl tracking-tight">
                  Make all clients satisfied<br />is our mission
                </h2>
                <p className="mt-4 text-center text-sm font-medium text-[#141416]/70">
                  Scroll down to read verified Google reviews from our global partners
                </p>
              </div>

              {/* Testimonials 2-Row Grid with Clean Google Reviews UI */}
              <div 
                ref={cardsRef} 
                className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-200 pointer-events-none px-6 sm:px-10 lg:px-16"
              >
                <div className="w-full max-w-6xl flex flex-col justify-center my-auto">
                  {/* Header Bar with Clean Google Maps Branding & Navigation Arrows */}
                  <div className="mb-3.5 flex items-center justify-between px-2">
                    <div className="flex items-center gap-2">
                      <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" aria-hidden="true">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                      </svg>
                      <span className="font-display text-xs font-bold uppercase tracking-wider text-[#141416]">
                        Google Reviews
                      </span>
                      <span className="text-xs font-semibold text-[#141416]/60">• 5.0 Rating</span>
                    </div>

                    {/* Interactive Arrows to cycle reviews */}
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs font-semibold text-[#141416]/70">
                        {desktopPage + 1} / {totalDesktopPages}
                      </span>
                      <button
                        type="button"
                        onClick={() => setDesktopPage((prev) => (prev > 0 ? prev - 1 : totalDesktopPages - 1))}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#141416] text-white hover:bg-[#88E788] hover:text-[#0a0a0a] transition-all cursor-pointer shadow-md active:scale-95"
                        aria-label="Previous reviews"
                      >
                        ←
                      </button>
                      <button
                        type="button"
                        onClick={() => setDesktopPage((prev) => (prev + 1) % totalDesktopPages)}
                        className="flex h-8 w-8 items-center justify-center rounded-full bg-[#141416] text-white hover:bg-[#88E788] hover:text-[#0a0a0a] transition-all cursor-pointer shadow-md active:scale-95"
                        aria-label="Next reviews"
                      >
                        →
                      </button>
                    </div>
                  </div>

                  {/* 2-ROW GRID (3 columns x 2 rows = 6 clean cards) */}
                  <div className="grid w-full grid-cols-2 md:grid-cols-3 gap-3.5">
                    {currentDesktopTestimonials.map((t, idx) => (
                      <div
                        key={`${t.id}-${desktopPage}`}
                        style={{
                          transitionDelay: `${cardsInView ? idx * 75 : 0}ms`,
                        }}
                        className={`group rounded-[20px] border border-white/10 bg-[#141416] p-4 text-white shadow-[0_15px_35px_rgba(0,0,0,0.5)] flex flex-col justify-between transition-all duration-500 ease-out hover:border-[#88E788]/50 hover:-translate-y-1 ${
                          cardsInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
                        }`}
                      >
                        <div>
                          {/* Top Row: Google Verified + Yellow Stars */}
                          <div className="mb-2.5 flex items-center justify-between border-b border-white/10 pb-2">
                            <div className="flex items-center gap-1">
                              <span className="text-[10px] uppercase font-bold tracking-wider text-[#88E788]">
                                Verified
                              </span>
                              <span className="text-[10px] text-white/40">• {t.date || 'Recent'}</span>
                            </div>

                            {/* 5 Vibrant Yellow Stars */}
                            <div className="flex items-center gap-0.5 text-[#FBBF24]">
                              {[...Array(5)].map((_, i) => (
                                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#FBBF24" aria-hidden="true">
                                  <path d="M12 .587l3.668 7.568 8.332 1.151-6.064 5.828 1.48 8.279-7.416-3.967-7.417 3.967 1.481-8.279-6.064-5.828 8.332-1.151z" />
                                </svg>
                              ))}
                              <span className="ml-1 text-[10px] font-bold text-[#FBBF24]">5.0</span>
                            </div>
                          </div>

                          {/* Quote Body */}
                          <p className="text-xs leading-[1.55] text-white/85 line-clamp-3">
                            "{t.quote}"
                          </p>
                        </div>

                        {/* Author Details */}
                        <div className="mt-3.5 flex items-center gap-2.5 pt-2.5 border-t border-white/10">
                          <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/10 border border-white/15 font-display text-[11px] font-bold text-white group-hover:bg-[#88E788] group-hover:text-[#0a0a0a] transition-colors">
                            {t.author.charAt(0)}
                          </div>
                          <div className="flex flex-col min-w-0">
                            <span className="text-xs font-semibold text-white truncate">{t.author}</span>
                            <span className="text-[10px] text-white/50 truncate">{t.role}, {t.company}</span>
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
      </div>
    </section>
  );
};
