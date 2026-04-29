import React from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="bg-background relative min-h-screen overflow-hidden">
      {/* Dynamic Animated Background Layers */}
      <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
        {/* Animated Mesh Glows - Using Theme Colors */}
        <div className="bg-primary/10 absolute top-[-10%] left-[-10%] h-[60%] w-[60%] animate-[pulse_12s_ease-in-out_infinite] rounded-full blur-[120px]" />
        <div className="bg-secondary/10 absolute top-[20%] right-[-10%] h-[50%] w-[50%] animate-[pulse_18s_ease-in-out_infinite_reverse] rounded-full blur-[100px]" />
        <div className="bg-primary/5 absolute bottom-[-10%] left-[10%] h-[60%] w-[60%] animate-[pulse_15s_ease-in-out_infinite_2s] rounded-full blur-[140px]" />

        {/* Reference-style Bubble Animation Layer */}
        <div className="absolute inset-0">
          {[...Array(15)].map((_, i) => (
            <div
              key={i}
              className="animate-bubble-ref absolute rounded-full border-2"
              style={{
                width: `${15 + (i % 4) * 8}px`,
                height: `${15 + (i % 4) * 8}px`,
                left: `${(i * 7 + 5) % 100}%`,
                top: `${(i * 13 + 15) % 120}%`,
                animationDelay: `${i * -1.5}s`,
                animationDuration: `${25 + (i % 3) * 12}s`,
                borderColor:
                  i % 3 === 0
                    ? 'rgba(0, 156, 255, 0.3)'
                    : i % 3 === 1
                      ? 'rgba(255, 78, 141, 0.3)'
                      : 'rgba(0, 42, 80, 0.2)',
              }}
            />
          ))}
        </div>

        {/* Subtle Floating Emojis */}
        <div className="absolute top-[15%] left-[10%] animate-bounce text-4xl opacity-15">
          ✨
        </div>
        <div className="absolute right-[15%] bottom-[20%] animate-pulse text-5xl opacity-15">
          🎈
        </div>
        <div className="absolute top-[60%] left-[5%] animate-bounce text-3xl opacity-15 delay-700">
          🌈
        </div>
        <div className="absolute top-[10%] right-[25%] animate-pulse text-4xl opacity-15 delay-1000">
          ⭐
        </div>
      </div>

      {/* Content Wrapper */}
      <div className="relative z-10 flex min-h-screen flex-col">
        <Header />
        <div className="pt-6 md:pt-10">{children}</div>
        <Footer />
      </div>
    </main>
  );
};

export default MainLayout;
