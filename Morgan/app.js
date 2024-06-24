const express = require("express");
const app = express();
const morgan = require("morgan");

app.use(morgan("combined"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
