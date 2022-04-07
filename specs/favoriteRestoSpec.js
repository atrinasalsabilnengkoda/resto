import * as TestFactories from './helpers/testFactories';
import FavoriteResto from '../src/scripts/data/favoriteResto-idb';

describe('Add resto to favorite list', () => {
    const favoriteButtonContainer = () => {
        document.body.innerHTML = '<div id="favBtnContainer"></div>';
    };

    beforeEach(() => {
        favoriteButtonContainer();
    });

    it('should show like button even never add favorite resto', async () => {
        await TestFactories.createFavButtonPresenterWithResto({ id: 1 });
        expect(document.querySelector('[aria-label="add to favorite"]')).toBeTruthy();
    });

    it('should cant show unlike button even never add favorite resto', async () => {
        await TestFactories.createFavButtonPresenterWithResto({ id: 1 });
        expect(document.querySelector('[aria-label="remove from favorite"]')).toBeFalsy();
    });

    it('should can click like button', async () => {
        await TestFactories.createFavButtonPresenterWithResto({ id: 1 });
        document.querySelector('#favorite-button').dispatchEvent(new Event('click'));
        const restaurant = await FavoriteResto.getRestaurant(1);

        expect(restaurant).toEqual({ id: 1 });

        await FavoriteResto.deleteRestaurant(1);
    });

    it('should cant click like button again when already liked', async () => {
        await TestFactories.createFavButtonPresenterWithResto({ id: 1 });
        await FavoriteResto.putRestaurant({ id: 1 });
        document.querySelector('#favorite-button').dispatchEvent(new Event('click'));
        const allFavoriteRestaurant = await FavoriteResto.getAllRestaurants();

        expect(allFavoriteRestaurant).toEqual([{ id: 1 }]);
        FavoriteResto.deleteRestaurant(1);
    });
});