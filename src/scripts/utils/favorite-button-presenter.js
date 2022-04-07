import { createLikeButton, createUnLikeButton } from '../views/templates/templates-creator';

const FavoriteButtonPresenter = {
  async init({ favoriteButtonContainer, favResto, restaurant }) {
    this._favoriteButtonContainer = favoriteButtonContainer;
    this._restaurant = restaurant;
    this._favResto = favResto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._restaurant;
    if (await this._isFavorite(id)) {
      this._renderUnFavorite();
    } else {
      this._renderFavorite();
    }
  },

  async _isFavorite(id) {
    const restaurant = await this._favResto.getRestaurant(id);
    return !!restaurant;
  },
  _renderFavorite() {
    this._favoriteButtonContainer.innerHTML = createLikeButton();
    const favoriteButton = document.querySelector('#favorite-button');
    favoriteButton.addEventListener('click', async () => {
      await this._favResto.putRestaurant(this._restaurant);
      this._renderButton();
    });
  },
  _renderUnFavorite() {
    this._favoriteButtonContainer.innerHTML = createUnLikeButton();
    const favoriteButton = document.querySelector('#favorite-button');
    favoriteButton.addEventListener('click', async () => {
      await this._favResto.deleteRestaurant(this._restaurant.id);
      this._renderButton();
    });
  },
};

export default FavoriteButtonPresenter;
