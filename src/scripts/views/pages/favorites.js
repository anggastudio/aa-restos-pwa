import FavoriteRestoIdb from '../../data/favoriteresto-idb';
import { createRestoItemTemplate, createEmptyRestoItemTemplate } from '../templates/template-creator';
import StarsCounter from '../../utils/stars-counter';

const Favorites = {
  async render() {
    return `
      <header class="jumbotron">
          <picture>
            <source media="(max-width: 600px)" srcset="./heros/hero-image_4-small.jpg">
            <img class="lazyload"
                data-src='./heros/hero-image_4-large.jpg' 
                alt="Jumbotron image - Almond Meatball" />
          </picture>
          <div class="jumbotron-title">
              <h1>Your Favorite Restaurants</h1>
          </div>
      </header>
      <div class="content container">
        <div id="restos" class="cards">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await FavoriteRestoIdb.getRestos();
    const restosContainer = document.querySelector('#restos');
    if (restos.length === 0) {
      restosContainer.innerHTML = createEmptyRestoItemTemplate();
    } else {
      restos.forEach((resto) => {
        const stars = StarsCounter.count(resto.rating);
        restosContainer.innerHTML += createRestoItemTemplate(resto, stars);
      });
    }
  },
};

export default Favorites;
