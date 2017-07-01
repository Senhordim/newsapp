
var database = require('../../config/database');

module.exports = function(app) {

  var connection = database();

  app.get('/news', function(req, res){

    connection.query('SELECT * FROM NEWS', function(error, result){
      // res.send(result);
      res.render("news/index", {news : result});
    });

  });
};
