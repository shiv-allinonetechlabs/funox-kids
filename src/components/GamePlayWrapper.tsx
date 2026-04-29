'use client';

import Image from 'next/image';
import { RefObject, useEffect, useState } from 'react';

import { useFullscreen } from '@/hooks/useFullscreen';

interface GamePlayWrapperProps {
  gameId: string;
  thumbnail?: string;
  gameName: string;
  containerRef: RefObject<HTMLDivElement | null>;
}

const GamePlayWrapper = ({
  gameId,
  thumbnail,
  gameName,
  containerRef,
}: GamePlayWrapperProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const { isFullscreen, enterFullscreen } = useFullscreen(containerRef);

  useEffect(() => {
    // Check if it's mobile
    const isMobile =
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
      window.innerWidth < 768;

    // On Desktop, start playing immediately
    if (!isMobile) {
      // Use setTimeout to avoid synchronous setState warning during mount
      setTimeout(() => setIsPlaying(true), 0);
    }
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);

    // Trigger Fullscreen ONLY ON MOBILE
    const isMobile =
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
      window.innerWidth < 768;

    if (isMobile) {
      enterFullscreen();
    }
  };

  return (
    <div
      ref={containerRef}
      className={`relative h-96 w-full overflow-hidden bg-black transition-all duration-300 md:h-[700px] ${isFullscreen ? 'rounded-none' : 'rounded-2xl'}`}
    >
      {!isPlaying ? (
        <div
          className="group relative h-full w-full cursor-pointer overflow-hidden"
          onClick={handlePlay}
        >
          {/* Thumbnail Background with Parallax effect on hover */}
          {thumbnail ? (
            <Image
              src={thumbnail}
              alt={gameName}
              fill
              className="object-cover transition-transform duration-1000 group-hover:scale-110"
              priority
            />
          ) : (
            <div className="h-full w-full bg-linear-to-br from-indigo-600 via-purple-600 to-pink-500" />
          )}

          {/* Premium Glassmorphic Overlay */}
          <div className="absolute inset-0 bg-black/40 transition-colors duration-500 group-hover:bg-black/30" />

          {/* Main Play Interaction Section */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            {/* Animated Play Button Container */}
            <div className="relative mb-6">
              {/* Ripple Effect Rings */}
              <div className="absolute -inset-10 animate-ping rounded-full bg-indigo-500/30 opacity-40" />
              <div className="absolute -inset-2 animate-pulse rounded-full bg-white/20 opacity-60" />

              {/* The Play Button */}
              <button className="relative flex size-16 items-center justify-center rounded-full border-[6px] border-white/90 bg-linear-to-br from-indigo-500 to-purple-600 text-white shadow-[0_0_50px_rgba(79,70,229,0.6)] transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_70px_rgba(79,70,229,0.8)] active:scale-90">
                <svg
                  className="size-10 fill-current drop-shadow-lg"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
            </div>{' '}
          </div>

          {/* Floating Decorative Elements */}
          <div className="absolute top-8 right-8 animate-bounce text-4xl opacity-80">
            🎮
          </div>
          <div className="absolute bottom-8 left-8 animate-bounce text-4xl opacity-80 delay-500">
            ✨
          </div>
        </div>
      ) : (
        <div className="relative h-full w-full bg-black">
          {/* Loading Placeholder */}
          {!isLoaded && (
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-indigo-950">
              <div className="size-16 animate-spin rounded-full border-4 border-white/20 border-t-white" />
              <p className="font-baloo mt-4 animate-pulse text-xl font-bold text-white">
                Loading Magic...
              </p>
            </div>
          )}

          <iframe
            title={gameName}
            allow="autoplay; fullscreen; camera; focus-without-user-activation *;"
            className={`h-full w-full rounded-2xl transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
            onLoad={() => setIsLoaded(true)}
            sandbox="allow-forms allow-modals allow-orientation-lock allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-presentation allow-scripts allow-same-origin allow-downloads"
            src={`https://games.poki.com/458768/${gameId}?tag=kids`}
          />
        </div>
      )}
    </div>
  );
};

export default GamePlayWrapper;
