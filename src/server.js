require('dotenv').config({ path: '../.env' });

const express = require('express');

const RotasCliente = require('./routes/Cliente');
const RotasProduto = require('./routes/Produto');
const RotasPedido = require('./routes/Pedido');
const RotasPedidoProduto = require('./routes/PedidoProduto');

const app = express();
app.use(express.json());

app.use(RotasCliente);
app.use(RotasProduto);
app.use(RotasPedido);
app.use(RotasPedidoProduto);

app.all('*', function (req, res) {
    res.status(404).json({ message: 'Essa rota não existe! Caso você ache que isso é um erro, contate o desenvolvedor.' });
})


app.listen(process.env.APP_PORT, () => console.log('servidor iniciado na porta: ' + process.env.APP_PORT + '!'));