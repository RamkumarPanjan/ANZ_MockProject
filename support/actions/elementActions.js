
class ElementActions {

    async setText (cssSelector, paramValue) {
         await $(cssSelector).setValue(paramValue)
    }

    async click(cssSelector) {
        await $(cssSelector).click()
    }

    async getAttribute(cssSelector, propertyName) {
        return await $(cssSelector).getAttribute(propertyName)
    }

    async getText (cssSelector) {
        return await $(cssSelector).getText()
    }

    async getValue (cssSelector) {
        return await $(cssSelector).getValue()
    }

    async verifyElementDisplayed(cssSelector) {
        await $(cssSelector).waitForDisplayed({ timeout: 10000 })
    }

    async verifyText(cssSelector, expectedText) {
        //let text = await $(cssSelector).getText()
        await expect(await $(cssSelector)).toHaveText(expectedText)
    }

    async scrollIntoView(cssSelector) {
        await cssSelector.scrollIntoView()
    }

    async moveTo(cssSelector) {
        await cssSelector.scrollIntoView()
    }

    async selectByIndex(cssSelector, indexValue) {
        let selectBox = await $(cssSelector)
        await selectBox.selectByIndex(indexValue)
    }

}

module.exports = new ElementActions();
