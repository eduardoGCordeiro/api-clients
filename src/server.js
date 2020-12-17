require('dotenv').config({ path: '../.env' });

const express = require('express');
const bodyParser = require('body-parser');
const connectionDatabase = require('./database/init');
const app = express();
app.use(bodyParser.json());

connectionDatabase();

app.all('*', function (req, res) {
    res.status(404).send('Rota inexistente! Se você acredita que isso é um erro, entre em contato com o desenvolvedor.');
})

app.listen(process.env.APP_PORT, () => console.log('servidor iniciado na porta: ' + process.env.APP_PORT + '!'));