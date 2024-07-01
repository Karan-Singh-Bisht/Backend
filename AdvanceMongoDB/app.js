const express = require("express");
const app = express();
const userModel = require("./models/user");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const users = [
  {
    username: "johndoe123",
    name: "John Doe",
    email: "johndoe@example.com",
    password: "password123",
    isMarried: true,
    age: 30,
  },
  {
    username: "janedoe456",
    name: "Jane Doe",
    email: "janedoe@example.com",
    password: "password456",
    isMarried: false,
    age: 25,
  },
  {
    username: "mikesmith789",
    name: "Mike Smith",
    email: "mikesmith@example.com",
    password: "password789",
    isMarried: true,
    age: 40,
  },
  {
    username: "susanlee101",
    name: "Susan Lee",
    email: "susanlee@example.com",
    password: "password101",
    isMarried: false,
    age: 35,
  },
  {
    username: "robertjohnson202",
    name: "Robert Johnson",
    email: "robertjohnson@example.com",
    password: "password202",
    isMarried: true,
    age: 50,
  },
  {
    username: "emilybrown303",
    name: "Emily Brown",
    email: "emilybrown@example.com",
    password: "password303",
    isMarried: false,
    age: 28,
  },
  {
    username: "davidthomas404",
    name: "David Thomas",
    email: "davidthomas@example.com",
    password: "password404",
    isMarried: true,
    age: 32,
  },
  {
    username: "lindawilson505",
    name: "Linda Wilson",
    email: "lindawilson@example.com",
    password: "password505",
    isMarried: false,
    age: 29,
  },
  {
    username: "jamesmoore606",
    name: "James Moore",
    email: "jamesmoore@example.com",
    password: "password606",
    isMarried: true,
    age: 45,
  },
  {
    username: "patriciataylor707",
    name: "Patricia Taylor",
    email: "patriciataylor@example.com",
    password: "password707",
    isMarried: true,
    age: 42,
  },
  {
    username: "danielanderson808",
    name: "Daniel Anderson",
    email: "danielanderson@example.com",
    password: "password808",
    isMarried: false,
    age: 37,
  },
  {
    username: "barbaramartin909",
    name: "Barbara Martin",
    email: "barbaramartin@example.com",
    password: "password909",
    isMarried: true,
    age: 31,
  },
  {
    username: "paulgarcia010",
    name: "Paul Garcia",
    email: "paulgarcia@example.com",
    password: "password010",
    isMarried: false,
    age: 38,
  },
  {
    username: "nancyrodriguez111",
    name: "Nancy Rodriguez",
    email: "nancyrodriguez@example.com",
    password: "password111",
    isMarried: true,
    age: 33,
  },
  {
    username: "christophermartinez212",
    name: "Christopher Martinez",
    email: "christophermartinez@example.com",
    password: "password212",
    isMarried: false,
    age: 27,
  },
];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

//Insert-Many
app.post("/users/createMany", async (req, res) => {
  let data = await userModel.insertMany(users);
  console.log("Users Inserted");
  res.send(data);
});

//eq => equal to
app.get("/users/eq", async (req, res) => {
  let data = await userModel.find({ age: { $eq: 25 } });
  console.log("User found");
  res.send(data);
});

//ne => not equal
app.get("/users/ne", async (req, res) => {
  let data = await userModel.find({ age: { $ne: 25 } });
  console.log("User found");
  res.send(data);
});

//lt => less than
app.get("/users/lt", async (req, res) => {
  let data = await userModel.find({ age: { $lt: 35 } });
  console.log("User found");
  res.send(data);
});

//lte => less than equal to
app.get("/users/lte", async (req, res) => {
  let data = await userModel.find({ age: { $lte: 27 } });
  console.log("User found");
  res.send(data);
});

//gt => greater than
app.get("/users/gt", async (req, res) => {
  let data = await userModel.find({ age: { $gt: 30 } });
  console.log("User found");
  res.send(data);
});

//gte => greater than or equal to
app.get("/users/gte", async (req, res) => {
  let data = await userModel.find({ age: { $gte: 40 } });
  console.log("User found");
  res.send(data);
});

//in
app.get("/users/in", async (req, res) => {
  let data = await userModel.find({ age: { $in: [25, 30, 35] } });
  console.log("User found");
  res.send(data);
});

//nin
app.get("/users/nin", async (req, res) => {
  let data = await userModel.find({ isMarried: { $nin: [false] } });
  console.log("User found");
  res.send(data);
});

//exists
app.get("/users/exists", async (req, res) => {
  let data = await userModel.find({ isAdmin: { $exists: true } });
  console.log("User found");
  res.send(data);
});

//and
app.get("/users/and", async (req, res) => {
  let data = await userModel.find({
    $and: [{ isMarried: false }, { age: { $gte: 30 } }],
  });
  console.log("User found");
  res.send(data);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
