import FavoriteRestos from '../src/scripts/data/favoriteresto-idb';
import * as TestFactories from './helpers/testFactories';

const addFavButtonContainer = () => {
  document.body.innerHTML = '<div id="favorite-button-container"></div>';
};

describe('Unfavorite A Resto', () => {
  beforeEach(async () => {
    addFavButtonContainer();
    await FavoriteRestos.putResto({ id: 1 });
  });

  afterEach(async () => {
    await FavoriteRestos.deleteResto(1);
  });

  it('should display unfavorite widget when the resto has been favorited', async () => {
    await TestFactories.createFavButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="unfavorite this restaurant"]'))
      .toBeTruthy();
  });

  it('should not display favorite widget when the resto has been favorited', async () => {
    await TestFactories.createFavButtonPresenterWithResto({ id: 1 });

    expect(document.querySelector('[aria-label="favorite this restaurant"]'))
      .toBeFalsy();
  });

  it('should be able to remove favorited resto from the list', async () => {
    await TestFactories.createFavButtonPresenterWithResto({ id: 1 });

    document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestos.getRestos()).toEqual([]);
  });

  it('should not throw error if the unfavorited resto is not in the list', async () => {
    await TestFactories.createFavButtonPresenterWithResto({ id: 1 });

    await FavoriteRestos.deleteResto(1);

    document.querySelector('[aria-label="unfavorite this restaurant"]').dispatchEvent(new Event('click'));

    expect(await FavoriteRestos.getRestos()).toEqual([]);
  });
});
