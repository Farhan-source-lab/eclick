import React, { useState } from 'react';

const SERVICES = [
  'Web Design',
  'SEO',
  'E-Commerce Solutions',
  'Social Media Marketing',
  'Mobile Development',
  'AI/Automation',
  'Videography',
  'Paid Ads',
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
  subtitle = "Bring your idea to life.",
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
    <section className="relative px-6 py-20 sm:px-16 lg:px-24 bg-[#141416] overflow-hidden" aria-labelledby="contact-heading">
      {/* Ambient background glow vectors */}
      <div 
        aria-hidden="true" 
        className="absolute right-0 bottom-0 z-0 h-96 w-96 rounded-full bg-[#ffaa01]/25 blur-[160px] pointer-events-none"
      />
      <div 
        aria-hidden="true" 
        className="absolute bottom-0 left-0 z-0 h-96 w-96 rounded-full bg-[#ffaa01]/25 blur-[160px] pointer-events-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto rounded-[35px] border border-white/10 bg-white/[0.04] p-6 shadow-[0_0_30px_rgba(0,0,0,0.5)] backdrop-blur-[50px] sm:p-10 lg:p-14">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
          
          {/* Left Column: Heading & Contact Info */}
          <div className="flex flex-col justify-between text-[#eee6c1]">
            <div>
              <p className="flex items-center gap-1.5 font-semibold text-[#ffaa01] text-sm tracking-wide">
                <span aria-hidden="true" className="text-lg leading-none">•</span> Get started
              </p>
              <h2 
                id="contact-heading" 
                className="mt-3 mb-5 text-left font-display text-3xl leading-[1.2] sm:text-4xl lg:text-[44px]"
              >
                {title}
              </h2>
              <div className="mb-4 h-px w-20 bg-white/30" aria-hidden="true" />
              <p className="text-sm sm:text-base text-[#b7af98]">
                {subtitle}
              </p>
            </div>

            <div className="mt-12 lg:mt-20">
              {/* Social Links */}
              <div className="mb-6 flex items-center gap-4">
                <a 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  href="#" 
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
                  href="#" 
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
                  href="https://www.linkedin.com/company/aethdigital/" 
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
              </div>

              {/* Direct Email */}
              <a 
                href="mailto:info@aethdigital.com" 
                className="flex items-center gap-3 group text-sm sm:text-base"
              >
                <img 
                  alt="" 
                  loading="lazy" 
                  width="22" 
                  height="22" 
                  src="/brand/icon-send.png" 
                />
                <span className="font-display text-[#eee6c1] underline decoration-[#eee6c1]/40 group-hover:decoration-[#ffaa01] transition-colors">
                  info@aethdigital.com
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Form */}
          <div>
            <h3 className="mb-6 font-display text-2xl font-medium text-[#eee6c1] sm:text-3xl">
              Let's talk
            </h3>

            {submitted ? (
              <div className="rounded-2xl border border-[#ffaa01]/40 bg-[#ffaa01]/10 p-8 text-center text-[#eee6c1]">
                <h4 className="font-display text-xl font-bold mb-2 text-[#ffaa01]">Thank you!</h4>
                <p className="text-sm text-[#b7af98]">Your message has been sent. We'll be in touch with you shortly.</p>
              </div>
            ) : (
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                {/* Full Name & Company */}
                <div className="flex flex-col gap-6 sm:flex-row">
                  <input 
                    className="w-full border-0 border-b border-white/20 bg-transparent px-0 py-2.5 text-sm text-[#eee6c1] outline-none placeholder:text-[#b7af98]/60 focus:border-[#ffaa01] transition-colors"
                    type="text" 
                    placeholder="Full Name" 
                    required 
                    name="first_name"
                  />
                  <input 
                    className="w-full border-0 border-b border-white/20 bg-transparent px-0 py-2.5 text-sm text-[#eee6c1] outline-none placeholder:text-[#b7af98]/60 focus:border-[#ffaa01] transition-colors"
                    type="text" 
                    placeholder="Company" 
                    name="company_name"
                  />
                </div>

                {/* Email & Phone */}
                <div className="flex flex-col gap-6 sm:flex-row">
                  <input 
                    className="w-full border-0 border-b border-white/20 bg-transparent px-0 py-2.5 text-sm text-[#eee6c1] outline-none placeholder:text-[#b7af98]/60 focus:border-[#ffaa01] transition-colors"
                    type="email" 
                    placeholder="Email" 
                    required 
                    name="email"
                  />
                  <input 
                    className="w-full border-0 border-b border-white/20 bg-transparent px-0 py-2.5 text-sm text-[#eee6c1] outline-none placeholder:text-[#b7af98]/60 focus:border-[#ffaa01] transition-colors"
                    type="tel" 
                    placeholder="Phone" 
                    name="phone"
                  />
                </div>

                {/* Service Selection */}
                <div>
                  <p className="mb-3 text-xs font-semibold text-[#eee6c1]/80">
                    I'm interested in *
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {SERVICES.map((svc) => {
                      const isSelected = selectedServices.includes(svc);
                      return (
                        <button
                          key={svc}
                          type="button"
                          onClick={() => toggleService(svc)}
                          className={`rounded-full px-3.5 py-1.5 text-xs transition-all cursor-pointer ${
                            isSelected
                              ? 'border border-[#ffaa01] bg-[#ffaa01] text-[#141416] font-semibold'
                              : 'border border-white/20 bg-transparent text-[#eee6c1]/80 hover:border-white/50'
                          }`}
                        >
                          {svc}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Selection */}
                <div>
                  <p className="mb-3 text-xs font-semibold text-[#eee6c1]/80">
                    Budget *
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {BUDGETS.map((b) => {
                      const isSelected = selectedBudget === b;
                      return (
                        <button
                          key={b}
                          type="button"
                          onClick={() => setSelectedBudget(b)}
                          className={`rounded-full px-3.5 py-1.5 text-xs transition-all cursor-pointer ${
                            isSelected
                              ? 'border border-[#ffaa01] bg-[#ffaa01] text-[#141416] font-semibold'
                              : 'border border-white/20 bg-transparent text-[#eee6c1]/80 hover:border-white/50'
                          }`}
                        >
                          {b}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Message Textarea */}
                <div>
                  <textarea 
                    className="w-full border-0 border-b border-white/20 bg-transparent px-0 py-2.5 text-sm text-[#eee6c1] outline-none placeholder:text-[#b7af98]/60 focus:border-[#ffaa01] transition-colors min-h-[90px] resize-none"
                    name="message" 
                    placeholder="Tell us more about your project!" 
                    required
                  />
                </div>

                {/* Send Button */}
                <button 
                  type="submit" 
                  className="mt-4 inline-flex h-12 w-full items-center justify-center rounded-full bg-[#eee6c1] font-display text-xs font-bold uppercase tracking-wider text-[#141416] transition-all hover:bg-[#ffaa01] cursor-pointer"
                >
                  SEND
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
