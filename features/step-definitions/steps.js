const { Given, When, Then } = require('@wdio/cucumber-framework');
var pageLibrary = require('../pageobjects/pageLibrary.json')


const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');

const pages = {
    login: LoginPage
}

Given(/^I am on the (\w+) page$/, async (page) => {
    await browser.url('http://www.belong.com.au/');
    await browser.pause(5000);
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});



When(/^I verify that element "([^"]*)?" is displayed$/, async (selector) => {
    var path = `pageLibrary.${selector}` ;
    selector = await eval(path) ;
    elem = await $(selector);
    await expect(elem).toBeDisplayed() ;

});


Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

