import { Given, When, Then } from '@wdio/cucumber-framework'

import ShoppingCartSummary from '../../support/pages/shoppingCartSummary'

When(/^shopping-cart summary page is displayed$/, async () => {
    await ShoppingCartSummary.verifyPageLoaded()
});

Then(/^proceed till payment page$/, async () => {
    await ShoppingCartSummary.navigateTillPaymentPage()
});

Then(/^verify if added item (.*) is available in cart$/, async (productName) => {
    await ShoppingCartSummary.verifyItemInformation(productName)
});