const { Model, DataTypes } = require('sequelize');

class Cliente extends Model {
    static init(sequelize) {
        super.init({
            codigo_cliente: {
                type: DataTypes.BIGINT.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },
            nome: DataTypes.STRING(100),
            cpf: DataTypes.STRING(11),
            sexo: DataTypes.STRING(1),
            email: DataTypes.STRING(100)
        }, {
            sequelize,
            timestamps: true,
            paranoid: true,
            tableName: 'clientes',
            createdAt: 'created_at',
            updatedAt: 'updated_at',
            deletedAt: 'deleted_at',
            defaultScope: {
                attributes: {
                    exclude: ['created_at', 'updated_at', 'deleted_at']
                }
            }
        });
    };

    static associate(models) {
        this.hasMany(models.Pedido, { foreignKey: 'codigo_cliente', sourceKey: 'codigo_cliente', as: 'pedidos' });
    };
};

module.exports = Cliente;