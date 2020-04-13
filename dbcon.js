var mysql = require('mysql');
var pool = mysql.createPool({
  connectionLimit      : 10,
  host                 : 'host',
  user                 : 'user',
  password             : 'password',
  database             : 'database',
  multipleStatements   : true
});

module.exports.pool = pool;
