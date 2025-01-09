const router = require("express").Router();
const apiUsers = require("./users");

router.use("/", apiUsers);

module.exports = router;
