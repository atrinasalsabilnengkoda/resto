Feature('Review Restaurant');

Before(({ I }) => {
  I.amOnPage('/');
});

Scenario('give a review to the first resto in list', async ({ I }) => {
  const name = 'Maemunah';
  const review = 'I want to review this resto. I really like the taste of the food';

  I.seeElement('.resto-card');
  I.click(locate('.resto-card').first());

  I.seeElement('#review-form');
  I.fillField('#review-name', name);
  I.fillField('#review-review', review);
  I.click('#review-form button');
  I.see(name, locate('.review-user .review-info h3').last());
  I.see(review, locate('.review-user .review-info p').last());
});