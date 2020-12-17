const Cliente = require('../models/Cliente');

module.exports = {
    async store(req, res) {

        const { nome, sexo, cpf, email } = req.body;

        const cliente = await Cliente.create({
            nome, sexo, cpf, email
        });

        return res.json(cliente);
    },
}