'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';

import {
  iconClock,
  iconDiamond,
  iconGame,
  iconScreen,
  iconUsers,
} from '@/assets/images';
import GameCard from '@/components/GameCard';
import GamePlayWrapper from '@/components/GamePlayWrapper';
import SectionHeading from '@/components/SectionHeading';
import { gamesData } from '@/constants';
import { allRoute } from '@/constants/allRoutes';
import { useFullscreen } from '@/hooks/useFullscreen';

type Game = {
  game_name: string;
  game_id: string;
  emoji: string;
  thumbnail: string;
  developer_team: string;
  description: string;
  status: string;
};

type Props = {
  game: Game;
};

const GameDetailsClient = ({ game }: Props) => {
  const [showBanner, setShowBanner] = useState(true);
  const gameContainerRef = useRef<HTMLDivElement>(null);
  const { isFullscreen, toggleFullscreen } = useFullscreen(gameContainerRef);

  const id = game.game_id;
  // Get related games (exclude current game)
  const relatedGames = gamesData.relatedGames.filter((g) => g.game_id !== id);

  // Format description to handle line breaks
  const formattedDescription = game.description
    ? game.description.replace(/\r\n/g, '\n').replace(/\n/g, '<br />')
    : 'No description available.';

  // Meta items for game details - Kid-friendly labels
  const metaItems = [
    {
      icon: iconGame,
      label: 'Created By',
      value: game.developer_team,
      emoji: '🎨',
      color: 'from-pink-400 to-rose-500',
    },
    {
      icon: iconScreen,
      label: 'Play On',
      value: 'Web Browser',
      emoji: '💻',
      color: 'from-blue-400 to-cyan-500',
    },
    {
      icon: iconUsers,
      label: 'Players',
      value: '1 Player',
      emoji: '👦',
      color: 'from-purple-400 to-violet-500',
    },
    {
      icon: iconClock,
      label: 'Play Time',
      value: 'Unlimited Fun',
      emoji: '⏰',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: iconDiamond,
      label: 'Level',
      value: 'Easy Peasy',
      emoji: '⭐',
      color: 'from-green-400 to-emerald-500',
    },
    {
      icon: iconGame,
      label: 'Type',
      value: 'Kids Games',
      emoji: '🎮',
      color: 'from-indigo-400 to-blue-500',
    },
  ].filter((item) => item.value);

  return (
    <div className="container">
      {/* Compact Safety Banner */}
      {showBanner && (
        <div className="group border-glass-border bg-card-bg relative mb-8 overflow-hidden rounded-3xl border-2 p-0.5 shadow-xl transition-all duration-500 hover:shadow-lg">
          <div className="bg-card-bg relative flex flex-col items-center gap-4 rounded-[calc(1.5rem-2px)] px-5 py-3 md:flex-row">
            {/* Icon Badge */}
            <div className="shrink-0">
              <div className="bg-accent-soft text-accent flex size-10 items-center justify-center rounded-xl shadow-inner">
                <svg
                  className="size-6"
                  viewBox="0 0 40.8 40.8"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clipRule="evenodd"
                    d="M24.5 40.4C13.5 42.7 2.7 35.6.4 24.5-1.9 13.5 5.2 2.7 16.3.4c11-2.3 21.8 4.8 24.1 15.9s-4.8 21.8-15.9 24.1zm-1-5c8.3-1.7 13.6-9.8 11.9-18.1-1.7-8.2-9.8-13.6-18.1-11.9C9.1 7.1 3.7 15.2 5.4 23.5c1.7 8.3 9.8 13.6 18.1 11.9zm-7.5-24c-.2-1.2.5-2.3 1.7-2.5l.8-.2c1.2-.2 2.3.5 2.5 1.7l2.2 10.8c.2 1.2-.5 2.3-1.7 2.5l-.8.2c-1.2.2-2.3-.5-2.5-1.7L16 11.4zm6.8 20.7c1.6-.3 2.6-1.9 2.3-3.5-.3-1.6-1.9-2.6-3.5-2.3-1.6.3-2.6 1.9-2.3 3.5.3 1.6 1.9 2.6 3.5 2.3z"
                    fill="currentColor"
                    fillRule="evenodd"
                  />
                </svg>
              </div>
            </div>

            {/* Content Section */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-muted text-xs leading-relaxed font-bold">
                Funox only uses functional cookies to keep this website running
                properly and to enable you to save your game progress and
                continue playing.
              </p>
              <div className="mt-1 flex flex-wrap justify-center gap-3 md:justify-start">
                <Link
                  href={allRoute.termsOfUse}
                  className="text-[10px] font-black text-indigo-500 underline decoration-indigo-200 underline-offset-2 transition-all hover:text-indigo-700"
                >
                  Kids Privacy
                </Link>
                <Link
                  href={allRoute.parents}
                  className="text-[10px] font-black text-indigo-500 underline decoration-indigo-200 underline-offset-2 transition-all hover:text-indigo-700"
                >
                  Parents Info
                </Link>
              </div>
            </div>

            {/* Action Button */}
            <div className="shrink-0">
              <button
                onClick={() => setShowBanner(false)}
                className="bg-accent hover:bg-accent/90 rounded-xl px-6 py-2.5 text-xs font-black text-white shadow-md transition-all hover:scale-105 active:scale-95"
              >
                Got it! 👍
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Game Iframe - Play Area */}
      <div className="border-glass-border from-primary/5 via-card-bg to-secondary/5 mb-8 overflow-hidden rounded-3xl border-4 bg-linear-to-br p-4 shadow-2xl">
        {/* Premium Game Header */}
        <div className="border-glass-border bg-glass-bg mb-6 flex flex-col items-center justify-between gap-4 rounded-2xl border p-4 backdrop-blur-md md:flex-row">
          <div className="flex items-center gap-4">
            <div className="relative">
              <div className="absolute -inset-1 animate-ping rounded-full bg-pink-400 opacity-20" />
              <div className="relative flex size-12 items-center justify-center rounded-xl bg-linear-to-br from-purple-500 to-pink-500 text-2xl text-white shadow-lg shadow-purple-200 transition-transform hover:scale-110 hover:rotate-6">
                {game.emoji || '🎮'}
              </div>
            </div>
            <div>
              <h2 className="font-baloo bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-bold text-transparent">
                {game.game_name}
              </h2>
              <div className="flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                  </span>
                  <span className="text-[10px] font-black tracking-widest text-green-600 uppercase">
                    Live Play
                  </span>
                </div>
                <span className="h-3 w-px bg-gray-300" />
                <span className="text-[10px] font-bold tracking-widest text-gray-400 uppercase">
                  Kid Safe
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={toggleFullscreen}
              className="border-glass-border bg-glass-bg text-primary hidden items-center gap-2 rounded-xl border-2 px-4 py-2 text-sm font-bold shadow-sm transition-all hover:scale-105 hover:bg-white active:scale-95 sm:flex dark:hover:bg-white/10"
            >
              <span>{isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}</span>
              <span className="text-lg">{isFullscreen ? '🚀' : '📺'}</span>
            </button>

            <div className="flex gap-2">
              <div className="group relative flex size-11 items-center justify-center rounded-xl border-2 border-white bg-yellow-400 text-white shadow-lg transition-all hover:scale-110 hover:rotate-6 active:scale-90">
                <span className="text-xl">⭐</span>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 rounded-lg bg-gray-900 px-3 py-1.5 text-[10px] font-black whitespace-nowrap text-white transition-all group-hover:scale-100">
                  SAVE GAME
                </span>
              </div>
              <div className="group relative flex size-11 items-center justify-center rounded-xl border-2 border-white bg-linear-to-br from-green-400 to-emerald-500 text-white shadow-lg transition-all hover:scale-110 hover:-rotate-6 active:scale-90">
                <span className="text-xl">🚀</span>
                <span className="absolute -top-10 left-1/2 -translate-x-1/2 scale-0 rounded-lg bg-gray-900 px-3 py-1.5 text-[10px] font-black whitespace-nowrap text-white transition-all group-hover:scale-100">
                  PLAY NOW
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="group/iframe bg-card-bg relative overflow-hidden shadow-[0_20px_50px_-20px_rgba(79,70,229,0.3)] transition-all duration-700 hover:shadow-[0_30px_70px_-20px_rgba(79,70,229,0.5)]">
          <div className="from-primary via-secondary to-primary absolute inset-[-2px] z-0 animate-pulse bg-linear-to-r opacity-30 blur-sm group-hover/iframe:opacity-50" />

          <div className="relative z-10 overflow-hidden rounded-2xl">
            <GamePlayWrapper
              gameId={game.game_id}
              gameName={game.game_name}
              thumbnail={game.thumbnail}
              containerRef={gameContainerRef}
            />
          </div>

          <div className="pointer-events-none absolute inset-0 z-20 rounded-2xl border-2 border-white/20 shadow-inner" />
        </div>
      </div>

      <div className="from-white via-white/80 to-primary/5 dark:from-card-bg dark:via-card-bg/80 dark:to-primary/10 relative mb-12 overflow-hidden rounded-[2.5rem] border-2 border-white bg-linear-to-br p-5 sm:p-6 md:p-10 shadow-sm ring-1 ring-black/5 dark:border-white/10 dark:ring-white/5">
        {/* Decorative background shapes - softer and more subtle */}
        <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-yellow-200/10 blur-3xl dark:bg-yellow-500/5" />
        <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-200/10 blur-3xl dark:bg-purple-500/5" />

        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex-1 text-center sm:text-left">
            <div className="mb-4 flex flex-wrap items-center justify-center sm:justify-start gap-3">
              <span className="flex items-center gap-2 rounded-full bg-linear-to-r from-yellow-400 to-orange-500 px-3 py-1 sm:px-4 sm:py-1.5 text-[9px] sm:text-[10px] font-black text-white shadow-sm ring-2 ring-white dark:ring-white/20">
                <span className="animate-wiggle inline-block">⭐</span> FEATURED GAME
              </span>
              {game.status && (
                <span className="flex items-center gap-2 rounded-full bg-linear-to-r from-green-400 to-emerald-500 px-3 py-1 sm:px-4 sm:py-1.5 text-[9px] sm:text-[10px] font-black text-white shadow-sm ring-2 ring-white dark:ring-white/20">
                  ✅ {game.status}
                </span>
              )}
            </div>

            <h1 className="font-baloo from-primary via-secondary to-primary mb-2 bg-linear-to-r bg-clip-text text-3xl sm:text-4xl font-black text-transparent drop-shadow-sm md:text-5xl lg:text-6xl">
              {game.game_name}
            </h1>

            <p className="text-deepblue/40 flex flex-wrap items-center justify-center sm:justify-start gap-2 text-sm sm:text-base font-bold md:text-lg dark:text-white/40">
              <span>Made with ❤️ by</span>
              <span className="bg-purple-100 px-3 py-1 rounded-full text-purple-600 dark:bg-purple-900/30 dark:text-purple-300">
                {game.developer_team}
              </span>
            </p>
          </div>

          {/* Quick Hero Stats - Optimized for Mobile Grid */}
          <div className="grid grid-cols-2 sm:flex sm:flex-wrap gap-3 sm:gap-4">
            {metaItems
              .filter((item) => ['Players', 'Level'].includes(item.label))
              .map((item, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-center justify-center rounded-[1.5rem] sm:rounded-[2rem] border-2 border-white bg-white p-4 sm:px-6 sm:py-4 shadow-sm transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-md dark:border-white/10 dark:bg-card-bg"
                >
                  <div className={`bg-linear-to-br ${item.color} mb-2 sm:mb-3 flex size-11 sm:size-14 items-center justify-center rounded-xl sm:rounded-2xl shadow-sm ring-2 sm:ring-4 ring-white transition-transform group-hover:rotate-6 dark:ring-white/10`}>
                    <Image src={item.icon} alt={item.label} className="size-5 sm:size-6 brightness-0 invert" />
                  </div>
                  <span className="text-deepblue/30 text-[8px] sm:text-[10px] font-black tracking-widest uppercase dark:text-white/20">
                    {item.label}
                  </span>
                  <span className="text-foreground text-xs sm:text-sm font-black text-center">
                    {item.value}
                  </span>
                  <div className="absolute -top-1 -right-1 text-xl sm:text-2xl opacity-0 transition-opacity group-hover:opacity-100">
                    {item.emoji}
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Secondary Info - Wrapped for Mobile */}
        <div className="mt-8 flex flex-col sm:flex-row sm:items-center gap-4 border-t border-gray-100 pt-8 dark:border-white/10">
          <span className="text-deepblue/30 text-[10px] font-black tracking-widest uppercase text-center sm:text-left sm:mr-2 dark:text-white/20">
            Game Details:
          </span>
          <div className="flex flex-wrap justify-center sm:justify-start gap-3 sm:gap-4">
            {metaItems
              .filter((item) => !['Players', 'Level'].includes(item.label))
              .map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-2.5 rounded-full border-2 border-white bg-white/50 px-3 py-1.5 sm:px-4 sm:py-2 shadow-xs transition-all hover:bg-white hover:shadow-sm dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <div className={`bg-linear-to-br ${item.color} flex size-6 sm:size-7 items-center justify-center rounded-full shadow-xs ring-2 ring-white dark:ring-white/10`}>
                    <Image src={item.icon} alt={item.label} className="size-3 sm:size-3.5 brightness-0 invert" />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-deepblue/40 text-[7px] sm:text-[8px] font-black tracking-widest uppercase leading-none dark:text-white/30">
                      {item.label}
                    </span>
                    <span className="text-foreground text-[9px] sm:text-[10px] font-extrabold leading-none">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Floating elements - hidden on very small screens to avoid clutter */}
        <div className="absolute top-8 right-8 animate-bounce text-3xl select-none opacity-20 dark:opacity-10 hidden sm:block">🎈</div>
        <div className="absolute bottom-8 right-16 animate-pulse text-3xl select-none opacity-20 delay-500 dark:opacity-10 hidden sm:block">🎯</div>
      </div>

      <div className="group from-white via-white/80 to-primary/5 dark:from-card-bg dark:via-card-bg/80 dark:to-primary/10 relative mb-12 overflow-hidden rounded-[2.5rem] border-2 border-white bg-linear-to-br p-6 sm:p-10 shadow-sm ring-1 ring-black/5 dark:border-white/10 dark:ring-white/5">
        <div className="absolute top-6 right-6 text-4xl opacity-10 dark:opacity-5">📖</div>
        <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-yellow-200/10 blur-3xl dark:bg-yellow-500/5" />
        <div className="absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-purple-200/10 blur-3xl dark:bg-purple-500/5" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-3 lg:items-start">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-2 w-12 rounded-full bg-linear-to-r from-purple-500 to-pink-500 shadow-sm" />
              <span className="font-baloo bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl sm:text-3xl font-black text-transparent">
                About This Game
              </span>
              <span className="text-2xl animate-bounce-slow">🎯</span>
            </div>

            <div
              className="prose prose-lg dark:prose-invert text-foreground/80 max-w-none font-medium leading-relaxed dark:text-white/70"
              dangerouslySetInnerHTML={{ __html: formattedDescription }}
            />
          </div>

          {game.thumbnail && (
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="border-4 border-white bg-white rounded-3xl overflow-hidden shadow-sm dark:border-white/10 dark:bg-card-bg">
                  <Image
                    src={game.thumbnail}
                    alt={game.game_name}
                    width={400}
                    height={400}
                    className="object-cover w-full transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-purple-500/10 to-transparent pointer-events-none" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {relatedGames.length > 0 && (
        <div className="mt-16">
          <SectionHeading title="More Awesome Games" icon="🎮" />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4">
            {relatedGames.map((relatedGame) => (
              <GameCard
                key={relatedGame.game_id}
                title={relatedGame.game_name}
                category={relatedGame.developer_team}
                image={relatedGame.thumbnail}
                href={allRoute.game(relatedGame.game_id)}
                emoji={relatedGame.emoji}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameDetailsClient;
