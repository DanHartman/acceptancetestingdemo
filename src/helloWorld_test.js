
Feature('HelloWorld');

Scenario('test www.compliancecrane.com/', (I) => {
  I.amOnPage('/');
  I.dontSee('404');
  I.dontSee('501');
  I.dontSee('Error');
  I.see('Compliance Crane Services Inc.');
});
