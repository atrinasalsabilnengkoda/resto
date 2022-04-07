import { itActsAsFavoriteRestoModel } from './contract/favoriteRestoContract';
 
let FavoriteResto = [];
 
const FavoriteRestoArray = {
 
  getRestaurant(id) {
    if (!id) {
      return;
    }
 
    return FavoriteResto.find((restaurant) => restaurant.id == id);
  },
 
  getAllRestaurants() {
    return FavoriteResto;
  },
 
  putRestaurant(restaurant) {
    if (!restaurant.hasOwnProperty('id')) {
      return;
    }
 
    // pastikan id ini belum ada dalam daftar favoriteMovies
    if (this.getRestaurant(restaurant.id)) {
      return;
    }
 
    FavoriteResto.push(restaurant);
  },
 
  deleteRestaurant(id) {
    // cara boros menghapus film dengan meng-copy film yang ada
    // kecuali film dengan id == id
    FavoriteResto = FavoriteResto.filter((restaurant) => restaurant.id != id);
  },
};
 
describe('Favorite Resto Array Contract Test Implementation', () => {
  afterEach(() => FavoriteResto = []);
 
  itActsAsFavoriteRestoModel(FavoriteRestoArray);
});