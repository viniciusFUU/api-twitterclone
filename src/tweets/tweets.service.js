const Tweet = require("./Tweet");

const createTweetService = (message, userId) => {
  return Tweet.create({ message, user: userId });
};

const findAllTweetsService = () =>
  Tweet.find().sort({ _id: -1 }).populate("user");

module.exports = {
  createTweetService,
  findAllTweetsService,
};
