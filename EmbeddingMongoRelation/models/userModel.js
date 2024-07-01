const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/MongoRelationships");

const postSchema = new mongoose.Schema({
  content: String,
  date: {
    type: Date,
    default: Date.now(),
  },
});

const userSchema = new mongoose.Schema({
  username: String,
  email: String,
  password: String,
  posts: [postSchema],
});

module.exports = mongoose.model("user", userSchema);
