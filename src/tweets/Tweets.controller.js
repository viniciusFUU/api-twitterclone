const tweetService = require("./tweets.service");

const creatTweetController = async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      res
        .status(400)
        .send("VOcê não enviou os dados necessários para a criação do tweet.");
    }

    const { id } = await tweetService.createTweetService(message, req.userId);

    return res.send({
      message: "Tweet criado com sucesso!",
      tweet: { id, message },
    });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
};

const findAllTweetsController = async (req, res) => {
  try {
    const tweets = await tweetService.findAllTweetsService();

    if (tweets.length === 0) {
      return res.status(400).send({ message: "Não existe tweets." });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }

  return res.send({
    results: tweets.map((tweet) => ({
      id: tweet._id,
      message: tweet.message,
      likes: tweet.likes.length,
      comments: tweet.comments.length,
      retweets: tweet.retweets.length,
      name: tweet.user.name,
      username: tweet.user.username,
      avatar: tweet.user.avatar,
    })),
  });
};

module.exports = {
  creatTweetController,
  findAllTweetsController,
};
