import React, { useState } from 'react';
import { ScrollReveal } from './ScrollReveal';

const SERVICES = [
  'AI Solutions',
  'Software Development',
  'Digital Marketing & SEO',
  'Graphic Design & Branding',
  'Digital Transformation',
  'Video Production & Editing',
  'Business Intelligence',
  'AI Automations',
];

const BUDGETS = [
  'Under $1,200',
  '$1,200 – $3,000',
  '$3,000 – $7,000',
  '$7,000 – $15,000',
  '$15,000+',
  'Not sure yet',
];

interface HomeContactSectionProps {
  title?: string;
  subtitle?: string;
}

export const HomeContactSection: React.FC<HomeContactSectionProps> = ({
  title = "Let's create something wonderful",
  subtitle = "Bring your idea to life. We welcome inquiries, collaborations, and project discussions.",
}) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [selectedBudget, setSelectedBudget] = useState<string>('');
  const [submitted, setSubmitted] = useState(false);

  const toggleService = (svc: string) => {
    setSelectedServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="relative px-4 py-12 sm:px-16 lg:px-24 sm:py-20 bg-[#0a0a0a] overflow-hidden" aria-labelledby="contact-heading">
      {/* Ambient background glow vectors */}
      <div 
        aria-hidden="true" 
        className="absolute right-0 bottom-0 z-0 h-96 w-96 rounded-full bg-[#88E788]/10 blur-[160px] pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-0 z-0 h-96 w-96 rounded-full bg-[#88E788]/10 blur-[160px] pointer-events-none"
      />

      <ScrollReveal className="relative z-10 max-w-7xl mx-auto">
        {/* Seamless container: Cardless & edge-friendly on mobile, architectural capsule card on desktop */}
        <div className="rounded-none border-0 bg-transparent p-0 shadow-none sm:rounded-[35px] sm:border sm:border-white/10 sm:bg-[#141416]/80 sm:p-10 lg:p-14 sm:shadow-[0_20px_50px_rgba(0,0,0,0.6)] sm:backdrop-blur-xl">
          <div className="grid grid-cols-1 gap-8 sm:gap-12 lg:grid-cols-2">
          
            {/* Left Column (Desktop) / Section Header & Contact Details */}
            <div className="flex flex-col justify-between text-white">
              <div>
                <p className="flex items-center gap-1.5 font-semibold text-[#88E788] text-xs sm:text-sm tracking-wide">
                  <span aria-hidden="true" className="text-base sm:text-lg leading-none">•</span> Get started
                </p>
                <h2 
                  id="contact-heading" 
                  className="mt-2 sm:mt-3 mb-3 sm:mb-5 text-left font-display text-2xl sm:text-4xl lg:text-[46px] font-bold leading-[1.15]"
                >
                  {title}
                </h2>
                <div className="mb-3 sm:mb-4 h-px w-16 sm:w-20 bg-white/20" aria-hidden="true" />
                <p className="text-xs sm:text-base text-white/60 leading-relaxed">
                  {subtitle}
                </p>
              </div>

              {/* Desktop Contact Details (Hidden on mobile, rendered at the bottom for clean mobile flow) */}
              <div className="hidden lg:block mt-12 lg:mt-20">
                {/* Social Links */}
                <div className="mb-6 flex items-center gap-4">
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://www.facebook.com/profile.php?id=61590183133759" 
                    aria-label="Facebook"
                    className="transition-opacity hover:opacity-80"
                  >
                    <img 
                      alt="Facebook" 
                      loading="lazy" 
                      width="26" 
                      height="26" 
                      src="/brand/icon-facebook-circle.svg" 
                    />
                  </a>
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://www.instagram.com/eclick.techsolutions/" 
                    aria-label="Instagram"
                    className="transition-opacity hover:opacity-80"
                  >
                    <img 
                      alt="Instagram" 
                      loading="lazy" 
                      width="26" 
                      height="26" 
                      src="/brand/icon-instagram-circle.svg" 
                    />
                  </a>
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://www.linkedin.com/company/eclicktechsolutions/posts/?feedView=all" 
                    aria-label="LinkedIn"
                    className="transition-opacity hover:opacity-80"
                  >
                    <img 
                      alt="LinkedIn" 
                      loading="lazy" 
                      width="26" 
                      height="26" 
                      src="/brand/icon-linkedin-circle.svg" 
                    />
                  </a>
                  <a 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    href="https://wa.me/919032466511" 
                    aria-label="WhatsApp"
                    className="transition-opacity hover:opacity-80"
                  >
                    <img 
                      alt="WhatsApp" 
                      loading="lazy" 
                      width="26" 
                      height="26" 
                      src="/brand/icon-whatsapp-circle.svg" 
                    />
                  </a>
                </div>

                {/* Direct Inquiries & Locations */}
                <div className="flex flex-col gap-3">
                  <a 
                    href="mailto:info@eclicktechsolutions.com" 
                    className="flex items-center gap-2.5 group text-sm sm:text-base"
                  >
                    <svg 
                      viewBox="0 0 24 24" 
                      className="h-4 w-4 shrink-0 fill-none stroke-[#88E788] stroke-[2] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
                      strokeLinecap="round" 
                      strokeLinejoin="round"
                      aria-hidden="true"
                    >
                      <line x1="22" y1="2" x2="11" y2="13"></line>
                      <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                    </svg>
                    <span className="font-sans text-xs sm:text-sm text-[#eee6c1] underline decoration-[#eee6c1]/40 group-hover:decoration-[#88E788] transition-colors">
                      info@eclicktechsolutions.com
                    </span>
                  </a>

                  {/* Phone Numbers */}
                  <div className="mt-2 flex flex-col gap-1.5 text-xs sm:text-sm text-[#b7af98]">
                    <p className="flex items-center gap-2">
                      <span className="text-[#88E788] font-semibold">WA:</span>
                      <a href="https://wa.me/919032466511" target="_blank" rel="noopener noreferrer" className="hover:text-[#eee6c1] transition-colors font-medium">+91 90324 66511</a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#88E788] font-semibold">IND:</span>
                      <a href="tel:+918919248052" className="hover:text-[#eee6c1] transition-colors">+91 89192 48052</a>
                    </p>
                    <p className="flex items-center gap-2">
                      <span className="text-[#88E788] font-semibold">KSA:</span>
                      <a href="tel:+966507701476" className="hover:text-[#eee6c1] transition-colors">+966 50 770 1476</a>
                    </p>
                  </div>

                  {/* Global Operating Presence */}
                  <div className="mt-3 pt-3 border-t border-white/10">
                    <p className="text-[11px] uppercase tracking-widest text-[#88E788] font-semibold">Operating Across</p>
                    <p className="mt-1 text-xs font-medium tracking-wide text-[#eee6c1]/90">
                      INDIA &nbsp;•&nbsp; USA &nbsp;•&nbsp; UAE &nbsp;•&nbsp; KSA
                    </p>
                  </div>

                  {/* Official Website */}
                  <div className="mt-2">
                    <a 
                      href="https://www.eclicktechsolutions.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-xs text-[#b7af98] hover:text-[#88E788] transition-colors"
                    >
                      www.eclicktechsolutions.com
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div>
              <h3 className="hidden sm:block mb-6 font-display text-2xl font-medium text-[#eee6c1] sm:text-3xl">
                Let's talk
              </h3>

              {submitted ? (
                <div className="rounded-2xl border border-[#88E788]/40 bg-[#88E788]/10 p-6 sm:p-8 text-center text-white">
                  <h4 className="font-display text-lg sm:text-xl font-bold mb-2 text-[#88E788]">Thank you!</h4>
                  <p className="text-xs sm:text-sm text-white/60">Your message has been sent. We'll be in touch with you shortly.</p>
                </div>
              ) : (
                <form className="flex flex-col gap-4 sm:gap-6" onSubmit={handleSubmit}>
                  {/* Full Name & Company */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                    <input 
                      className="w-full border-0 border-b border-white/20 bg-transparent px-0 py-2 text-xs sm:text-sm text-white outline-none placeholder:text-white/40 focus:border-[#88E788] transition-colors"
                      type="text" 
                      placeholder="Full Name *" 
                      required 
                      name="first_name"
                    />
                    <input 
                      className="w-full border-0 border-b border-white/20 bg-transparent px-0 py-2 text-xs sm:text-sm text-white outline-none placeholder:text-white/40 focus:border-[#88E788] transition-colors"
                      type="text" 
                      placeholder="Company" 
                      name="company_name"
                    />
                  </div>

                  {/* Email & Phone */}
                  <div className="flex flex-col gap-4 sm:flex-row sm:gap-6">
                    <input 
                      className="w-full border-0 border-b border-white/20 bg-transparent px-0 py-2 text-xs sm:text-sm text-white outline-none placeholder:text-white/40 focus:border-[#88E788] transition-colors"
                      type="email" 
                      placeholder="Email Address *" 
                      required 
                      name="email"
                    />
                    <input 
                      className="w-full border-0 border-b border-white/20 bg-transparent px-0 py-2 text-xs sm:text-sm text-white outline-none placeholder:text-white/40 focus:border-[#88E788] transition-colors"
                      type="tel" 
                      placeholder="Phone Number" 
                      name="phone"
                    />
                  </div>

                  {/* Service Selection */}
                  <div className="mt-1">
                    <p className="mb-2 text-[11px] sm:text-xs font-semibold text-white/80">
                      I'm interested in *
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {SERVICES.map((svc) => {
                        const isSelected = selectedServices.includes(svc);
                        return (
                          <button
                            key={svc}
                            type="button"
                            onClick={() => toggleService(svc)}
                            className={`rounded-full px-3 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs transition-all cursor-pointer font-medium ${
                              isSelected
                                ? 'border border-[#88E788] bg-[#88E788] text-[#0a0a0a] font-bold shadow-[0_0_15px_rgba(136,231,136,0.3)]'
                                : 'border border-white/15 bg-transparent text-white/75 hover:border-white/40'
                            }`}
                          >
                            {svc}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Budget Selection */}
                  <div className="mt-1">
                    <p className="mb-2 text-[11px] sm:text-xs font-semibold text-white/80">
                      Budget *
                    </p>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {BUDGETS.map((b) => {
                        const isSelected = selectedBudget === b;
                        return (
                          <button
                            key={b}
                            type="button"
                            onClick={() => setSelectedBudget(b)}
                            className={`rounded-full px-3 py-1 sm:px-3.5 sm:py-1.5 text-[11px] sm:text-xs transition-all cursor-pointer font-medium ${
                              isSelected
                                ? 'border border-[#88E788] bg-[#88E788] text-[#0a0a0a] font-bold shadow-[0_0_15px_rgba(136,231,136,0.3)]'
                                : 'border border-white/15 bg-transparent text-white/75 hover:border-white/40'
                            }`}
                          >
                            {b}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Message Textarea */}
                  <div className="mt-1">
                    <textarea 
                      className="w-full border-0 border-b border-white/20 bg-transparent px-0 py-2 text-xs sm:text-sm text-white outline-none placeholder:text-white/40 focus:border-[#88E788] transition-colors min-h-[70px] sm:min-h-[90px] resize-none"
                      name="message" 
                      placeholder="Tell us more about your project!" 
                      required
                    />
                  </div>

                  {/* Send Button */}
                  <button 
                    type="submit" 
                    className="mt-2 sm:mt-4 inline-flex h-11 sm:h-12 w-full items-center justify-center rounded-full bg-[#88E788] font-body text-xs font-bold uppercase tracking-wider text-[#0a0a0a] transition-all hover:bg-[#88E788]/90 hover:shadow-[0_0_20px_rgba(136,231,136,0.35)] cursor-pointer active:scale-98"
                  >
                    SEND MESSAGE
                  </button>
                </form>
              )}
            </div>

            {/* Mobile Contact Quick-Connect Bar (Rendered below form on screens < 1024px) */}
            <div className="block lg:hidden mt-6 pt-6 border-t border-white/10 text-white">
              {/* Direct Inquiries & Locations */}
              <div className="flex flex-col gap-3">
                <a 
                  href="mailto:info@eclicktechsolutions.com" 
                  className="flex items-center gap-2 group text-xs text-[#eee6c1]"
                >
                  <svg 
                    viewBox="0 0 24 24" 
                    className="h-3.5 w-3.5 shrink-0 fill-none stroke-[#88E788] stroke-[2]" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <line x1="22" y1="2" x2="11" y2="13"></line>
                    <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                  </svg>
                  <span className="font-sans underline decoration-[#eee6c1]/40">
                    info@eclicktechsolutions.com
                  </span>
                </a>

                {/* Phone Numbers */}
                <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-[#b7af98]">
                  <p className="flex items-center gap-1.5">
                    <span className="text-[#88E788] font-semibold">WA:</span>
                    <a href="https://wa.me/919032466511" target="_blank" rel="noopener noreferrer" className="hover:text-[#eee6c1] font-medium">+91 90324 66511</a>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <span className="text-[#88E788] font-semibold">IND:</span>
                    <a href="tel:+918919248052" className="hover:text-[#eee6c1]">+91 89192 48052</a>
                  </p>
                  <p className="flex items-center gap-1.5">
                    <span className="text-[#88E788] font-semibold">KSA:</span>
                    <a href="tel:+966507701476" className="hover:text-[#eee6c1]">+966 50 770 1476</a>
                  </p>
                </div>

                {/* Global Operating Presence & Socials */}
                <div className="flex flex-wrap items-center justify-between gap-3 pt-2">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-[#88E788] font-semibold">Operating Across</p>
                    <p className="text-[11px] font-medium text-[#eee6c1]/90">
                      INDIA • USA • UAE • KSA
                    </p>
                  </div>

                  <div className="flex items-center gap-3">
                    <a target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/profile.php?id=61590183133759" aria-label="Facebook">
                      <img alt="Facebook" width="22" height="22" src="/brand/icon-facebook-circle.svg" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/eclick.techsolutions/" aria-label="Instagram">
                      <img alt="Instagram" width="22" height="22" src="/brand/icon-instagram-circle.svg" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/company/eclicktechsolutions/posts/?feedView=all" aria-label="LinkedIn">
                      <img alt="LinkedIn" width="22" height="22" src="/brand/icon-linkedin-circle.svg" />
                    </a>
                    <a target="_blank" rel="noopener noreferrer" href="https://wa.me/919032466511" aria-label="WhatsApp">
                      <img alt="WhatsApp" width="22" height="22" src="/brand/icon-whatsapp-circle.svg" />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </ScrollReveal>
    </section>
  );
};
