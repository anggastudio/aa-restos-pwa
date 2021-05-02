/* eslint-disable no-underscore-dangle */
import FavoriteRestoIdb from '../data/favoriteresto-idb';
import { createFavoriteButtonTemplate, createFavoritedButtonTemplate } from '../views/templates/template-creator';

const FavoriteButtonInitiator = {

  async init({ favButtonContainer, resto }) {
    this._favButtonContainer = favButtonContainer;
    this._resto = resto;

    await this._renderButton();
  },

  async _renderButton() {
    const { id } = this._resto;

    if (await this._isRestoExist(id)) {
      this._renderFavorited();
    } else {
      this._renderFavorite();
    }
  },

  async _isRestoExist(id) {
    const resto = await FavoriteRestoIdb.getResto(id);
    return !!resto;
  },

  _renderFavorite() {
    this._favButtonContainer.innerHTML = createFavoriteButtonTemplate(this._resto.id);

    const favButton = document.querySelector(`#favorite-button-${this._resto.id}`);
    favButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._favButtonContainer.innerHTML = createFavoritedButtonTemplate(this._resto.id);

    const favButton = document.querySelector(`#favorite-button-${this._resto.id}`);
    favButton.addEventListener('click', async () => {
      await FavoriteRestoIdb.deleteResto(this._resto.id);
      this._renderButton();
    });
  },

};

export default FavoriteButtonInitiator;
