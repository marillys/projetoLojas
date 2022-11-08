const supertest = require("supertest");
const assert = require("chai").assert;

const userId = 1515;
const username = "marilia";
const token = ";"

describe('PetSore Swagger - User', () => {
    const request = supertest("https://petstore.swagger.io/v2")
    it.only('POST User', () => {
        const json = require("../../vendors/user1.json")
        return request
            .post("/user")
            .send(json)
            .then(resposta => {
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.code,200);
                assert.equal(resposta.body.type,"unknown");
                assert.equal(resposta.body.message,"1515");
            })
    });

    it('GET User', () => {
        return request
            .get("/user/"+ username)
            .then(resposta => {
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.id, userId);
                assert.equal(resposta.body.password, "123456");
                assert.equal(resposta.body.phone,"11584626");
            })
    });

    it('PUT User', () => {
        const json = require("../../vendors/user2.json")
        return request
            .put("/user/"+username)
            .send(json)
            .then(resposta => {
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.code,200);
                assert.equal(resposta.body.type,"unknown");
                assert.equal(resposta.body.message,"1515");
            })
    });

    it('DELETE User', () => {
        return request
            .get("/user/"+ username)
            .then(resposta => {
                assert.equal(resposta.statusCode, 200);
                assert.equal(resposta.body.id, userId);
                assert.equal(resposta.body.password, "654321");
                assert.equal(resposta.body.phone,"315846265");
            })
    });

    it.only('Login com extração do token', () => {
        const username = "marilia";
        const password = "654321"

        return request
            .get("/user/login?username="+username+"&password="+password)
            .then(resposta => {
                assert.equal(resposta.statusCode,200);
                mensagem = resposta.body.message;
                token = mensagem.substring(23);
                console.log("TOKEN: " + token);
            });
    })
})