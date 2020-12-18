const Pedido = require('../models/Pedido');
const Cliente = require('../models/Cliente');

module.exports = {
    async listar(req, res) {
        const pedido = await Pedido.findAll();

        return res.json(pedido);
    },

    async detalhes(req, res) {
        const { codigo_pedido } = req.params;
        const pedido = await Pedido.findByPk(codigo_pedido);

        return res.json(pedido);
    },

    async salvar(req, res) {
        const { data_do_pedido, forma_de_pagamento, observacao, codigo_cliente } = req.body;

        //Verifica se o cliente existe.
        const cliente = await Cliente.findByPk(codigo_cliente);

        if (!cliente) {
            res.status(400).json({ error: 'Cliente não encontrado' });
        }

        //Caso o cliente exista ele cadastra o pedido.
        const pedido = await Pedido.create({
            data_do_pedido, forma_de_pagamento, observacao, codigo_cliente
        });

        return res.json(pedido);
    },

    async atualizar(req, res) {
        const { codigo_pedido } = req.params;
        const { data_do_pedido, forma_de_pagamento, observacao, codigo_cliente } = req.body;

        //Verifica se o cliente existe.
        const cliente = await Cliente.findByPk(codigo_cliente);

        if (!cliente) {
            res.status(400).json({ error: 'Cliente não encontrado' });
        }

        //Caso o cliente exista ele cadastra o pedido.
        const pedido = await Pedido.update({
            data_do_pedido, forma_de_pagamento, observacao, codigo_cliente
        }, {
            where: {
                codigo_pedido: codigo_pedido
            }
        });

        return res.json(pedido);
    },

    async deletar(req, res) {
        const { codigo_pedido } = req.params;

        const pedido = await Pedido.destroy({
            where: {
                codigo_pedido: codigo_pedido
            }
        });

        return res.json(pedido);
    },
}