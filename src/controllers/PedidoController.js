const FormData = require('form-data');
const Pedido = require('../models/Pedido');
const Cliente = require('../models/Cliente');
const informacoesPedido = require('../utils/InformacoesPedido');
const sendEmail = require('../utils/SendEmail');
const generateReport = require('../utils/Report');

module.exports = {
    async listar(req, res) {
        const pedido = await Pedido.findAll();

        return res.json(pedido);
    },

    async detalhes(req, res) {
        const { codigo_pedido } = req.params;
        const pedido = await Pedido.findByPk(codigo_pedido);

        return res.json(pedido);
    },

    async salvar(req, res) {
        const { produtos, ...data } = req.body;

        //Verifica se o cliente existe.
        const cliente = await Cliente.findByPk(data.codigo_cliente);

        if (!cliente) {
            res.status(400).json({ error: 'Cliente não encontrado' });
        }

        //Caso o cliente exista ele cadastra o pedido.
        const pedido = await Pedido.create(data);

        if (produtos && produtos.length > 0) {
            produtos.map(produto => pedido.addProduto(produto.codigo_produto, { through: { quantidade: produto.quantidade } }))
        }

        return res.json(pedido);
    },

    async atualizar(req, res) {
        const { codigo_pedido } = req.params;
        const { ...data } = req.body;

        const pedido = await Pedido.update(data, {
            where: {
                codigo_pedido: codigo_pedido
            }
        });

        return res.json(pedido);
    },

    async deletar(req, res) {
        const { codigo_pedido } = req.params;

        const pedido = await Pedido.destroy({
            where: {
                codigo_pedido: codigo_pedido
            }
        });

        return res.json(pedido);
    },

    async report(req, res) {
        const { codigo_pedido } = req.params;

        const pedido = await Pedido.findByPk(codigo_pedido);

        //Verifica se existe um pedido.
        if (pedido) {
            const informacoes_pedido = await informacoesPedido(codigo_pedido);
            const report = await generateReport('Detalhes do pedido', JSON.stringify(informacoes_pedido));

            if (report) {
                const form = new FormData();
                form.append('report', report.path);
                res.setHeader('Content-Type', 'multipart/form-data');
                res.status(200).send(form);
            }

            if (!report) {
                return res.status(500).json({ message: 'Erro ao gerar o relatório!' });
            }
        }

        if (!pedido) {
            return res.status(400).json({ message: 'Pedido não encontrado!' });
        }
    },

    async sendEmail(req, res) {
        const { codigo_pedido } = req.params;

        const pedido = await Pedido.findByPk(codigo_pedido);

        //Verifica se existe um pedido.
        if (pedido) {
            const informacoes_pedido = await informacoesPedido(codigo_pedido);
            const email = await sendEmail(pedido.cliente.dataValues.email, 'Detalhes do pedido', JSON.stringify(informacoes_pedido));

            if (!email) {
                return res.status(200).json({ message: 'Email enviado com sucesso!' });
            }

            if (email) {
                return res.status(500).json({ message: 'Erro ao enviar o email!' });
            }
        }

        if (!pedido) {
            return res.status(400).json({ message: 'Pedido não encontrado!' });
        }
    },
}