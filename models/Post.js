const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  title: {
    type: String
  },
  postBody: {
    text: String,
    image: String
  },
  totalVotes: {
    type: Number
  },
  upVotes: {
    type: Number
  },
  downVotes: {
    type: Number
  },
  saveCount: {
    type: Number
  },
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }]
}, {timestamps: true});

const Post = mongoose.model("Post", postSchema);
module.exports = Post;