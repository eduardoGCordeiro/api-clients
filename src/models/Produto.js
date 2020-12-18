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
            tableName: 'produtos',
            timestamps: false,
            modelName: 'Produto',
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