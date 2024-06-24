const express = require("express");
const app = express();

//middleware
// app.use((req, res, next) => {
//   console.log("Hello world!");
//   console.log(req.url);
//   next();
// });

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/users/:username", (req, res) => {
  res.send(`Welcome to ${req.params.username} page`);
  console.log(req.params);
});

app.get("/authors/:username/:age", (req, res) => {
  res.send(`Welcome to ${req.params.username} aged ${req.params.age}`);
});

app.get("*", (req, res) => {
  res.send("404::Page not found");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
