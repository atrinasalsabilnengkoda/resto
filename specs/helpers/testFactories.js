/* eslint-disable import/prefer-default-export */
import FavoriteResto from '../../src/scripts/data/favoriteResto-idb';
import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';

const createFavButtonPresenterWithResto = async (restaurant) => {
  await FavoriteButtonPresenter.init({
    favoriteButtonContainer: document.querySelector('#favBtnContainer'),
    favResto: FavoriteResto,
    restaurant,
  });
};

export { createFavButtonPresenterWithResto };
