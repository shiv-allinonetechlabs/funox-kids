import { Metadata } from 'next';
import Banner from '@/components/Banner';
import GameCard from '@/components/GameCard';
import { allGames } from '@/constants';
import { allRoute } from '@/constants/allRoutes';

export const metadata: Metadata = {
  title: 'Funox Kids | Safe & Free Games for Children',
  description:
    'The ultimate safe playground for kids! Play hundreds of free, high-quality games in a secure and fun environment designed specifically for children.',
};

const Home = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Funox Kids',
    url: 'https://funox.kids/', // Assuming this is the production URL
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Banner />

      <div className="container pt-6 md:pt-8">
        <div className="mb-6 flex items-center justify-between md:mb-10">
          <h2 className="font-baloo text-2xl font-extrabold text-gray-800 md:text-4xl">
            🔥 Popular <span className="text-purple-600">Games</span>
          </h2>
          <div className="mx-8 hidden h-1 grow rounded-full bg-linear-to-r from-purple-100 to-transparent md:block" />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:grid-cols-2 md:grid-cols-4 md:gap-8 xl:grid-cols-4">
          {allGames.map((game) => (
            <GameCard
              key={game.game_id}
              title={game.game_name}
              category="Kids"
              developer={game.developer_team}
              image={game.thumbnail}
              href={allRoute.game(game.game_id)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
