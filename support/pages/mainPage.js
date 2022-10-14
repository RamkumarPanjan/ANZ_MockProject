import Page from './page'
import ElementActions  from '../../support/actions/elementActions'
import {GlobalVariable} from '../helpers/globalVariable'

class MainPage extends Page {

    selectors = {
        txtSearchBox:'input.search_query',
        btnSearchIem:'form#searchbox button[type="submit"]',
        lnkTopSellers: 'div#best-sellers_block_right h4.title_block a',
        lnkTShirts: 'ul li a[title="T-shirts"]',
        lblUserName: 'a.account span',
        imgMyStore: 'div#header_logo a[title="My Store"]',
        objParentContainer: 'ul.product_list div.left-block',
        lblItemName: 'ul.product_list div.right-block h5[itemprop="name"] a',
        lblItemPrice: 'ul.product_list div.right-block div.content_price span.price',
        btnAddToKart: 'ul.product_list div.right-block a.button[title="Add to cart"]'
    }

    async addItemToKart(product) {
        await ElementActions.click(this.selectors.imgMyStore)
        await browser.pause(5000)
        await ElementActions.setText(this.selectors.txtSearchBox, product)
        //await $(this.selectors.txtSearchBox).setValue('Printed Dress')
        await ElementActions.click(this.selectors.btnSearchIem)
        //await $(this.selectors.btnSearchIem).click()
        await browser.pause(5000)

        let textItemName = await $$(this.selectors.lblItemName)
        console.log('textItemName[length]:'+textItemName.length)
        let textPrice = await $$(this.selectors.lblItemPrice)
        console.log('textPrice[length]:'+textPrice.length)
        await browser.pause(2000)

        let itemNameText = await textItemName[0].getText()
        let itemPriceText = await textPrice[0].getText()
        let btnAddToKartObj = await $$(this.selectors.btnAddToKart)

        console.log('itemNameText:'+itemNameText)
        console.log('itemPriceText:'+itemPriceText)
        console.log('btnAddToKartObj:'+btnAddToKartObj.length)
        const elem = await $(this.selectors.lblItemName);
        await textItemName[0].scrollIntoView()
        await textItemName[0].moveTo()
        await browser.pause(2000)

        await btnAddToKartObj[0].click()
        await browser.pause(2000)

        //GlobalVariable.set('itemName', itemNameText)
        //GlobalVariable.set('itemPrice', itemPriceText)
    }

    async verifyUserName(username) {
        await ElementActions.verifyText(this.selectors.lblUserName, username)
        await browser.pause(1000)

    }

    async verifyPageLoaded() {
        await ElementActions.verifyElementDisplayed(this.selectors.lblUserName)
    }

}

module.exports = new MainPage();