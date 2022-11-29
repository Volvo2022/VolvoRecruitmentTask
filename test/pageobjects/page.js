module.exports = class Page {
    open (path) {
        return browser.url(`https://www.volvocars.com/${path}`)
    }
}