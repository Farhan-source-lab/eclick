import React from 'react';
import { blogData } from '../data/blogData';
import { HomeContactSection } from '../components/HomeContactSection';
import { ScrollReveal } from '../components/ScrollReveal';

export const BlogPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* Hero Header */}
      <section className="relative px-6 pt-36 pb-20 text-center sm:px-12 lg:px-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#88E788]/15 blur-[160px]"
        />
        <div className="relative z-10 mx-auto max-w-3xl flex flex-col items-center">
          <ScrollReveal direction="fade" delay={0.05}>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 backdrop-blur-md mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-[#88E788]" />
              <span className="font-mono text-xs uppercase tracking-widest text-[#88E788]">Digital Insights</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="font-display text-4xl font-extrabold sm:text-6xl text-white tracking-tight">
              Articles, Guides & Strategies
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <p className="mt-5 text-base text-white/70 sm:text-xl leading-relaxed">
              Actionable thoughts on modern web design, conversion architecture, high-efficiency SEO, and scaling paid advertising.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-6 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-2">
          {blogData.map((post, i) => (
            <ScrollReveal key={post.slug} direction="up" delay={0.08 * i}>
              <a
                href={`/blog/${post.slug}`}
                className="group flex flex-col justify-between rounded-[28px] border border-white/10 bg-[#141416]/80 p-8 backdrop-blur-xl transition-all duration-300 hover:border-[#88E788]/60 hover:bg-[#18181c] hover:-translate-y-1 h-full"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-white/50 mb-4">
                    <span className="font-mono uppercase tracking-widest text-[#88E788]">
                      {post.category}
                    </span>
                    <span>{post.readTime}</span>
                  </div>

                  <h2 className="font-display text-2xl font-bold text-white group-hover:text-[#88E788] transition-colors leading-snug">
                    {post.title}
                  </h2>

                  <p className="mt-4 text-sm leading-relaxed text-white/70 sm:text-base">
                    {post.excerpt}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-6">
                  <span className="text-xs text-white/50">{post.date}</span>
                  <span className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider text-[#88E788] font-semibold group-hover:translate-x-1 transition-transform">
                    Read Article →
                  </span>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </section>

      <HomeContactSection />
    </div>
  );
};
