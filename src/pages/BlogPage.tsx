import React from 'react';
import { blogData } from '../data/blogData';
import { HomeContactSection } from '../components/HomeContactSection';

export const BlogPage: React.FC = () => {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Hero Header */}
      <section className="relative px-6 pt-36 pb-20 text-center sm:px-12 lg:px-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/3 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-(--color-cta) opacity-20 blur-[160px]"
        />
        <div className="relative z-10 mx-auto max-w-3xl">
          <div className="inline-block rounded-full border border-foreground/30 px-5 py-1.5 mb-6">
            <span className="font-display text-xs uppercase tracking-widest text-(--color-cta)">Digital Insights</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold sm:text-6xl">
            Articles, Guides & Strategies
          </h1>
          <p className="mt-5 text-base text-foreground/75 sm:text-xl leading-relaxed">
            Actionable thoughts on modern web design, conversion architecture, high-efficiency SEO, and scaling paid advertising.
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="px-6 pb-24 sm:px-12 lg:px-24">
        <div className="mx-auto max-w-7xl grid grid-cols-1 gap-8 md:grid-cols-2">
          {blogData.map((post) => (
            <a
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col justify-between rounded-[28px] border border-(--color-border) bg-(--color-surface) p-8 transition-all duration-300 hover:border-(--color-cta) hover:shadow-xl"
            >
              <div>
                <div className="flex items-center justify-between text-xs text-(--color-text-muted) mb-4">
                  <span className="font-display uppercase tracking-widest text-(--color-cta)">
                    {post.category}
                  </span>
                  <span>{post.readTime}</span>
                </div>

                <h2 className="font-display text-2xl font-bold text-foreground group-hover:text-(--color-cta) transition-colors leading-snug">
                  {post.title}
                </h2>

                <p className="mt-4 text-sm leading-relaxed text-foreground/75 sm:text-base">
                  {post.excerpt}
                </p>
              </div>

              <div className="mt-8 flex items-center justify-between border-t border-(--color-border) pt-6">
                <span className="text-xs text-foreground/60">{post.date}</span>
                <span className="flex items-center gap-1 font-display text-xs uppercase tracking-wider text-(--color-cta) font-semibold group-hover:translate-x-1 transition-transform">
                  Read Article →
                </span>
              </div>
            </a>
          ))}
        </div>
      </section>

      <HomeContactSection />
    </div>
  );
};
