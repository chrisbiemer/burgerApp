//import sql npm package
var mysql = require("mysql");

//establish the connection (NOTE: insecure in this case)
var connection = mysql.createConnection({
	port: 3306,
	host: "localhost",
	user: "root",
	password: "",
	database: "burgers_db"
});

//log whether or not the connection was successful
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

//export the connection for use in external files on the server
module.exports = connection;