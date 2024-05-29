import FavoriteRestaurantIdb from '../../data/favorite-restaurant-idb';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
  
        <div class="content-favorite">
          <h2 tabindex="0" class="favorite_heading">Favorite Restaurants</h2>
          <div class="card-favorite" id="restaurants"></div>
        </div>
  `;
  },

  async afterRender() {
    const restaurants = await FavoriteRestaurantIdb.getAllRestaurants();
    const restaurantsContainer = document.querySelector('#restaurants');

    restaurants.forEach((restaurant) => {
      restaurantsContainer.innerHTML
        += createRestaurantListTemplate(restaurant);
    });
  },
};

export default Favorite;
