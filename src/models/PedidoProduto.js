const { Model, DataTypes } = require('sequelize');

class PedidoProduto extends Model {
    static init(sequelize) {
        super.init({
            codigo_pedido_produto: {
                type: DataTypes.BIGINT.UNSIGNED,
                primaryKey: true,
                autoincrement: true
            },
            codigo_pedido: DataTypes.BIGINT.UNSIGNED,
            codigo_produto: DataTypes.BIGINT.UNSIGNED,
            quantidade: DataTypes.INTEGER.UNSIGNED
        }, {
            sequelize,
            timestamps: true,
            paranoid: true,
            tableName: 'pedido_produtos',
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
};

module.exports = PedidoProduto;