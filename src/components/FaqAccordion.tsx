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
            className={`rounded-2xl border transition-all duration-300 ${
              isOpen
                ? 'border-(--color-cta) bg-(--color-surface) shadow-sm'
                : 'border-(--color-border) bg-(--color-surface)/40 hover:border-(--color-cta)/40'
            }`}
          >
            <button
              onClick={() => toggle(idx)}
              className="flex w-full items-center justify-between p-6 text-left"
              aria-expanded={isOpen}
            >
              <span className="font-display text-base font-semibold text-foreground sm:text-lg">
                {item.q}
              </span>
              <span
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-(--color-border) text-sm font-bold transition-transform duration-300 ${
                  isOpen ? 'rotate-45 border-(--color-cta) text-(--color-cta)' : 'text-foreground/60'
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
                <p className="px-6 pb-6 text-sm leading-relaxed text-foreground/80 sm:text-base">
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
