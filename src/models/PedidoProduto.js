'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class PedidoProduto extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };

    PedidoProduto.init({
        codigo_pedido_produto: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true
        },
        codigo_pedido: DataTypes.BIGINT.UNSIGNED,
        codigo_produto: DataTypes.BIGINT.UNSIGNED,
        quantidade: DataTypes.INTEGER.UNSIGNED
    }, {
        sequelize,
        modelName: 'PedidoProduto',
    });

    return PedidoProduto;
};