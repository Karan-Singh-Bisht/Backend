const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/advMongoCommands");

const userSchema = mongoose.Schema({
  username: String,
  name: String,
  email: String,
  password: String,
  isMarried: Boolean,
  age: Number,
  isAdmin: Boolean,
});

module.exports = mongoose.model("user", userSchema);
