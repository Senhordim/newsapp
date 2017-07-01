var app = require('./config/server');

// Definindo rotas
var routeHome = require('./app/routes/home')(app);
var routeNews = require('./app/routes/news')(app);
var routeAdminNews = require('./app/routes/adminNews')(app);

// Listar servidor em uma determinada porta
app.listen(3000, function(){
  console.log("Server is up with express")
});
