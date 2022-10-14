import {concat, assign, isPlainObject, isArray} from 'lodash'

const GlobalVariable = {
    globalObject: null,

    init() {
        this.globalObject = null;
        this.globalObject = new Map();
    },

    get(key) {
        if (!this.globalObject) this.init();
        if (this.globalObject.has(key)) return this.globalObject.get(key);
        return null;
    },

    set(key, value) {
        if (!this.globalObject) this.init();
        this.globalObject.set(key, value);
    },

    destroy(key) {
        if (!this.globalObject) this.init();
        if (this.globalObject.has(key)) this.globalObject.delete(key);
    }
}

module.exports = GlobalVariable;