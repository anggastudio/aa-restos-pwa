/* eslint-disable no-underscore-dangle */
import { createFavoriteButtonTemplate, createFavoritedButtonTemplate } from '../views/templates/template-creator';

const FavoriteButtonPresenter = {

  async init({ favButtonContainer, favoriteRestos, resto }) {
    this._favButtonContainer = favButtonContainer;
    this._resto = resto;
    this._favoriteRestos = favoriteRestos;

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
    const resto = await this._favoriteRestos.getResto(id);
    return !!resto;
  },

  _renderFavorite() {
    this._favButtonContainer.innerHTML = createFavoriteButtonTemplate(this._resto.id);

    const favButton = document.querySelector(`#favorite-button-${this._resto.id}`);
    favButton.addEventListener('click', async () => {
      await this._favoriteRestos.putResto(this._resto);
      this._renderButton();
    });
  },

  _renderFavorited() {
    this._favButtonContainer.innerHTML = createFavoritedButtonTemplate(this._resto.id);

    const favButton = document.querySelector(`#favorite-button-${this._resto.id}`);
    favButton.addEventListener('click', async () => {
      await this._favoriteRestos.deleteResto(this._resto.id);
      this._renderButton();
    });
  },

};

export default FavoriteButtonPresenter;
