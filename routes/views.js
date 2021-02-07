const express = require('express');
const app = express();

app.use(express.static('public'));
app.use('/stats', express.static('public/stats.html'));
app.use('/exercise', express.static('public/exercise.html'));

module.exports = app;
