const express = require('express');

const routes = express.Router();

routes.get('/test',(req, res) => {
  return res.send('Hello Worlc)
})

module.exports = routes;