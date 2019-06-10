const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mongoClient = require("mongodb").MongoClient;

const uri = "mongodb://localhost:27017/myDB";

app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "jes");

app.get("/", (req, res) => {
  res.render("index.ejs");
});

app.post("/show", (req, res) => {
  db.collection("data").insertOne(req.body, (err, result) => {
    if (err) return res.sendStatus(400);

    console.log("salvo no banco de dados");
    res.redirect("/");
  });
  //   res.sendStatus(200);
});

mongoClient.connect(uri, (err, client) => {
  if (err) return console.log("err");
  db = client.db("myDB");

  app.listen(3333, function() {
    console.log("Server running on port 3333...");
  });
});
