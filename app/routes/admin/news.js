module.exports = function(application) {

  application.get('/admin', function(req, res){
    res.render("admin/news/new", {validation : {}, news :{} });
  });

  application.post('/admin/news/save', function(req, res){
    var news = req.body;

    req.assert('title', 'Título é obrigatório').notEmpty();
    req.assert('resume', 'Resumo é obrigatório').notEmpty();
    req.assert('resume', 'Resumo deve ter entre 10 e 100 caracteris ').len(10, 100);
    req.assert('body', 'Notícia é obrigátorio').notEmpty();

    var errors = req.validationErrors();

    if (errors) {
      res.render("admin/news/new", {validation : errors, news : news});
      return;
    }

    var connection = application.config.database();
    var newsModel = new application.app.models.News(connection);

    newsModel.save(news, function(error, result){
      // res.send(result);
      // res.send(news)
      res.redirect('/news');
    });

  });
}
