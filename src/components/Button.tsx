'use client';

import React, { ButtonHTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

export type ButtonVariant = 'primary' | 'secondary';
export type ButtonSize = 'sm' | 'md';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  children: React.ReactNode;
}

const variantStyles = {
  primary: {
    bg: 'bg-primary',
    shadow: 'shadow-[0_4px_0_#0078c9]',
    text: 'text-white',
  },
  secondary: {
    bg: 'bg-secondary',
    shadow: 'shadow-[0_4px_0_#d12d6a]',
    text: 'text-white',
  },
} as const;

const sizeStyles = {
  sm: 'px-5 py-3 text-sm rounded-xl gap-2',
  md: 'px-8 py-3 text-base rounded-2xl gap-3',
} as const;

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { variant = 'primary', size = 'md', children, className = '', ...props },
    ref
  ) => {
    const styles = variantStyles[variant];
    const sizeClasses = sizeStyles[size];

    return (
      <button
        ref={ref}
        className={cn(
          'group font-baloo relative inline-flex items-center justify-center font-black transition-all duration-300 hover:-translate-y-1 active:translate-y-1 active:shadow-none',
          styles.bg,
          styles.text,
          styles.shadow,
          sizeClasses,
          'hover:shadow-[0_8px_16px_rgba(0,0,0,0.1)]',
          className
        )}
        {...props}
      >
        {/* Subtle Glass Highlight */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2 rounded-t-2xl bg-linear-to-b from-white/20 to-transparent" />

        {/* Border Inner Glow */}
        <div className="pointer-events-none absolute inset-0 rounded-2xl border border-white/10" />

        {/* Content */}
        <span className="relative z-10 flex items-center gap-2 drop-shadow-sm">
          {children}
        </span>

        {/* Hover Sparkles */}
        <div className="absolute -top-1.5 -right-1.5 h-3 w-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <span className="absolute inset-0 animate-ping rounded-full bg-yellow-300/60" />
          <span className="relative block h-full w-full text-[10px]">✨</span>
        </div>
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;
