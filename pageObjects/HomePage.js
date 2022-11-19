const BasePage = require("./BasePage");
const By = require("selenium-webdriver").By;

class HomePage extends BasePage{
    constructor(driver){
        super(driver)//chama a super class BasePage e passa o Selenium
        //Mapeamento dos elementos
        this.linkDaSemana = By.linkText("destination of the week! The Beach!");
        this.dropdownOrigem = By.name("fromPort");
        this.dropdownDestino = By.name("toPort");
        this.btnProcurarVoos = By.css(".btn-primary");
    }

    //Ações
    async consultarDestinoDaSemana(){
        await this.driver.findElement(this.linkDaSemana).click();
    }

    async selecionarOrigemDestinoVoo(origem, destino){
        let ddOrigem = await this.driver.findElement(this.dropdownOrigem);
        await ddOrigem.findElement(By.css(`[value="${origem}"]`)).click()
        
        let ddDestino = await this.driver.findElement(this.dropdownDestino);
        await ddDestino.findElement(By.css(`[value="${destino}"]`)).click()

        await this.driver.findElement(this.btnProcurarVoos).click();
    }
}
module.exports = HomePage;