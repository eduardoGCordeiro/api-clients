require('dotenv').config({ path: '../.env' });

//Cliente = require('./models/cliente');
//Produto = require('./models/produto');
//Pedido = require('./models/pedido');
//PedidoProduto = require('./models/pedido_produto');

const database = require('./models');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());


app.listen(process.env.APP_PORT, () => console.log('servidor iniciado na porta: ' + process.env.APP_PORT + '!'));