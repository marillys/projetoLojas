const HomePage = require("../../pageObjects/HomePage")
const webdriver = require("selenium-webdriver")
const chrome = require("selenium-webdriver/chrome")
const assert = require("chai").assert;

describe("Comprar Passagem via Blazedemo - Page Object", () => {
    let driver;
    const chOptions = new chrome.Options();

    beforeEach(() => {
        driver = new webdriver.Builder()
            .forBrowser("chrome")
            .setChromeOptions(chOptions)
            .build()

        driver.manage().setTimeouts({implicit: 3000})
        driver.manage().window().maximize();
    });

    afterEach(() => {
        driver.quit();
    })

    it('Comprar Passagem PO', async () => {
        await driver.get("https://www.blazedemo.com");
        const homePage = new HomePage(driver);
        await homePage.selecionarOrigemDestinoVoo("Boston","Dublin")
        assert.equal(await homePage.LerTituloGuia(),"Blazedemo - reserve")
        await homePage.driver.sleep(3000)
    })
})