class BasePage{
    constructor(driver){
        this.driver = driver;
    }

    async LerTituloGuia(){
        return await this.driver.getTitle();
    }
}
module.exports= BasePage;