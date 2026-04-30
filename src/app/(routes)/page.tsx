import Banner from '@/components/Banner';
import GameCard from '@/components/GameCard';
import SectionHeading from '@/components/SectionHeading';
import { SITE_URL, allGames } from '@/constants';
import { allRoute } from '@/constants/allRoutes';
import { generatePageMetadata } from '@/utils/generatePageMetadata';

export async function generateMetadata() {
  return generatePageMetadata(allRoute.home);
}

const Home = () => {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Funox Kids',
    url: SITE_URL,
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Banner />

      <div className="container pt-6 md:pt-8">
        <SectionHeading
          title="Popular Games"
          highlightWord="Games"
          showLine={true}
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-3 xl:grid-cols-4">
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
