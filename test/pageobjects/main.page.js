const MainVolvoPagePage = require('./mainVolvoPage.page');
const Page = require('./page');

class MainPage extends Page {

    get ourCarsButton() {
        return $('//div[@id="sitenav:topbar:cars"]/button');
    };

    get menuButton() {
        return $('#sitenav-sidenav-toggle');
    };

    get logo() {
        return $('div#site-nav-topbar-wrapper a[data-autoid="nav:siteNavLogoSmall"]');
    };

    get title(){
        return $('//div[@id="ModelIntro-1"]//h2');
    };

    async openCarsCatalog(){
        await this.ourCarsButton.waitForExist({
            timeout: 2000,
            interval: 500
        })
        await this.ourCarsButton.click();
    }

    async openMenu(){
        await this.menuButton.click();
    }

    async openMainVolvoPage(){
        await this.logo.click();
    }

    open(){
        return super.open('intl/v/car-safety/a-million-more');
    };

}

module.exports = new MainPage();