var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
    host: "wftuqljwesiffol6.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    user: "l3gw3auder2h10ak",
    password: "auze9fo2gs8jrbi1",
    database: "ive1gu4tzulbdl1q"
  });
}

connection.end();

module.exports = connection;
