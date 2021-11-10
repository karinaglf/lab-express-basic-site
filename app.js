const express = require("express");
const PORT = 3000;

const app = express();

//MIDDLEWARE

app.use(express.static("public"));

//GET
//PAGES
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/views/index.html");
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + "/public/views/about.html");
});

app.get("/works", (req, res) => {
  res.sendFile(__dirname + "/public/views/works.html");
});

// 404 ERROR
app.use(function (req, res, next) {
  return res.status(404).send({ message: "Route" + req.url + " Not found." });
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
