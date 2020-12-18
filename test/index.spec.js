const chai = require("chai");
const chaiHttp = require('chai-http');
const server = require('../src/server');
let should = chai.should();

chai.use(chaiHttp)

describe("Teste API envio de clientes", function () {

    it("Enviando um cliente", function (done) {
        chai.request(server)
            .post('/clientes')
            .send({
                nome: 'Nome',
                cpf: '111111111',
                sexo: 'M',
                email: 'email@example.com'
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });

    it("Enviando um produto", function (done) {
        chai.request(server)
            .post('/produtos')
            .send({
                nome: 'Produto',
                cor: 'cor',
                tamanho: 'tamanho',
                valor: 20.0
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });

    it("Enviando um pedido", function (done) {
        chai.request(server)
            .post('/pedidos')
            .send({
                data_do_pedido: '2020-10-10 15:00:00',
                forma_de_pagamento: 'dinheiro',
                observacao: 'pedido ok',
                codigo_cliente: 1,
                produtos: [
                    {
                        codigo_produto: 1,
                        quantidade: 1
                    }
                ]
            })
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });

    it("Buscando um cliente", function (done) {
        chai.request(server)
            .get('/clientes/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });

    it("Buscando um produto", function (done) {
        chai.request(server)
            .get('/produtos/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });

    it("Buscando um pedido", function (done) {
        chai.request(server)
            .get('/pedidos/1')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('object');
                done();
            });
    });

    it("Buscando clientes", function (done) {
        chai.request(server)
            .get('/clientes')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

    it("Buscando produtos", function (done) {
        chai.request(server)
            .get('/produtos')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

    it("Buscando pedidos", function (done) {
        chai.request(server)
            .get('/pedidos')
            .end((err, res) => {
                res.should.have.status(200);
                res.body.should.be.a('array');
                done();
            });
    });

    it("Atualizando um cliente", function (done) {
        chai.request(server)
            .put('/clientes/1')
            .send({
                nome: 'Nome2'
            })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it("Atualizando um produto", function (done) {
        chai.request(server)
            .put('/produtos/1')
            .send({
                nome: 'Produto2'
            })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it("Atualizando um pedido", function (done) {
        chai.request(server)
            .put('/pedidos/1')
            .send({
                forma_de_pagamento: 'cheque'
            })
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it("Envio de email para o cliente", function (done) {
        chai.request(server)
            .post('/pedidos/1/sendemail')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it("Deletando um cliente", function (done) {
        chai.request(server)
            .delete('/clientes/1')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it("Deletando um pedido", function (done) {
        chai.request(server)
            .delete('/pedidos/1')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });

    it("Deletando um produto", function (done) {
        chai.request(server)
            .delete('/produtos/1')
            .end((err, res) => {
                res.should.have.status(200);
                done();
            });
    });
});