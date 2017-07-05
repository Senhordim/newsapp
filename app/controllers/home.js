module.exports.index = function(application, req, res){

  var connection = application.config.database();
  var newsModel = new application.app.models.News(connection);

  newsModel.getLastNesws(function(error, result){
    console.log(result);
    res.render("home/index", {news : result});
  });

}
