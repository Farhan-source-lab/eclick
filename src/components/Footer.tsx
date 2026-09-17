import React from 'react';
import { servicesData } from '../data/servicesData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-(--color-border) bg-(--color-surface)/50 px-6 pt-16 pb-12 sm:px-12 lg:px-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand Col */}
          <div className="lg:col-span-2">
            <a href="/" className="flex items-center gap-2.5">
              <img 
                src="/brand/letter-a-logo.png" 
                alt="AETH Digital" 
                className="h-9 w-auto object-contain" 
              />
              <span className="font-display text-lg font-bold tracking-widest text-foreground">
                AETH DIGITAL<span className="text-(--color-cta)">.</span>
              </span>
            </a>

            <p className="mt-4 max-w-sm text-sm leading-relaxed text-foreground/70">
              A premium digital agency specializing in high-converting web platforms, algorithmic SEO, custom mobile applications, and enterprise AI automation.
            </p>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-3">
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="rounded-full p-1 opacity-70 transition-opacity hover:opacity-100">
                <img src="/brand/icon-instagram-circle.svg" alt="Instagram" className="h-6 w-6" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noreferrer" className="rounded-full p-1 opacity-70 transition-opacity hover:opacity-100">
                <img src="/brand/icon-facebook-circle.svg" alt="Facebook" className="h-6 w-6" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="rounded-full p-1 opacity-70 transition-opacity hover:opacity-100">
                <img src="/brand/icon-linkedin-circle.svg" alt="LinkedIn" className="h-6 w-6" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="rounded-full p-1 opacity-70 transition-opacity hover:opacity-100">
                <img src="/brand/icon-youtube-circle.svg" alt="YouTube" className="h-6 w-6" />
              </a>
            </div>
          </div>

          {/* Services Links */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-(--color-cta) mb-4">
              Services
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-foreground/80">
              {servicesData.slice(0, 6).map((s) => (
                <li key={s.slug}>
                  <a href={`/services/${s.slug}`} className="transition-colors hover:text-(--color-cta)">
                    {s.shortTitle}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-display text-xs uppercase tracking-widest text-(--color-cta) mb-4">
              Company
            </h4>
            <ul className="flex flex-col gap-2.5 text-sm text-foreground/80">
              <li><a href="/about" className="transition-colors hover:text-(--color-cta)">About Us</a></li>
              <li><a href="/projects" className="transition-colors hover:text-(--color-cta)">Case Studies</a></li>
              <li><a href="/locations" className="transition-colors hover:text-(--color-cta)">Locations</a></li>
              <li><a href="/faq" className="transition-colors hover:text-(--color-cta)">FAQ</a></li>
              <li><a href="/blog" className="transition-colors hover:text-(--color-cta)">Insights</a></li>
              <li><a href="/contact" className="transition-colors hover:text-(--color-cta)">Contact</a></li>
            </ul>
          </div>

          {/* Contact Details & Back to Top */}
          <div className="flex flex-col justify-between">
            <div>
              <h4 className="font-display text-xs uppercase tracking-widest text-(--color-cta) mb-4">
                Inquiries
              </h4>
              <p className="text-sm text-foreground/80">contact@aethdigital.com</p>
              <p className="mt-1 text-sm text-foreground/60">+1 (647) 948-8318</p>
              <p className="mt-2 text-xs text-foreground/60">Toronto, Ontario, Canada</p>
            </div>

            <button
              onClick={scrollToTop}
              type="button"
              className="mt-6 flex items-center gap-2 self-start rounded-full border border-(--color-border) px-4 py-2 text-xs font-display uppercase tracking-wider text-foreground transition-all hover:border-(--color-cta) hover:text-(--color-cta)"
            >
              <span>Back to top</span>
              <img src="/brand/icon-scroll-top.svg" alt="" className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-(--color-border) pt-8 text-xs text-foreground/60 sm:flex-row">
          <p>© {new Date().getFullYear()} AETH Digital Inc. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <a href="/privacy" className="hover:underline">Privacy Policy</a>
            <a href="/terms" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
