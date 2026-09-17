import React from 'react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#eee6c1] text-[#141416] transition-colors">
      <div className="px-6 py-14 sm:px-16 lg:px-24 max-w-7xl mx-auto">
        {/* Heading from Reference Site */}
        <h2 className="mb-10 font-display text-3xl leading-[1.2] sm:text-4xl lg:w-3/5 lg:text-[48px] text-[#141416]">
          Is there a fascinating project brewing in your mind?
        </h2>

        {/* Inquiries & Navigation Links */}
        <div className="flex flex-col gap-6 border-b border-[#141416]/20 pb-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
            <a 
              href="mailto:info@eclicktechsolutions.com?subject=Project%20request" 
              className="flex items-center gap-2 shrink-0 group"
            >
              <img 
                alt="" 
                loading="lazy" 
                width="22" 
                height="22" 
                src="/brand/icon-send.png" 
                className="brightness-0" 
              />
              <span className="font-display text-sm sm:text-base text-[#141416] underline decoration-[#141416]/40 group-hover:decoration-[#ffaa01] transition-colors">
                info@eclicktechsolutions.com
              </span>
            </a>
            <span className="hidden sm:inline text-[#141416]/30">•</span>
            <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-[#141416]/75">
              <a href="tel:+918919248052" className="hover:text-[#141416] transition-colors">+91 89192 48052 (IND)</a>
              <span>•</span>
              <a href="tel:+966507701476" className="hover:text-[#141416] transition-colors">+966 50 770 1476 (KSA)</a>
            </div>
          </div>

          <nav aria-label="Footer" className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a className="font-display text-xs text-[#141416] uppercase hover:opacity-60 transition-opacity" href="/">Home</a>
            <a className="font-display text-xs text-[#141416] uppercase hover:opacity-60 transition-opacity" href="/services/ai-automations">Services</a>
            <a className="font-display text-xs text-[#141416] uppercase hover:opacity-60 transition-opacity" href="/projects">Projects</a>
            <a className="font-display text-xs text-[#141416] uppercase hover:opacity-60 transition-opacity" href="/about">About</a>
            <a className="font-display text-xs text-[#141416] uppercase hover:opacity-60 transition-opacity" href="/blog">Blog</a>
            <a className="font-display text-xs text-[#141416] uppercase hover:opacity-60 transition-opacity" href="/contact">Contact us</a>
          </nav>
        </div>

        {/* Large E-Click Brand Logo in place of large text */}
        <div className="py-10 sm:py-14 flex items-center justify-center select-none">
          <img 
            src="/brand/eclick-logo.png" 
            alt="Eclick Tech Solutions" 
            className="h-24 sm:h-36 md:h-48 lg:h-56 w-auto max-w-[85%] object-contain brightness-0 opacity-90 hover:opacity-100 transition-opacity" 
          />
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between pt-2 text-[#141416]">
          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
              <img alt="Facebook" width="20" height="20" src="/brand/icon-facebook-circle.svg" className="brightness-0" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
              <img alt="Instagram" width="20" height="20" src="/brand/icon-instagram-circle.svg" className="brightness-0" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
              <img alt="LinkedIn" width="20" height="20" src="/brand/icon-linkedin-circle.svg" className="brightness-0" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="opacity-80 hover:opacity-100 transition-opacity">
              <img alt="YouTube" width="20" height="20" src="/brand/icon-youtube-circle.svg" className="brightness-0" />
            </a>
          </div>

          {/* Copyright & Legal */}
          <div className="flex flex-col items-center gap-2 text-xs sm:text-sm text-[#141416]/70 sm:flex-row sm:gap-6 text-center sm:text-left">
            <p>© {new Date().getFullYear()} ECLICK TECH SOLUTIONS. All rights reserved</p>
            <div className="flex items-center gap-4">
              <a className="hover:text-[#141416] transition-colors" href="/privacy">Privacy Policy</a>
              <a className="hover:text-[#141416] transition-colors" href="/terms">Terms &amp; Conditions</a>
            </div>
          </div>

          {/* Scroll to Top */}
          <button 
            onClick={scrollToTop} 
            type="button"
            className="flex items-center gap-2 p-1 text-[#141416] hover:opacity-60 transition-opacity cursor-pointer"
          >
            <span className="font-display text-xs uppercase">Scroll top</span>
            <img alt="" width="15" height="15" src="/brand/icon-scroll-top.svg" className="brightness-0" />
          </button>
        </div>
      </div>
    </footer>
  );
};
