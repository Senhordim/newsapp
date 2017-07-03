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
  application.get('/news/:id?', function(req, res){

    var paramsUrl = req.params.id;
    var connection = application.config.database();
    var newsModel = application.app.models.newsModel();

    console.log(paramsUrl);

    newsModel.show(paramsUrl, connection, function(error, result){
      // res.send(result);
      res.render("news/show", {news : result});
    });

  });

};
