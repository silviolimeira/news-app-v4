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

app.get("/find", (req, res) => {
  var cursor = db.collection("data").find();
});

app.get("/show", (req, res) => {
  db.collection("data")
    .find()
    .toArray((err, results) => {
      if (err) return console.log(err);
      res.render("show.ejs", { data: results });
    });
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

app
  .route("/edit/:id")
  .get((req, res) => {
    var id = req.params.id;

    db.collection("data")
      .find(Object(id))
      .toArray((err, result) => {
        if (err) return res.send(err);
        res.render("edit.ejs", { data: result });
      });
  })
  .post((req, res) => {
    var id = req.params.id;
    var name = req.body.name;
    var surname = req.body.surname;

    db.collection("data").updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          name: name,
          surname: surname
        }
      },
      (err, result) => {
        if (err) return res.send(err);
        res.redirect("/show");
        console.log("Atualizado no Banco de Dados");
      }
    );
  });
