const assert = require('assert');

// eslint-disable-next-line no-undef
Feature('Liking Restaurants');

// eslint-disable-next-line no-undef
Before(({ I }) => {
  I.amOnPage('/#/favorite');
});
// eslint-disable-next-line no-undef
Scenario('showing empty liked restaurants', ({ I }) => {
  I.seeElement('.favorite_heading');
  I.see('Favorite Restaurants');
});

// eslint-disable-next-line no-undef
Scenario('liking one restaurant', async ({ I }) => {
  I.see('Favorite Restaurants', '.favorite_heading');
  I.amOnPage('/');
  // ... kita akan mengisi uji coba berikutnya ...

  I.seeElement('.card-title a');
  // eslint-disable-next-line no-undef
  const firstRestaurant = locate('.card-title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click(firstRestaurant);

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('.card');
  const likedRestaurantName = await I.grabTextFrom('.card-title');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

// eslint-disable-next-line no-undef
Scenario('Unliking one restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');

  I.see('Favorite Restaurant', '.favorite_heading');

  I.amOnPage('/');

  // eslint-disable-next-line no-undef
  I.click(locate('.card-title').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.dontSeeElement('Favorite Restaurant', '.favorite_heading');

  // eslint-disable-next-line no-undef
  I.click(locate('.card-title').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.dontSeeElement('.card-title');
});

// eslint-disable-next-line no-undef
Scenario('Add review restaurant', async ({ I }) => {
  I.amOnPage('/#/favorite');

  I.amOnPage('/');

  I.seeElement('.card-title');
  // eslint-disable-next-line no-undef
  I.click(locate('.card-title').first());

  I.seeElement('.form_review');
  I.fillField('input', 'Syifa');
  I.fillField('textarea', 'Enak');
  I.click('button[type="submit"]');

  // eslint-disable-next-line no-undef
  const lastReview = locate('.review-content').last();
  const lastReviewText = await I.grabTextFrom(lastReview);
});
