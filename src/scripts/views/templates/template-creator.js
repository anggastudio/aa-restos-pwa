import CONFIG from '../../globals/config';

const createRestoCategoryItemTemplate = (category) => `
    <span class="resto-tag">${category.name}</span>
`;

const createRestoMenuItemTemplate = (menu) => `
    <p>${menu.name}</p>
`;

function createRestoCategoriesTemplate(categories) {
  let template = '';
  categories.forEach((category) => {
    template += createRestoCategoryItemTemplate(category);
  });
  return template;
}

function createRestoMenusTemplate(menus) {
  let template = '';
  menus.forEach((menu) => {
    template += createRestoMenuItemTemplate(menu);
  });
  return template;
}

const createMenusTemplate = (menus) => `
  <div class="flex-row m-1">
      <h1 class="resto-title mt-1">Menus</h1>
    </div>
  <div class="flex-row">

    <article class="resto flex-1 m-1">
      <div class="resto-content">
        <div class="flex-col center">
          <h3 class="resto-sub-title">Foods</h3>
          <div class="menu flex-col center">${createRestoMenusTemplate(menus.foods)}</div>
        </div>
      </div>
    </article>

    <article class="resto flex-1 m-1">
      <div class="resto-content">
        <div class="flex-col center">
          
          <h3 class="resto-sub-title">Drinks</h3>
          <div class="menu flex-col center">${createRestoMenusTemplate(menus.drinks)}</div>
        </div>
      </div>
    </article>

  </div>
`;

const createReviewItemTemplate = (review) => `
  <div class="review-container">
    <div class="avatar m-1">${review.name[0].toUpperCase()}</div>
    <article class="review-content mr-2">
      <h3 class="resto-sub-title">"${review.review}"</h3>
      <p>- ${review.name} <span>pada ${review.date}</span</p>
    </article>
  </div>
`;

function createReviewTemplate(reviews) {
  let templateItem = '';
  reviews.forEach((review) => {
    templateItem += createReviewItemTemplate(review);
  });
  return `
    <div class="m-1">
      <h1 class="resto-title mt-1">Customer Reviews</h1>
    </div>
    <div id="reviews" class="flex-row wrap">
      ${templateItem}
    </div>
    <div class="m-1">
      <h1 class="resto-title mt-1">Add Your Review</h1>
    </div>
    <div class="review-container w-full">
      <article class="review-form-container w-full">
        <form action="/" class="review-form" onsubmit="event.preventDefault();">
          <div class="form-inner">
            <input id="review-name" type="text" placeholder="Name">
            <textarea id="review-content" placeholder="Your review..." rows="5"></textarea>
            <button type="submit" id="submit-review">Submit</button>
          </div>
        </form>
      </article>
    </div>
  `;
}

const createRestoDetailTemplate = (resto, stars) => `
  <div class="flex-1">
    <img class="w-full cover" src="${CONFIG.BASE_IMAGE_URL_LARGE}${resto.pictureId}" alt="${resto.name}">
  </div>
  <div class="container">
    <div class="flex-row m-1">
      <h1 class="resto-title">Overview</h1>
    </div>
    <article class="resto flex-row items-end m-1">
      <div class="resto-content flex-1 mr-2">
        <div class="flex-col content-end">
          <h1 class="resto-title"><a href="#/detail/${resto.id}">${resto.name}</a></h1>

          <p class="resto-tags">
            ${createRestoCategoriesTemplate(resto.categories)}
          </p>
          
          <p class="resto-metadata">
              <span class="resto-rating-text">${resto.address}, ${resto.city}</span>
          </p>

          <p class="resto-metadata">
              <span class="resto-rating">${stars.starsOn}<span>${stars.starsOff}</span></span>
              <span class="resto-rating-text">(${resto.rating})</span>
          </p>

          <div id="favorite-button-container"></div>
        </div>
          
      </div>
      <div class="flex-2">
        <p class="resto-desc-full">${resto.description}</p>
      </div>
    </article>

    ${createMenusTemplate(resto.menus)}
    ${createReviewTemplate(resto.customerReviews)}
    
  </div>
`;

const createRestoItemTemplate = (resto, stars) => `
    <div class="card" id="resto-${resto.id}">
    <article class="resto">
        <div class="image-box">
          <img class="w-full" src="${CONFIG.BASE_IMAGE_URL}${resto.pictureId}" alt="${resto.name}">
        </div>
        <div class="resto-content">
            <p class="resto-tags">
                <span class="resto-tag">${resto.city}</span>
            </p>

            <h1 class="resto-title"><a href="#/detail/${resto.id}">${resto.name}</a></h1>

            <p class="resto-metadata">
                <span class="resto-rating">${stars.starsOn}<span>${stars.starsOff}</span></span>
                <span class="resto-rating-text">(${resto.rating})</span>
            </p>

            <p class="resto-desc">${resto.description}</p>

        </div>
    </article>
    </div>
  `;

const createFavoriteButtonTemplate = (id) => `
  <button aria-label="favorite this restaurant" id="favorite-button-${id}" class="resto-save" type="button">
    <i class="fa fa-heart-o mr-1" aria-hidden="true"></i>
      Save to Favorite
  </button>
`;

const createFavoritedButtonTemplate = (id) => `
  <button aria-label="unfavorite this restaurant" id="favorite-button-${id}" class="resto-save" type="button">
    <i class="fa fa-heart mr-1" aria-hidden="true"></i>
      Favorited
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createFavoriteButtonTemplate,
  createFavoritedButtonTemplate,
  createReviewItemTemplate,
};
