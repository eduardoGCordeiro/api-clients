const express = require('express');
const ProdutoController = require('../../controllers/ClienteController');
const routes = express.Router();

routes.get('/produtos', (req, res) => {
    return res.json({ eduardo: 'teste' });
});

routes.get('/produtos/:codigo_cliente', (req, res) => {
    return res.json({ eduardo: 'teste' });
});

routes.post('/produtos', (req, res) => {
    return res.json({ eduardo: 'teste' });
});

routes.put('/produtos/:codigo_cliente', (req, res) => {
    return res.json({ eduardo: 'teste' });
});

routes.delete('/produtos/:codigo_cliente', (req, res) => {
    return res.json({ eduardo: 'teste' });
});

module.exports = routes;