import Page from './page'
import ElementActions  from '../../support/actions/elementActions';

class LoginPage extends Page {

    selectors = {
        txtRegisteredEmailId: 'input#email',
        txtPassword: 'input#passwd',
        lnkForgotPassword: 'p.lost_password a',
        btnSubmit: 'button#SubmitLogin',
        txtCreateAccountEmailId: 'input#email_create',
        btnCreateAnAccount: 'button#SubmitCreate'
    }

    async signIn (username, password) {
        await ElementActions.setText(this.selectors.txtRegisteredEmailId,username)
        await ElementActions.setText(this.selectors.txtPassword,password)
        await ElementActions.click(this.selectors.btnSubmit)
    }

    async verifySignInPageLoaded() {
        await ElementActions.verifyElementDisplayed(this.selectors.txtRegisteredEmailId)
    }

    async verifyNewAccountOptionAvailable() {
        await ElementActions.verifyElementDisplayed(this.selectors.txtCreateAccountEmailId)
    }

    async createNewAccount() {
        let date = new Date()
        let uniqueValue = 'mock_'+date.getHours().toString()+date.getMinutes().toString()+date.getSeconds().toString()+date.getDay().toString()+date.getMonth().toString()+date.getMilliseconds().toString()
        uniqueValue = uniqueValue+"@gmail.com"
        console.log(uniqueValue)       
        await ElementActions.setText(this.selectors.txtCreateAccountEmailId, uniqueValue)
        await browser.pause(2000)
        await ElementActions.click(this.selectors.btnCreateAnAccount)
        await browser.pause(20000)
    }


}

module.exports = new LoginPage();