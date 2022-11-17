const { assert } = require("chai");
const { By } = require("selenium-webdriver");
const webdriver = require("selenium-webdriver");
require("chromedriver");

describe('Google', () => {
    let driver;

    beforeEach(() => {
        driver = new webdriver.Builder()
        .forBrowser("chrome")
        .build()
    })

    afterEach(() => {
        driver.quit();
    })

    it('Consultar Google', async() => {
        await driver.get("https://www.google.com");
        await driver.findElement(By.name("q")).sendKeys("mousse de chocolate" + webdriver.Key.ENTER);
        await driver.sleep(300);//espera
        assert.equal(await driver.getTitle(),"mousse de chocolate - Pesquisa Google")
    })
})