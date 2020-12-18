'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.createTable('pedido_produtos',
            {
                codigo_pedido_produto: {
                    type: Sequelize.BIGINT.UNSIGNED,
                    allowNull: false,
                    primaryKey: true,
                    autoIncrement: true
                },
                codigo_pedido: {
                    type: Sequelize.BIGINT.UNSIGNED,
                    allowNull: false,
                    references: {
                        model: 'pedidos',
                        key: 'codigo_pedido'
                    }
                },
                codigo_produto: {
                    type: Sequelize.BIGINT.UNSIGNED,
                    allowNull: false,
                    references: {
                        model: 'produtos',
                        key: 'codigo_produto'
                    }
                },
                quantidade: {
                    type: Sequelize.INTEGER.UNSIGNED,
                    allowNull: false
                },
                created_at: {
                    type: Sequelize.DATE
                },
                updated_at: {
                    type: Sequelize.DATE
                },
                deleted_at: {
                    type: Sequelize.DATE
                }
            });
    },

    down: async (queryInterface) => {
        await queryInterface.dropTable('pedido_produtos');
    }
};
