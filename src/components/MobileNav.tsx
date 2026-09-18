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
        className="fixed inset-0 bg-black/70 backdrop-blur-md transition-opacity" 
      />

      {/* Drawer */}
      <div className="relative z-10 flex h-full w-4/5 max-w-sm flex-col justify-between border-l border-white/10 bg-[#121214] p-8 shadow-2xl">
        <div>
          {/* Header row in drawer */}
          <div className="flex items-center justify-between pb-8 border-b border-white/10">
            <div className="flex items-center gap-2">
              <img src="/brand/eclick-logo.png" alt="Eclick Logo" className="h-7 w-auto filter brightness-0 invert" />
            </div>

            <button
              onClick={onClose}
              type="button"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-white hover:border-white/40 transition-colors"
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
                    isActive ? 'text-[#88E788] font-bold' : 'text-white/80 hover:text-[#88E788]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>
        </div>

        {/* Bottom CTA */}
        <div className="pt-6 border-t border-white/10">
          <a
            href="/contact"
            onClick={onClose}
            className="flex w-full items-center justify-center rounded-full bg-[#88E788] py-3.5 font-display text-xs uppercase tracking-wider text-[#0a0a0a] font-bold shadow-lg shadow-[#88E788]/20 transition-all hover:bg-[#88E788]/90"
          >
            Start Your Project
          </a>
        </div>
      </div>
    </div>
  );
};
