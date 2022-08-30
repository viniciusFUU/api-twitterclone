const mongoose = require("mongoose");
const TweetSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  likes: {
    type: Array,
    required: true,
  },
  comment: {
    type: Array,
    required: true,
  },
  replice: {
    type: Array,
    required: true,
  },
  retweet: {
    type: Array,
    required: true,
  },
});

const Tweet = mongoose.model("Tweet", TweetSchema);

mongoose.model.exports = Tweet;
