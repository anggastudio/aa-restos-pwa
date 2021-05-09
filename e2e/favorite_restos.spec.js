const assert = require('assert');

Feature('favorite restos');

Before(({ I }) => {
  I.amOnPage('/#/favorites');
});

Scenario('showing empty favorite restos', ({ I }) => {
  I.seeElement('#restos');
  I.see('Oops, there is no favorite Resto yet', 'p');
});

Scenario('favorite one resto', async ({ I }) => {
  I.see('Oops, there is no favorite Resto yet', 'p');

  I.amOnPage('/');

  I.seeElement('.resto-title a');

  const firstResto = locate('.resto-title a').first();
  const firstRestoTitle = await I.grabTextFrom(firstResto);
  I.click(firstResto);

  I.seeElement('.resto-save');
  I.click('.resto-save');

  I.amOnPage('/#/favorites');
  I.seeElement('#restos');
  I.seeElement('.resto');
  const favoritedRestoTitle = await I.grabTextFrom('.resto-title');

  assert.strictEqual(firstRestoTitle, favoritedRestoTitle);
});

Scenario('unfavorite favorited resto', async ({ I }) => {
  I.see('Oops, there is no favorite Resto yet', 'p');

  I.amOnPage('/');

  I.seeElement('.resto-title a');
  const firstUnfavoriteResto = locate('.resto-title a').first();
  I.click(firstUnfavoriteResto);

  I.seeElement('.resto-save');
  I.click('.resto-save');

  I.amOnPage('/#/favorites');
  I.seeElement('#restos');
  I.seeElement('.resto');

  I.seeElement('.resto-title a');

  const firstFavoritedResto = locate('.resto-title a').first();
  I.click(firstFavoritedResto);

  I.seeElement('.resto-save');
  I.click('.resto-save');

  I.amOnPage('/#/favorites');
  I.seeElement('#restos');
  I.see('Oops, there is no favorite Resto yet', 'p');

  I.dontSeeElement('.resto-title a');
});
