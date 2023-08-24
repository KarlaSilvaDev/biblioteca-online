const express = require('express');
const { roteador } = require('./roteador');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(roteador);

app.listen(PORT);