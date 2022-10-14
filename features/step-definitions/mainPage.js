import { Given, When, Then } from '@wdio/cucumber-framework'

import MainPage from '../../support/pages/mainPage'



Then(/^main page is loaded sucessfully$/, async () => {
    await MainPage.verifyPageLoaded()
});

Then(/^verify username (.*) is displayed$/, async (username) => {
    await MainPage.verifyUserName(username)
});

Then(/^add item (.*) to kart$/, async (product) => {
    await MainPage.addItemToKart(product)
});





