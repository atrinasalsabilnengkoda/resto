import { openDB } from 'idb';
import CONFIG from '../globals/config';

const { DATABASE_NAME, DATABASE_VERSION, OBJECT_STORE_NAME } = CONFIG;

const database = openDB(DATABASE_NAME, DATABASE_VERSION, {
  upgrade(db) {
    db.createObjectStore(OBJECT_STORE_NAME, { keyPath: 'id' });
  },
});

const FavoriteResto = {
  async getAllRestaurants() {
    return (await database).getAll(OBJECT_STORE_NAME);
  },
  async getRestaurant(id) {
    if (!id) { return; }
    return (await database).get(OBJECT_STORE_NAME, id);
  },
  async putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) { return; }
    return (await database).put(OBJECT_STORE_NAME, restaurant);
  },
  async deleteRestaurant(id) {
    return (await database).delete(OBJECT_STORE_NAME, id);
  },
};

export default FavoriteResto;
