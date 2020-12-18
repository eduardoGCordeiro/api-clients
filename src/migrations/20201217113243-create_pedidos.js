'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('pedidos',
            {
                codigo_pedido: {
                    type: Sequelize.BIGINT.UNSIGNED,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                codigo_cliente: {
                    type: Sequelize.BIGINT.UNSIGNED,
                    allowNull: false,
                    references: {
                        model: 'clientes',
                        key: 'codigo_cliente'
                    }
                },
                data_do_pedido: {
                    type: Sequelize.DATE,
                    allowNull: false
                },
                observacao: {
                    type: Sequelize.STRING(100),
                    allowNull: false
                },
                forma_de_pagamento: {
                    type: Sequelize.ENUM('dinheiro', 'cartao', 'cheque'),
                    allowNull: false
                }
            });
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('pedidos');
    }
};
