const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');

const app = express();
// Cors
app.use(cors());

const server = require('http').Server(app);
const io = require('socket.io')(server);

// Cria socket
io.on('connection', (socket) => {
  socket.on('connectRoom', (box) => {
    socket.join(box);
  });
});

// Conexão com o banco
mongoose.connect('mongodb+srv://ari:ari@cluster0-2kafy.mongodb.net/dropbox_development?retryWrites=true',
  {
    useNewUrlParser: true,
  });

app.use((req, res, next) => {
  req.io = io;

  return next();
});
// Retirna no formato JSON
app.use(express.json());
// Permite o upload de arquivos
app.use(express.urlencoded({ extended: true }));
app.use('/files', express.static(path.resolve(__dirname, '..', 'tmp')));
// Importando o arquivo de routes
app.use(require('./routes'));

server.listen(3333, console.log('Rodando na porta 3333'));
