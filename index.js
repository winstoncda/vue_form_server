require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const cors = require("cors");

require("./database/configDB");

app.use(express.json());
app.use(
  cors({
    origin: "*",
  })
);

const routes = require("./routes");
app.use(routes);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
