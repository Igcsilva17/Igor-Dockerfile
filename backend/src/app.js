// src/app.js
const express = require("express");
const routes = require("./routes");  // Importa as rotas definidas no arquivo routes.js
const app = express();

// Middleware para analisar JSON no corpo das requisições
app.use(express.json());

// Define as rotas
app.use("/api", routes);

// Porta para o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
