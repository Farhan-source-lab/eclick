import React, { useEffect, useRef } from 'react';

export const HeroMark: React.FC = () => {
  const markRef = useRef<HTMLImageElement>(null);
  const pos = useRef({ currentX: 0, currentY: 0, targetX: 0, targetY: 0, rotateX: 0, rotateY: 0 });

  useEffect(() => {
    let animId: number;

    const handleMouseMove = (e: MouseEvent) => {
      const centerX = window.innerWidth / 2;
      const centerY = window.innerHeight / 2;
      const deltaX = (e.clientX - centerX) / centerX;
      const deltaY = (e.clientY - centerY) / centerY;

      pos.current.targetX = deltaX * 18;
      pos.current.targetY = deltaY * 18;
      pos.current.rotateX = -deltaY * 8;
      pos.current.rotateY = deltaX * 12;
    };

    const update = () => {
      const p = pos.current;
      p.currentX += (p.targetX - p.currentX) * 0.08;
      p.currentY += (p.targetY - p.currentY) * 0.08;

      if (markRef.current) {
        markRef.current.style.transform = `translate3d(${p.currentX.toFixed(2)}px, ${p.currentY.toFixed(2)}px, 0px) rotateX(${p.rotateX.toFixed(2)}deg) rotateY(${p.rotateY.toFixed(2)}deg)`;
      }

      animId = requestAnimationFrame(update);
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    animId = requestAnimationFrame(update);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div className="relative aspect-square w-full max-w-md sm:absolute sm:inset-0 sm:z-[1] sm:m-auto sm:w-[46%] sm:max-w-none lg:w-[37%] select-none flex items-center justify-center">
      {/* Ambient Radial Backlight */}
      <div 
        aria-hidden="true" 
        className="pointer-events-none absolute inset-0 m-auto h-56 w-56 rounded-full bg-[#88E788] opacity-20 blur-[160px]" 
      />
      
      {/* 3D Glass Emblem with Mouse Parallax */}
      <img 
        ref={markRef}
        src="/brand/hero-mark-new.png" 
        alt="Digital 3D Mark" 
        width={1254}
        height={1254}
        className="relative z-10 h-full w-full object-contain drop-shadow-[0_25px_60px_rgba(0,0,0,0.8)] transition-transform duration-75 will-change-transform"
        loading="eager"
      />
    </div>
  );
};
