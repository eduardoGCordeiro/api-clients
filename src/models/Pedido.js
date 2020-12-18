const { Model, DataTypes } = require('sequelize');

class Pedido extends Model {
    static init(sequelize) {
        super.init({
            codigo_pedido: {
                type: DataTypes.BIGINT.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },
            codigo_cliente: DataTypes.BIGINT.UNSIGNED,
            data_do_pedido: DataTypes.DATE,
            observacao: DataTypes.STRING(100),
            forma_de_pagamento: DataTypes.ENUM('dinheiro', 'cartao', 'cheque')
        }, {
            sequelize,
            tableName: 'pedidos',
            timestamps: false,
            modelName: 'Pedido'
        });
    };

    static associate(models) {
        this.belongsTo(models.Cliente, { foreignKey: 'codigo_cliente', sourceKey: 'codigo_cliente', as: 'cliente' });
        this.belongsToMany(models.Produto, {
            foreignKey: 'codigo_pedido',
            sourceKey: 'codigo_pedido',
            as: 'produtos',
            through: models.PedidoProduto
        });
    };
};

module.exports = Pedido;