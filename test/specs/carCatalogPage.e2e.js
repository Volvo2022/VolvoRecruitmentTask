const carMenuDesktopPage = require('../pageobjects/carMenuDesktop.page');
const CookieBannerPage = require('../pageobjects/cookieBanner.page');
const MainPromoPage = require('../pageobjects/main.page');

describe('Car catalog page smoke test', () => {
    it('Checking car catalog link', async () => {
        await MainPromoPage.open();
        await CookieBannerPage.acceptCookies();
        await expect(MainPromoPage.ourCarsButton).toBeExisting();
        MainPromoPage.openCarsCatalog();
        await carMenuDesktopPage.waitForBanner();
        await expect(carMenuDesktopPage.carsBanner).toBeExisting();
    })
})