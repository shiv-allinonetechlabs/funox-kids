import Button from '@/components/Button';

export default function NoInternet() {
  return (
    <div
      suppressHydrationWarning
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4 py-20"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="bg-primary/20 absolute top-[-20%] left-[-10%] size-96 animate-pulse rounded-full blur-[120px]" />
        <div className="bg-secondary/20 absolute right-[-10%] bottom-[-20%] size-96 animate-pulse rounded-full blur-[120px] delay-700" />
      </div>

      <div className="relative mx-auto flex w-full max-w-md flex-col items-center">
        {/* Sad Emoji Hero */}
        <div className="relative z-20 mb-[-30px] flex flex-col items-center sm:mb-[-40px]">
          <div className="relative">
            <div className="bg-primary/10 absolute inset-0 scale-150 animate-pulse rounded-full blur-3xl" />
            <div className="flex-center animate-float border-glass-border bg-card-bg relative z-10 size-24 rounded-[32px] border-4 text-5xl shadow-2xl backdrop-blur-md sm:size-32 sm:rounded-[40px] sm:text-6xl">
              😢
            </div>
          </div>

          {/* Floating Emoji Decorations */}
          <div className="absolute -top-6 -left-8 animate-bounce text-3xl opacity-30 sm:-top-10 sm:-left-12 sm:text-4xl">
            📶
          </div>
          <div className="absolute top-2 -right-10 animate-pulse text-3xl opacity-30 delay-500 sm:top-4 sm:-right-14 sm:text-4xl">
            📡
          </div>
        </div>

        {/* Content Glass Card */}
        <div className="border-glass-border bg-glass-bg shadow-premium relative w-full overflow-hidden rounded-[40px] border-4 p-6 pt-16 backdrop-blur-3xl sm:rounded-[50px] sm:border-8 sm:p-10 sm:pt-20">
          <div className="relative z-10 text-center">
            <h1 className="font-baloo text-deepblue mb-3 text-2xl font-black tracking-tight sm:text-3xl md:text-4xl">
              Oh No! No Internet!
            </h1>

            <p className="text-muted mx-auto mb-6 max-w-[280px] text-base leading-relaxed font-bold sm:mb-8 sm:max-w-xs sm:text-lg">
              It looks like your connection has taken a little nap. 💤
            </p>

            <div className="flex flex-col items-center gap-4">
              <div className="bg-primary/10 flex items-center gap-2 rounded-full px-4 py-1.5 sm:px-6 sm:py-2">
                <div className="bg-primary size-1.5 animate-ping rounded-full sm:size-2" />
                <span className="font-baloo text-primary text-[10px] font-bold tracking-wider uppercase sm:text-sm">
                  Searching for signal...
                </span>
              </div>

              <Button
                variant="primary"
                size="md"
                onClick={() => window.location.reload()}
              >
                Try Again! 🔄
              </Button>
            </div>
          </div>

          {/* Ambient Pattern */}
          <div className="pointer-events-none absolute inset-0 -z-10 opacity-[0.03]">
            <div className="grid grid-cols-4 gap-6 p-8">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="bg-deepblue h-3 w-3 rounded-full" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
