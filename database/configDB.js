const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "vue",
});

connection.connect((err) => {
  if (err) throw err;
  console.log("Connecté à la base de données MySQl");
});

module.exports = connection;
