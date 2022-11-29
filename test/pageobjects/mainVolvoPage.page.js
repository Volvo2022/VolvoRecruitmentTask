const Page = require("./page");

class MainVolvoPage{
    get heroPromo() {
        return $("#PromotionalHero-1");
    }
}

module.exports = new MainVolvoPage();