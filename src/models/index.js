const Sequelize = require('sequelize');
const database_config = require('../config/config');

const Cliente = require('../models/Cliente');
const Produto = require('../models/Produto');
const Pedido = require('../models/Pedido');

const conexao = new Sequelize(database_config);

Cliente.init(conexao);
Produto.init(conexao);
Pedido.init(conexao);

module.exports = conexao;