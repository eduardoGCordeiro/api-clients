require('dotenv').config({ path: '../.env' });
require('./models');

const express = require('express');
const cors = require('cors');

const RotasCliente = require('./routes/Cliente');
const RotasProduto = require('./routes/Produto');
const RotasPedido = require('./routes/Pedido');

const app = express();
app.use(cors());
app.use(express.json());

app.use(RotasCliente);
app.use(RotasProduto);
app.use(RotasPedido);


//Retorna error de rota não encontrada para requisições com rotas inexistentes.
app.use((req, res) => {
    const error = new Error('Rota não encontrada!');
    error.status = 404;
    return res.status(error.status).json({
        message: error.message
    });
});

//Captura erros no servidor
app.use((error, req, res) => {
    const status = error.status || 500;
    return res.status(status).json({
        message: error.message || 'Erro no servidor'
    });
});


app.listen(process.env.APP_PORT, () => console.log('servidor iniciado na porta: ' + process.env.APP_PORT + '!'));