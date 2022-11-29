const Page = require('./page');

class CarMenuDesktopPage{

    get carsBanner() {
        return $('//div[@id="nav:carMenuDesktop"]')
    }

    async waitForBanner(){
        await this.carsBanner.waitForExist({
            timeout: 3000,
            interval: 500
        })
    }
}

module.exports = new CarMenuDesktopPage();