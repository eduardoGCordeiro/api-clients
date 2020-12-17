
const Sequelize = require('sequelize');
const database_config = require('../models');
const connection = new Sequelize(database_config);

const Cliente = require('../models/Cliente');
const Produto = require('../models/Produto');
const Pedido = require('../models/Pedido');
const PedidoProduto = require('../models/PedidoProduto');

Cliente.init(connection);
Produto.init(connection);
Pedido.init(connection);
PedidoProduto.init(connection);

module.exports = connection;