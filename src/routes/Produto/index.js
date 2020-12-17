const express = require('express');
const ProdutoController = require('../../controllers/ClienteController');
const routes = express.Router();

routes.get('/produto', (req, res) => {
    return res.json({ eduardo: 'produto' });
});

module.exports = routes;