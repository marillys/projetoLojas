# Projeto Lojas

Projeto das aulas de testes unitários, WEB e de API com JavaScript do curso de formação em Teste de Software (FTS-135). 
A [pasta](/src/) contém exemplos de testes unitários para uma calculadora.
A pasta de testes [WEB](__tests__/web) contém a automação para a compra de passagens do site blazeDemo (testes usando código gerado via selenium IDE, outro com programação orientada a objetos e outros usando o cucumber). Já os testes de [API](__tests__/api) validam as 4 operações básicas (GET, PUT e DELETE) de usuários e pets. O [Swagger da PetStore](https://petstore.swagger.io/) usado nos testes de API.

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:
- Node;
- Jest;
- Supertest;
- Mocha;
- Chai;
- Selenium;
- Typescript;
- Cucumber.

### 🚀 Como executar o projeto
```bash
# Clone este repositório
git clone https://github.com/marillys/projetoLojas.git
# Instale o node;
# Instale o jest, supertest, mocha e o chai
npm install jest supertest mocha chai --save-dev
# Instale o Selenium, chrome 
npm install --save-dev selenium-webdriver chromedriver
# Instale o typescript e o cucumber
npm install --save-dev typescript @cucumber/cucumber
```

### 🚀 Executando os testes
Abaixo tem alguns comandos úteis para executar todos os testes de uma só vez, executar testes por feature e gerar relatórios. 

```bash
# Executar todos os testes
npm run test

# Executar só a feature
npm run cucumber

# Executar e gerar um relatório
npx cucumber-js --publish
```
