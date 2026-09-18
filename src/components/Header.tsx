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
    <header className="fixed inset-x-0 top-0 z-50 mx-[5%] mt-2 flex items-center justify-between rounded-[30px] p-2 backdrop-blur-xl bg-[#141416]/70 border border-white/10 transition-all duration-300 shadow-2xl">
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
          className={`flex items-center gap-1 font-display text-xs uppercase tracking-wider transition-colors ${
            currentPath === '/' ? 'text-white font-semibold' : 'text-white/70 hover:text-[#88E788]'
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
            className={`cursor-pointer flex items-center gap-1 font-display text-xs uppercase tracking-wider transition-colors ${
              currentPath.startsWith('/services') ? 'text-white font-semibold' : 'text-white/70 hover:text-[#88E788]'
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
                    <div className="font-display text-xs font-semibold text-white group-hover:text-[#88E788] transition-colors">{s.title}</div>
                    <div className="text-[11px] text-white/60 mt-0.5 leading-snug">{s.desc}</div>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

        <a 
          className={`flex items-center gap-1 font-display text-xs uppercase tracking-wider transition-colors ${
            currentPath.startsWith('/projects') ? 'text-white font-semibold' : 'text-white/70 hover:text-[#88E788]'
          }`} 
          href="/projects"
        >
          Projects
        </a>

        <a 
          className={`flex items-center gap-1 font-display text-xs uppercase tracking-wider transition-colors ${
            currentPath === '/about' ? 'text-white font-semibold' : 'text-white/70 hover:text-[#88E788]'
          }`} 
          href="/about"
        >
          About
        </a>

        <a 
          className={`flex items-center gap-1 font-display text-xs uppercase tracking-wider transition-colors ${
            currentPath.startsWith('/blog') ? 'text-white font-semibold' : 'text-white/70 hover:text-[#88E788]'
          }`} 
          href="/blog"
        >
          Blog
        </a>

        {/* Single unified CTA button: Get In Touch with animated arrow */}
        <a 
          href="/contact"
          className="group relative inline-flex h-10 items-center justify-center rounded-full bg-[#88E788] px-5 font-display text-xs uppercase tracking-wider font-semibold text-[#0a0a0a] transition-all duration-300 hover:bg-[#88E788]/90 hover:shadow-[0_0_20px_rgba(136,231,136,0.35)]"
        >
          <div className="flex items-center gap-2">
            {/* Rolling text with exact 40px line height */}
            <div className="h-10 overflow-hidden">
              <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-10">
                <span className="flex h-10 items-center whitespace-nowrap">Get In Touch</span>
                <span className="flex h-10 items-center whitespace-nowrap" aria-hidden="true">Get In Touch</span>
              </div>
            </div>

            {/* Micro-animated diagonal arrow directly beside text */}
            <span className="relative flex h-3.5 w-3.5 items-center justify-center overflow-hidden shrink-0" aria-hidden="true">
              <svg 
                viewBox="0 0 12 12" 
                className="absolute h-3 w-3 stroke-[#0a0a0a] stroke-[2.2] fill-none transition-transform duration-300 ease-out group-hover:translate-x-3 group-hover:-translate-y-3"
              >
                <path d="M2 10L10 2M10 2H4M10 2V8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <svg 
                viewBox="0 0 12 12" 
                className="absolute h-3 w-3 stroke-[#0a0a0a] stroke-[2.2] fill-none -translate-x-3 translate-y-3 transition-transform duration-300 ease-out group-hover:translate-x-0 group-hover:translate-y-0"
              >
                <path d="M2 10L10 2M10 2H4M10 2V8" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </a>
      </div>

      {/* Mobile Hamburger */}
      <div className="relative lg:hidden">
        <button 
          onClick={onOpenMobileMenu}
          type="button" 
          aria-label="Open menu" 
          className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
        >
          <svg width="18" height="14" viewBox="0 0 18 14" fill="none" aria-hidden="true">
            <path d="M1 1h16M1 7h16M1 13h16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        </button>
      </div>
    </header>
  );
};
