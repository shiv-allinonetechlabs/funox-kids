'use client';

import { useEffect, useState } from 'react';

export default function NoInternet() {
  const [bubbles, setBubbles] = useState<{
    id: number;
    left: string;
    top: string;
    width: string;
    height: string;
    background: string;
  }[]>([]);

  // Generate random bubbles only once on the client after mounting to comply with react-hooks/purity
  useEffect(() => {
    const generatedBubbles = [...Array(6)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 40 + 20}px`,
      height: `${Math.random() * 40 + 20}px`,
      background: i % 2 === 0 ? 'var(--color-primary)' : 'var(--color-secondary)',
    }));
    setBubbles(generatedBubbles);
  }, []);

  return (
    <div
      suppressHydrationWarning
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-linear-to-br from-[#E0F2FE] via-white to-[#FDF2F8] px-6 text-center"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute animate-float-bubble opacity-20"
            style={{
              left: bubble.left,
              top: bubble.top,
              width: bubble.width,
              height: bubble.height,
              borderRadius: '50%',
              background: bubble.background,
            }}
          />
        ))}
      </div>

      {/* Main Illustration Container */}
      <div className="relative mb-8">
        {/* Floating Stars */}
        <div className="absolute -top-4 -left-4 animate-bounce text-yellow-400 text-2xl">⭐</div>
        <div className="absolute -bottom-2 -right-6 animate-pulse text-yellow-400 text-3xl delay-700">✨</div>
        <div className="absolute top-10 -right-10 animate-bounce text-yellow-400 text-xl delay-300">⭐</div>

        {/* Bouncy Icon Circle */}
        <div className="flex h-32 w-32 items-center justify-center rounded-4xl bg-white shadow-2xl shadow-primary/30 transform transition-transform hover:scale-110 duration-500 animate-[bounce_3s_infinite] border-4 border-white">
          <div className="relative">
            <svg
              className="h-16 w-16 text-primary"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.5 16.5l3.5 3.5 3.5-3.5M2 8c5.5-5.5 14.5-5.5 20 0M5 11c3.9-3.9 10.1-3.9 14 0"
              />
              <line
                x1="2"
                y1="2"
                x2="22"
                y2="22"
                stroke="currentColor"
                strokeWidth="2.5"
                className="animate-pulse"
              />
            </svg>
            {/* Zzz animation for "nap" */}
            <div className="absolute -top-4 -right-4 flex flex-col font-baloo font-bold text-secondary animate-pulse">
              <span className="text-sm">Z</span>
              <span className="text-xs ml-2">z</span>
              <span className="text-[10px] ml-4">z</span>
            </div>
          </div>
        </div>
      </div>

      {/* Playful Content */}
      <div className="z-10">
        <h1 className="font-baloo text-5xl font-bold text-deepblue uppercase tracking-tight drop-shadow-sm">
          Oh No! <span className="text-secondary">The Fun Paused</span>
        </h1>

        <p className="mt-4 max-w-sm text-xl font-medium text-foreground/70 leading-relaxed font-poppins">
          Our magic internet is taking a quick break! 🍭
          Don&apos;t go away, we&apos;re waking it up right now...
        </p>

        {/* Loading Bar Style Status */}
        <div className="mt-10 flex flex-col items-center gap-4">
          <div className="h-4 w-64 overflow-hidden rounded-full bg-primary/10 border-2 border-white shadow-inner">
            <div className="h-full w-1/2 animate-shimmer bg-linear-to-r from-primary via-secondary to-primary bg-size-[200%_100%]" />
          </div>

          <div className="flex items-center gap-2 font-baloo text-primary font-bold text-lg animate-pulse">
            <span>✨ Catching the signal... ✨</span>
          </div>
        </div>

        {/* Action Suggestion */}
        <div className="mt-12 inline-block rounded-2xl bg-white/80 backdrop-blur-md px-8 py-4 shadow-xl border border-white/50">
          <p className="text-deepblue/60 font-bold flex items-center gap-3">
            <span className="text-2xl">🎮</span>
            Try checking your Wi-Fi button!
          </p>
        </div>
      </div>

      {/* Decorative Bottom Wave (Optional but adds to premium feel) */}
      <div className="absolute bottom-0 left-0 w-full h-24 opacity-30 pointer-events-none">
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <path
            fill="var(--color-primary)"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
