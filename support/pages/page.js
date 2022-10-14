
import path from 'path';
import {isUndefined, isEmpty, set, get, assign} from 'lodash';

module.exports = class Page {
    open (path) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }

    getSelectors (pageName) {
        const selectorsFile = require('./support/elements/selectors.json')
        const selectorJson = get(selectorsFile, pageName, {})
        console.log("SELECTOR: "+JSON.stringify(selectorJson))
        return selectorJson
    }
}
