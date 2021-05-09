const assert = require('assert');

Feature('review a resto');

Before(({ I }) => {
  I.amOnPage('/');
  I.seeElement('.resto-title a');

  const firstResto = locate('.resto-title a').first();
  I.click(firstResto);
  I.seeElement('.review-container');
  I.scrollTo('.review-container');
});

Scenario('review a restos', async ({ I }) => {
  const reviewText = 'Review ini berasal dari E2E testing. Ngeeeriih...(2)';
  I.seeElement('#review-name');
  I.appendField('#review-name', 'Angga Pratama');
  I.seeElement('#review-content');
  I.appendField('#review-content', reviewText);

  I.seeElement('#submit-review');
  I.click('#submit-review');

  I.waitForResponse('https://restaurant-api.dicoding.dev/review');

  I.seeElement('#reviews');
  I.seeElement('.review-container');

  const lastReviewContent = locate('.review-content h3').last();
  const lastReview = await I.grabTextFrom(lastReviewContent);
  assert.strictEqual(`"${reviewText}"`, lastReview);
});
