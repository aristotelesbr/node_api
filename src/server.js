const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

// Conexão com o banco
mongoose.connect('mongodb+srv://ari:ari@cluster0-2kafy.mongodb.net/dropbox_development?retryWrites=true',
  {
    useNewUrlParser: true,
  });
// Retirna no formato JSON
app.use(express.json());
// Permite o upload de arquivos
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));
// Importando o arquivo de routes
app.use(require('./routes'));

app.listen(3333, console.log('Rodando na porta 3333'));
