import * as TestFactories from './helpers/testFactories';
import FavoriteResto from '../src/scripts/data/favoriteResto-idb';

describe('Remove favorite resto from favorite list', () => {
    const favoriteButtonContainer = () => {
        document.body.innerHTML = '<div id="favBtnContainer"></div>';
    };

    beforeEach(async () => {
        favoriteButtonContainer();
        await FavoriteResto.putRestaurant({ id: 1 });
    });
    
    afterEach(async () => {
        await FavoriteResto.deleteRestaurant(1);
    });

    it('should show unlike button when already add to favorite list', async () => {
        await TestFactories.createFavButtonPresenterWithResto({ id: 1 });
        expect(document.querySelector('[aria-label="remove from favorite"]')).toBeTruthy();
    });

    it('should able to remove restaurant from favorite restaurant', async () => {
        await TestFactories.createFavButtonPresenterWithResto({ id: 1 });
        document.querySelector('#favorite-button').dispatchEvent(new Event('click'));
        const allFavoriteResto = await FavoriteResto.getAllRestaurants();
        expect(allFavoriteResto).toEqual([]);
      });
});