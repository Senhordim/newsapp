module.exports = function(){

  this.index = function(connection, callback){
    connection.query('select * from news', callback);
  }

  this.show = function(connection, callback){
    connection.query('select * from news where id = 1', callback);
  }

  this.save = function(news, connection, callback){
    connection.query('insert into news set ? ', news, callback);
  }

  return this;

}
