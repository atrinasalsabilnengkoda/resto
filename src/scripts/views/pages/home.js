import RestoSource from '../../data/resto-source';
import { createLoader, createRestoCard } from '../templates/templates-creator';

const Home = {
  async render() {
    return `
      <div class="hero">
        <div class="hero-content">
          <h1 class="hero-title">Lapar<mark>pedia</mark></h1>
          <p class="hero-desc">Finding the best restaurant doesn't have to be complicated by using Laparpedia. Laparpedia is guaranteed to be easier, more practical, and more reliable by using Laparpedia.</p>
          <a href="#main" class="hero-cta">Find Now</a>
        </div>
      </div>
      <main id="main">
        <section class="container">
          <div id="loader-container"></div>
          <br/><br/>
          <h2>Show all the restaurant</h2>
          <div class="list" id="root-content"></div>
        </section>
      </main>
    `;
  },
  async afterRender() {
    const restaurantContainer = document.querySelector('#root-content');
    const loaderContainer = document.querySelector('#loader-container');
    loaderContainer.innerHTML = createLoader();
    const restaurants = await RestoSource.list();
    loaderContainer.innerHTML = '';
    restaurants.forEach((restaurant) => {
      restaurantContainer.innerHTML += createRestoCard(restaurant);
    });
  },
};

export default Home;
