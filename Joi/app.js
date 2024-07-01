const express = require("express");
const app = express();
const { userModel, validateModel } = require("./models/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/create", async (req, res) => {
  let error = validateModel(req.body);
  if (error) {
    return res.status(500).send(error.message);
  }
  let user = await userModel.create({
    name: req.body.name,
    username: req.body.username,
    email: req.body.email,
    age: req.body.age,
    contact: req.body.contact,
  });
  console.log("User created");
  res.send(user);
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
