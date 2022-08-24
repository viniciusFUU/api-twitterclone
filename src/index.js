require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDatabase = require("./dataBase/dataBase");
const userRoute = require('./users/users.route')

const port = process.nextTick.PORT || 3001;
const app = express();

connectDatabase();
app.use(cors());

app.use("/users", userRoute)

app.get("/", (req, res) => {
  res.send({ message: "hello word!" });
});

app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
});
