const express = require('express');
const ClienteController = require('../../controllers/ClienteController');
const routes = express.Router();

routes.get('/clientes', (req, res) => {
    return res.json({ eduardo: 'teste' });
});

routes.get('/clientes/:codigo_cliente', (req, res) => {
    return res.json({ eduardo: 'teste' });
});

routes.post('/clientes', (req, res) => {
    return res.json({ eduardo: 'teste' });
});

routes.put('/clientes/:codigo_cliente', (req, res) => {
    return res.json({ eduardo: 'teste' });
});

routes.delete('/clientes/:codigo_cliente', (req, res) => {
    return res.json({ eduardo: 'teste' });
});

module.exports = routes;