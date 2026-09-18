import React, { useState } from 'react';
import { FaqItem } from '../types';

interface FaqAccordionProps {
  items: FaqItem[];
  className?: string;
}

export const FaqAccordion: React.FC<FaqAccordionProps> = ({ items, className = '' }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <div className={`flex flex-col gap-4 ${className}`}>
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div
            key={idx}
            className={`rounded-[20px] border backdrop-blur-xl transition-all duration-300 ${
              isOpen
                ? 'border-[#88E788]/50 bg-[#141416]/90 shadow-lg shadow-[#88E788]/5'
                : 'border-white/10 bg-[#141416]/40 hover:border-white/20 hover:bg-[#141416]/70'
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between p-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-semibold text-white sm:text-lg">
                {item.q}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-sm font-bold transition-all duration-300 ${
                  isOpen
                    ? 'rotate-45 border-[#88E788]/60 text-[#88E788] bg-[#88E788]/10'
                    : 'border-white/10 text-white/60 bg-white/5'
                }`}
              >
                +
              </span>
            </button>

            <div
              className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-6 pb-6 text-sm leading-relaxed text-white/70 sm:text-base">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
