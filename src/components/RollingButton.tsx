import React from 'react';

interface RollingButtonProps {
  href?: string;
  onClick?: () => void;
  text: string;
  variant?: 'primary' | 'outline' | 'surface';
  icon?: boolean;
  arrow?: 'diagonal' | 'horizontal';
  className?: string;
}

export const RollingButton: React.FC<RollingButtonProps> = ({
  href,
  onClick,
  text,
  variant = 'outline',
  icon = false,
  arrow = 'horizontal',
  className = '',
}) => {
  const getStyle = () => {
    switch (variant) {
      case 'primary':
        return 'bg-[#88E788] text-[#0a0a0a] border border-[#88E788] hover:bg-[#88E788]/90 hover:shadow-[0_0_20px_rgba(136,231,136,0.35)]';
      case 'surface':
        return 'bg-white/10 text-white border border-white/20 hover:border-[#88E788] hover:text-[#88E788]';
      case 'outline':
      default:
        return 'border border-white/25 text-white hover:border-[#88E788] hover:text-[#88E788] hover:bg-white/[0.04]';
    }
  };

  const content = (
    <span
      className={`relative inline-flex h-11 items-center justify-center rounded-full px-6 font-display text-xs uppercase tracking-wider font-semibold transition-all duration-300 ${getStyle()}`}
    >
      <div className="flex items-center gap-2.5">
        {/* Rolling text with exact 44px container */}
        <div className="h-11 overflow-hidden">
          <div className="flex flex-col transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
            <span className="flex h-11 items-center justify-center whitespace-nowrap">{text}</span>
            <span className="flex h-11 items-center justify-center whitespace-nowrap" aria-hidden="true">{text}</span>
          </div>
        </div>

        {icon && (
          <span className="flex items-center justify-center shrink-0" aria-hidden="true">
            {arrow === 'horizontal' ? (
              <svg 
                viewBox="0 0 24 24" 
                className="h-4 w-4 stroke-currentColor fill-none stroke-[2.5] transition-transform duration-300 ease-out group-hover:translate-x-1"
              >
                <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
                <polyline points="13 5 20 12 13 19" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            ) : (
              <svg 
                viewBox="0 0 24 24" 
                className="h-4 w-4 stroke-currentColor fill-none stroke-[2.5] transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                <line x1="6" y1="18" x2="18" y2="6" strokeLinecap="round" />
                <polyline points="9 6 18 6 18 15" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            )}
          </span>
        )}
      </div>
    </span>
  );

  if (href) {
    return (
      <a href={href} className={`group inline-flex ${className}`}>
        {content}
      </a>
    );
  }

  return (
    <button onClick={onClick} type="button" className={`group inline-flex ${className}`}>
      {content}
    </button>
  );
};
