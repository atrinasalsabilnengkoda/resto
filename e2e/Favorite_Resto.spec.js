const assert = require('assert');

Feature('Favorite Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('add new favorite resto to the list', async ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('You dont have any list of Favorite Resto', '#noList');

  I.amOnPage('/');
  I.seeElement('.resto-card');
  const firstRestaurantName = await I.grabTextFrom(locate('.resto-card .list-title').first());
  I.click(locate('.resto-card').first());
  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-card');
  const favoriteRestaurantName = await I.grabTextFrom('.resto-card .list-title');
  assert.strictEqual(firstRestaurantName, favoriteRestaurantName);
});

Scenario('remove favorite resto to the list', ({ I }) => {
  I.amOnPage('/#/favorite');
  I.see('You dont have any list of Favorite Resto', '#noList');

  I.amOnPage('/');
  I.seeElement('.resto-card');
  I.click(locate('.resto-card').first());
  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.seeElement('.resto-card');
  I.click('.resto-card');

  I.seeElement('#favorite-button');
  I.click('#favorite-button');

  I.amOnPage('/#/favorite');
  I.see('You dont have any list of Favorite Resto', '#noList');
});
