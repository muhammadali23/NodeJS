const express = require("express");
const users = require("./MOCK_DATA.json");
const app = express();
const PORT = 8000;

// if there is a browser to render so i use html document formate for that

app.get("/users", (req, res) => {
  const html = `
  <ul>
  ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
  </ul>
  `;
  return res.send(html);
});

// routes

//get request
//if i have differnet devices like mobile or alexa smart device then i use the following route

//REST API
app.get("/api/users", (req, res) => {
  return res.json(users);
});

// for particular ID
app
  .route("/api/users/:id")
  .get("/api/users/:id", (req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    // TOOD : edit the user with id
    return res.json({ status: "pending" });
  })
  .delete((req, res) => {
    // TOOD : edit the user with id
    return res.json({ status: "pending" });
  });

//post
app.post("/api/users/", (req, res) => {
  // TOOD : create a new user
  return res.json({ status: "pending" });
});

app.listen(PORT, () => {
  console.log(`Server started at port: ${PORT}`);
});
