const userService = require("./users.service");
const authService = require("../auth/auth.service");

const createUserController = async (req, res) => {
  const { name, username, email, password, avatar } = req.body;

  if (!name || !username || !email || !password || !avatar) {
    return res.status(400).send({
      message:
        "Alguns campos estão faltando. Os campos são: 'username', 'name', 'email', 'password' ou 'avatar'.",
    });
  }

  const foundUser = await userService.findByEmailUserService(email);

  if (foundUser) {
    return res.status(400).send({ message: "Usuário já existe." });
  }

  const user = await userService
    .createUserService(req.body)
    .catch((err) => console.log(err.message));

  if (!user) {
    return res.status(400).send({ message: "Erro ao criar usuário." });
  }

  const token = authService.generateToken(user.id);

  res.status(201).send({
    user: {
      id: user.id,
      name,
      username,
      email,
      avatar,
    },
    token,
  });
};

const findAllUserController = async (req, res) => {
  const allUsers = await userService.findAllUsersService();

  if (allUsers == 0) {
    return res
      .status(404)
      .send({ message: "Não existe nenhum usuário cadastrado." });
  }

  res.send(allUsers);
};

module.exports = {
  createUserController,
  findAllUserController,
};
