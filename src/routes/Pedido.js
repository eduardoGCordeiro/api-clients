const express = require('express');
const PedidoController = require('../controllers/PedidoController');
const routes = express.Router();

routes.get('/pedidos', PedidoController.listar);
routes.get('/pedidos/:codigo_pedido', PedidoController.detalhes);
routes.post('/pedidos', PedidoController.salvar);
routes.put('/pedidos/:codigo_pedido', PedidoController.atualizar);
routes.delete('/pedidos/:codigo_pedido', PedidoController.deletar);

module.exports = routes;