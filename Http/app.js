const http = require("http");

let server = http.createServer((req, res) => {
  res.end("chal raha hai");
});

server.listen(3000);
