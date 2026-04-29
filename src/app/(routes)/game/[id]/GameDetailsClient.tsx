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

      <div className="from-primary/5 via-card-bg to-secondary/5 relative mb-12 overflow-hidden rounded-3xl bg-linear-to-br p-6 shadow-2xl md:p-8">
        <div className="absolute top-4 left-4 animate-bounce text-3xl">🌟</div>
        <div className="absolute top-6 right-6 animate-pulse text-2xl">🎈</div>
        <div className="absolute bottom-6 left-10 animate-bounce text-2xl delay-100">
          🎪
        </div>
        <div className="absolute right-4 bottom-4 animate-pulse text-3xl delay-200">
          🎯
        </div>

        <div className="relative z-10">
          <div className="mb-6">
            <div className="mb-3 inline-block">
              <span className="rounded-full bg-linear-to-r from-yellow-400 to-orange-500 px-4 py-2 text-sm font-bold text-white shadow-lg">
                ⭐ Featured Game
              </span>
            </div>

            <h1 className="font-baloo from-primary via-secondary to-primary bg-linear-to-r bg-clip-text text-3xl font-extrabold text-transparent drop-shadow-sm md:text-4xl lg:text-5xl">
              {game.game_name}
            </h1>

            <p className="text-deepblue/60 mt-2 text-base font-semibold md:text-lg">
              Published by{' '}
              <span className="text-purple-600">{game.developer_team}</span>
            </p>

            {game.status && (
              <div className="mt-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-linear-to-r from-green-400 to-emerald-500 px-4 py-1.5 text-xs font-bold text-white shadow-lg">
                  <span className="text-sm">✅</span>
                  {game.status}
                </span>
              </div>
            )}
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {metaItems.map((item, index) => (
              <div
                key={index}
                className="group border-glass-border bg-card-bg relative overflow-hidden rounded-2xl border-2 p-3 shadow-md transition-all hover:-translate-y-1 hover:scale-105 hover:shadow-lg"
              >
                <div
                  className={`absolute top-0 left-0 h-1 w-full bg-linear-to-r ${item.color}`}
                />

                <div className="absolute -right-1 -bottom-1 text-3xl opacity-10 transition-opacity group-hover:opacity-20">
                  {item.emoji}
                </div>

                <div className="relative z-10 flex flex-col items-center gap-2 text-center">
                  <div
                    className={`bg-linear-to-br ${item.color} flex size-10 items-center justify-center rounded-xl shadow-sm transition-transform group-hover:rotate-6`}
                  >
                    <Image
                      src={item.icon}
                      alt={item.label}
                      className="size-5 brightness-0 invert"
                    />
                  </div>

                  <div>
                    <span className="text-deepblue/50 mb-0.5 block text-[9px] font-bold tracking-wide uppercase">
                      {item.label}
                    </span>
                    <span className="text-foreground block text-xs font-extrabold">
                      {item.value}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="group from-primary/5 via-card-bg to-secondary/5 relative mb-12 overflow-hidden rounded-3xl bg-linear-to-br p-8 shadow-xl sm:p-10">
        <div className="absolute top-6 right-6 text-4xl opacity-20">📖</div>
        <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-linear-to-br from-yellow-200/30 to-orange-200/30 blur-2xl" />
        <div className="absolute -right-10 -bottom-10 h-40 w-40 rounded-full bg-linear-to-br from-purple-200/30 to-pink-200/30 blur-2xl" />

        <div className="relative z-10 grid gap-8 lg:grid-cols-3 lg:items-start">
          <div className="lg:col-span-2">
            <div className="mb-6 flex items-center gap-3">
              <div className="h-2 w-12 rounded-full bg-linear-to-r from-purple-500 to-pink-500 shadow-lg" />
              <span className="font-baloo bg-linear-to-r from-purple-600 to-pink-600 bg-clip-text text-2xl font-bold text-transparent">
                About This Game
              </span>
              <span className="text-2xl">🎯</span>
            </div>

            <div
              className="prose prose-lg dark:prose-invert text-foreground/80 max-w-none font-medium"
              dangerouslySetInnerHTML={{ __html: formattedDescription }}
            />
          </div>

          {game.thumbnail && (
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <div className="border-glass-border relative overflow-hidden rounded-2xl border-4 shadow-2xl">
                  <Image
                    src={game.thumbnail}
                    alt={game.game_name}
                    width={400}
                    height={400}
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-linear-to-t from-purple-500/20 to-transparent" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {relatedGames.length > 0 && (
        <div className="mt-16">
          <SectionHeading title="More Awesome Games" icon="🎮" />

          <div className="grid grid-cols-2 gap-3 sm:gap-8 lg:grid-cols-3 xl:grid-cols-4">
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
