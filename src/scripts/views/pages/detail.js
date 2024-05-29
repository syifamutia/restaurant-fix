import UrlParser from '../../routes/url-parser';
import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantDetailTemplate } from '../templates/template-creator';
import LikeButtonInitiator from '../../utils/like-button-presenter';
import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import addReview from '../../utils/add-review-initiator';

const Detail = {
  async render() {
    return `
      <div id="detail-resto" class="detail-resto"></div>
      <div id="likeButtonContainer"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const resto = await RestaurantDbSource.detailRestaurant(url.id);
    const restoContainer = document.querySelector('#detail-resto');
    restoContainer.innerHTML = createRestaurantDetailTemplate(resto);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      favoriteRestaurants: FavoriteRestaurantIdb,
      restaurant: {
        id: resto.id,
        name: resto.name,
        pictureId: resto.pictureId,
        description: resto.description,
        city: resto.city,
        rating: resto.rating,
      },
    });

    const addReviewContainer = document.querySelector('#inputReview');
    const inputName = addReviewContainer.querySelector('#inputName');
    const inputReview = addReviewContainer.querySelector('#inputReview');

    addReviewContainer.addEventListener('submit', (event) => {
      event.preventDefault();

      addReview({
        url: url.id,
        name: inputName.value,
        review: inputReview.value,
      });

      addReviewContainer.reset();
    });

    console.log(resto);
  },
};

export default Detail;
