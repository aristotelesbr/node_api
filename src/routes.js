const express = require('express');

const routes = express.Router();

routes.get('/test',(req, res) => {
  return res.send('Hello World a partir do routes.')
})

module.exports = routes;