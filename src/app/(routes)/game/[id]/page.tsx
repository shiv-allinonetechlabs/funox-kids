import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { SITE_NAME, SITE_URL, allGames } from '@/constants';

import GameDetailsClient from './GameDetailsClient';

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const game = allGames.find((item) => item.game_id === id);

  if (!game) return {};

  const title = `${game.game_name} | ${SITE_NAME}`;
  const description =
    game.description?.substring(0, 160) ||
    `Play ${game.game_name} on ${SITE_NAME}!`;
  const canonicalUrl = `${SITE_URL}/game/${id}`;
  console.log('game details', game);
  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      type: 'website',
      siteName: SITE_NAME,
      title,
      description,
      url: canonicalUrl,
      images: [
        {
          url: game.thumbnail,
          width: 1200,
          height: 630,
          alt: game.game_name,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [game.thumbnail],
    },
  };
}

const GamePage = async ({ params }: Props) => {
  const { id } = await params;
  const game = allGames.find((item) => item.game_id === id);

  if (!game) return notFound();

  return <GameDetailsClient game={game as any} />;
};

export default GamePage;
