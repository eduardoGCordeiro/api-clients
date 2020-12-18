const { Model, DataTypes } = require('sequelize');

class Produto extends Model {
    static init(sequelize) {
        super.init({
            codigo_produto: {
                type: DataTypes.BIGINT.UNSIGNED,
                primaryKey: true,
                autoIncrement: true
            },
            nome: DataTypes.STRING(100),
            cor: DataTypes.STRING(40),
            tamanho: DataTypes.STRING(40),
            valor: DataTypes.DOUBLE
        }, {
            sequelize,
            timestamps: true,
            paranoid: true,
            tableName: 'produtos',
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
        this.belongsToMany(models.Pedido, {
            foreignKey: 'codigo_produto',
            sourceKey: 'codigo_produto',
            as: 'pedidos',
            through: models.PedidoProduto
        });
    };
};

module.exports = Produto;