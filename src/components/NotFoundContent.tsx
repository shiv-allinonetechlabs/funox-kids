'use client';

import Link from 'next/link';

import Button from '@/components/Button';
import { allRoute } from '@/constants/allRoutes';

export default function NotFoundContent() {
  return (
    <section className="relative px-4 pt-6">
      {/* Background Layer with Extra Sparkles */}
      <div className="absolute inset-0 -z-10">
        <div className="bg-primary/10 absolute top-0 left-0 h-[500px] w-[500px] rounded-full blur-[120px]" />
        <div className="bg-secondary/10 absolute right-0 bottom-0 h-[500px] w-[500px] rounded-full blur-[120px]" />
      </div>

      <div className="relative mx-auto w-full max-w-lg text-center">
        {/* Content Card */}
        <div className="relative overflow-hidden rounded-[40px] border-6 border-white bg-white/60 p-8 shadow-[0_24px_48px_-12px_rgba(0,0,0,0.1)] backdrop-blur-2xl sm:p-12">
          <h1 className="font-baloo text-deepblue mb-1 text-5xl font-extrabold tracking-tighter sm:text-6xl md:text-8xl">
            4<span className="text-primary animate-pulse">0</span>4
          </h1>

          <h2 className="font-baloo text-deepblue/90 mb-4 text-2xl font-extrabold sm:text-3xl">
            Adventure Not Found!
          </h2>

          <p className="text-deepblue/60 mx-auto mb-8 max-w-sm text-base leading-relaxed font-medium sm:text-lg">
            Oops! It looks like you&apos;ve drifted into uncharted space.
            Don&apos;t worry, your mission continues back at home base!
          </p>

          <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href={allRoute.home} className="w-full sm:w-auto">
              <Button size="md" variant="primary">
                Rescue Me! 🏠
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
