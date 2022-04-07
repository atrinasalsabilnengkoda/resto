/* eslint-disable import/prefer-default-export */
const itActsAsFavoriteRestoModel = (FavoriteResto) => {
    it('should return the resto that has been added to favorite resto', async () => {
      FavoriteResto.putRestaurant({ id: 1 });
      FavoriteResto.putRestaurant({ id: 2 });
      FavoriteResto.putRestaurant({ id: 3 });

      expect(await FavoriteResto.getRestaurant(1))
        .toEqual({ id: 1 });
      expect(await FavoriteResto.getRestaurant(2))
        .toEqual({ id: 2 });
      expect(await FavoriteResto.getRestaurant(3))
        .toEqual({ id: 3 });
      expect(await FavoriteResto.getRestaurant(4))
        .toEqual(undefined);
    });

    it('should refuse a movie from being added if it does not have the correct property', async () => {
      FavoriteResto.putRestaurant({ aProperty: 'property' });
   
      expect(await FavoriteResto.getAllRestaurants())
        .toEqual([]);
    });

    it('should can return all resto that has been added', async () => {
      FavoriteResto.putRestaurant({ id: 1 });
      FavoriteResto.putRestaurant({ id: 2 });
  
      expect(await FavoriteResto.getAllRestaurants())
        .toEqual([{ id: 1 }, { id: 2 }]);
    });

    it('should remove favorite restaurant', async () => {
      FavoriteResto.putRestaurant({ id: 1 });
      FavoriteResto.putRestaurant({ id: 2 });
      FavoriteResto.putRestaurant({ id: 3 });
  
      await FavoriteResto.deleteRestaurant(1);
  
      expect(await FavoriteResto.getAllRestaurants())
        .toEqual([{ id: 2 }, { id: 3 }]);
    });

    it('should handle request to remove a resto even though the resto has not been added', async () => {
      FavoriteResto.putRestaurant({ id: 1 });
      FavoriteResto.putRestaurant({ id: 2 });
      FavoriteResto.putRestaurant({ id: 3 });
  
      await FavoriteResto.deleteRestaurant(4);
  
      expect(await FavoriteResto.getAllRestaurants())
        .toEqual([
          { id: 1 }, 
          { id: 2 }, 
          { id: 3 }
        ]);
    });
  };
  
  export { itActsAsFavoriteRestoModel };
  