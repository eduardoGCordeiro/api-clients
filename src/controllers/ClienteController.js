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
        const { ...data } = req.body;

        const cliente = await Cliente.create(data);

        return res.json(cliente);
    },

    async atualizar(req, res) {
        const { codigo_cliente } = req.params;
        const { ...data } = req.body;

        const cliente = await Cliente.update(data, {
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