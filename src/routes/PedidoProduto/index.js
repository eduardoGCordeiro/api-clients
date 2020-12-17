const express = require('express');
const PedidoProdutoController = require('../../controllers/ClienteController');
const routes = express.Router();

routes.get('/pedidoproduto', (req, res) => {
    return res.json({ eduardo: 'pedidoproduto' });
});

module.exports = routes;