const supertest = require("supertest");
const assert = require("chai").assert;

const petId = 8989;

describe('Pet Store Swagger - Pet', () => {
    const request = supertest("https://petstore.swagger.io/v2");

    it('POST Pet', () => {
        const pet = require("../../vendors/Pet.json");
        return request
            .post("/pet")
            .send(pet)
            .then(resposta => {
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.id, petId);
                assert.equal(resposta.body.name,"Lili");
                assert.equal(resposta.body.status,"ativo");
            });
    });

    it('GET - Consultar Pet', () => {
        const pet = require("../../vendors/Pet.json");
        return request
            .get("/pet/"+petId)
            .then(resposta => {
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.id, petId);
                assert.equal(resposta.body.name,"Lili");
                assert.equal(resposta.body.status,"ativo");
            });
    });

    it('PUT - Alterar Pet', () => {
        const pet = require("../../vendors/Pet2.json");
        return request
            .put("/pet")
            .send(pet)
            .then(resposta => {
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.id, petId);
                assert.equal(resposta.body.name,"Lili");
                assert.equal(resposta.body.status,"solded");
            });
    });
});