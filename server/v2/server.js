var express = require("express");
var app = express();
var bodyParser = require("body-parser");
var router = express.Router();
var mongoose = require("mongoose");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var Item = require("./app/models/item");

var port = process.env.PORT || 3335;

//mongoose.connect('mongodb://root:123456@jello.modulusmongo.net:27017/ity3Ryje'); //via Modulus
mongoose.connect("mongodb://localhost:27017/myDB"); //aqui caso queira executar de maneira local usando o MongoDb

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use("/api", router);

router.use(function(req, res, next) {
  next();
});

router.get("/", function(req, res) {
  res.send({ message: "API ready!" });
});

router
  .route("/items")
  .post(function(req, res) {
    var item = new Item();

    console.log(req.body);

    item.title = req.body.title;
    item.url = req.body.url;
    item.by = req.body.by;
    item.time = req.body.time;
    item.score = req.body.score;

    item.save(function(err) {
      if (err) res.send(err);
      res.send({ message: "Item created!" });
    });
  })
  .get(function(req, res) {
    Item.find(function(err, items) {
      if (err) res.send(err);
      res.json(items);
    });
  });

router
  .route("/items/:item_id")
  .get(function(req, res) {
    Item.findById(req.params.item_id, function(err, item) {
      if (err) res.send(err);
      res.json(item);
    });
  })
  .put(function(req, res) {
    Item.findById(req.params.item_id, function(err, item) {
      if (err) res.send(err);

      item.title = req.body.title;
      item.url = req.body.url;
      item.by = req.body.by;
      item.time = req.body.time;
      item.score = req.body.score;

      item.save(function(err) {
        if (err) res.send(err);
        res.json({ message: "Item updated!" });
      });
    }).delete(function(req, res) {
      Item.remove(
        {
          _id: req.params.item_id
        },
        function(err) {
          if (err) res.send(error);
          res.json({ message: "Item deleted successfully" });
        }
      );
    });
  });

app.listen(port);
console.log("Iniciando a aplicacao na porta " + port);
