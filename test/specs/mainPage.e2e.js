const CookieBannerPage = require('../pageobjects/cookieBanner.page');
const MainPromoPage = require('../pageobjects/main.page');

describe('Main page smoke test', () => {
    it('Checking main elements', async () => {
        await MainPromoPage.open();

        await CookieBannerPage.acceptCookies();

        await expect(MainPromoPage.logo).toBeExisting();
        await expect(MainPromoPage.menuButton).toBeExisting();
        await expect(MainPromoPage.title).toHaveTextContaining("Ideas that change the world are often the most controversial")
    });
})