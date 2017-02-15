
Feature('HelloWorld');

Scenario('test www.pixotech.com', (I) => {
  I.amOnPage('/');
  I.dontSee('404');
  I.dontSee('501');
  I.dontSee('Error');
  I.see('ABOUT');
});
