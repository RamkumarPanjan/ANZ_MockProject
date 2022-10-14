
// import Page from './page'
// import ElementActions  from './support/actions/elementActions';

// class LoginPage extends Page {

//     selectors = {
//         userName: '#username',
//         password: '#password',
//         submit: 'button[type="submit"]'
//     }

//     get inputUsername () {
//         return $(this.selectors.userName);
//     }

//     get inputPassword () {
//         return $(this.selectors.password);
//     }

//     get btnSubmit () {
//         return $(this.selectors.submit);
//     }

//     /**
//      * a method to encapsule automation code to interact with the page
//      * e.g. to login using username and password
//      */
//     async login (username, password) {
//         await ElementActions.setText(this.selectors.userName,username)
//         await ElementActions.setText(this.selectors.password,password)
//         await ElementActions.click(this.selectors.submit)
//         //await $(this.selectors.userName).setValue(username)
//         //await $(this.selectors.password).setValue(password)
//         // await this.inputUsername.setValue(username);
//         // await this.inputPassword.setValue(password);
//         //await this.btnSubmit.click();
//     }

//     /**
//      * overwrite specific options to adapt it to page object
//      */
//     open () {
//         return super.open('login');
//     }
// }

// module.exports = new LoginPage();
