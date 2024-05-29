import RestaurantDbSource from '../../data/restaurantdb-source';
import { createRestaurantListTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <hero-bar></hero-bar>
      <section>
        <div class="content">
          <h1 tabindex="0">Explore Restaurant</h1>
          <div class="card-container" id="cardcont"></div>
        </div>
      </section>
    `;
  },

  async afterRender() {
    const restos = await RestaurantDbSource.restaurantList();
    console.log(restos);
    const restoContainer = document.querySelector('#cardcont');
    restos.forEach((restaurant) => {
      restoContainer.innerHTML += createRestaurantListTemplate(restaurant);
    });
  },
};

export default Home;
