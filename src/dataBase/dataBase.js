const mongoose = require("mongoose");

const connectDb = () => {
  console.log("Conectando ao banco de dados...");

  mongoose
    .connect(process.env.DATABASE_URL, {
      useNewUrlParser: true,
      useUniFiedTopology: true,
    })
    .then(() => console.log("MongoDb conectado!"))
    .catch((err) => console.log(`Erro ao conectar ao banco de dados ${err}`));
};

module.exports = connectDb;
