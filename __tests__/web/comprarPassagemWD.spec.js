const { Builder, By } = require("selenium-webdriver")
const {assert} = require("chai").assert
const chromedriver = require("chromedriver")

describe('Comprar passagem via Programação', () => {
    let driver 

    beforeEach(async function() {
        driver = await new Builder().forBrowser("chrome").build()
        //Configurar tempo de espera máxima do selenium
        await driver.manage().setTimeouts({implicit: 30000})
    })
    afterEach(async function() {
        await driver.quit();
    })

    it("Comprar Passagem WD",async function(){
        await driver.get("https://blazedemo.com")
        await driver.findElement(By.name("fromPort")).click()
        //Seleciona a origem como São Paolo
        {
            const dropdown = await  driver.findElement(By.name("fromPort"))
            await dropdown.findElement(By.xpath("//option[. = 'São Paolo']")).click()
        }
        //Selecionar o destino
        await driver.findElement(By.name("toPort")).click()
        {
            const dropdown = await  driver.findElement(By.name("toPort"))
            await dropdown.findElement(By.xpath("//option[. = 'Berlin']")).click()
        }
        //Clicar no botão Find Flights
        await driver.findElement(By.css(".btn-primary")).click()
        // validar se foi para a página de reserva
        driver.sleep(5000)
        assert.equal(await driver.getTitle(), "BlazeDemo - reserve") 
    })

    
})