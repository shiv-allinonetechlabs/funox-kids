'use client';

const Loader = () => {
  return (
    <div className="bg-card-bg/80 fixed inset-0 z-100 flex items-center justify-center backdrop-blur-md">
      <div className="relative flex flex-col items-center">
        {/* Animated Background Glow */}
        <div className="bg-primary/30 absolute inset-0 scale-150 animate-pulse rounded-full blur-3xl" />

        {/* Main Bouncing Container */}
        <div className="relative z-10 flex flex-col items-center gap-4 md:gap-6">
          <div className="relative">
            {/* Spinning Rings */}
            <div className="border-primary absolute -inset-2 animate-spin rounded-full border-3 border-dashed border-t-transparent opacity-40 md:-inset-4 md:border-4" />
            <div className="border-secondary animate-spin-slow absolute -inset-4 rounded-full border-3 border-dashed border-b-transparent opacity-30 md:-inset-8 md:border-4" />
          </div>

          {/* Loading Text */}
          <div className="flex flex-col items-center gap-1.5 md:gap-2">
            <h2 className="font-baloo from-primary via-secondary to-primary bg-linear-to-r bg-clip-text text-xl font-black text-transparent md:text-2xl">
              Magic Loading...
            </h2>
            <div className="flex gap-1.5 md:gap-2">
              <span
                className="bg-primary h-1.5 w-1.5 animate-bounce rounded-full md:h-2 md:w-2"
                style={{ animationDelay: '0s' }}
              />
              <span
                className="bg-secondary h-1.5 w-1.5 animate-bounce rounded-full md:h-2 md:w-2"
                style={{ animationDelay: '0.2s' }}
              />
              <span
                className="bg-primary h-1.5 w-1.5 animate-bounce rounded-full md:h-2 md:w-2"
                style={{ animationDelay: '0.4s' }}
              />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(-360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 4s linear infinite;
        }
      `}</style>
    </div>
  );
};

Loader.displayName = 'Loader';

export default Loader;
