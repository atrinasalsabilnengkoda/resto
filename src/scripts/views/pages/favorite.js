import FavoriteResto from '../../data/favoriteResto-idb';
import { createEmpty, createLoader, createRestoCard } from '../templates/templates-creator';

const Favorite = {
  render() {
    return `
      <div class="hero hero--detail">
        <div class="hero-content">
          <h1 class="hero-title">
            Favorite Restaurant
          </h1>
          <p class="hero-location">The list of your favorite restaurant</p>
        </div>
      </div>
      <main id="main">
        <section class="container">
          <div id="loader-container"></div>
          <div class="list" id="root-content"></div>
        </section>
      </main>
    `;
  },
  async afterRender() {
    const restaurantContainer = document.querySelector('#root-content');
    const loaderContainer = document.querySelector('#loader-container');
    loaderContainer.innerHTML = createLoader();
    const restaurants = await FavoriteResto.getAllRestaurants();
    loaderContainer.innerHTML = '';
    if (restaurants.length === 0) loaderContainer.innerHTML = createEmpty();
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestoCard(restaurant);
    });
  },
};

export default Favorite;
