/* eslint-disable import/prefer-default-export */
import FavoriteButtonPresenter from '../../src/scripts/utils/favorite-button-presenter';
import FavoriteRestoIdb from '../../src/scripts/data/favoriteresto-idb';

const createFavButtonPresenterWithResto = async (resto) => {
  await FavoriteButtonPresenter.init({
    favButtonContainer: document.querySelector('#favorite-button-container'),
    favoriteRestos: FavoriteRestoIdb,
    resto,
  });
};

export { createFavButtonPresenterWithResto };
