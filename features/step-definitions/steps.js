import { Given, When, Then } from '@wdio/cucumber-framework'

import LoginPage from '../../support/pages/loginPage'
import SecurePage from '../../secure.page'

Given(/^I am on the (\w+) page$/, async (page) => {
    await LoginPage.open()
});

When(/^I login with (\w+) and (.+)$/, async (username, password) => {
    await LoginPage.login(username, password)
});

Then(/^I should see a flash message saying (.*)$/, async (message) => {
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveTextContaining(message);
});

