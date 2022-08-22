const mysql = require('mysql2/promise');
require('dotenv/config');

const { MYSQL_HOST, MYSQL_USER, MYSQL_PASSWORD, MYSQL_DATABASE, PORT } = process.env;

const connection = mysql.createPool({
  host: MYSQL_HOST || 'localhost',
  port: PORT || 3306,
  user: MYSQL_USER || 'root',
  password: MYSQL_PASSWORD || 'password',
  database: MYSQL_DATABASE || 'StoreManager',
});

module.exports = connection;
