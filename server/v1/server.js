const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "jes");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/show", (req, res) => {
  console.log(req.body);
  res.sendStatus(200);
});

app.listen(3333, function() {
  console.log("Server running on port 3333...");
});
