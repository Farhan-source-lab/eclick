import React from 'react';

interface RollingButtonProps {
  href?: string;
  onClick?: () => void;
  text: string;
  variant?: 'primary' | 'outline' | 'surface';
  icon?: boolean;
  className?: string;
}

export const RollingButton: React.FC<RollingButtonProps> = ({
  href,
  onClick,
  text,
  variant = 'outline',
  icon = false,
  className = '',
}) => {
  const getStyle = () => {
    switch (variant) {
      case 'primary':
        return 'bg-(--color-cta) text-(--color-cta-contrast) border-(--color-cta)';
      case 'surface':
        return 'bg-(--color-ink-contrast) text-(--color-ink) border-(--color-ink-contrast)';
      case 'outline':
      default:
        return 'border border-foreground text-foreground hover:border-(--color-cta) hover:text-(--color-cta)';
    }
  };

  const content = (
    <div className={`group inline-flex items-center gap-0 ${className}`}>
      <span className={`relative inline-flex h-10 items-start justify-center overflow-hidden rounded-full px-5 font-display text-xs uppercase tracking-wider transition-colors duration-300 ${getStyle()}`}>
        <span className="grid text-center leading-10 transition-transform duration-300 ease-out group-hover:-translate-y-1/2">
          <span>{text}</span>
          <span aria-hidden="true">{text}</span>
        </span>
      </span>

      {icon && (
        <span className={`ml-[-1px] flex h-10 w-10 shrink-0 items-center justify-center rounded-full transition-colors duration-300 ${getStyle()}`}>
          <img 
            src="/brand/icon-next-arrow.png" 
            alt="" 
            aria-hidden="true" 
            className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" 
          />
        </span>
      )}
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return <button onClick={onClick} type="button">{content}</button>;
};
