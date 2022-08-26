const User = require("./User");

const findByEmailUserService = (email) => User.findOne({ email: email });

const createUserService = (body) => User.create(body);

const findAllUsersService = async (req, res) => {
  const allUsers = await User.find();
  return allUsers;
};

module.exports = {
  findByEmailUserService,
  createUserService,
  findAllUsersService,
};
