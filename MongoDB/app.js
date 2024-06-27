const express = require("express");
const app = express();
const mongooseconnection = require("./config/mongoose");
const userModel = require("./models/user");
const user = require("./models/user");
const debuglog = require("debug")("development:app");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//TO create a user
/* 
app.get("/create", async (req, res, next) => {
  let createdUser = await userModel.create({
    username: "johndoe",
    name: "John Doe",
    email: "johndoe@example.com",
    password: "password123",
  });
  debuglog("User Created");
  res.send(createdUser);
});
*/

//TO find one user
/*
app.get("/read", async (req, res) => {
  let user = await userModel.findOne();
  debuglog("Readed");
  res.send(user);
});
*/

//TO find all users
/*
app.get("/users", async (req, res) => {
  let users = await userModel.find();
  debuglog("Users Readed");
  res.send(users);
});
*/

//TO update a user
/*
app.get("/update", async (req, res) => {
  let updatedUser = await userModel.findOneAndUpdate(
    { username: "johndoe" },
    { $set: { name: "John Doe" } },
    { new: true }
  );
  debuglog("User Updated");
  res.send(updatedUser);
});
*/

//TO delete a user
/*
app.get("/delete", async (req, res) => {
  let deletedUser = await userModel.findOneAndDelete({ username: "johndoe" });
  console.log("User deleted");
  res.send(deletedUser);
});
*/

app.get("/create", async (req, res) => {
  let { name, username, email, password } = req.body;
  let newUser = await userModel.create({
    name: name,
    username: username,
    email: email,
    password: password,
  });
  console.log("User Created");
  res.send(newUser);
});

app.get("/users", async (req, res) => {
  let users = await userModel.find();
  console.log("Users Found");
  res.send(users);
});

app.get("/users/:id", async (req, res) => {
  let user = await userModel.findById(req.params.id);
  console.log("User Found");
  res.send(user);
});

app.post("/update/:id", async (req, res) => {
  let { id } = req.params.id;
  let { username, name, email } = req.body;
  let updatedUser = await userModel.findOneAndUpdate(
    { id },
    { $set: { name: name, email: email, username: username } },
    { new: true }
  );
  console.log("User Updated");
  res.send(updatedUser);
});

app.get("/delete/:id", async (req, res) => {
  let { id } = req.params.id;
  let deletedUser = await userModel.findOneAndDelete({ id });
  console.log("User Deleted");
  res.send(deletedUser);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
