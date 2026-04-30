'use client';

import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { cn } from '@/lib/utils';

/**
 * Compact & Premium ScrollToTop component with a Holographic Badge design.
 */
export default function ScrollToTop() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' as any });
  }, [pathname]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;
      const totalScroll = scrollHeight - clientHeight;
      const progress = totalScroll > 0 ? (scrollY / totalScroll) * 100 : 0;
      setScrollProgress(progress);
      setIsVisible(scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!mounted) return null;

  return (
    <button
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      suppressHydrationWarning
      className={cn(
        'group bg-card-bg ring-glass-border relative z-50 flex w-10 items-center justify-center rounded-2xl shadow-lg ring-1 transition-all duration-500 hover:scale-110 active:scale-90 md:w-12',
        isVisible
          ? 'mt-3 h-10 translate-y-0 opacity-100 md:h-12'
          : 'pointer-events-none mt-0 h-0 translate-y-10 overflow-hidden opacity-0'
      )}
      aria-label="Scroll to top"
    >
      {/* Theme Background Glow */}
      <div className="from-primary/5 via-primary/5 to-secondary/5 absolute inset-0 rounded-2xl bg-linear-to-br opacity-50" />

      {/* Precision Progress Border (Custom SVG Path) */}
      <svg
        className="absolute inset-0 h-full w-full -rotate-90"
        viewBox="0 0 48 48"
      >
        <rect
          x="3"
          y="3"
          width="42"
          height="42"
          rx="12"
          fill="none"
          stroke="var(--color-primary)"
          strokeOpacity="0.1"
          strokeWidth="3.5"
        />
        <rect
          x="3"
          y="3"
          width="42"
          height="42"
          rx="12"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="3.5"
          strokeDasharray="168"
          strokeDashoffset={168 - (168 * scrollProgress) / 100}
          strokeLinecap="round"
          className="transition-all duration-300"
        />
      </svg>

      {/* Center Icon Section */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="size-5 transition-transform duration-300 group-hover:-translate-y-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 15.75l7.5-7.5 7.5 7.5"
          />
        </svg>
      </div>

      {/* Percentage Indicator (Tooltip) */}
      <div className="bg-card-bg border-glass-border text-foreground absolute -top-10 left-1/2 -translate-x-1/2 scale-0 rounded-lg border px-2 py-1 text-[9px] font-black shadow-md transition-all duration-300 group-hover:scale-100">
        {Math.round(scrollProgress)}%
      </div>
    </button>
  );
}
