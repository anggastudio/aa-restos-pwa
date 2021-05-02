import AaRestoDbSource from '../../data/aarestosdb-source';
import { createRestoItemTemplate } from '../templates/template-creator';
import StarsCounter from '../../utils/stars-counter';

const Home = {
  async render() {
    return `
      <header class="jumbotron">
          <img src="./heros/hero-image_4.jpg" alt="Jumbotron image - Almond Meatball">
          <div class="jumbotron-title">
              <h1>We serve the best</h1>
          </div>
      </header>
      <div class="content container">
        <div id="restos" class="cards">

        </div>
      </div>
    `;
  },

  async afterRender() {
    const restos = await AaRestoDbSource.restos();
    const restosContainer = document.querySelector('#restos');
    restos.forEach((resto) => {
      const stars = StarsCounter.count(resto.rating);
      restosContainer.innerHTML += createRestoItemTemplate(resto, stars);
    });
  },
};

export default Home;
