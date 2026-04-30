'use client';

import { useEffect, useState } from 'react';

import { useTheme } from '@/contexts/ThemeContext';
import { useIsMobile } from '@/hooks/useMobileDetection';
import { useOutsideClick } from '@/hooks/useOutsideClick';
import { cn } from '@/lib/utils';

const MagicClock: React.FC = () => {
  const [time, setTime] = useState<Date | null>(null);
  const { theme, hue } = useTheme();
  const darkMode = theme === 'dark';

  useEffect(() => {
    setTime(new Date());
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!time) return null;

  const hours = time.getHours();
  const minutes = time.getMinutes().toString().padStart(2, '0');
  const seconds = time.getSeconds().toString().padStart(2, '0');

  let greeting = 'Hello Kiddo! 🌟';
  let icon = '🎒';

  if (hours >= 5 && hours < 12) {
    icon = '☀️';
    greeting = 'Morning, Sunshine!';
  } else if (hours >= 12 && hours < 17) {
    icon = '🍕';
    greeting = 'Yummy Playtime!';
  } else if (hours >= 17 && hours < 20) {
    icon = '🌆';
    greeting = 'Evening Fun!';
  } else {
    icon = '🌙';
    greeting = 'Magic Dreams!';
  }

  return (
    <div
      className={cn(
        'group mb-6 flex items-center gap-4 rounded-[24px] border-4 p-4 transition-all duration-700',
        'border-white bg-white/40 shadow-md backdrop-blur-md',
        'dark:border-white/10 dark:bg-white/5 dark:shadow-none'
      )}
      style={{
        boxShadow: darkMode
          ? `0 10px 30px -10px hsla(${hue}, 100%, 50%, 0.2), inset 0 0 20px hsla(${hue}, 100%, 50%, 0.05)`
          : `0 10px 25px -5px hsla(${hue}, 100%, 50%, 0.1), inset 0 0 20px white`,
      }}
    >
      {/* 3D Icon Box */}
      <div
        className={cn(
          'relative flex size-14 shrink-0 items-center justify-center rounded-2xl border-2 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3',
          'border-white bg-white shadow-[0_4px_0_0_#e2e8f0]',
          'dark:border-white/10 dark:bg-white/10 dark:shadow-none'
        )}
      >
        <div className="absolute inset-0 bg-linear-to-br from-white/40 to-transparent opacity-50" />
        <span
          className="animate-bounce text-2xl"
          style={{ animationDuration: '3s' }}
        >
          {icon}
        </span>
      </div>

      <div className="flex flex-col justify-center">
        <div className="flex items-baseline gap-1.5">
          <span
            className="font-baloo text-3xl leading-none font-black tracking-tighter transition-all duration-500 group-hover:scale-105"
            style={{
              color: `hsl(${hue}, 100%, ${darkMode ? '70%' : '50%'})`,
              textShadow: darkMode
                ? `0 0 15px hsla(${hue}, 100%, 50%, 0.3)`
                : `2px 2px 0px white, 3px 3px 0px hsla(${hue}, 100%, 50%, 0.1)`,
            }}
          >
            {time.getHours() % 12 || 12}:{minutes}
          </span>
          <div className="flex flex-col leading-none">
            <span
              className="text-[10px] font-black uppercase opacity-60 transition-colors duration-500"
              style={{
                color: `hsl(${hue}, 100%, ${darkMode ? '75%' : '35%'})`,
              }}
            >
              {hours >= 12 ? 'PM' : 'AM'}
            </span>
            <span
              className="font-mono text-[9px] font-bold opacity-40 transition-colors duration-500"
              style={{
                color: `hsl(${hue}, 100%, ${darkMode ? '80%' : '40%'})`,
              }}
            >
              :{seconds}
            </span>
          </div>
        </div>
        <span
          className="mt-0.5 text-[11px] font-black tracking-widest uppercase transition-colors duration-500"
          style={{
            color: `hsl(${hue}, 100%, ${darkMode ? '85%' : '35%'})`,
            opacity: 0.8,
          }}
        >
          {greeting}
        </span>
      </div>
    </div>
  );
};

const ThemeSwitcher: React.FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const [isMagic, setIsMagic] = useState<boolean>(false);
  const { theme, setTheme, hue, setHue } = useTheme();
  const darkMode = theme === 'dark';
  const isMobile = useIsMobile();

  const containerRef = useOutsideClick(() => setOpen(false));

  useEffect(() => {
    if (!isMobile) setOpen(false);
  }, [isMobile]);

  const triggerMagic = () => {
    setIsMagic(true);
    setTimeout(() => setIsMagic(false), 1000);
  };

  const toggleTheme = () => {
    setTheme(darkMode ? 'light' : 'dark');
    triggerMagic();
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        'pointer-events-none relative z-40 flex flex-col items-end gap-4 transition-all duration-500'
      )}
    >
      {/* Magic Panel Popover */}
      <div
        className={`shadow-premium absolute right-0 bottom-full mb-4 w-[280px] origin-bottom-right overflow-hidden rounded-3xl border-4 border-white bg-white/40 p-4 backdrop-blur-2xl transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] md:w-80 md:p-6 dark:border-white/10 dark:bg-black/40 ${
          open
            ? 'pointer-events-auto scale-100 opacity-100'
            : 'pointer-events-none scale-50 opacity-0'
        }`}
      >
        <MagicClock />
        <div className="mb-4 text-center">
          <div
            className="mx-auto mb-2 w-fit rounded-xl px-4 py-1.5 shadow-sm transition-all duration-500"
            style={{
              background: darkMode
                ? `linear-gradient(90deg, hsla(${hue}, 100%, 50%, 0.2), hsla(${hue}, 100%, 50%, 0.1))`
                : `linear-gradient(90deg, hsla(${hue}, 100%, 50%, 0.9), hsla(${hue}, 100%, 40%, 0.8))`,
              boxShadow: `0 4px 12px hsla(${hue}, 100%, 50%, ${darkMode ? '0.2' : '0.3'})`,
            }}
          >
            <h2 className="font-baloo text-base font-black tracking-tight text-white uppercase">
              Magic Palette
            </h2>
          </div>
          <p
            className="text-[10px] font-black tracking-widest uppercase transition-colors duration-500"
            style={{
              color: `hsl(${hue}, 100%, ${darkMode ? '70%' : '30%'})`,
              opacity: 0.6,
            }}
          >
            Customize your adventure! ✨
          </p>
        </div>

        {/* Preset Colors Grid */}
        <div className="mb-4">
          <div className="grid grid-cols-4 gap-2.5">
            {[
              { h: 200, label: 'Hero', icon: '⚡' },
              { h: 340, label: 'Candy', icon: '🍭' },
              { h: 30, label: 'Tiger', icon: '🐯' },
              { h: 275, label: 'Magic', icon: '🪄' },
              { h: 195, label: 'Ocean', icon: '🌊' },
              { h: 10, label: 'Dragon', icon: '🐲' },
              { h: 145, label: 'Slime', icon: '🧪' },
              { h: 42, label: 'Star', icon: '⭐' },
            ].map((color) => (
              <button
                key={color.h}
                onClick={() => {
                  setHue(color.h);
                  triggerMagic();
                }}
                className={cn(
                  'group relative flex flex-col items-center justify-center rounded-xl p-2 transition-all duration-300 active:translate-y-1',
                  hue === color.h
                    ? 'scale-105 shadow-[0_4px_0_0_hsl(var(--hue),100%,30%)]'
                    : 'bg-white/50 hover:scale-105 dark:bg-black/20'
                )}
                style={{
                  backgroundColor:
                    hue === color.h ? `hsl(${color.h}, 100%, 50%)` : undefined,
                }}
              >
                {/* 3D Highlight for selected state */}
                {hue === color.h && (
                  <>
                    <div className="absolute inset-x-1 top-0.5 h-1 rounded-full bg-white/40 blur-[1px]" />
                    <div className="absolute inset-0 rounded-xl border-2 border-white/30" />
                  </>
                )}

                <div className="relative mb-1 flex size-8 items-center justify-center rounded-full bg-white/20 text-base shadow-inner backdrop-blur-sm transition-transform group-hover:rotate-12">
                  <span style={{ textShadow: '0 1px 2px rgba(0,0,0,0.2)' }}>
                    {color.icon}
                  </span>
                </div>

                <span
                  className={cn(
                    'text-[7px] font-black tracking-tight uppercase antialiased transition-colors',
                    hue === color.h
                      ? 'text-white'
                      : 'text-deepblue/40 dark:text-white/40'
                  )}
                  style={{
                    textShadow:
                      hue === color.h ? '0 1px 2px rgba(0,0,0,0.6)' : 'none',
                  }}
                >
                  {color.label}
                </span>

                {/* Hover Glow */}
                <div
                  className="absolute inset-0 -z-10 rounded-xl opacity-0 transition-opacity group-hover:opacity-20"
                  style={{
                    backgroundColor: `hsl(${color.h}, 100%, 50%)`,
                    filter: 'blur(10px)',
                  }}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Custom Magic Slider */}
        <div className="mb-4 rounded-[20px] bg-gray-50/50 p-3 shadow-inner dark:bg-white/5">
          <div className="mb-3 flex items-center justify-between">
            <p className="text-deepblue/60 text-[10px] font-black tracking-widest uppercase dark:text-white/60">
              Custom Magic 🌈
            </p>
            <span className="bg-primary/10 text-primary rounded-full px-2 py-0.5 text-[10px] font-black">
              {hue}°
            </span>
          </div>
          <input
            id="hue-slider"
            type="range"
            min={0}
            max={360}
            value={hue}
            onChange={(e) => setHue(Number(e.target.value))}
            aria-label="Change theme color"
            className="accent-primary h-2 w-full cursor-pointer appearance-none rounded-full bg-gray-200 dark:bg-white/10"
          />
        </div>

        {/* Bedtime Mode Toggle */}
        <div className="relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/50 p-3 dark:border-white/10 dark:bg-white/5">
          <div className="flex items-center justify-between">
            <div className="flex flex-col">
              <div className="flex items-center gap-1.5">
                <span className="text-sm">{darkMode ? '🌙' : '☀️'}</span>
                <span className="text-deepblue/80 text-[10px] font-extrabold tracking-widest uppercase dark:text-white/80">
                  {darkMode ? 'Bedtime Mode' : 'Sunlight Mode'}
                </span>
              </div>
              <span className="mt-0.5 text-[9px] font-bold text-gray-400 italic">
                {darkMode
                  ? 'Time for magic dreams! ✨'
                  : 'Time for fun adventures! 🚀'}
              </span>
            </div>

            <button
              onClick={toggleTheme}
              aria-label={
                darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'
              }
              className={`group relative h-9 w-18 overflow-hidden rounded-full border-2 border-white shadow-inner transition-all duration-700 dark:border-white/20 ${
                darkMode
                  ? 'bg-linear-to-br from-indigo-950 via-purple-900 to-indigo-900'
                  : 'bg-linear-to-br from-sky-400 via-blue-300 to-blue-400'
              }`}
            >
              {/* Animated Background Elements */}
              <div className="absolute inset-0 opacity-40 transition-opacity duration-700"></div>

              <div
                className={`shadow-premium flex-center absolute top-0.5 h-7 w-7 transform rounded-full transition-all duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] ${
                  darkMode
                    ? 'translate-x-9 bg-indigo-200'
                    : 'translate-x-1 bg-yellow-300'
                }`}
              >
                <span className="text-sm transition-transform group-hover:rotate-12">
                  {darkMode ? '🌑' : '🌞'}
                </span>
              </div>
            </button>
          </div>

          {/* Magic Burst Particles (Internal) */}
          {isMagic && (
            <div className="pointer-events-none absolute inset-0 z-50">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute animate-bounce text-[10px]"
                  style={{
                    top: '50%',
                    left: '50%',
                    transform: `translate(-50%, -50%) translate(${(Math.random() - 0.5) * 60}px, ${(Math.random() - 0.5) * 60}px)`,
                    opacity: 0,
                    animation: `floatUp 0.8s ease-out forwards ${i * 0.05}s`,
                  }}
                >
                  {[''][0]}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Floating Action Button (FAB) */}
      <button
        type="button"
        onClick={() => {
          setOpen((prev) => !prev);
          triggerMagic();
        }}
        aria-label={open ? 'Close Magic Palette' : 'Open Magic Palette'}
        className={cn(
          'group shadow-premium pointer-events-auto relative flex size-10 items-center justify-center rounded-full transition-all duration-500 hover:scale-110 active:translate-y-[px] active:scale-95 active:shadow-none md:size-12',
          'bg-primary shadow-[0_6px_0_0_var(--color-primary-shadow)] hover:shadow-[0_8px_0_0_var(--color-primary-shadow)]',
          open && 'rotate-180'
        )}
      >
        {/* Internal Effects Container (Clipped to circle) */}
        <div className="absolute inset-0 z-0 overflow-hidden rounded-full">
          {/* Playful Shine Gradient */}
          <div className="absolute inset-0 bg-linear-to-b from-white/20 via-transparent to-black/10 opacity-100" />

          {/* Moving Shine Streak on Hover */}
          <div className="absolute inset-0 h-full w-full -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
        </div>

        {/* Top Edge Highlight */}
        <div className="pointer-events-none absolute inset-x-2 top-1 h-2 rounded-full bg-white/30 blur-[1px]" />

        {/* Inner Border Glow */}
        <div className="pointer-events-none absolute inset-0 rounded-full border-2 border-white/20" />

        <span
          className={cn(
            'relative z-10 text-xl transition-all duration-500 md:text-2xl',
            open
              ? 'scale-110 -rotate-45 text-white'
              : 'animate-wiggle group-hover:scale-125'
          )}
          style={{
            textShadow: '0 2px 4px rgba(0,0,0,0.4)',
          }}
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-6"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          ) : (
            '🪄'
          )}
        </span>

        {/* Enhanced Magical Glow */}
        {!open && (
          <div className="absolute inset-0 -z-10">
            <div className="bg-primary/50 animate-pulse-magical absolute inset-0 rounded-full blur-xl" />
            <div className="bg-secondary/40 absolute inset-[-8px] animate-ping rounded-full opacity-20 blur-2xl" />
            <div className="absolute inset-[-4px] animate-pulse rounded-full border-2 border-white/50" />
          </div>
        )}

        {/* Magic Burst Particles (FAB) */}
        {isMagic && (
          <div className="pointer-events-none absolute inset-0 z-50">
            {[...Array(12)].map((_, i) => (
              <div
                key={i}
                className="absolute text-sm"
                style={{
                  top: '50%',
                  left: '50%',
                  transform: `translate(-50%, -50%)`,
                  animation: `magic-particle-${i} 1s ease-out forwards`,
                }}
              >
                {[''][0]}
                <style jsx>{`
                  @keyframes magic-particle-${i} {
                    0% {
                      transform: translate(-50%, -50%) scale(0);
                      opacity: 0;
                    }
                    20% {
                      opacity: 1;
                    }
                    100% {
                      transform: translate(
                          calc(-50% + ${(Math.random() - 0.5) * 150}px),
                          calc(-50% + ${(Math.random() - 0.5) * 150}px)
                        )
                        scale(1.5) rotate(${Math.random() * 360}deg);
                      opacity: 0;
                    }
                  }
                `}</style>
              </div>
            ))}
          </div>
        )}
      </button>
    </div>
  );
};

export default ThemeSwitcher;
