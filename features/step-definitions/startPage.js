import { Given, When, Then } from '@wdio/cucumber-framework'

import StartPage from '../../support/pages/startPage'

Given(/^user opens automation practice page in a new browser$/, async () => {
    await StartPage.openInBrowser()
});


Then(/^verifies pratice page is loaded sucessfully$/, async () => {
    await StartPage.verifyPageLoaded()
});

Then(/^user click on Sign-In link$/, async () => {
    await StartPage.clickSignIn()
});

Given(/^I have a unique email id$/, async () => {
    let date = new Date()
    let uniqueValue = 'mock_'+date.getHours().toString()+date.getMinutes().toString()+date.getSeconds().toString()+date.getDay().toString()+date.getMonth().toString()+date.getMilliseconds().toString()
    console.log(uniqueValue)

});






