'use client';

import { Fragment, useEffect } from 'react';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to console for debugging
    console.error('Page Error caught:', error);
    console.log('Error details:', {
      message: error.message,
      name: error.name,
      digest: error.digest,
      stack: error.stack,
    });
  }, [error]);

  const is503 =
    error.digest === '503' ||
    error.message?.includes('503') ||
    error.message?.includes('SERVICE_UNAVAILABLE') ||
    error.name === 'ServiceUnavailableError' ||
    error.message?.toLowerCase().includes('service unavailable');

  return (
    <Fragment>
      <Header />
      <main className="mt-4 flex items-center justify-center px-4">
        <div className="border-glass-border bg-glass-bg relative col-span-full mx-auto w-full max-w-md overflow-hidden rounded-[40px] border-6 py-12 text-center shadow-2xl backdrop-blur-xl">
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
              <div className="flex-center border-glass-border bg-card-bg relative size-28 rounded-[32px] border-2 shadow-inner backdrop-blur-sm transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
                <div className="text-5xl transition-opacity group-hover:opacity-80">
                  {is503 ? '🔧' : '⚠️'}
                </div>

                {/* Floating Accent Dots */}
                <div className="bg-primary absolute -top-1 -right-1 size-4 rounded-full shadow-lg" />
                <div className="bg-secondary absolute -bottom-2 left-4 size-2 rounded-full opacity-50" />
              </div>
            </div>

            <div className="max-w-md">
              <h1 className="font-baloo text-deepblue mb-3 text-3xl font-black tracking-tight sm:text-4xl">
                {is503 ? '503 - Service Unavailable' : 'Something went wrong'}
              </h1>
              <p className="text-deepblue/60 text-base leading-relaxed font-medium sm:text-lg">
                {is503
                  ? 'Our servers are temporarily unavailable. Please try again in a few moments.'
                  : 'An unexpected error occurred. Please try again.'}
              </p>
            </div>

            <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                onClick={() => reset()}
                className="font-baloo bg-primary h-12 w-full rounded-2xl px-8 text-lg font-black text-white shadow-lg transition-all hover:scale-105 active:scale-95 sm:w-auto"
              >
                Try Again! 🔄
              </button>
              <button
                onClick={() => {
                  window.location.href = '/';
                }}
                className="font-baloo text-foreground border-glass-border bg-card-bg flex h-12 w-full items-center justify-center rounded-2xl border-2 px-8 text-lg font-bold shadow-sm transition-all hover:scale-105 hover:bg-white active:scale-95 sm:w-auto"
              >
                Go Home 🏠
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </Fragment>
  );
}
