import Page from './page'
import ElementActions  from '../../support/actions/elementActions';

class StartPage extends Page {

    selectors = {
        lnkSignIn: 'a.login',
        lnkContactUs: 'div#contact-link a',
        txtSearchQuery: 'input.search_query'
    }

    async verifyPageLoaded () {
        //await $(this.selectors.lnkSignIn).waitForDisplayed({ timeout: 6000 })
        ElementActions.verifyElementDisplayed(this.selectors.txtSearchQuery)
    }

    async clickSignIn() {
        ElementActions.click(this.selectors.lnkSignIn)
        browser.pause(5000)
    }

    async openInBrowser () {
        await browser.deleteCookies()
        await browser.url(`http://automationpractice.com/index.php`)
        await browser.setWindowSize(1280, 800)
    }
}

module.exports = new StartPage();