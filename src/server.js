const express = require('express');
const mongoose = require('mongoose');

const app = express();

// import mongoose
mongoose.connect('mongodb+srv://ari:ari@cluster0-2kafy.mongodb.net/dropbox_development?retryWrites=true',
  {
    useNewUrlParser: true,
  });
// Retirna no formato JSON
app.use(express.json());
// Permite o upload de arquivos
app.use(express.urlencoded({ extended: true }));
// Importando o arquivo de routes
app.use(require('./routes'));

app.listen(3333, console.log('Rodando na porta 3333'));
