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
    shadow: 'shadow-[0_6px_0_0_var(--color-primary-shadow)]',
    hoverShadow: 'hover:shadow-[0_8px_0_0_var(--color-primary-shadow)]',
    text: 'text-white',
    gradient: 'bg-linear-to-b from-white/20 via-transparent to-black/10',
  },
  secondary: {
    bg: 'bg-secondary',
    shadow: 'shadow-[0_6px_0_0_var(--color-secondary-shadow)]',
    hoverShadow: 'hover:shadow-[0_8px_0_0_var(--color-secondary-shadow)]',
    text: 'text-white',
    gradient: 'bg-linear-to-b from-white/20 via-transparent to-black/10',
  },
} as const;

const sizeStyles = {
  sm: 'px-5 py-3 text-sm rounded-xl gap-2',
  md: 'px-5 sm:px-8 py-2 sm:py-3 text-base rounded-xl md:rounded-xl md:rounded-2xl gap-3',
} as const;

const Button = React.memo(
  React.forwardRef<HTMLButtonElement, ButtonProps>(
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
            'group font-baloo relative inline-flex items-center justify-center font-black tracking-wide transition-all duration-300 select-none active:translate-y-[4px] active:shadow-none',
            styles.bg,
            styles.text,
            styles.shadow,
            styles.hoverShadow,
            sizeClasses,
            'hover:-translate-y-1.5 hover:scale-[1.02] hover:brightness-110',
            className
          )}
          {...props}
        >
          {/* Internal Effects Container (Clipped to button shape) */}
          <div
            className={cn(
              'absolute inset-0 z-0 overflow-hidden',
              sizeClasses.includes('rounded-xl')
                ? 'rounded-xl'
                : 'rounded-xl md:rounded-xl lg:rounded-2xl'
            )}
          >
            {/* Playful Shine Gradient */}
            <div
              className={cn('absolute inset-0 opacity-100', styles.gradient)}
            />

            {/* Moving Shine Streak on Hover */}
            <div className="absolute inset-0 h-full w-full -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
          </div>

          {/* Top Edge Highlight */}
          <div className="pointer-events-none absolute inset-x-1.5 top-1 h-2 rounded-t-xl bg-white/30 blur-[1px] md:rounded-t-2xl" />

          {/* Inner Border Glow */}
          <div className="pointer-events-none absolute inset-0 rounded-xl border-2 border-white/20 md:rounded-2xl" />

          {/* Content with Stronger, Sharper Shadow for maximum visibility */}
          <span
            className="relative z-10 flex items-center gap-2 antialiased transition-transform duration-300 group-hover:scale-105"
            style={{
              textShadow: '0 2px 4px rgba(0,0,0,0.4), 0 0 1px rgba(0,0,0,0.2)',
            }}
          >
            {children}
          </span>

          {/* Bottom Shine/Glow Effect */}
          <div className="bg-primary-shadow/40 absolute inset-0 -z-10 translate-y-3 rounded-xl opacity-0 blur-2xl transition-all duration-500 group-hover:opacity-100 md:rounded-2xl md:rounded-xl" />
        </button>
      );
    }
  )
);

Button.displayName = 'Button';

export default Button;
