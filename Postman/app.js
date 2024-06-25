const express = require("express");
const app = express();

let data = [1, 2, 3, 4];

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/data", (req, res) => {
  res.send(data);
});

app.post("/data/:number", (req, res) => {
  data.push(parseInt(req.params.number));
  res.send(data);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

//Variable
