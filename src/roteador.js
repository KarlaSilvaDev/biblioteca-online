const express = require('express');
const { listarLivros, obterLivroPorID, adicionarLivro, substituirLivro, alterarLivro, excluirLivro } = require('./controladores/livrosControlador');

const roteador = express();

roteador.get('/livros', listarLivros);
roteador.get('/livros/:id', obterLivroPorID );
roteador.post('/livros', adicionarLivro);
roteador.put('/livros/:id', substituirLivro);
roteador.patch('/livros/:id', alterarLivro)
roteador.delete('/livros/:id', excluirLivro);

module.exports = {
    roteador
}