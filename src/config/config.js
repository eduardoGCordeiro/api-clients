require('dotenv').config({ path: '../.env' });

module.exports = {
  "username": process.env.DATABASE_USER,
  "password": process.env.DATABASE_PASSWORD,
  "database": process.env.DATABASE_SCHEMA,
  "host": process.env.DATABASE_HOST,
  "port": process.env.DATABASE_PORT,
  "dialect": "mysql"
}