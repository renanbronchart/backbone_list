var express = require('express');
var app = express();
var path = require('path');

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'))
});

app.use(function (req, res, next) {
  res.redirect('/');
  next();
});

app.use(function (req, res, next) {
  res.status(404);
  res.send('Erreur 404');
})

app.listen(8000);
