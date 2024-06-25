const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/check", (req, res) => {
  console.log(req.body);
  res.send("Working");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
