// Require express
var express = require('express');

// Executando a função express()
var app = express();

// setando configurações
app.set('view engine', 'ejs');
app.set('views', './app/views');

module.exports = app;
