const Produto = require('../models/Produto');

module.exports = {
    async listar(req, res) {
        const produto = await Produto.findAll();
        return res.json(produto);
    },

    async detalhes(req, res) {
        const { codigo_produto } = req.params;
        const produto = await Produto.findByPk(codigo_produto);

        return res.json(produto);
    },

    async salvar(req, res) {
        const { nome, cor, tamanho, valor } = req.body;

        const produto = await Produto.create({
            nome,
            cor,
            tamanho,
            valor
        });

        return res.json(produto);
    },

    async atualizar(req, res) {
        const { codigo_produto } = req.params;
        const { nome, cor, tamanho, valor } = req.body;

        const produto = await Produto.update({
            nome: nome,
            cor: cor,
            tamanho: tamanho,
            valor: valor
        }, {
            where: {
                codigo_produto: codigo_produto
            }
        });

        return res.json(produto);
    },

    async deletar(req, res) {
        const { codigo_produto } = req.params;

        const produto = await Produto.destroy({
            where: {
                codigo_produto: codigo_produto
            }
        });

        return res.json(produto);
    },
}