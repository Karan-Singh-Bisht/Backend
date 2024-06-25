const express = require("express");
const app = express();

app.get("/", (req, res, next) => {
  try {
    res.send("Hello world");
  } catch (err) {
    next(err);
  }
});

//error handler always at last

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
