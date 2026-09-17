import React, { useState, useEffect } from 'react';

interface HeaderProps {
  currentPath?: string;
  onOpenMobileMenu: () => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPath = '/', onOpenMobileMenu }) => {
  const [servicesOpen, setServicesOpen] = useState(false);

  const serviceItems = [
    { title: 'AI Solutions & Automations', href: '/services/ai-automations', desc: 'Gen AI, Agentic workflows & smart systems' },
    { title: 'Software & Web Development', href: '/services/web-design', desc: 'Modern high-converting web apps' },
    { title: 'Digital Marketing & SEO', href: '/services/seo', desc: 'Search ranking, paid ads & lead generation' },
    { title: 'Graphic Design & Branding', href: '/services/graphic-design', desc: 'Brand identity & marketing creatives' },
    { title: 'Video Production & Editing', href: '/services/videography', desc: 'Promotional videos & reels' },
  ];

  return (
    <header className="fixed inset-x-0 top-0 z-50 mx-[5%] mt-2 flex items-center justify-between rounded-[30px] p-2 backdrop-blur-xl bg-background/30 border border-foreground/10 transition-all duration-300">
      {/* Sleek Logo Mark on Left */}
      <a className="flex shrink-0 items-center px-2" aria-label="Eclick Tech Solutions home" href="/">
        <img 
          alt="Eclick Logo" 
          width="90" 
          height="36" 
          className="h-8 sm:h-9 w-auto object-contain filter brightness-0 invert opacity-90 hover:opacity-100 transition-opacity" 
          src="/brand/eclick-logo.png" 
        />
      </a>

      {/* Desktop Navigation Links */}
      <div className="hidden items-center gap-6 lg:flex">
        <a 
          className={`flex items-center gap-1 font-display text-xs uppercase transition-colors ${
            currentPath === '/' ? 'text-foreground font-semibold' : 'text-foreground/75 hover:text-(--color-accent)'
          }`} 
          href="/"
        >
          Home
        </a>

        {/* Services Dropdown */}
        <div 
          className="relative z-50"
          onMouseEnter={() => setServicesOpen(true)}
          onMouseLeave={() => setServicesOpen(false)}
        >
          <button 
            type="button" 
            aria-expanded={servicesOpen}
            className={`cursor-pointer flex items-center gap-1 font-display text-xs uppercase transition-colors ${
              currentPath.startsWith('/services') ? 'text-foreground font-semibold' : 'text-foreground/75 hover:text-(--color-accent)'
            }`}
          >
            Services
            <span aria-hidden="true" className={`text-[10px] transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`}>
              ▾
            </span>
          </button>

          {servicesOpen && (
            <div className="absolute top-full -left-4 pt-3 w-[340px] z-[100]">
              <div className="rounded-[22px] border border-white/15 bg-[#141416] p-2.5 shadow-[0_20px_50px_rgba(0,0,0,0.85)] backdrop-blur-3xl">
                {serviceItems.map((s) => (
                  <a
                    key={s.href}
                    href={s.href}
                    className="group block rounded-[14px] p-2.5 transition-colors hover:bg-white/[0.08]"
                  >
                    <div className="font-display text-xs font-semibold text-[#eee6c1] group-hover:text-[#ffaa01] transition-colors">{s.title}</div>
                    <div className="text-[11px] text-[#b7af98] mt-0.5 leading-snug">{s.desc}</div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <a 
          className={`flex items-center gap-1 font-display text-xs uppercase transition-colors ${
            currentPath.startsWith('/projects') ? 'text-foreground font-semibold' : 'text-foreground/75 hover:text-(--color-accent)'
          }`} 
          href="/projects"
        >
          Projects
        </a>

        <a 
          className={`flex items-center gap-1 font-display text-xs uppercase transition-colors ${
            currentPath === '/about' ? 'text-foreground font-semibold' : 'text-foreground/75 hover:text-(--color-accent)'
          }`} 
          href="/about"
        >
          About
        </a>

        <a 
          className={`flex items-center gap-1 font-display text-xs uppercase transition-colors ${
            currentPath.startsWith('/blog') ? 'text-foreground font-semibold' : 'text-foreground/75 hover:text-(--color-accent)'
          }`} 
          href="/blog"
        >
          Blog
        </a>

        <a 
          href="/contact" 
          className={`flex items-center gap-1 font-display text-xs uppercase transition-colors ${
            currentPath === '/contact' ? 'text-foreground font-semibold' : 'text-foreground/75 hover:text-(--color-accent)'
          }`}
        >
          Client Portal
        </a>

        {/* Free Estimate Pill + Circular Icon Button matching Image 1 */}
        <a className="group relative flex items-center gap-1 overflow-hidden" href="/contact">
          <span className="inline-flex h-10 items-start justify-center overflow-hidden rounded-full bg-(--color-accent-soft) px-4 font-display text-xs uppercase text-(--color-ink) font-semibold">
            <span className="grid text-center leading-10 transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
              <span>Free estimate</span>
              <span aria-hidden="true">Free estimate</span>
            </span>
          </span>
          <span aria-hidden="true" className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--color-accent-soft) p-2">
            <img 
              alt="" 
              loading="lazy" 
              width="20" 
              height="16" 
              className="h-3.5 w-auto object-contain filter brightness-0" 
              src="/brand/letter-a-logo.png" 
            />
          </span>
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div className="relative lg:hidden">
        <button 
          onClick={onOpenMobileMenu}
          type="button" 
          aria-label="Open menu" 
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-(--color-accent-soft) text-(--color-ink)"
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
            <path d="M1 1h16M1 7h16M1 13h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
};
