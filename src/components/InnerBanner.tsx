import React from 'react';

interface InnerBannerProps {
  title: string;
  subtitle?: string;
  emoji?: string;
  gradientFrom?: string;
  gradientTo?: string;
}

const InnerBanner: React.FC<InnerBannerProps> = ({
  title,
  subtitle,
  emoji = '✨',
  gradientFrom = 'from-primary',
  gradientTo = 'to-secondary',
}) => {
  return (
    <div className="relative mb-6 overflow-hidden rounded-[32px] border-4 border-white bg-white/40 p-6 shadow-xl backdrop-blur-xl md:p-8">
      {/* Mesh Gradients */}
      <div
        className={`bg-primary/20 absolute -top-24 -right-24 h-[250px] w-[250px] rounded-full blur-[80px]`}
      />
      <div
        className={`bg-secondary/20 absolute -bottom-24 -left-24 h-[250px] w-[250px] rounded-full blur-[80px]`}
      />

      <div className="relative z-10 flex flex-col items-center text-center">
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-white/80 text-4xl shadow-lg transition-transform hover:scale-110">
          {emoji}
        </div>
        <h1 className="font-baloo text-foreground text-3xl font-black sm:text-4xl md:text-5xl">
          <span
            className={`bg-linear-to-r ${gradientFrom} via-secondary ${gradientTo} bg-clip-text text-transparent`}
          >
            {title}
          </span>
        </h1>
        {subtitle && (
          <p className="text-deepblue/70 mt-2 max-w-2xl text-base font-medium md:text-lg">
            {subtitle}
          </p>
        )}
      </div>

      {/* Floating Decorations */}
      <div className="absolute top-10 left-10 animate-bounce text-4xl opacity-20">
        ⭐
      </div>
      <div className="absolute right-10 bottom-10 animate-pulse text-4xl opacity-20">
        🎈
      </div>
    </div>
  );
};

export default InnerBanner;
