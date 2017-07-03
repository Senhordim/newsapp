module.exports = function(application) {

  application.get('/admin', function(req, res){
    res.render("admin/news/new");
  });

  application.post('/admin/news/save', function(req, res){
    var news = req.body;

    var connection = application.config.database();
    var newsModel = application.app.models.newsModel();

    newsModel.save(news, connection, function(error, result){
      // res.send(result);
      // res.send(news)
      res.redirect('/news');
    });

  });
}
