var express = require('express');
var app = express();

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next(); 
  });

app.get('/', function (req, res) {
  res.send({
    offset: 0,
    limit: 10,
    total: 2,
    results: [
      {
        id: 1,
        title: "Test item 1 service",
        url: "http://www.example.com/test1",
        by: "user1",
        time: 1478576387,
        score: 242
      },
      {
        id: 2,
        title: "Test item 2 service",
        url: "http://www.example.com/test2",
        by: "user2",
        time: 1478576387,
        score: 100
      }
    ]
  });
});

app.listen(3333, function () {
  console.log('Example app listening on port 3333!');
});
