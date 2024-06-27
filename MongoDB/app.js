const express = require("express");
const app = express();
const mongooseconnection = require("./config/mongoose");
const userModel = require("./models/user");

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
