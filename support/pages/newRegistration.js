import Page from './page'
import ElementActions  from '../../support/actions/elementActions';

class NewRegistration extends Page {

    selectors = {
        chkUserPrefix: 'input[id="id_gender1"]',
        txtFirstName: 'input#customer_firstname',
        txtLastName: 'input#customer_lastname',
        txtPassword: 'input#passwd',
        sltDays: 'select#days',
        sltMonths: 'select#months',
        sltYears: 'select#years',
        txtAddress: 'input#address1',
        txtCity: 'input#city',
        sltState: 'select#id_state',
        txtPostCode: 'input#postcode',
        txtPhoneMobile: 'input#phone_mobile',
        txtAlias: 'input#alias',
        btnSubmitAccount: 'button#submitAccount'
    }

    async completeNewRegistration (password) {
        //await ElementActions.click(this.selectors.chkUserPrefix)
        await ElementActions.setText(this.selectors.txtFirstName, 'Mock')
        await ElementActions.setText(this.selectors.txtLastName, 'Demo')
        await ElementActions.setText(this.selectors.txtPassword, password)
        await ElementActions.selectByIndex(this.selectors.sltDays, 5)
        await ElementActions.selectByIndex(this.selectors.sltMonths, 5)
        await ElementActions.selectByIndex(this.selectors.sltYears, 20)
        await ElementActions.setText(this.selectors.txtAddress, '123 Northeren Street Campus, Bell Road')
        await ElementActions.setText(this.selectors.txtCity, 'Bengaluru')
        await ElementActions.selectByIndex(this.selectors.sltState, 20)
        await ElementActions.setText(this.selectors.txtPostCode, '00000')
        await ElementActions.setText(this.selectors.txtPhoneMobile, '980897890')
        await ElementActions.setText(this.selectors.txtAlias, '456 Southern Tower, Palace Road')
        await ElementActions.click(this.selectors.btnSubmitAccount)
        await browser.pause(10000)
    }

    async verifyPageLoaded() {
        await ElementActions.verifyElementDisplayed(this.selectors.txtFirstName)
        await browser.pause(2000)
    }

}

module.exports = new NewRegistration();