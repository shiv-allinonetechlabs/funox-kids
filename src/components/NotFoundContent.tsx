'use client';

import Image from 'next/image';
import Link from 'next/link';

import { img404 } from '@/assets/images';
import Button from '@/components/Button';
import { allRoute } from '@/constants/allRoutes';

export default function NotFoundContent() {
  return (
    <section className="relative overflow-hidden px-4">
      {/* Magical Space Background */}
      {/* <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="bg-primary/20 absolute top-[-10%] left-[-10%] h-[600px] w-[600px] animate-pulse rounded-full blur-[120px]" />
        <div className="bg-secondary/20 absolute right-[-10%] bottom-[-10%] h-[600px] w-[600px] animate-pulse rounded-full blur-[120px] delay-1000" />

        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="absolute h-1 w-1 animate-pulse rounded-full bg-white opacity-30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
            }}
          />
        ))}
      </div> */}

      <div className="relative mx-auto flex w-full max-w-lg flex-col items-center">
        {/* Floating Emoji Decorations */}
        {/* <div className="absolute -top-8 -left-12 animate-bounce text-5xl opacity-40 sm:text-6xl">
          🚀
        </div>
        <div className="absolute top-10 -right-16 animate-pulse text-5xl opacity-40 delay-500 sm:text-6xl">
          🪐
        </div> */}

        {/* Content Glass Card */}
        <div className="border-glass-border bg-glass-bg relative w-full overflow-hidden rounded-[50px] border-8 p-6 backdrop-blur-3xl sm:p-10">
          <div className="relative z-10 text-center">
            {/* Hero GIF inside card */}
            <div className="relative mb-6 flex justify-center">
              <div className="bg-primary/5 absolute inset-0 scale-110 animate-pulse rounded-full blur-2xl" />
              <Image
                src={img404}
                alt="404 Adventure"
                width={200}
                height={150}
                className="animate-float relative z-10 drop-shadow-md transition-transform hover:scale-110 sm:w-[240px]"
              />
            </div>

            <h1 className="font-baloo mb-2 text-6xl font-black tracking-tighter sm:text-7xl md:text-8xl">
              <span className="text-foreground">4</span>
              <span className="text-primary inline-block animate-bounce px-1">
                0
              </span>
              <span className="text-foreground">4</span>
            </h1>

            <h2 className="font-baloo text-deepblue/90 mb-4 text-3xl font-black sm:text-4xl">
              Whoops! You&apos;re Lost!
            </h2>

            <p className="text-muted mx-auto mb-10 max-w-md text-lg leading-relaxed font-bold sm:text-xl">
              This page has floated away into deep space. Let&apos;s get you
              back to the fun!
            </p>

            <div className="flex justify-center">
              <Link href={allRoute.home}>
                <Button size="md" variant="primary">
                  Take Me Home 🏠
                </Button>
              </Link>
            </div>
          </div>

          {/* Subtle Background Pattern in Card */}
          {/* <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]">
            <div className="grid grid-cols-6 gap-8 p-10">
              {[...Array(24)].map((_, i) => (
                <div key={i} className="bg-foreground h-4 w-4 rounded-full" />
              ))}
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
}
