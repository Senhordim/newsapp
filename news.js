// Fazendo o require do modulo http do Node
var http = require('http');

// Criando o servidor passando como parametro uma requisição e uma resposta
var server = http.createServer(function(req, res){

  // Capturando o request
  var category = req.url;

  // verificando se o parâmetro recuperado é igual a categoria
  if(category == '/tecnologia'){
    res.end("<html><body><h1>Notícias de Tecnologia</h1></body></html>");

  } else if (category == '/moda') {
    res.end("<html><body><h1>Notícias de Moda</h1></body></html>");

  } else {
    res.end("<html><body><h1>Portal de notícias</h1></body></html>");

  }




})

server.listen(3000);
