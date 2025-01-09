const router = require("express").Router();
const connection = require("../../database/configDB");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.get("/", (req, res) => {
  const sql = "SELECT * FROM users";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

router.post("/register", async (req, res) => {
  console.log(req.body);

  // const { username, password } = req.body;
  // const hashedPassword = await bcrypt.hash(password, 10);
  // const insertSql = "INSERT INTO users (username, password) VALUES (?, ?)";
  // connection.query(insertSql, [username, hashedPassword], (err, result) => {
  //   if (err) throw err;
  //   let lastInsertId = result.insertId;
  //   const token = jwt.sign(
  //     { id: lastInsertId, username, password: hashedPassword },
  //     process.env.SECRET,
  //     {
  //       expiresIn: "60s",
  //     }
  //   );
  //   let sqlLastOne = "SELECT * FROM users WHERE id = ?";
  //   connection.query(sqlLastOne, [lastInsertId], (err, result) => {
  //     res.status(200).json(token);
  //   });
  // });
});

module.exports = router;
