const mongoose = require("mongoose");
const debuglog = require("debug")("development:mongooseconfig");

mongoose.connect("mongodb://127.0.0.1:27017/advMongoCommands");

const db = mongoose.connection;

db.on("error", function (err) {
  console.log(err);
});

db.on("open", function () {
  //   debuglog("Connected to the database");
  console.log("Connected to the database");
});

module.exports = db;
