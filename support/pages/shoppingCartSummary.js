import Page from './page'
import ElementActions  from '../../support/actions/elementActions';

class ShoppingCartSummary extends Page {

    selectors = {
        btnProceedToCheckOut: 'p.cart_navigation a[title="Proceed to checkout"] span',
        chkAddressUseDelivery: 'input#addressesAreEquals',
        btnAddressProceedToCheckOut: 'p.cart_navigation button[name="processAddress"]',
        btnShippingProceedToCheckOut: 'p.cart_navigation button[name="processCarrier"]',
        chkShippingTermsOfService: 'p.checkbox input#cgv',
        lblShoppingKartItem: 'td.cart_description p.product-name a'
    }

    async verifyPageLoaded () {
        await ElementActions.verifyElementDisplayed(this.selectors.btnProceedToCheckOut)
    }

    async navigateTillPaymentPage() {
        await ElementActions.click(this.selectors.btnProceedToCheckOut)
        await browser.pause(2000)
        //await ElementActions.verifyElementDisplayed(this.selectors.chkAddressUseDelivery)
        await ElementActions.click(this.selectors.btnAddressProceedToCheckOut)
        await browser.pause(2000)
        //await ElementActions.verifyElementDisplayed(this.selectors.chkShippingTermsOfService)
        await ElementActions.click(this.selectors.chkShippingTermsOfService)
        await browser.pause(2000)
        await ElementActions.click(this.selectors.btnShippingProceedToCheckOut)
    }

    async verifyItemInformation(productName) {
        await ElementActions.verifyText(this.selectors.lblShoppingKartItem, productName)
    }


}

module.exports = new ShoppingCartSummary();