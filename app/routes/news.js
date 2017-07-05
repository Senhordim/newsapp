module.exports = function(application) {

  // Index
  application.get('/news', function(req, res){
    application.app.controllers.news.index(application, req, res)
  });

  // Show
  application.get('/news/:id?', function(req, res){
    application.app.controllers.news.show(application, req, res)
  });

};
