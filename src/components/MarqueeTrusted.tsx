import React from 'react';
import { ScrollReveal } from './ScrollReveal';

interface LogoItem {
  id: string;
  src: string;
  alt: string;
  imgClass?: string;
}

// All logos from /logos folder (excluding E click Final.png as requested)
const ROW_1_LOGOS: LogoItem[] = [
  { 
    id: 'aim', 
    src: '/client-logos/aim_true_colors.png', 
    alt: 'AIM United',
    imgClass: 'h-full w-full object-contain'
  },
  { 
    id: 'gdh', 
    src: '/client-logos/GDH%20logo(120PX).png', 
    alt: 'GDH Academy',
    imgClass: 'h-full w-full object-contain'
  },
  { 
    id: 'mace', 
    src: '/client-logos/MACE-1.png', 
    alt: 'MACE AI Academy',
    imgClass: 'h-full w-full object-contain'
  },
  { 
    id: 'dynamic', 
    src: '/client-logos/PHOTO-2026-06-06-11-35-08%202.jpg.jpeg', 
    alt: 'Dynamic Production',
    imgClass: 'h-full w-full object-contain'
  },
  { 
    id: 'redesign', 
    src: '/client-logos/redesign_large.png', 
    alt: 'Redesign Dental Clinics',
    imgClass: 'w-full h-auto max-h-full object-contain scale-120'
  },
  { 
    id: 'sas', 
    src: '/client-logos/PHOTO-2026-06-06-11-35-09%203.jpg.jpeg', 
    alt: 'SAS Dental Clinic',
    imgClass: 'h-full w-full object-contain'
  },
  { 
    id: 'saudisoft', 
    src: '/client-logos/saudisoft_large.png', 
    alt: 'Saudisoft',
    imgClass: 'w-full h-auto max-h-full object-contain scale-115'
  },
  { 
    id: 'amana', 
    src: '/client-logos/amana_large.png', 
    alt: 'Amana',
    imgClass: 'w-full h-auto max-h-full object-contain scale-130'
  },
  { 
    id: 'techno-paints', 
    src: '/client-logos/techno_paints_large.png', 
    alt: 'Techno Paints',
    imgClass: 'w-full h-auto max-h-full object-contain scale-120'
  },
  { 
    id: 'wallcraft', 
    src: '/client-logos/wallcraft_large.png', 
    alt: 'WallCraft Panels',
    imgClass: 'w-full h-auto max-h-full object-contain scale-115'
  },
];

// Row 2 with staggered order for visual variety moving in opposite direction
const ROW_2_LOGOS: LogoItem[] = [
  ROW_1_LOGOS[5],
  ROW_1_LOGOS[6],
  ROW_1_LOGOS[7],
  ROW_1_LOGOS[8],
  ROW_1_LOGOS[9],
  ROW_1_LOGOS[0],
  ROW_1_LOGOS[1],
  ROW_1_LOGOS[2],
  ROW_1_LOGOS[3],
  ROW_1_LOGOS[4],
];

export const MarqueeTrusted: React.FC = () => {
  // Repeating arrays for seamless, gapless infinite animation
  const row1List = [...ROW_1_LOGOS, ...ROW_1_LOGOS, ...ROW_1_LOGOS, ...ROW_1_LOGOS];
  const row2List = [...ROW_2_LOGOS, ...ROW_2_LOGOS, ...ROW_2_LOGOS, ...ROW_2_LOGOS];

  return (
    <section className="py-20 overflow-hidden bg-[#0a0a0a]" aria-labelledby="trusted-by-heading">
      <ScrollReveal>
        <p 
          id="trusted-by-heading" 
          className="mb-10 text-center font-display text-sm tracking-[0.2em] text-[#88E788] uppercase"
        >
          Trusted by
        </p>

      <div className="flex flex-col gap-6 select-none">
        {/* ROW 1: Moves smoothly to the left */}
        <div 
          className="relative w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="flex w-max animate-marquee-left gap-6 items-center hover:[animation-play-state:paused]">
            {row1List.map((item, idx) => (
              <div
                key={`r1-${item.id}-${idx}`}
                className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white p-3 sm:p-3.5 sm:h-28 sm:w-28 shadow-sm overflow-hidden"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={item.imgClass || 'h-full w-full object-contain'}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>

        {/* ROW 2: Moves smoothly in opposite direction */}
        <div 
          className="relative w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
            WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          }}
        >
          <div className="flex w-max animate-marquee-right gap-6 items-center hover:[animation-play-state:paused]">
            {row2List.map((item, idx) => (
              <div
                key={`r2-${item.id}-${idx}`}
                className="flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-white p-3 sm:p-3.5 sm:h-28 sm:w-28 shadow-sm overflow-hidden"
              >
                <img
                  src={item.src}
                  alt={item.alt}
                  className={item.imgClass || 'h-full w-full object-contain'}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </ScrollReveal>
  </section>
  );
};
