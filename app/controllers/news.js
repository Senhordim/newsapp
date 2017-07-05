module.exports.index = function(application, req, res){
  var connection = application.config.database();
  var newsModel = new application.app.models.News(connection);

  newsModel.index(function(error, result){
    // res.send(result);
    res.render("news/index", {news : result});
  });
}

module.exports.show = function(application, req, res){
  var paramsUrl = req.params.id;
  var connection = application.config.database();
  var newsModel = new application.app.models.News(connection);

  newsModel.show(paramsUrl, function(error, result){
    // res.send(result);
    res.render("news/show", {news : result});
  });
}


