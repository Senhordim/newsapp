module.exports = function(application) {

  // Index
  application.get('/news', function(req, res){

    var connection = application.config.database();
    var newsModel = application.app.models.newsModel();

    newsModel.index(connection, function(error, result){
      // res.send(result);
      res.render("news/index", {news : result});
    });

  });

  // Show
  application.get('/news/1', function(req, res){

    var connection = application.config.database();
    var newsModel = application.app.models.newsModel();

    newsModel.show(connection, function(error, result){
      // res.send(result);
      res.render("news/show", {news : result});
    });
  });

};
