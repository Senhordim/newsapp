module.exports = function(){

  this.index = function(connection, callback){
    connection.query('select * from noticias', callback);
  }

  this.show = function(connection, callback){
    connection.query('select * from noticias where id = 2', callback);
  }

  return this;

}
