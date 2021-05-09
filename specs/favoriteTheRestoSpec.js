import FavoriteRestos from '../src/scripts/data/favoriteresto-idb';
import * as TestFactories from './helpers/testFactories';

describe('Favorite A Resto', () => {
  const addLikeButtonContainer = () => {
    document.body.innerHTML = '<div id="favorite-button-container"></div>';
  };

  beforeEach(() => {
    addLikeButtonContainer();
  });

  it('should show the favorite button when the resto has not been favorited before', async () => {
    await TestFactories.createFavButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="favorite this restaurant"]')).toBeTruthy();
  });

  it('should not show the unfavorite button when the resto has not been favorited before', async () => {
    await TestFactories.createFavButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unfavorite this restaurant"]')).toBeFalsy();
  });

  it('should be able to favorite the resto', async () => {
    const id = 1;
    await TestFactories.createFavButtonPresenterWithResto({ id });
    document.querySelector(`#favorite-button-${id}`).dispatchEvent(new Event('click'));
    const resto = await FavoriteRestos.getResto(1);

    expect(resto).toEqual({ id });

    FavoriteRestos.deleteResto(1);
  });

  it('should not add a resto again when its already favorited', async () => {
    const id = 1;
    await TestFactories.createFavButtonPresenterWithResto({ id });
    await FavoriteRestos.putResto({ id });
    document.querySelector(`#favorite-button-${id}`).dispatchEvent(new Event('click'));

    expect(await FavoriteRestos.getRestos()).toEqual([{ id }]);

    FavoriteRestos.deleteResto(1);
  });

  it('should not add a resto when it has no id', async () => {
    const id = null;
    await TestFactories.createFavButtonPresenterWithResto({ id });
    document.querySelector(`#favorite-button-${id}`).dispatchEvent(new Event('click'));

    expect(await FavoriteRestos.getRestos()).toEqual([]);
  });
});
