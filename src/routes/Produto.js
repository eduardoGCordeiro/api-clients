const express = require('express');
const ProdutoController = require('../controllers/ProdutoController');
const routes = express.Router();

routes.get('/produtos', ProdutoController.listar);
routes.get('/produtos/:codigo_produto', ProdutoController.detalhes);
routes.post('/produtos', ProdutoController.salvar);
routes.put('/produtos/:codigo_produto', ProdutoController.atualizar);
routes.delete('/produtos/:codigo_produto', ProdutoController.deletar);

module.exports = routes;