const createUserController = async (req, res) => {
  res.send({ message: "Create ok" });
};

const findAllUserController = async (req, res) => {
  res.send({ message: "findAll ok" });
};

module.exports = {
  createUserController,
  findAllUserController,
};
