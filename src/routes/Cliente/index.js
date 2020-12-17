const express = require('express');
const ClienteController = require('../../controllers/ClienteController');
const routes = express.Router();

routes.get('/cliente', (req, res) => {
    return res.json({ eduardo: 'teste' });
});

module.exports = routes;