// src/database.js
const { Pool } = require("pg");
require("dotenv").config();  // Carrega as variáveis de ambiente do .env

// Configuração do pool de conexões com PostgreSQL
const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT,
});

module.exports = pool;
