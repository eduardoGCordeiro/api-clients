const sequelize = require('sequelize');
const Pedido = require('../models/Pedido');
const Cliente = require('../models/Cliente');

const informacoesPedido = async (codigo_pedido) => {
    const pedido = await Pedido.findByPk(codigo_pedido, {
        where: {
            codigo_pedido
        },
        attributes: [
            'codigo_pedido',
            'data_do_pedido',
            'forma_de_pagamento',
            'observacao'
        ],
        include: [
            {
                association: 'cliente'
            },
            {
                association: 'produtos',
                attributes: [
                    'codigo_produto',
                    'nome',
                    'cor',
                    'tamanho',
                    'valor',
                    [sequelize.literal('produtos.valor * quantidade'), 'valor_total_produto']
                ]
            }
        ]
    });

    //Adicionando o total do pedido nas informações do pedido.
    let total_pedido = 0;
    pedido.produtos.map(produto => total_pedido += produto.dataValues.valor_total_produto);
    pedido.dataValues.valor_total_pedido = total_pedido;

    return pedido;
};

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
        const { produtos, ...data } = req.body;

        //Verifica se o cliente existe.
        const cliente = await Cliente.findByPk(data.codigo_cliente);

        if (!cliente) {
            res.status(400).json({ error: 'Cliente não encontrado' });
        }

        //Caso o cliente exista ele cadastra o pedido.
        const pedido = await Pedido.create(data);

        if (produtos && produtos.length > 0) {
            produtos.map(produto => pedido.addProduto(produto.codigo_produto, { through: { quantidade: produto.quantidade } }))
        }

        return res.json(pedido);
    },

    async atualizar(req, res) {
        const { codigo_pedido } = req.params;
        const { ...data } = req.body;

        const pedido = await Pedido.update(data, {
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

    async report(req, res) {
        const { codigo_pedido } = req.params;

        const pedido = await informacoesPedido(codigo_pedido);

        return res.json(pedido);
    },

    async sendEmail(req, res) {
        const { codigo_pedido } = req.params;

        const pedido = await informacoesPedido(codigo_pedido);

        return res.json(pedido);
    },
}