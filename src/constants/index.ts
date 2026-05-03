export const SITE_NAME = 'Funox Kids';
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';
export const SITE_MASK_ICON = './icon.png';

import {
  imgAnimal_DayCare,
  imgBaby_DayCare,
  imgBaby_Sitting,
  imgCake_Shop,
  imgColor_Book,
  imgDeep_Fishing,
  imgDentist_Master,
  imgIce_Or_Fire_Dress,
  imgJigshow,
  imgSweet_Momory
} from '../assets/images';

export const gamesData = {
  game: {
    game_name: 'Animal Day Care',
    game_id: 'animal-day-care',
    p4_d_link:
      'https://animal-day-care.games.funox.com/unity/animal-day-care/dedde342627b/index.html',
    thumbnail: imgAnimal_DayCare,
    developer_team: 'Funox',
    description: '',
    status: 'Good to Go!',
    comment: '',
    comment2: '',
    version_id: 'v1',
  },

  relatedGames: [
    {
      game_name: 'Baby Day Care',
      game_id: 'baby-day-care',
      p4_d_link:
        'https://baby-day-care.games.funox.com/unity/baby-day-care/013a4a2fe684/index.html',
      thumbnail: imgBaby_DayCare,
      developer_team: 'Funox',
      description: '',
      status: 'Good to Go!',
      comment: '',
      comment2: '',
      version_id: 'v1',
    },
    {
      game_name: 'Baby Sitting',
      game_id: 'baby-sitting',
      p4_d_link:
        'https://baby-sitting.games.funox.com/unity/baby-sitting/50e2bfc8ff0e/index.html',
      thumbnail: imgBaby_Sitting,
      developer_team: 'Funox',
      description: '',
      status: 'Good to Go!',
      comment: '',
      comment2: '',
      version_id: 'v1',
    },
    {
      game_name: 'Cake Shop',
      game_id: 'cake-shop',
      p4_d_link:
        'https://cake-shop.games.funox.com/unity/cake-shop/19aab7d11fd5/index.html',
      thumbnail: imgCake_Shop,
      developer_team: 'Funox',
      description: '',
      status: 'Good to Go!',
      comment: '',
      comment2: '',
      version_id: 'v1',
    },
    {
      game_name: 'Color Book',
      game_id: 'color-book',
      p4_d_link:
        'https://color-book.games.funox.com/unity/color-book/621a43eb5070/index.html',
      thumbnail: imgColor_Book,
      developer_team: 'Funox',
      description: '',
      status: 'Good to Go!',
      comment: '',
      comment2: '',
      version_id: 'v1',
    },
    {
      game_name: 'Deep Fishing',
      game_id: 'deep-fishing',
      p4_d_link:
        'https://deep-fishing.games.funox.com/unity/deep-fishing/bf277b02bb72/index.html',
      thumbnail: imgDeep_Fishing,
      developer_team: 'Funox',
      description: '',
      status: 'Good to Go!',
      comment: '',
      comment2: '',
      version_id: 'v1',
    },
    {
      game_name: 'Dentist Master',
      game_id: 'dentist-master',
      p4_d_link:
        'https://dentist-master.games.funox.com/unity/dentist-master/03e7b3ca807a/index.html',
      thumbnail: imgDentist_Master,
      developer_team: 'Funox',
      description: '',
      status: 'Good to Go!',
      comment: '',
      comment2: '',
      version_id: 'v1',
    },
    {
      game_name: 'Ice Or Fire Dress',
      game_id: 'ice-or-fire-dress',
      p4_d_link:
        'https://ice-or-fire-dress.games.funox.com/unity/ice-or-fire-dress/52d59fb393b5/index.html',
      thumbnail: imgIce_Or_Fire_Dress,
      developer_team: 'Funox',
      description: '',
      status: 'Good to Go!',
      comment: '',
      comment2: '',
      version_id: 'v1',
    },
    {
      game_name: 'Jigshow',
      game_id: 'jigshow',
      p4_d_link:
        'https://jigshow.games.funox.com/unity/jigshow/da0dc4ce1ef0/index.html',
      thumbnail: imgJigshow,
      developer_team: 'Funox',
      description: '',
      status: 'Good to Go!',
      comment: '',
      comment2: '',
      version_id: 'v1',
    },
    {
      game_name: 'Sweet Momory',
      game_id: 'sweet-momory',
      p4_d_link:
        'https://sweet-momory.games.funox.com/unity/sweet-momory/66b4020deff3/index.html',
      thumbnail: imgSweet_Momory,
      developer_team: 'Funox',
      description: '',
      status: 'Good to Go!',
      comment: '',
      comment2: '',
      version_id: 'v1',
    },
  ],
};

export const allGames = [gamesData.game, ...gamesData.relatedGames];
