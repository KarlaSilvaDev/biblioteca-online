let {livros, proximoIdentificadorLivro} = require('../dados/livros');

const listarLivros = (req, res)=>{
    return res.status(200).json(livros);
}

const obterLivroPorID = (req, res) =>{
    let {id} = req.params;
    id = Number(id);

    if (!id) {
        return res.status(400).json({mensagem: 'O id deve ser um número válido.'});
    }

    const livroEncontrado = livros.find((livro)=>{
        return livro.id == id;
    });

    if (!livroEncontrado){
        return res.status(404).json({mensagem: 'Não existe livro para o ID informado.'})
    }

    return res.status(200).json(livroEncontrado);
}

const adicionarLivro = (req, res) => {
    const {titulo, autor, ano, numPaginas} = req.body;

    if (!titulo || titulo === "") {
        return res.status(400).json({ mensagem: "O campo titulo é obrigatório" });
    }

    if (!autor || autor ==="") {
        return res.status(400).json({ mensagem: "O campo autor é obrigatório" });
    }

    if (!ano || ano == 0) {
        return res.status(400).json({ mensagem: "O campo ano é obrigatório" });
    }

    if (!numPaginas || numPaginas == 0) {
        return res.status(400).json({ mensagem: "O campo numPaginas é obrigatório" });
    }

    const novoLivro = {
        id: proximoIdentificadorLivro++,
        titulo,
        autor,
        ano,
        numPaginas
    }

    livros.push(novoLivro);
    return res.status(201).json(novoLivro);
}

const substituirLivro = (req, res) => {
    let {id} = req.params;
    let {titulo, autor, ano, numPaginas} = req.body;
    id = Number(id);

    if (!id){
        return res.status(400).json({mensagem: 'O ID deve ser um número válido.'});
    }

    if (!titulo || titulo === "") {
        return res.status(400).json({ mensagem: "O campo titulo é obrigatório" });
    }

    if (!autor || autor ==="") {
        return res.status(400).json({ mensagem: "O campo autor é obrigatório" });
    }

    if (!ano || ano == 0) {
        return res.status(400).json({ mensagem: "O campo ano é obrigatório" });
    }

    if (!numPaginas || numPaginas == 0) {
        return res.status(400).json({ mensagem: "O campo numPaginas é obrigatório" });
    }

    let livroEncontrado = livros.find((livro)=>{
        return livro.id === id;
    });

    if (!livroEncontrado){
        return res.status(404).json({mensagem: 'Não existe livro a ser substituído para o ID informado.'});
    }

    livroEncontrado.titulo = titulo;
    livroEncontrado.autor = autor;
    livroEncontrado.ano = ano;
    livroEncontrado.numPaginas = numPaginas;

    return res.status(200).json({mensagem: 'Livro substituído.'})
}

const alterarLivro = (req, res) =>{
    const {id} = req.params;
    const { titulo, autor, ano, numPaginas } = req.body;

    const livroEncontrado = livros.find((livro) => {
        return livro.id === Number(id)
    });

    if (!livroEncontrado) {
        res.status(404).json({ mensagem: "Não existe livro a ser alterado para o ID informado." });
    }

    if (titulo) {
        livroEncontrado.titulo = titulo;
    }

    if (autor) {
        livroEncontrado.autor = autor;
    }

    if (ano) {
        livroEncontrado.ano = ano;
    }

    if (numPaginas) {
        livroEncontrado.numPaginas = numPaginas;
    }

    return res.status(200).json({ mensagem: "Livro alterado." });
}

const excluirLivro = (req, res) => {
    const {id} = req.params;
    
    const indiceLivro = livros.findIndex((livro) => {
        return livro.id === Number(id)
    });

    if (indiceLivro < 0) {
        return res.status(404).json({ mensagem: "Não existe livro a ser removido para o ID informado." });
    }

    livros.splice(indiceLivro, 1);

    return res.status(200).json({ mensagem: "Livro removido." });
}



module.exports = {
    listarLivros,
    obterLivroPorID,
    adicionarLivro,
    substituirLivro,
    alterarLivro,
    excluirLivro
}