'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Produto extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };

    Produto.init({
        codigo_produto: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true
        },
        npme: DataTypes.STRING(100),
        cor: DataTypes.STRING(40),
        tamanho: DataTypes.STRING(40),
        valor: DataTypes.DOUBLE
    }, {
        sequelize,
        modelName: 'Produto',
    });

    return Produto;
};