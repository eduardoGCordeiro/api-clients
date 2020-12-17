const express = require('express');
const PedidoController = require('../../controllers/ClienteController');
const routes = express.Router();

routes.get('/pedido', (req, res) => {
    return res.json({ eduardo: 'pedido' });
});

module.exports = routes;