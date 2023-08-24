# Biblioteca Online - API REST
![](https://i.imgur.com/xG74tOh.png)

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/KarlaSilvaEng/biblioteca-online?color=%2304D361">

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/KarlaSilvaEng/biblioteca-online">
  
  <a href="https://github.com/KarlaSilvaEng/biblioteca-online/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/KarlaSilvaEng/biblioteca-online">
  </a>
  
  <!-- <img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen"> -->
  
   <a href="https://cubos.academy/">
    <img alt="Feito por Karla Silva" src="https://img.shields.io/badge/feito-por%20Karla%20Silva-D818A5">
   </a>
   
   <a href="https://github.com/cubos-academy/academy-template-readme-projects/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/cubos-academy/academy-template-readme-projects?style=social">
  </a>
   
</p>
<h1 align="center">
    <img alt="Cubos Academy" title="#CubosAcademy" src="assets/Capa GItHub.png" />
</h1>

<h4 align="center"> 
	🚧 Biblioteca Online 🚧
</h4>

<p align="center">
	<img alt="Status Em Desenvolvimento" src="https://img.shields.io/badge/STATUS-EM%20DESENVOLVIMENTO-green">
</p>

<p align="center">
 <a href="#-sobre-o-projeto">Sobre</a> •
 <a href="#-funcionalidades">Funcionalidades</a> •
 <a href="#-layout">Layout</a> • 
 <a href="#-como-executar-o-projeto">Como executar</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#-contribuidores">Contribuidores</a> • 
 <a href="#-autor">Autor</a> • 
 <a href="#user-content--licença">Licença</a>
</p>


## 💻 Sobre o projeto

O projeto Biblioteca Online foi desenvolvido após a aula de API REST do curso de Javascript com foco em backend da [Cubos Academy](https://cubos.academy/).

---

## ⚙️ Funcionalidades

- [x] Consultar Coleção de Livros
- [x] Consultar um Livro através do ID
- [x] Adicionar um novo Livro
- [x] Substituir Livro
- [x] Alterar um Livro Existente
- [x] Remover Livros

## 📘 Entidade
- [x] Livro 
      - Propriedades: id, titulo, autor, ano e numPaginas

## 🛣️ Como executar o projeto

Este projeto consiste apenas no Backende e não trabalha com banco de Dados no momento.

### Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

#### 🎲 Rodando o Servidor

```bash

# Clone este repositório
$ git clone git@github.com:KarlaSilvaEng/biblioteca-online.git

# Acesse a pasta do projeto no terminal/cmd
$ cd biblioteca-online

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse http://localhost:3000

```
<p align="center">
  <a href="https://github.com/KarlaSilvaEng/biblioteca-online" target="_blank"><img src="https://insomnia.rest/images/run.svg" alt="Run in Insomnia"></a>
</p>

#### Utilizando o Insomnia para Acessar as Funcionalidades
#### Consultar Coleção de Livros
- Método: GET
- Endpoint: '/livros'
- Resposta: Listagem da coleção completa de livros
- Exemplo:
  - URL Completa:
  - Resposta:
    
#### Consultar um Livro através do ID
- Método: GET
- Endpoint: '/livros/:id'
- Resposta: Retorna o objeto livro que corresponde ao id fornecido
- Exemplo:
  - URL Completa: http://localhost:3000/1
  - Resposta:
 
#### Adicionar um Novo Livro
- Método: POST
- Endpoint: '/livros'
- Resposta: Não retorna nenhum conteúdo, apenas adiciona o livro à coleção e retorna status HTTP 201 (Created)
- Exemplo:
  - URL Completa: http://localhost:3000/livros
  - Resposta:
 
#### Substituir um Livro Existente
- Método: PUT
- Endpoint: '/livros/:id'
- Corpo da Requisição: Objeto JSON contendo todas as propriedades do objeto livro e seus novos valores
- Resposta: Não retorna nenhum conteúdo, apenas substitui os dados do livro especificado e retorna status HTTP 200 (OK)
- Exemplo:
  - URL Completa: http://localhost:3000/livros/2
  - Resposta:

#### Alterar Parcialmente um Livro Existente
- Método: PATCH
- Endpoint: '/livros/:id'
- Corpo da Requisição: Objeto JSON contendo as propriedades a serem alteradas e seus novos valores
- Resposta: Não retorna nenhum conteúdo, apenas altera os valores das propriedades desejadas do livro especificado e retorna status HTTP 200 (OK)
- Exemplo:
  - URL Completa: http://localhost:3000/livros/1
  - Resposta:

#### Remover um Livro
- Método: DELETE
- Endpoint: '/livros/:id'
- Resposta: Não retorna nenhum conteúdo, apenas remove o livro da coleção e retorna status HTTP 200 (OK)
- Exemplo:
  - URL Completa: http://localhost:3000/livros/1
  - Resposta:


## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

#### [](https://github.com/KarlaSilvaEng/biblioteca-online#server-nodejs--typescript)**Server**  ([NodeJS](https://nodejs.org/en/)  +  [TypeScript](https://www.typescriptlang.org/))

-   **[Express](https://expressjs.com/)**

> Veja o arquivo  [package.json](https://github.com/KarlaSilvaEng/biblioteca-online/blob/master/package.json)

#### [](https://github.com/cubos-academy/academy-template-readme-projects#utilit%C3%A1rios)**Utilitários**

-   Editor:  **[Visual Studio Code](https://code.visualstudio.com/)** 
-   Markdown:  **[StackEdit](https://stackedit.io/)**,  **[Markdown Emoji](https://gist.github.com/rxaviers/7360908)**
-   Teste de API:  **[Insomnia](https://insomnia.rest/)**
---

## 💪 Como contribuir para o projeto

1. Faça um **fork** do projeto.
2. Crie uma nova branch com as suas alterações: `git checkout -b my-feature`
3. Salve as alterações e crie uma mensagem de commit contando o que você fez: `git commit -m "feature: My new feature"`
4. Envie as suas alterações: `git push origin my-feature`
> Caso tenha alguma dúvida confira este [guia de como contribuir no GitHub](./CONTRIBUTING.md)

---


