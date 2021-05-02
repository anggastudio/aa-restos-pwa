import UrlParser from '../../routes/url-parser';
import AaRestoDbSource from '../../data/aarestosdb-source';
import { createRestoDetailTemplate } from '../templates/template-creator';
import StarsCounter from '../../utils/stars-counter';
// import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
      <div id="resto-detail"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await AaRestoDbSource.resto(url.id);
    const restoContainer = document.querySelector('#resto-detail');
    const stars = StarsCounter.count(resto.rating);
    restoContainer.innerHTML = createRestoDetailTemplate(resto, stars);

    // LikeButtonInitiator.init({
    //   likeButtonContainer: document.querySelector('#likeButtonContainer'),
    //   movie: {
    //     id: movie.id,
    //     title: movie.title,
    //     overview: movie.overview,
    //     backdrop_path: movie.backdrop_path,
    //     vote_average: movie.vote_average,
    //   },
    // });
  },
};

export default Detail;
