const mysql = require('mysql');

var connection = mysql.createConnection({
	host : 'localhost',
	database : 'test',
	user : 'root',
	password : ''
});

connection.connect()

module.exports = connection;