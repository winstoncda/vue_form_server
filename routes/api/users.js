const router = require("express").Router();
const connection = require("../../database/configDB");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

router.post("/register", async (req, res) => {
  const { username, password, email } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const insertSql =
    "INSERT INTO vuef (username, password, email) VALUES (?, ?, ?)";
  connection.query(
    insertSql,
    [username, hashedPassword, email],
    (err, result) => {
      if (err) throw err;
      let lastInsertId = result.insertId;
      const token = jwt.sign(
        { id: lastInsertId, username, password: hashedPassword, email },
        process.env.SECRET,
        {
          expiresIn: "60s",
        }
      );
      res.status(200).json(token);
    }
  );
});

router.get("/", (req, res) => {
  const sql = "SELECT * FROM users";
  connection.query(sql, (err, result) => {
    if (err) throw err;
    res.status(200).json(result);
  });
});

module.exports = router;
