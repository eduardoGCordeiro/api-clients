'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Cliente extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    };

    Cliente.init({
        codigo_cliente: {
            type: DataTypes.BIGINT.UNSIGNED,
            primaryKey: true,
        },
        nome: DataTypes.STRING(100),
        cpf: DataTypes.STRING(11),
        sexo: DataTypes.STRING(1),
        email: DataTypes.STRING(100)
    }, {
        sequelize,
        tableName: 'clientes',
        timestamps: false,
        modelName: 'Cliente',
    });

    return Cliente;
};