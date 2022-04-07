import FavoriteResto from '../src/scripts/data/favoriteResto-idb';
import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';

describe('favorite resto idb contract implementation', () => {
  afterEach(async () => {
    (await FavoriteResto.getAllRestaurants()).forEach(async (restaurant) => {
      await FavoriteResto.deleteRestaurant(restaurant.id);
    });
  });

  itActsAsFavoriteRestoModel(FavoriteResto);
});