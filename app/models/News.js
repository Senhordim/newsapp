function News(connection){
  this._connection = connection;
}

News.prototype.index = function(callback){
  this._connection.query('select * from news where public = 1', callback);
}

News.prototype.show = function(paramsUrl, callback){
  this._connection.query('select * from news where id = ?', paramsUrl, callback);
}

News.prototype.save = function(news, callback){
  this._connection.query('insert into news set ? ', news, callback);
}

News.prototype.getLastNesws = function(callback){
  this._connection.query('select * from news where public = 1 order by created_at desc limit 5', callback)
}

module.exports = function(){ return News }
