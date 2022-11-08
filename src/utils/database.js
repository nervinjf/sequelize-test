// es para gestionar la conexón a la base de datos
// sequelize init --> config

const { Sequelize } = require("sequelize");
require('dotenv').config();

const db = new Sequelize({
  database: process.env.DB_NAME || 'todo',
  username: process.env.DB_USERNAME || 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.PORT,
  password: process.env.DB_PASS || 'root',
  dialect: 'postgres',
});

module.exports = db;
