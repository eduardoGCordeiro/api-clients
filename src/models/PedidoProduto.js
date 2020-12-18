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
            tableName: 'pedido_produtos',
            timestamps: false,
            modelName: 'PedidoProduto'
        });
    };
};

module.exports = PedidoProduto;