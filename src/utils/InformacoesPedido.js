const sequelize = require('sequelize');
const Pedido = require('../models/Pedido');

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

module.exports = informacoesPedido;