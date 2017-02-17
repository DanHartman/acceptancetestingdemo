
Feature('Navigation Menu');

Scenario('Verifies Nav Menu ', (I) => {
  I.amOnPage('/');
  I.seeElement('#menu-item-93');
});
