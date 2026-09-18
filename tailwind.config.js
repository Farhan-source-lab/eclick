/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        surface: 'var(--color-surface)',
        'surface-2': 'var(--color-surface-2)',
        card: 'var(--color-card)',
        text: 'var(--color-text)',
        'text-muted': 'var(--color-text-muted)',
        border: 'var(--color-border)',
        accent: 'var(--color-accent)',
        'accent-soft': 'var(--color-accent-soft)',
        'accent-contrast': 'var(--color-accent-contrast)',
        cta: 'var(--color-cta)',
        'cta-contrast': 'var(--color-cta-contrast)',
        ink: 'var(--color-ink)',
        'ink-contrast': 'var(--color-ink-contrast)',
        'ink-border': 'var(--color-ink-border)',
        background: 'var(--color-bg)',
        foreground: 'var(--color-text)',
        cream: '#eee6c1',
        'cream-dark': '#141416',
        green: '#88E788',
        'green-soft': 'rgba(136, 231, 136, 0.15)',
      },
      fontFamily: {
        display: ['"Cinzel"', '"Instrument Serif"', 'Georgia', 'serif'],
        serif: ['"Instrument Serif"', '"Cinzel"', 'Georgia', 'serif'],
        sans: ['"Mona Sans"', '"Exo 2"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        body: ['"Mona Sans"', '"Exo 2"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        mono: ['"Geist Mono"', 'ui-monospace', 'monospace'],
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translate(0)' },
          '100%': { transform: 'translate(-20%)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        marquee: 'marquee 28s linear infinite',
        'fade-in': 'fade-in 0.4s ease-out',
      },
      borderRadius: {
        sm: 'var(--radius-sm, 6px)',
        md: 'var(--radius-md, 10px)',
        lg: 'var(--radius-lg, 16px)',
      },
    },
  },
  plugins: [],
};
