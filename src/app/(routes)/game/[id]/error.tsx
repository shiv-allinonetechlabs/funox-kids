'use client';

import { useEffect } from 'react';

export default function GameError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Game page error:', error);
  }, [error]);

  return (
    <section className="relative px-4 pt-6">
      {/* Prevent error pages from being indexed by search engines */}
      <meta name="robots" content="noindex" />

      <div className="relative col-span-full mx-auto max-w-md overflow-hidden rounded-[40px] border-6 border-white bg-white/40 py-12 text-center shadow-2xl backdrop-blur-xl">
        {/* Ambient Background Decorations */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="bg-primary/10 absolute top-[-20%] left-[-10%] size-64 rounded-full blur-3xl" />
          <div className="bg-secondary/10 absolute right-[-10%] bottom-[-20%] size-64 rounded-full blur-3xl" />
        </div>

        {/* Content Card */}
        <div className="relative z-10 flex flex-col items-center px-6">
          <div className="group relative mb-8">
            {/* Outer Glow Ring */}
            <div className="bg-primary/20 absolute -inset-4 rounded-full opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100" />

            {/* Icon Container */}
            <div className="flex-center relative size-28 rounded-[32px] border-2 border-white bg-white/50 shadow-inner backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
              <div className="text-5xl transition-opacity group-hover:opacity-80">
                🎮
              </div>

              {/* Floating Accent Dots */}
              <div className="bg-primary absolute -top-1 -right-1 size-4 rounded-full shadow-lg" />
              <div className="bg-secondary absolute -bottom-2 left-4 size-2 rounded-full opacity-50" />
            </div>
          </div>

          <div className="max-w-md">
            <h2 className="font-baloo text-deepblue mb-3 text-3xl font-black tracking-tight">
              Something went wrong
            </h2>
            <p className="text-deepblue/60 text-base leading-relaxed font-medium">
              We couldn&apos;t load this game. Please try again or check your
              connection.
            </p>
          </div>

          <div className="mt-10 flex w-full flex-col items-center justify-center">
            <button
              onClick={() => reset()}
              className="font-baloo bg-primary h-12 w-full rounded-2xl px-10 text-xl font-black text-white shadow-lg transition-all hover:scale-105 active:scale-95 sm:w-auto"
            >
              Try Again! 🔄
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
