import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
import FavoriteRestos from '../src/scripts/data/favoriteresto-idb';

describe('Favorite Resto Idb Contract Test Implementation', () => {
  afterEach(async () => {
    (await FavoriteRestos.getRestos()).forEach(async (resto) => {
      await FavoriteRestos.deleteResto(resto.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteRestos);
});
