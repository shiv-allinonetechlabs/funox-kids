import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';

type GameCardProps = {
  title: string;
  category: string;
  image: string | StaticImageData;
  href: string;
  players?: string;
  developer?: string;
  priority?: boolean;
};

const GameCard = ({
  title,
  category,
  image,
  href,
  players = '1.2k',
  developer = 'Funox Studio',
  priority = false,
}: GameCardProps) => {
  return (
    <Link
      href={href}
      className="group relative flex flex-col overflow-hidden rounded-2xl border-2 border-white bg-white shadow-[0_8px_25px_rgba(0,0,0,0.05)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.12)] md:rounded-3xl md:border-4 md:shadow-[0_15px_40px_rgba(0,0,0,0.08)] md:hover:-translate-y-4"
    >
      {/* Top Gradient Stripe */}
      <div className="via-primary to-deepblue h-1.5 w-full bg-linear-to-r from-yellow-400 md:h-2" />

      {/* Image Section */}
      <div className="relative aspect-square overflow-hidden bg-gray-50 sm:aspect-4/3">
        <Image
          src={image}
          alt={title}
          width={500}
          height={400}
          quality={85}
          sizes="(max-width: 768px) 50vw, (max-width: 1200px) 25vw, 20vw"
          priority={priority}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:rotate-1"
        />

        {/* Play Button Overlay */}
        <div className="bg-deepblue/20 absolute inset-0 z-20 flex items-center justify-center opacity-0 backdrop-blur-[2px] transition-all duration-500 group-hover:opacity-100">
          <div className="relative flex items-center justify-center">
            <div className="relative flex size-10 items-center justify-center rounded-full bg-white shadow-[0_0_20px_rgba(255,255,255,0.6)] transition-all duration-500 group-hover:scale-110 md:size-10">
              <div className="bg-primary flex size-8 items-center justify-center rounded-full text-white shadow-lg transition-all duration-300 group-hover:scale-105 group-hover:shadow-[0_0_20px_var(--color-primary-shadow)] md:size-10">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4 transition-transform duration-500 md:size-6"
                >
                  <path d="M8 5.14v13.72a1 1 0 0 0 1.5.86l10.28-6.86a1 1 0 0 0 0-1.72L9.5 4.28a1 1 0 0 0-1.5.86z" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Top Badges */}
        <div className="absolute top-2 left-2 z-20 md:top-4 md:left-4">
          <span className="text-primary flex items-center gap-1 rounded-full border border-white/50 bg-white/80 px-2 py-1 text-[8px] font-black tracking-widest uppercase shadow-md backdrop-blur-md md:gap-1.5 md:px-3 md:py-1.5 md:text-[10px]">
            <span className="text-[10px] md:text-xs">✨</span> {category}
          </span>
        </div>

        <div className="absolute top-2 right-2 z-20 md:top-4 md:right-4">
          <div className="flex items-center gap-1 rounded-full bg-black/40 px-2 py-1 text-[8px] font-bold text-white backdrop-blur-md md:gap-1.5 md:px-3 md:py-1.5 md:text-[10px]">
            <span className="flex h-1.5 w-1.5 animate-ping rounded-full bg-green-400 md:h-2 md:w-2" />
            {players}
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="relative flex grow flex-col justify-between p-3 md:p-6">
        {/* Subtle Mesh Background for text */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--tw-gradient-stops))] from-purple-200 via-transparent to-transparent opacity-5" />

        <div className="relative z-10">
          <div className="flex items-center justify-between gap-1 md:gap-2">
            <h3 className="font-baloo group-hover:text-primary line-clamp-1 text-base font-black text-gray-800 transition-colors duration-300 md:text-2xl">
              {title}
            </h3>
            <span className="text-sm transition-transform duration-500 group-hover:scale-125 group-hover:rotate-12 md:text-xl">
              🎮
            </span>
          </div>
          <p className="mt-0.5 line-clamp-1 text-[8px] font-bold tracking-widest text-gray-400 uppercase md:mt-1 md:text-[11px]">
            By <span className="text-primary">{developer}</span>
          </p>
        </div>
      </div>

      {/* Hover Sparkle Effect */}
      <div className="absolute -top-10 -left-10 h-20 w-20 rounded-full bg-yellow-400/20 opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
      <div className="bg-primary/20 absolute -right-10 -bottom-10 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100" />
    </Link>
  );
};

export default GameCard;
