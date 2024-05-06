const express = require("express");

const app = express();
app.get("/", (req, res) => {
  return res.send("Hello from the home page");
});
app.get("/about", (req, res) => {
  return res.send(
    "Hello from the about page" +
      " hey " +
      req.query.name +
      " you are " +
      req.query.age +
      " old"
  );
});
app.listen(8000, () => console.log("server started"));
