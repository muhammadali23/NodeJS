const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()}, ${req.url} : new request recevied\n`;
  fs.appendFile("log.txt", log, (err, data) => {
    switch (req.url) {
      case "/":
        res.end("homepage");
        break;
      case "/about":
        res.end("I am muhammad ali");
        break;
      default:
        res.end("404 Page not found");
    }
  });
});

server.listen(8000, () => {
  console.log("server started again");
});
