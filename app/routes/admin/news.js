module.exports = function(application) {

  application.get('/admin', function(req, res){
    res.render("admin/news/new");
  });

  application.post('/admin/news/save', function(req, res){
    var news = req.body;

    var connection = application.config.database();
    var newsModel = new application.app.models.News(connection);

    newsModel.save(news, function(error, result){
      // res.send(result);
      // res.send(news)
      res.redirect('/news');
    });

  });
}
