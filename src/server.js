require('dotenv').config({ path: '../.env' });

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
app.use(bodyParser.json());


app.listen(process.env.APP_PORT, () => console.log('servidor iniciado na porta: ' + process.env.APP_PORT + '!'));