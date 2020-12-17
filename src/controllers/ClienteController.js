const Cliente = require('../models/Cliente');

module.exports = {
    async listar(req, res) {
        const cliente = await Cliente.findAll();
        return res.json(cliente);
    },

    async detalhes(req, res) {
        const { codigo_cliente } = req.params;
        const cliente = await Cliente.findByPk(codigo_cliente);

        return res.json(cliente);
    },

    async salvar(req, res) {
        const { nome, sexo, cpf, email } = req.body;

        const cliente = await Cliente.create({
            nome,
            sexo,
            cpf,
            email
        });

        return res.json(cliente);
    },

    async atualizar(req, res) {
        const { codigo_cliente } = req.params;
        const { nome, sexo, cpf, email } = req.body;

        const cliente = await Cliente.update({
            nome: nome,
            sexo: sexo,
            cpf: cpf,
            email: email
        }, {
            where: {
                codigo_cliente: codigo_cliente
            }
        });

        return res.json(cliente);
    },

    async deletar(req, res) {
        const { codigo_cliente } = req.params;

        const cliente = await Cliente.destroy({
            where: {
                codigo_cliente: codigo_cliente
            }
        });

        return res.json(cliente);
    },
}