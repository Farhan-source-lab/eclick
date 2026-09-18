import React, { useEffect, useState } from 'react';

interface ThemeToggleProps {
  variant?: 'pill' | 'circle';
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ variant = 'pill' }) => {
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const saved = localStorage.getItem('app-theme') as 'dark' | 'light' | null;
    const initialTheme = saved || 'dark';
    setTheme(initialTheme);
    document.documentElement.setAttribute('data-theme', initialTheme);
  }, []);

  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    localStorage.setItem('app-theme', next);
    document.documentElement.setAttribute('data-theme', next);
  };

  if (variant === 'circle') {
    return (
      <button
        onClick={toggleTheme}
        type="button"
        className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-[#141416] text-white transition-all duration-300 hover:border-[#88E788] hover:text-[#88E788]"
        title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
        aria-label="Toggle visual theme"
      >
        {theme === 'dark' ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <circle cx="12" cy="12" r="4" strokeWidth="2" />
            <path strokeWidth="2" strokeLinecap="round" d="M12 2v2m0 16v2M4.93 4.93l1.41 1.41m11.32 11.32l1.41 1.41M2 12h2m16 0h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
          </svg>
        )}
      </button>
    );
  }

  // Exact pill toggle switch matching the reference screenshot
  return (
    <button
      onClick={toggleTheme}
      type="button"
      className="group relative flex h-7 w-[52px] items-center rounded-full border border-white/20 bg-white/5 p-0.5 backdrop-blur-md transition-all duration-300 hover:border-[#88E788] focus:outline-none"
      title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      aria-label="Toggle visual theme"
    >
      <span
        className={`inline-block h-5 w-5 transform rounded-full shadow-md transition-transform duration-300 group-hover:scale-105 ${
          theme === 'dark' ? 'translate-x-6 bg-[#88E788]' : 'translate-x-0.5 bg-white'
        }`}
      />
    </button>
  );
};
