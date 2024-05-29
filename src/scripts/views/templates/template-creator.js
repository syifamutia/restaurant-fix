import CONFIG from '../../globals/config';

const createRestaurantDetailTemplate = (restaurant) => `
<div class="detail-page">
<section class="detail">
        <div class="container-detail flex">
          <div class="left">
            <div class="main_img">
            <div id="likeButtonContainer"></div>
          <picture>
      <source media="(max-width: 600px)" data-srcset="${
  CONFIG.BASE_IMAGE_URL
}large/${restaurant.pictureId}">
      <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL}large/${
  restaurant.pictureId
}" alt="${restaurant.name}" title="${restaurant.name}" tabindex="0">
    </picture>
            </div>
          </div>
          <div class="right" tabindex="0">
            <h2 class="name" >${restaurant.name}</h2>
             <span 
              >Rating :</span
            >
              <p><i class="fa-solid fa-star" style="color: #FFD43B;" aria-label="rating"></i> ${
  restaurant.rating
}</p>
              <p><i class="fa-solid fa-location-dot"  aria-label="location"></i> ${
  restaurant.address
}, ${restaurant.city}</p>
            <span 
              >Categories : </span
            >
              <p>${restaurant.categories
    .map((categorie) => categorie.name)
    .join(', ')}</p>
            <span
              >Foods : </span
            >
              <p>${restaurant.menus.foods
    .map((food) => food.name)
    .join(', ')}</p>
            <span
              >Drinks : </span
            >
              <p>${restaurant.menus.drinks
    .map((drink) => drink.name)
    .join(', ')}</p>
          </div>
        </div>
        <div class="des" tabindex="0">
        <span
              >Description : </span
            >
              <p>
                ${restaurant.description}
              </p>
              </div>
      </section>
<hr/>
  <section class="input_section" id="addReview" tabindex="0">
        <div class="form_review">
          <h2>Add Review</h2>
          <form id="inputReview" class="add_review">
            <div class="input">
              <label for="inputName">Name</label>
              <input class="inputName"
                id="inputName"
                name="inputName"
                type="text"
                required
                placeholder="Name..."
              />
            </div>
            <div class="input">
              <label for="inputReview">Review</label>
              <textarea class="inputReview"
                name="inputReview"
                id="inputReview"
                placeholder="Review..."
                required
              ></textarea>
            </div>
            <button id="ReviewSubmit" type="submit">Add Review</button>
          </form>
        </div>
      </section>
 
       <section class="review">
       <div class="review-title">
        <h2 tabindex="0">What Our Customers Say</h2>
        </div>
        <div class="card-review">
        ${restaurant.customerReviews
    .map(
      (review) => `
         <div class="review-content">
            <i class="fa-solid fa-circle-user"></i>
          <div class="review-inner" tabindex="0">
            <h3>${review.name}</h3>
            <p>${review.date}</p>
            <p>"${review.review}"</p>
          </div>  
        </div>`,
    )
    .join('')}
        </div>
      </section>
      </div>
`;

const createRestaurantListTemplate = (restaurant) => `
  <div class="card">
          <div class="location" tabindex="0">
             <i class="fa-solid fa-location-dot" aria-label="location"></i>
            <p class="city" >${restaurant.city}</p>
            </div>
 <picture>
 <source class="lazyload" media="(max-width: 600px)" data-srcset="${
  CONFIG.BASE_IMAGE_URL
}large/${restaurant.pictureId}">
             <img class="lazyload" class="card-img" tabindex="0" data-src="${
  CONFIG.BASE_IMAGE_URL
}large/${restaurant.pictureId}" alt="${restaurant.name}" title="${
  restaurant.name
}">
 </picture>
            <div class="card-content">
                <h2 class="card-title"><a href="/#/detail/${restaurant.id}">${
  restaurant.name
}</a></h2>
                <p class="card-des" tabindex="0">${restaurant.description.slice(
    0,
    200,
  )}...</p>
                <p class="rating" tabindex="0">
                    <i class="fa-solid fa-star" style="color: #FFD43B;" aria-label="rating"></i>
                    <small class="card-rating" >${restaurant.rating}</small>
                </p>
            </div>
        </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa-regular fa-heart" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
   <i class="fa-solid fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createRestaurantListTemplate,
  createRestaurantDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
};
