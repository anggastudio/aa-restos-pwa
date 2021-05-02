import CONFIG from '../../globals/config';

const createRestoDetailTemplate = (resto, stars) => `
  <div class="container">
    <article class="resto flex-row mt-1">
      <div class="flex-1">
        <img class="w-full cover" src="${CONFIG.BASE_IMAGE_URL_LARGE}${resto.pictureId}" alt="${resto.name}">
      </div>
    </article>
    <article class="resto flex-row items-end mt-1">
      
      <div class="resto-content flex-1 mr-2">
        <div class="flex-col content-end">
          <p class="resto-tags">
          <span class="resto-tag">${resto.city}</span>
            </p>

            <h1 class="resto-title"><a href="#/detail/${resto.id}">${resto.name}</a></h1>

            <p class="resto-metadata">
                <span class="resto-rating">${stars.starsOn}<span>${stars.starsOff}</span></span>
                <span class="resto-rating-text">(${resto.rating})</span>
            </p>

            <button class="resto-save mt-1" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000">
                    <path d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z" fill="currentColor" />
                </svg>
                Save to Favorite
            </button>
        </div>
          
      </div>
      <div class="flex-2">
        <p class="resto-desc-full">${resto.description}</p>
      </div>
    </article>
    
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

            <button class="resto-save" type="button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#000000">
                    <path d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z" fill="currentColor" />
                </svg>
                Save to Favorite
            </button>

        </div>
    </article>
    </div>
  `;

const createLikeButtonTemplate = () => `
  <button aria-label="like this movie" id="likeButton" class="like">
     <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this movie" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestoItemTemplate,
  createRestoDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
