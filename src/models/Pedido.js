'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Pedido extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };

    Pedido.init({
        codigo_pedido: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true
        },
        codigo_cliente: DataTypes.BIGINT.UNSIGNED,
        data_do_pedido: DataTypes.DATE,
        observacao: DataTypes.STRING(100),
        forma_de_pagamento: DataTypes.ENUM('dinheiro', 'cartao', 'cheque')
    }, {
        sequelize,
        modelName: 'Pedido',
    });

    return Pedido;
};