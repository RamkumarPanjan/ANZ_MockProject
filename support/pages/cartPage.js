import Page from './page'
import ElementActions  from '../../support/actions/elementActions'
import {GlobalVariable} from '../helpers/globalVariable'

class CartPage extends Page {

    selectors = {
        lblConfirmationMessage:'div.clearfix div.layer_cart_product h2',
        lblProductName: 'div.clearfix div.layer_cart_product div.layer_cart_product_info .product-name',
        lblProductPrice: 'div.clearfix div.layer_cart_product div.layer_cart_product_info #layer_cart_product_price',
        btnProceedToCheckOut: 'div.clearfix div.button-container a[title="Proceed to checkout"]'
    }

    async verifyInfo(productName) {
        await $(this.selectors.lblConfirmationMessage).waitForDisplayed({ timeout: 10000 })
        await browser.pause(2000)	

        console.log("===============================================")
        let actualItemName = await ElementActions.getText(this.selectors.lblProductName)
        let actualItemPrice = await ElementActions.getText(this.selectors.lblProductPrice)
        let confirmationMessage = await ElementActions.getText(this.selectors.lblConfirmationMessage)
        console.log("===============================================")
        console.log(actualItemName)
        console.log(actualItemPrice)
        console.log(confirmationMessage)
        await ElementActions.verifyText(this.selectors.lblConfirmationMessage, 'Product successfully added to your shopping cart')
        await ElementActions.verifyText(this.selectors.lblProductName, productName)
        await ElementActions.click(this.selectors.btnProceedToCheckOut)
    }
}

module.exports = new CartPage();