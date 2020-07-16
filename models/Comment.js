const mongoose = require('mongoose');
const users = mongoose.model('users');
const post = mongoose.model('Post');

const commentSchema = new mongoose.Schema({
  post: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'post'
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  },
  commentText: {
    type: String
  },
  totalVotes: {
    type: Number
  },
  upVotes: {
    type: Number
  },
  downVotes: {
    type: Number
  }
}, {timestamps: true});

const Comment = mongoose.model("Comment", commentSchema);
module.exports = Comment;