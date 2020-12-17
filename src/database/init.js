
const mysql = require('mysql');

const database_mysql = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_SCHEMA
});

module.exports = () => database_mysql.connect(function (error_connection) {
    if (error_connection) {
        throw error_connection;
    };
    console.log("Banco de dados conectado!");
});