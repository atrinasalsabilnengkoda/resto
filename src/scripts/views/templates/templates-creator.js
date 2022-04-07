import CONFIG from '../../globals/config';

const createRestoCard = (restaurant) => `
  <a class="list-item resto-card" href="#/detail/${restaurant.id}" aria-label="${restaurant.name}">
      <div class="list-image--container">
        <img
          src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}"
          alt="${restaurant.name}"
          crossorigin="anonymous"
          class="lazyload list-image"
        />
      </div>
      <div class="list-content">
        <div class="list-info">
          <div>
            <h3>Rating:</h3>
            <span>${restaurant.rating}</span>
            <img src="icons/star-solid.svg" alt="star" class="hero-star-small lazyload"/>
          </div>
          <div>
            <h3>City:</h3>
            <span>${restaurant.city}</span>
          </div>
        </div>
        <div class="list-data">
          <h2 class="list-title">${restaurant.name}</h2>
          <p class="list-desc">
            ${restaurant.description}
          </p>
        </div>
      </div>
    </a>
`;

const createLoader = () => `
  <div class="indicator">
    <div class="spinner">
      <div class="spinner-item"></div>
      <div class="spinner-item"></div>
      <div class="spinner-item"></div>
      <div class="spinner-item"></div>
      <div class="spinner-item"></div>
    </div>
  </div>
`;

const createList = (list) => {
  let collections = '';
  list.forEach((item) => {
    collections += `<li>${item.name}</li>`;
  });
  return collections;
};

const createHeroDetail = (restaurant) => `
  <div class="hero-content">
    <div class="hero-rating">
        <img src="icons/star-solid.svg" alt="star" class="hero-star lazyload"/>
        <span class="hero-score">${restaurant.rating}</span>
    </div>
    <br/>
    <h1 class="hero-title">${restaurant.name}</h1>
    <br/>
    <p class="hero-location">${restaurant.address}, ${restaurant.city}</p>
  </div>
`;

const createDetailBody = (restaurant) => `
  <img src="${CONFIG.BASE_IMAGE_URL}/${restaurant.pictureId}" alt="${restaurant.name}" class="detail-image lazyload">
  <div class="detail-text">
    <h1>${restaurant.name}</h1>
    <p>${restaurant.address}, ${restaurant.city}</p><br>
    <h3>Kategori:</h3>
    <ul class="detail-category">
      ${createList(restaurant.categories)}
    </ul>
    <br/>
    <p class="detail-desc">${restaurant.description}</p>
    <div class="detail-menus">
      <ul>
        <li>Food's</li>
        <ul>
        ${createList(restaurant.menus.foods)}
        </ul>
      </ul>
      <ul>
        <li>Drink's</li>
        <ul>
          ${createList(restaurant.menus.drinks)}
        </ul>
      </ul>
    </div>
    <div class="detail-reviews">
      <h2>Customer Reviews :</h2>
      <form id="review-form" class="detail-form">
        <input type="text" placeholder="Name" id="review-name">
        <textarea placeholder="Review" id="review-review"></textarea>
        <button type="submit">Give Review</button>
      </form>
      <ul>
        ${restaurant.customerReviews.map((review) => (`<li class="review-user">
            <div>
            <span class="avatar">${review.name[0]}</span>
            </div>
            <div class="review-info">
            <h3> ${review.name}</h3>
            <p> ${review.review}</p>
            <time> ${review.date}</time>
            </div>
          </li>`)).join(' ')}
      </ul>
    </div>
  </div>
`;

const createUnLikeButton = () => `
  <button aria-label="remove from favorite" id="favorite-button" class="favorite">
    <i class="far fa-heart" aria-hidden="true"></i>
  </button>
`;
const createLikeButton = () => `
  <button aria-label="add to favorite" id="favorite-button" class="favorite">
    <i class="fas fa-heart" aria-hidden="true"></i>
  </button>
`;

const createEmpty = () => `
  <div class="indicator" id="noList">
    <p class="text-center">You dont have any list of Favorite Resto<h2>
  </div>
`;

export {
  createRestoCard,
  createDetailBody,
  createHeroDetail,
  createLoader,
  createLikeButton,
  createUnLikeButton,
  createEmpty,
};
