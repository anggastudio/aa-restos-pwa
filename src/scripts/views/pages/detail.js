import UrlParser from '../../routes/url-parser';
import AaRestoDbSource from '../../data/aarestosdb-source';
import { createRestoDetailTemplate, createReviewItemTemplate } from '../templates/template-creator';
import StarsCounter from '../../utils/stars-counter';
import FavoriteButtonPresenter from '../../utils/favorite-button-presenter';
import FavoriteRestoIdb from '../../data/favoriteresto-idb';

function processReviewResponse(response) {
  if (response && response.customerReviews) {
    let reviewsTemplate = '';
    response.customerReviews.forEach((review) => {
      reviewsTemplate += createReviewItemTemplate(review);
    });
    const reviewsContainer = document.querySelector('#reviews');
    reviewsContainer.innerHTML = reviewsTemplate;
  } else {
    console.log('error add review');
  }
}

async function submitTheReview(id) {
  const inputName = document.querySelector('#review-name');
  const inputReview = document.querySelector('#review-content');
  const name = inputName.value;
  const review = inputReview.value;
  inputName.value = '';
  inputReview.value = '';
  const data = {
    id, name, review,
  };
  const response = await AaRestoDbSource.addReview(data);
  processReviewResponse(response);
}

function setupReviewEvent(id) {
  const submitReview = document.querySelector('#submit-review');
  submitReview.addEventListener('click', () => {
    submitTheReview(id);
  });
}

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

    FavoriteButtonPresenter.init({
      favButtonContainer: document.querySelector('#favorite-button-container'),
      favoriteRestos: FavoriteRestoIdb,
      resto: {
        id: resto.id,
        pictureId: resto.pictureId,
        name: resto.name,
        city: resto.city,
        rating: resto.rating,
        description: resto.description,
      },
    });

    setupReviewEvent(url.id);
  },

};

export default Detail;
