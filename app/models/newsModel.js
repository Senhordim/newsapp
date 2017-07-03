module.exports = function(){

  this.index = function(connection, callback){
    connection.query('select * from news where public = 1', callback);
  }

  this.show = function(paramsUrl, connection, callback){
    connection.query('select * from news where id = ?', paramsUrl, callback);
  }

  this.save = function(news, connection, callback){
    connection.query('insert into news set ? ', news, callback);
  }

  return this;

}
