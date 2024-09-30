const express = require('express');
const axios = require('axios');
const router = express.Router();

// URL base da API pública TheyVoteForYou
const API_BASE_URL = 'https://theyvoteforyou.org.au/api/v1';

https://theyvoteforyou.org.au/api/v1/policies.json

// Definir uma rota para buscar informações de votos
// GET https://theyvoteforyou.org.au/api/v1/policies.json
router.get('/', async (req, res) => {
  try {
    // Aqui você pode definir parâmetros de consulta, se necessário
    const response = await axios.get(`${API_BASE_URL}/policies.json`, {
      params: {
        key: '[key]',  // Adicione sua chave de API, se necessário
      },
    });

    // Enviar os dados recebidos ao cliente
    res.json(response.data);
  } catch (error) {
    // Tratar erros
    console.error('Erro ao buscar dados da API TheyVoteForYou:', error);
    res.status(500).json({ error: 'Erro ao buscar dados.' });
  }
});

router.get('/:id', async (req, res) => {
  const policyId = req.params.id; // Capturar o ID da política da URL

  try {
    // Aqui você pode definir parâmetros de consulta, se necessário
    const response = await axios.get(`${API_BASE_URL}/policies/${policyId}.json`, {
      params: {
        key: '[key]',  // Adicione sua chave de API, se necessário
      },
    });

    // Enviar os dados recebidos ao cliente
    res.json(response.data);
  } catch (error) {
    // Tratar erros
    console.error('Erro ao buscar dados da API TheyVoteForYou:', error);
    res.status(500).json({ error: 'Erro ao buscar dados.' });
  }
});

module.exports = router;
