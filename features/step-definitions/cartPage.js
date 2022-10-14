import { Given, When, Then } from '@wdio/cucumber-framework'

import CartPage from '../../support/pages/cartPage'



Then(/^cart is displayed with (.*) item successfully$/, async (productCode) => {
    await CartPage.verifyInfo(productCode)
});






