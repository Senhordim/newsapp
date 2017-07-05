module.exports = function(application) {
  application.get('/admin', function(req, res){
    application.app.controllers.admin.news.new(application, req, res);
  });

  application.post('/admin/news/save', function(req, res){
    application.app.controllers.admin.news.save(application, req, res);
  });
}
