require("dotenv").config();
const express = require("express");
const cors = require("cors");

const port = process.nextTick.PORT || 3001;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.send({ message: "hello word!" });
});

app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
});
