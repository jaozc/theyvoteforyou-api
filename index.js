const express = require('express');
const app = express();
const port = 3000;

// Importar as rotas
const policiesRoutes = require('./routes/policies');

// Middleware para JSON
app.use(express.json());

// Usar as rotas
app.use('/api/policies', policiesRoutes);

// Iniciar o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
