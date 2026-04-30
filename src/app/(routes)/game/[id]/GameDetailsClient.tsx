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
import Button from '@/components/Button';
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
      emoji: '👨‍💻',
      color: 'from-rose-400 to-pink-600',
    },
    {
      icon: iconScreen,
      label: 'Play On',
      value: 'Web Browser',
      emoji: '🎮',
      color: 'from-sky-400 to-blue-600',
    },
    {
      icon: iconUsers,
      label: 'Players',
      value: '1 Player',
      emoji: '👫',
      color: 'from-violet-400 to-purple-600',
    },
    {
      icon: iconClock,
      label: 'Play Time',
      value: 'Unlimited Fun',
      emoji: '⚡',
      color: 'from-amber-400 to-orange-600',
    },
    {
      icon: iconDiamond,
      label: 'Level',
      value: 'Easy Peasy',
      emoji: '🏆',
      color: 'from-emerald-400 to-green-600',
    },
    {
      icon: iconGame,
      label: 'Type',
      value: 'Kids Games',
      emoji: '🎈',
      color: 'from-cyan-400 to-indigo-600',
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
              <Button onClick={() => setShowBanner(false)} size="sm">
                Got it!
              </Button>
            </div>
          </div>
        </div>
      )}

      {/* Game Iframe - Play Area */}
      <div className="border-glass-border from-primary/5 via-card-bg to-secondary/5 mb-8 overflow-hidden rounded-3xl border-4 bg-linear-to-br p-4 shadow-2xl">
        {/* Premium Game Header */}

        <div className="group/iframe bg-card-bg relative mb-6 overflow-hidden shadow-[0_20px_50px_-20px_rgba(79,70,229,0.3)] transition-all duration-700 hover:shadow-[0_30px_70px_-20px_rgba(79,70,229,0.5)]">
          <div className="from-primary via-secondary to-primary pointer-events-none absolute inset-[-2px] z-0 animate-pulse bg-linear-to-r opacity-30 blur-sm group-hover/iframe:opacity-50" />

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
        <div className="border-glass-border bg-glass-bg/80 flex flex-col items-center justify-between gap-4 rounded-3xl border-2 p-5 shadow-lg backdrop-blur-xl md:flex-row">
          <div className="flex items-center gap-5">
            <div className="relative">
              <div className="bg-primary/20 absolute -inset-2 animate-pulse rounded-full blur-md" />
              <div className="from-primary via-secondary to-primary relative flex size-14 items-center justify-center overflow-hidden rounded-xl bg-linear-to-br text-white transition-all duration-500 hover:scale-110 hover:rotate-12">
                <Image
                  src={game.thumbnail}
                  alt={game.game_name}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="font-baloo from-primary via-secondary to-primary bg-linear-to-r bg-clip-text text-3xl font-black text-transparent drop-shadow-sm">
                {game.game_name}
              </h2>
              <div className="mt-1 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2 rounded-full bg-green-100 px-2 py-0.5 dark:bg-green-900/30">
                  <span className="relative flex size-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex size-2 rounded-full bg-green-500" />
                  </span>
                  <span className="text-[9px] font-black tracking-widest text-green-600 uppercase dark:text-green-400">
                    Online
                  </span>
                </div>
                <span className="h-3 w-px bg-gray-200 dark:bg-white/10" />
                <span className="text-[9px] font-black tracking-widest text-gray-400 uppercase">
                  Verified Safe
                </span>
                {game.developer_team && (
                  <>
                    <span className="h-3 w-px bg-gray-200 dark:bg-white/10" />
                    <span className="rounded-full bg-purple-100 px-2 py-0.5 text-[9px] font-black tracking-widest text-purple-600 uppercase dark:bg-purple-900/30 dark:text-purple-400">
                      By {game.developer_team}
                    </span>
                  </>
                )}
                {game.status && (
                  <>
                    <span className="h-3 w-px bg-gray-200 dark:bg-white/10" />
                    <span className="rounded-full bg-blue-100 px-2 py-0.5 text-[9px] font-black tracking-widest text-blue-600 uppercase dark:bg-blue-900/30 dark:text-blue-400">
                      {game.status}
                    </span>
                  </>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <button
              onClick={toggleFullscreen}
              className="text-primary hidden items-center gap-3 rounded-2xl border-2 border-white bg-white/80 px-5 py-2.5 text-sm font-black shadow-sm transition-all hover:-translate-y-1 hover:bg-white hover:shadow-md active:scale-95 sm:flex dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
            >
              <span>Big Screen</span>
            </button>
          </div>
        </div>
      </div>

      <div className="to-primary/5 dark:from-card-bg dark:via-card-bg/80 dark:to-primary/10 relative mb-5 overflow-hidden rounded-[2.5rem] border-2 border-white bg-linear-to-br from-white via-white/80 p-5 shadow-sm ring-1 ring-black/5 sm:p-6 md:mb-12 md:p-10 dark:border-white/10 dark:ring-white/5">
        {/* Decorative background shapes - softer and more subtle */}
        <div className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 rounded-full bg-yellow-200/10 blur-3xl dark:bg-yellow-500/5" />
        <div className="pointer-events-none absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-purple-200/10 blur-3xl dark:bg-purple-500/5" />

        <div className="relative z-10 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1 text-center sm:text-left">
            <div className="mb-4 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <span className="flex items-center gap-2 rounded-full bg-linear-to-r from-yellow-400 to-orange-500 px-3 py-1 text-[9px] font-black text-white shadow-sm ring-2 ring-white sm:px-4 sm:py-1.5 sm:text-[10px] dark:ring-white/20">
                FEATURED GAME
              </span>
            </div>

            <h1 className="font-baloo from-primary via-secondary to-primary mb-2 bg-linear-to-r bg-clip-text text-3xl font-black text-transparent drop-shadow-sm sm:text-4xl md:text-5xl lg:text-6xl">
              {game.game_name}
            </h1>

            <p className="text-deepblue/40 flex flex-wrap items-center justify-center gap-2 text-sm font-bold sm:justify-start sm:text-base md:text-lg dark:text-white/40">
              <span>Made by</span>
              <span className="rounded-full bg-purple-100 px-3 py-1 text-purple-600 dark:bg-purple-900/30 dark:text-purple-300">
                {game.developer_team}
              </span>
            </p>
          </div>

          {/* Quick Hero Stats - Magical Sticker Cards */}
          <div className="grid grid-cols-2 gap-4 sm:flex sm:flex-wrap sm:gap-6">
            {metaItems
              .filter((item) => ['Players', 'Level'].includes(item.label))
              .map((item, index) => (
                <div
                  key={index}
                  className="group relative flex flex-col items-center justify-center overflow-hidden rounded-3xl border-3 border-white bg-white p-5 shadow-[0_12px_24px_-8px_rgba(0,0,0,0.1)] transition-all duration-500 hover:-translate-y-2 hover:rotate-3 hover:shadow-[0_20px_40px_-12px_rgba(0,0,0,0.15)] sm:p-6 sm:px-10 dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  {/* Magical Shine Effect */}
                  <div className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/40 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />

                  {/* Background Glow */}
                  <div
                    className={`bg-linear-to-br ${item.color} pointer-events-none absolute inset-0 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-10`}
                  />

                  <div
                    className={`bg-linear-to-br ${item.color} relative mb-3 flex size-12 items-center justify-center rounded-2xl shadow-lg ring-4 ring-white transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 sm:mb-4 sm:size-16 dark:ring-white/10`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      className="size-6 brightness-0 invert transition-transform sm:size-8"
                    />
                  </div>

                  <span className="text-deepblue/40 relative z-10 text-[9px] font-black tracking-[0.2em] uppercase sm:text-[10px] dark:text-white/40">
                    {item.label}
                  </span>
                  <span className="text-foreground relative z-10 text-center text-sm font-black sm:text-base">
                    {item.value}
                  </span>
                </div>
              ))}
          </div>
        </div>

        {/* Secondary Info - Wrapped for Mobile */}
        <div className="mt-6 flex flex-col gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center dark:border-white/10">
          <div className="flex shrink-0 items-center gap-3">
            <div className="h-1 w-8 rounded-full bg-linear-to-r from-purple-500 to-pink-500" />
            <span className="text-deepblue/40 text-[10px] font-black tracking-[0.2em] uppercase dark:text-white/40">
              Extra Fun Info:
            </span>
          </div>

          <div className="flex flex-wrap gap-3 sm:gap-4">
            {metaItems
              .filter((item) => !['Players', 'Level'].includes(item.label))
              .map((item, index) => (
                <div
                  key={index}
                  className="group flex items-center gap-3 rounded-2xl border-2 border-white bg-white/50 px-4 py-2.5 shadow-xs transition-all hover:-translate-y-1 hover:bg-white hover:shadow-md dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/10"
                >
                  <div
                    className={`bg-linear-to-br ${item.color} flex size-8 items-center justify-center rounded-xl shadow-sm ring-2 ring-white transition-transform group-hover:scale-110 group-hover:rotate-6 dark:ring-white/10`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      className="size-4 brightness-0 invert"
                    />
                  </div>
                  <div className="flex flex-col">
                    <span className="text-deepblue/40 text-[8px] leading-none font-black tracking-widest uppercase dark:text-white/30">
                      {item.label}
                    </span>
                    <span className="text-foreground mt-0.5 text-xs leading-none font-black">
                      {item.value}
                    </span>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Floating elements - hidden on very small screens to avoid clutter */}
      </div>

      <div className="group to-primary/5 dark:from-card-bg dark:via-card-bg/80 dark:to-primary/10 relative overflow-hidden rounded-[2.5rem] border-2 border-white bg-linear-to-br from-white via-white/80 p-6 shadow-sm ring-1 ring-black/5 sm:p-10 dark:border-white/10 dark:ring-white/5">
        <div className="pointer-events-none absolute -top-24 -left-24 h-64 w-64 rounded-full bg-yellow-200/10 blur-3xl dark:bg-yellow-500/5" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-64 w-64 rounded-full bg-purple-200/10 blur-3xl dark:bg-purple-500/5" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-3 lg:items-start">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-2 w-12 rounded-full bg-linear-to-r from-purple-500 to-pink-500 shadow-sm" />
              <span className="font-baloo bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-black text-transparent sm:text-3xl">
                About This Game
              </span>
            </div>

            <div
              className="prose prose-lg dark:prose-invert text-foreground/80 max-w-none leading-relaxed font-medium dark:text-white/70"
              dangerouslySetInnerHTML={{ __html: formattedDescription }}
            />
          </div>

          {game.thumbnail && (
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="dark:bg-card-bg overflow-hidden rounded-3xl border-4 border-white bg-white shadow-sm dark:border-white/10">
                  <Image
                    src={game.thumbnail}
                    alt={game.game_name}
                    width={400}
                    height={400}
                    className="w-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-purple-500/10 to-transparent" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {relatedGames.length > 0 && (
        <div className="mt-6 sm:mt-9 md:mt-12 lg:mt-16">
          <SectionHeading title="More Awesome Games" />

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4">
            {relatedGames.map((relatedGame) => (
              <GameCard
                key={relatedGame.game_id}
                title={relatedGame.game_name}
                category={relatedGame.developer_team}
                image={relatedGame.thumbnail}
                href={allRoute.game(relatedGame.game_id)}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default GameDetailsClient;
