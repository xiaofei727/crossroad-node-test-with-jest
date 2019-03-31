const { Given, When, Then } = require('cucumber');

const webdriver = require('selenium-webdriver');

// make it headless
const browser = new webdriver.Builder().withCapabilities(webdriver.Capabilities.chrome()).build();

Given('I am at the home page of the website', async () => browser.get('http://localhost:3000/'));

When('I click the tab with ID {string}', async tab => browser.findElement({ id: tab }).click());

Then('I should be at {string}', async (url) => {
  await browser.sleep(1000);
  if (browser.getCurrentUrl() === url) {
    return 'success';
  }
  return 'failure';
});


//  Job posting card tests

Given('I am at the job posting page', async () => browser.get('http://localhost:3000/postings'));

Then('I should see some jobs', async () => {
  await browser.sleep(1000);

  browser.findElement({ id: 'cardContainer' }).then((elements) => {
    if (elements.childElementCount !== 0) {
      return 'success';
    }
    return 'failure';
  });

  await browser.sleep(1000);
});

//  Job posting form tests

Given('I am at the job posting form page', async () => browser.get('http://localhost:3000/jobPostingForm'));

When('I enter values', async () => browser.findElement({ id: 'question1' }).sendKeys('Hello'));

Then('I should see those values added', async () => {
  await browser.sleep(1000);

  browser.findElement({ id: 'question1' }).getAttribute('value').then((text) => {
    if (text === 'Hello') {
      return 'success';
    }
    return 'failure';
  });
  await browser.sleep(1000);
});

When('I submit before everything is filled out', async () => browser.findElement({ id: 'submitBtn' }).click());

Then('the submit should fail', async () => {
  await browser.sleep(1000);
  browser.switchTo().alert().getText().then((text) => {
    if (text === 'Form not filled out.') {
      browser.switchTo().alert().accept();
      return 'success';
    }
    return 'failure';
  });
  await browser.sleep(1000);
});

When('I submit the filled out form', async () => {
  browser.findElement({ id: 'question1' }).sendKeys('a');
  browser.findElement({ id: 'question2' }).sendKeys('a');
  browser.findElement({ id: 'question3' }).sendKeys('a');
  browser.findElement({ id: 'question4' }).sendKeys('a');
  browser.findElement({ id: 'question5' }).sendKeys('a');
  browser.findElement({ id: 'question6' }).sendKeys('a');

  return browser.findElement({ id: 'submitBtn' }).click();
});

Then('the submit should succeed', async () => {
  await browser.sleep(1000);
  browser.switchTo().alert().getText().then((text) => {
    if (text === 'Successfully posted') {
      browser.switchTo().alert().accept();
      return 'success';
    }
    return 'failure';
  });
  await browser.sleep(1000);
});
