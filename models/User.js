const mongoose = require('mongoose');
const {Schema} = mongoose;

const userSchema = new Schema({
  googleId: String,
  username: String,
  profilePic: String,
  headerPic: String,
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  saves: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  comments: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Comment'
  }],
  upVotes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  downVotes: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Post'
  }],
  followers: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }],
  following: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'users'
  }]
});


const users = mongoose.model('users', userSchema);
module.exports = users;