const { Given, When, Then } = require('@wdio/cucumber-framework');
var pageLibrary = require('../pageobjects/pageLibrary.json')


Given(/^I am on the belong homePage$/, async () => {
    await browser.url('http://www.belong.com.au/');
    await browser.pause(3000);
});

When(/^I verify that element "([^"]*)?" is displayed$/, async (selector) => {
    var path = `pageLibrary.${selector}` ;
    selector = await eval(path) ;
    elem = await $(selector);
    await elem.waitForExist({ timeout: 15000 })
    await expect(elem).toBeDisplayed();
});

When(/^I verify that URL contains "([^"]*)?" text$/, async (text) => {
    const URL = await browser.getUrl();
    expect(URL).toContain(text);
});

When(/^I enter "([^"]*)?" value in the "([^"]*)?" box$/, async (text, selector) => {
    var path = `pageLibrary.${selector}` ;
    selector = await eval(path) ;
    const inputBox = await $(selector);
    await inputBox.setValue(text);
});

When(/^I click on "([^"]*)?" button$/, async (selector) => {
    var path = `pageLibrary.${selector}` ;
    selector = await eval(path) ;
    const button = await $(selector);
    await button.click();
});

Then(/^I verify that the top result in "([^"]*)?" matches the text "([^"]*)?"$/, async (selector, text) => {
    var path = `pageLibrary.${selector}` ;
    selector = await eval(path) ;
    const list = await $(selector);
    const topResult = await list.$$('li')[0]
    const actualText = await topResult.getText();
    expect(actualText).toBe(text);
});

Then(/^I verify that the "([^"]*)?" matches the text "([^"]*)?"$/, async (selector, text) => {
    var path = `pageLibrary.${selector}` ;
    selector = await eval(path) ;
    var heading = await $(selector).$$('h1')[0]
    let actualText = await heading.getText();
    expect(actualText).toBe(text);
});

Then(/^I select the top result from "([^"]*)?"$/, async (selector) => {
    var path = `pageLibrary.${selector}` ;
    selector = await eval(path) ;
    const list = await $(selector);
    const topResult = await list.$$('li')[0]
    await topResult.click();
});

