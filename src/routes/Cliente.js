const express = require('express');
const ClienteController = require('../controllers/ClienteController');
const routes = express.Router();

routes.get('/clientes', ClienteController.listar);
routes.get('/clientes/:codigo_cliente', ClienteController.detalhes);
routes.post('/clientes', ClienteController.salvar);
routes.put('/clientes/:codigo_cliente', ClienteController.atualizar);
routes.delete('/clientes/:codigo_cliente', ClienteController.deletar);

module.exports = routes;