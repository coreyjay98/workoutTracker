const express = require('express');
const app = express();

app.get('/stats', (req, res) => {
  res.send('hello');
  console.log('hello');
});

module.exports = app;
