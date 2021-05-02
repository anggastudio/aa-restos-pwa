import UrlParser from '../../routes/url-parser';
import AaRestoDbSource from '../../data/aarestosdb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import StarsCounter from '../../utils/stars-counter';
import FavoriteButtonInitiator from '../../utils/favorite-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="resto-detail"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await AaRestoDbSource.resto(url.id);
    const restoContainer = document.querySelector('#resto-detail');
    const stars = StarsCounter.count(resto.rating);
    restoContainer.innerHTML = createRestoDetailTemplate(resto, stars);

    FavoriteButtonInitiator.init({
      favButtonContainer: document.querySelector('#favorite-button-container'),
      resto: {
        id: resto.id,
        pictureId: resto.pictureId,
        name: resto.name,
        city: resto.city,
        rating: resto.rating,
        description: resto.description,
      },
    });
  },
};

export default Detail;
