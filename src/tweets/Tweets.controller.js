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

module.exports = {
  creatTweetController,
};
