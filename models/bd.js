var mysql = require("mysql");
var util = require("util");

var pool = mysql.createPool({
  connectionLimit: 10,
  host: process.env.MYSQL_HOST,
  host: '127.0.0.1',
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DB_NAME,
})

//MYSQL_HOST=localhost
//MYSQL_DB_NAME=proyectoutn
//MYSQL_USER=root
//MYSQL_PASSWORD=


pool.query = util.promisify(pool.query);

module.exports = pool;
