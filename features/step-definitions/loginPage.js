import { Given, When, Then } from '@wdio/cucumber-framework'

import LoginPage from '../../support/pages/loginPage'

When(/^login page is loaded sucessfully$/, async () => {
    await LoginPage.verifySignInPageLoaded()
});


Then(/^user login with (.*) and (.+)$/, async (username, password) => {
    await LoginPage.signIn(username, password)
    await browser.pause(4000)
});

When(/^new account creation option is available$/, async () => {
    await LoginPage.verifyNewAccountOptionAvailable()
});

Then(/^a unique email id is used to create a new account$/, async () => {
    await LoginPage.createNewAccount()
});








