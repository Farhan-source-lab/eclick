import React from 'react';

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
  currentPath?: string;
}

export const MobileNav: React.FC<MobileNavProps> = ({ isOpen, onClose, currentPath = '/' }) => {
  if (!isOpen) return null;

  const links = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'About Us', href: '/about' },
    { label: 'Locations', href: '/locations' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <div className="fixed inset-0 z-50 flex justify-end md:hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose} 
        className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
      />

      {/* Drawer */}
      <div className="relative z-10 flex h-full w-4/5 max-w-sm flex-col justify-between border-l border-(--color-border) bg-background p-8 shadow-2xl">
        <div>
          {/* Header row in drawer */}
          <div className="flex items-center justify-between pb-8 border-b border-(--color-border)">
            <div className="flex items-center gap-2">
              <img src="/brand/eclick-logo.png" alt="Eclick Logo" className="h-7 w-auto filter brightness-0 invert" />
            </div>

            <button
              onClick={onClose}
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-(--color-border) text-foreground hover:text-(--color-cta)"
              aria-label="Close menu"
            >
              ✕
            </button>
          </div>

          {/* Links list */}
          <nav className="mt-8 flex flex-col gap-5">
            {links.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={onClose}
                  className={`font-display text-lg tracking-wider transition-colors ${
                    isActive ? 'text-(--color-cta) font-bold' : 'text-foreground/80 hover:text-(--color-cta)'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t border-(--color-border)">
          <a
            href="/contact"
            onClick={onClose}
            className="flex w-full items-center justify-center rounded-full bg-(--color-cta) py-3 font-display text-xs uppercase tracking-wider text-(--color-cta-contrast) font-bold"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
};
