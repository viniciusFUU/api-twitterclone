require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDatabase = require("./dataBase/dataBase");
const userRoute = require("./users/users.route");
const authRoute = require("./auth/auth.route");
const tweetsRoute = require("./tweets/tweets.route")

const port = process.nextTick.PORT || 3001;
const app = express();

connectDatabase();
app.use(cors());
app.use(express.json());

app.use("/users", userRoute);
app.use("/auth", authRoute);
app.use("/tweets", tweetsRoute);

app.get("/", (req, res) => {
  res.send({ message: "hello word!" });
});

app.listen(port, () => {
  console.log(`servidor rodando na porta ${port}`);
});
