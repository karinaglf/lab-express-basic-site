const express = require("express");

const app = express();

//MIDDLEWARE

app.use(express.static("public"));

//GET
//HOMEPAGE
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/views/index.html");
});

// 404 ERRORS
app.use(function (req, res, next) {
  return res.status(404).send({ message: "Route" + req.url + " Not found." });
});


app.listen(3000, () => {
  console.log("Server is running");
});
