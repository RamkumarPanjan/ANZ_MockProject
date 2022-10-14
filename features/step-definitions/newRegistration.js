import { Given, When, Then } from '@wdio/cucumber-framework'

import NewRegistration from '../../support/pages/newRegistration'

When(/^new registration page is displayed$/, async () => {
    await NewRegistration.verifyPageLoaded()
});


Then(/^enter all required details with password as (.*) and create a new account$/, async (password) => {
    await NewRegistration.completeNewRegistration(password)
    await browser.pause(10000)
});
