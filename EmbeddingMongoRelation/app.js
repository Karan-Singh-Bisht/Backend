const express = require("express");
const app = express();
const userModel = require("./models/userModel");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.post("/create", async (req, res) => {
  let user = await userModel.create({
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  });
  console.log("User created");
  res.send(user);
});

app.post("/:username/create/post", async (req, res) => {
  let user = await userModel.findOne({ username: req.params.username });
  user.posts.push({ content: req.body.content });
  await user.save();
  res.send(user);
});

const port = 8080;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
