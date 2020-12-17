const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
    static init(sequelize) {
        super.init({
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
    };
};

module.exports = Produto;