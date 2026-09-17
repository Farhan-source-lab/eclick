import React, { useEffect, useRef } from 'react';
import lottie, { AnimationItem } from 'lottie-web';

interface LottieIconProps {
  path: string;
  className?: string;
  loop?: boolean;
  autoplay?: boolean;
}

export const LottieIcon: React.FC<LottieIconProps> = ({
  path,
  className = 'h-48 w-48',
  loop = true,
  autoplay = true,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<AnimationItem | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Destroy existing instance if path changes
    if (animRef.current) {
      animRef.current.destroy();
    }

    animRef.current = lottie.loadAnimation({
      container: containerRef.current,
      renderer: 'svg',
      loop,
      autoplay,
      path,
    });

    return () => {
      if (animRef.current) {
        animRef.current.destroy();
        animRef.current = null;
      }
    };
  }, [path, loop, autoplay]);

  return <div ref={containerRef} className={className} />;
};
