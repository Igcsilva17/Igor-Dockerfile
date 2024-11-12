// src/routes.js
const express = require("express");
const pool = require("./database");
const router = express.Router();

// Exemplo de rota para obter tarefas do banco de dados
router.get("/tasks", async (req, res) => {
  try {
    const result = await pool.query("SELECT * FROM tasks");  // Consulta SQL para obter as tarefas
    res.json(result.rows);  // Retorna o resultado em formato JSON
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
