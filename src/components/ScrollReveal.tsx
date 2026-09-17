import React, { useEffect, useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ children, className = '' }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rafId = useRef(0);
  const isTicking = useRef(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const update = () => {
      isTicking.current = false;
      if (!el) return;

      const top = el.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      const startThreshold = 0.88 * windowHeight;
      const endThreshold = 0.15 * windowHeight;

      // Exact progressive scroll reveal interpolation from original website
      const progress = Math.min(1, Math.max(0, (startThreshold - top) / (startThreshold - endThreshold)));

      el.style.opacity = String(progress);
      el.style.transform = `translateY(${(184 * (1 - progress)).toFixed(2)}px)`;
    };

    const handleScroll = () => {
      if (!isTicking.current) {
        isTicking.current = true;
        rafId.current = requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div ref={containerRef} className={`will-change-[transform,opacity] ${className}`}>
      {children}
    </div>
  );
};
