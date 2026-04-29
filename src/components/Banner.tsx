'use client';
import Image from 'next/image';
import Link from 'next/link';

import { imgGame } from '@/assets/images';

import Button from './Button';

const Banner = () => {
  return (
    <section className="relative overflow-hidden">
      <div className="container">
        <div className="absolute top-20 left-[5%] animate-bounce text-6xl opacity-20 blur-sm will-change-transform">
          ✨
        </div>
        <div className="absolute right-[5%] bottom-20 animate-pulse text-7xl opacity-20 blur-sm will-change-transform">
          🎈
        </div>
        <div className="absolute top-1/2 left-1/4 animate-pulse text-8xl opacity-10 blur-md will-change-transform">
          🌈
        </div>

        {/* Background floating decorations */}
        <div className="shadow-3xl border-glass-border from-primary/10 via-primary/5 to-secondary/10 relative overflow-hidden rounded-[40px] border-6 bg-linear-to-br p-6 md:p-10 lg:p-12">
          {/* Internal Mesh Gradients - Optimized Blurs */}
          <div className="bg-primary/20 absolute -top-24 -right-24 h-[400px] w-[400px] rounded-full blur-[60px]" />
          <div className="bg-secondary/20 absolute -bottom-24 -left-24 h-[400px] w-[400px] rounded-full blur-[60px]" />
          <div className="bg-primary/15 absolute top-1/2 left-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full blur-[80px]" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">
            {/* Left Content */}
            <div className="order-2 text-center lg:order-1 lg:text-left">
              <div className="border-primary bg-primary/70 inline-flex items-center gap-2 rounded-full border px-3 py-2 shadow-sm backdrop-blur-md">
                <span className="font-baloo text-xs font-bold tracking-wider text-white uppercase sm:text-xs">
                  🚀 100% Free Games for Kids
                </span>
              </div>

              <h1 className="font-baloo text-foreground mt-6 text-4xl leading-[1.1] font-black sm:text-5xl lg:text-6xl">
                Ready for an
                <br />
                <span className="from-primary via-secondary to-primary bg-linear-to-r bg-clip-text text-transparent drop-shadow-sm">
                  Epic Adventure?
                </span>
              </h1>

              <p className="text-deepblue/70 mt-5 max-w-xl text-base leading-relaxed font-medium md:text-lg">
                Hey Kids! Dive into a world where you can be a hero, a racer, or
                a master of puzzles! Everything here is 100% free, safe, and
                just a click away. Let&apos;s play! 🎮🌟
              </p>

              <Link
                href="game/funny-pet-rescue"
                className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
              >
                <Button variant="primary">Start Playing 🎮</Button>
              </Link>
            </div>

            {/* Right Visual */}
            <div className="relative order-1 flex items-center justify-center lg:order-2">
              <div className="group border-glass-border bg-glass-bg relative flex h-64 w-64 items-center justify-center rounded-3xl border-4 shadow-2xl backdrop-blur-xl transition-all duration-700 will-change-transform hover:scale-110 hover:rotate-3 sm:h-80 sm:w-80">
                {/* Floating Emojis in the circle */}
                <span className="animate-bounce text-8xl will-change-transform sm:text-[130px]">
                  🦁
                </span>
                <Image
                  src={imgGame}
                  alt="game"
                  fill
                  priority
                  fetchPriority="high"
                  className="rounded-3xl"
                />
                <div className="absolute -top-8 -right-8 animate-pulse text-5xl drop-shadow-lg will-change-transform">
                  ⭐
                </div>
                <div className="absolute -bottom-6 -left-6 animate-bounce text-5xl drop-shadow-lg delay-150 will-change-transform">
                  🎡
                </div>
                <div className="absolute top-8 -left-10 animate-pulse text-4xl drop-shadow-lg delay-300 will-change-transform">
                  🍭
                </div>
                <div className="absolute -right-10 bottom-10 animate-bounce text-4xl drop-shadow-lg delay-500 will-change-transform">
                  🎨
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
