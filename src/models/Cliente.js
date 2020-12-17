const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
    static init(sequelize) {
        super.init({
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
    };
};

module.exports = Cliente;