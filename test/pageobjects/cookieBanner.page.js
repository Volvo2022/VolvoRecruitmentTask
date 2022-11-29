class CookieBannerPage {

    get acceptCookieButton() {
        return $('//button[@id="onetrust-accept-btn-handler"]')
    }

    async acceptCookies() {
        if (await this.acceptCookieButton.waitForExist({
            timeout: 5000,
            interval: 500
        })) {
            await this.acceptCookieButton.click();
        }
    }
}

module.exports = new CookieBannerPage();