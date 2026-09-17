import React, { useState } from 'react';
import { RollingButton } from '../components/RollingButton';

export const ContactPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: [] as string[],
    budget: '$5,000 - $10,000',
    message: '',
  });

  const availableServices = [
    'Web Design & Dev',
    'Search Engine Optimization',
    'E-Commerce Storefront',
    'Paid Ads (PPC / Meta)',
    'Mobile Application',
    'Commercial Videography',
    'AI Automations',
  ];

  const toggleService = (srv: string) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(srv)
        ? prev.services.filter((s) => s !== srv)
        : [...prev.services, srv],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Header */}
      <section className="relative px-6 pt-36 pb-16 text-center sm:px-12 lg:px-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-(--color-cta) opacity-20 blur-[160px]"
        />
        <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
          <div className="inline-block rounded-full border border-foreground/30 px-5 py-1.5 mb-6">
            <span className="font-display text-xs uppercase tracking-widest text-(--color-cta)">Get In Touch</span>
          </div>

          <h1 className="font-display text-4xl font-extrabold sm:text-6xl">
            Let's Build Something Meaningful
          </h1>

          <p className="mt-5 text-base text-foreground/75 sm:text-xl max-w-2xl leading-relaxed">
            Tell us about your project goals. We’ll review your details and respond with a tailored proposal and consultation time within 24 hours.
          </p>
        </div>
      </section>

      {/* Main Form & Contact Information Grid */}
      <section className="px-6 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-12 lg:grid-cols-12">
          {/* Left Column: Form */}
          <div className="rounded-[28px] border border-(--color-border) bg-(--color-surface) p-8 sm:p-12 lg:col-span-8 shadow-xl">
            {submitted ? (
              <div className="py-16 text-center">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-(--color-cta)/20 text-(--color-cta) text-3xl">
                  ✓
                </div>
                <h3 className="font-display text-2xl font-bold sm:text-3xl text-foreground">
                  Thank You for Reaching Out!
                </h3>
                <p className="mt-3 text-base text-foreground/70 max-w-md mx-auto leading-relaxed">
                  We’ve received your project inquiry. A senior digital strategist from our Toronto team will review your requirements and follow up within 24 hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="mt-8 rounded-full border border-(--color-border) px-6 py-2.5 text-xs font-display uppercase tracking-wider text-foreground hover:border-(--color-cta)"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-display uppercase tracking-wider text-foreground/80 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Michael Smith"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full rounded-xl border border-(--color-border) bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-(--color-cta) focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-display uppercase tracking-wider text-foreground/80 mb-2">
                      Work Email *
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="michael@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full rounded-xl border border-(--color-border) bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-(--color-cta) focus:outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  <div>
                    <label className="block text-xs font-display uppercase tracking-wider text-foreground/80 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      placeholder="+1 (647) 000-0000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full rounded-xl border border-(--color-border) bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-(--color-cta) focus:outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-display uppercase tracking-wider text-foreground/80 mb-2">
                      Company / Organization
                    </label>
                    <input
                      type="text"
                      placeholder="Company Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full rounded-xl border border-(--color-border) bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-(--color-cta) focus:outline-none"
                    />
                  </div>
                </div>

                {/* Services Checkboxes */}
                <div>
                  <label className="block text-xs font-display uppercase tracking-wider text-foreground/80 mb-3">
                    Services You Need (Select all that apply)
                  </label>
                  <div className="flex flex-wrap gap-2.5">
                    {availableServices.map((srv) => {
                      const isSelected = formData.services.includes(srv);
                      return (
                        <button
                          key={srv}
                          type="button"
                          onClick={() => toggleService(srv)}
                          className={`rounded-full px-4 py-2 text-xs font-display transition-all ${
                            isSelected
                              ? 'bg-(--color-cta) text-(--color-cta-contrast) font-bold'
                              : 'border border-(--color-border) bg-background/50 text-foreground/80 hover:border-(--color-cta)'
                          }`}
                        >
                          {isSelected ? '✓ ' : '+ '}
                          {srv}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Budget Range */}
                <div>
                  <label className="block text-xs font-display uppercase tracking-wider text-foreground/80 mb-2">
                    Estimated Project Budget
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="w-full rounded-xl border border-(--color-border) bg-background px-4 py-3 text-sm text-foreground focus:border-(--color-cta) focus:outline-none"
                  >
                    <option value="Under $5,000">Under $5,000</option>
                    <option value="$5,000 - $10,000">$5,000 - $10,000</option>
                    <option value="$10,000 - $25,000">$10,000 - $25,000</option>
                    <option value="$25,000+">$25,000+</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-display uppercase tracking-wider text-foreground/80 mb-2">
                    Project Details & Goals *
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us about what you want to achieve, any reference websites, timeline, etc."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full rounded-xl border border-(--color-border) bg-background px-4 py-3 text-sm text-foreground placeholder:text-foreground/30 focus:border-(--color-cta) focus:outline-none"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  className="mt-2 flex w-full items-center justify-center gap-2 rounded-full bg-(--color-cta) py-3.5 font-display text-xs uppercase tracking-widest text-(--color-cta-contrast) font-bold transition-transform hover:scale-[1.01]"
                >
                  <span>Submit Inquiry</span>
                  <img src="/brand/icon-send.png" alt="" className="h-4 w-4" />
                </button>
              </form>
            )}
          </div>

          {/* Right Column: Direct Info */}
          <div className="flex flex-col justify-between rounded-[28px] border border-(--color-border) bg-(--color-surface)/50 p-8 sm:p-10 lg:col-span-4">
            <div>
              <span className="font-display text-xs uppercase tracking-widest text-(--color-cta)">Direct Contact</span>
              <h3 className="mt-2 font-display text-2xl font-bold sm:text-3xl text-foreground">
                We're Here to Help
              </h3>

              <div className="mt-8 flex flex-col gap-6">
                <div>
                  <p className="font-display text-xs tracking-wider text-foreground/60 uppercase">Email Us</p>
                  <a href="mailto:contact@aethdigital.com" className="mt-1 text-base font-semibold text-foreground hover:text-(--color-cta)">
                    contact@aethdigital.com
                  </a>
                </div>

                <div>
                  <p className="font-display text-xs tracking-wider text-foreground/60 uppercase">Call or Text</p>
                  <a href="tel:+16479488318" className="mt-1 text-base font-semibold text-foreground hover:text-(--color-cta)">
                    +1 (647) 948-8318
                  </a>
                </div>

                <div>
                  <p className="font-display text-xs tracking-wider text-foreground/60 uppercase">Location</p>
                  <p className="mt-1 text-base font-semibold text-foreground">
                    Toronto, Ontario, Canada
                  </p>
                  <p className="text-xs text-foreground/60">Serving clients across Canada & USA</p>
                </div>

                <div>
                  <p className="font-display text-xs tracking-wider text-foreground/60 uppercase">Business Hours</p>
                  <p className="mt-1 text-sm text-foreground/80">Monday – Friday: 9:00 AM – 6:00 PM EST</p>
                  <p className="text-sm text-foreground/80">Weekend: Emergency support only</p>
                </div>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-(--color-border) bg-background/50 p-6">
              <p className="font-display text-sm font-semibold text-(--color-cta)">⚡ Fast Turnaround</p>
              <p className="mt-1 text-xs leading-relaxed text-foreground/70">
                Inquiries submitted on business days receive detailed scope estimates within 24 hours.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
