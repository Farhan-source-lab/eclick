import React, { useEffect, useRef, useState } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number; // Delay in milliseconds or fractional seconds (e.g. 100 or 0.1)
  duration?: number; // Duration in milliseconds (default: 850)
  yOffset?: number; // Distance in px to slide (default: 32)
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  threshold?: number; // Intersection threshold (default: 0.12)
  rootMargin?: string; // Root margin for intersection observer (default: '0px 0px -30px 0px')
}

export const ScrollReveal: React.FC<ScrollRevealProps> = ({ 
  children, 
  className = '',
  delay = 0,
  duration = 850,
  yOffset = 32,
  direction = 'up',
  threshold = 0.12,
  rootMargin = '0px 0px -30px 0px',
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Normalize delay: if passed in seconds (e.g. 0.1, 0.2), convert to ms
  const normalizedDelay = delay < 10 && delay > 0 ? Math.round(delay * 1000) : delay;

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    // Fallback if IntersectionObserver is unavailable
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          requestAnimationFrame(() => {
            setIsVisible(true);
          });
          observer.unobserve(entry.target); // Once revealed, stay rock-solid!
        }
      },
      {
        threshold,
        rootMargin,
      }
    );

    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin]);

  const getHiddenTransform = () => {
    switch (direction) {
      case 'left':
        return `translateX(${yOffset}px)`;
      case 'right':
        return `translateX(-${yOffset}px)`;
      case 'down':
        return `translateY(-${yOffset}px)`;
      case 'fade':
        return 'none';
      case 'up':
      default:
        return `translateY(${yOffset}px)`;
    }
  };

  return (
    <div 
      ref={containerRef} 
      className={`will-change-[transform,opacity] ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'none' : getHiddenTransform(),
        transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${normalizedDelay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${normalizedDelay}ms`,
      }}
    >
      {children}
    </div>
  );
};
