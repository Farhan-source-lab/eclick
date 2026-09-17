import React from 'react';
import { blogData } from '../data/blogData';
import { RollingButton } from '../components/RollingButton';
import { HomeContactSection } from '../components/HomeContactSection';

interface BlogPostPageProps {
  slug: string;
}

export const BlogPostPage: React.FC<BlogPostPageProps> = ({ slug }) => {
  const post = blogData.find((p) => p.slug === slug) || blogData[0];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. ARTICLE HEADER */}
      <section className="relative px-6 pt-36 pb-16 text-center sm:px-12 lg:px-24">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-(--color-cta) opacity-20 blur-[160px]"
        />

        <div className="relative z-10 mx-auto max-w-4xl flex flex-col items-center">
          <div className="flex items-center gap-3 text-xs text-(--color-cta) uppercase tracking-widest font-display mb-4">
            <span>{post.category}</span>
            <span>•</span>
            <span>{post.readTime}</span>
            <span>•</span>
            <span className="text-foreground/60">{post.date}</span>
          </div>

          <h1 className="font-display text-3xl font-extrabold sm:text-5xl lg:text-6xl leading-tight">
            {post.title}
          </h1>

          <div className="mt-8 flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-(--color-cta)/20 flex items-center justify-center font-display font-bold text-(--color-cta)">
              A
            </div>
            <div className="text-left">
              <p className="text-sm font-semibold text-foreground">{post.author.name}</p>
              <p className="text-xs text-foreground/60">{post.author.role}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. ARTICLE CONTENT */}
      <section className="px-6 pb-24 sm:px-12 lg:px-24">
        <article className="mx-auto max-w-3xl rounded-[28px] border border-(--color-border) bg-(--color-surface) p-8 sm:p-14 shadow-lg">
          <div className="flex flex-col gap-6 text-base sm:text-lg leading-relaxed text-foreground/85">
            {post.content.map((paragraph, idx) => (
              <p key={idx} className="leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-(--color-border) flex items-center justify-between">
            <a
              href="/blog"
              className="font-display text-xs uppercase tracking-wider text-(--color-cta) font-semibold hover:underline"
            >
              ← Back to All Articles
            </a>

            <RollingButton href="/contact" text="Discuss Your Strategy" variant="primary" />
          </div>
        </article>
      </section>

      <HomeContactSection />
    </div>
  );
};
