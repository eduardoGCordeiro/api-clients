const express = require('express');
const PedidoController = require('../../controllers/ClienteController');
const routes = express.Router();

routes.get('/pedidos', (req, res) => {
    return res.json({ eduardo: 'teste' });
});

routes.get('/pedidos/:codigo_pedido', (req, res) => {
    return res.json({ eduardo: 'teste' });
});

routes.post('/pedidos', (req, res) => {
    return res.json({ eduardo: 'teste' });
});

routes.put('/pedidos/:codigo_pedido', (req, res) => {
    return res.json({ eduardo: 'teste' });
});

routes.delete('/pedidos/:codigo_pedido', (req, res) => {
    return res.json({ eduardo: 'teste' });
});


module.exports = routes;