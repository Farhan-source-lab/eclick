import React from 'react';
import { blogData } from '../data/blogData';
import { RollingButton } from '../components/RollingButton';
import { HomeContactSection } from '../components/HomeContactSection';
import { ScrollReveal } from '../components/ScrollReveal';

interface BlogPostPageProps {
  slug: string;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug }) => {
  const post = blogData.find((p) => p.slug === slug) || blogData[0];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#0a0a0a] text-white">
      {/* 1. ARTICLE HEADER */}
      <section className="relative px-6 pt-36 pb-16 text-center sm:px-12 lg:px-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-[#88E788]/15 blur-[160px]"
        />

        <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center">
          <ScrollReveal direction="fade" delay={0.05}>
            <div className="flex items-center gap-3 text-xs text-[#88E788] uppercase tracking-widest font-mono mb-6">
              <span>{post.category}</span>
              <span className="text-white/30">•</span>
              <span className="text-white/60">{post.readTime}</span>
              <span className="text-white/30">•</span>
              <span className="text-white/50">{post.date}</span>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.1}>
            <h1 className="font-display text-3xl font-extrabold sm:text-5xl lg:text-6xl text-white leading-tight tracking-tight">
              {post.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal direction="up" delay={0.15}>
            <div className="mt-8 flex items-center gap-3">
              <div className="h-10 w-10 rounded-full bg-[#88E788]/15 border border-[#88E788]/30 flex items-center justify-center font-mono font-bold text-[#88E788]">
                A
              </div>
              <div className="text-left">
                <p className="text-sm font-semibold text-white">{post.author.name}</p>
                <p className="text-xs text-white/50">{post.author.role}</p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* 2. ARTICLE CONTENT */}
      <section className="px-6 pb-24 sm:px-12 lg:px-24">
        <ScrollReveal direction="up" delay={0.1}>
          <article className="mx-auto max-w-3xl rounded-[28px] border border-white/10 bg-[#141416]/80 p-8 sm:p-14 shadow-2xl backdrop-blur-xl">
            <div className="flex flex-col gap-6 text-base sm:text-lg leading-relaxed text-white/80">
              {post.content.map((paragraph, idx) => (
                <p key={idx} className="leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 pt-8 border-t border-white/10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
              <a
                href="/blog"
                className="font-mono text-xs uppercase tracking-wider text-[#88E788] font-semibold hover:underline flex items-center gap-1"
              >
                ← Back to All Articles
              </a>

              <RollingButton href="/contact" text="Discuss Your Strategy" variant="primary" />
            </div>
          </article>
        </ScrollReveal>
      </section>

      <HomeContactSection />
    </div>
  );
};
