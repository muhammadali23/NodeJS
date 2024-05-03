const http = require("http");
const fs = require("fs");
const url = require("url");
const server = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") return res.end();
  const log = `${Date.now()},${req.method}, ${
    req.url
  } : new request recevied\n`;
  const myUrl = url.parse(req.url, true);
  console.log(myUrl);
  fs.appendFile("log.txt", log, (err, data) => {
    switch (myUrl.pathname) {
      case "/":
        if (req.method === "GET") res.end("homepage");
        break;
      case "/about":
        const userName = myUrl.query.myName;
        res.end(`hi, ${userName}`);
        break;
      case "/search":
        const search = myUrl.query.search_query;
        res.end(`here is results for ${search}`);
      case "/signup":
        if (req.method === "GET") {
          res.end("This is a signup form");
        } else if (req.method === "POST") {
          //DB query
          res.end("Success");
        }
      default:
        res.end("404 Page not found");
    }
  });
});

server.listen(8000, () => {
  console.log("server started again");
});
