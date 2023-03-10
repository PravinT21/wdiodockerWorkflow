const { Given, When, Then } = require('@wdio/cucumber-framework');

Given(/^I open google home page$/, async () => {
    await browser.url("https://google.com.au");
});

Then(/^Validate the home page title (.+)$/, async (text) => {
    let pageTitle = await browser.getTitle();
    console.log("===print===",pageTitle);
    console.log("==from feature=print===",text);
    await expect(pageTitle).toEqual(text);
});