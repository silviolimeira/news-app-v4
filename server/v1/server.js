const express = require("express");
const app = express();

app.set("view engine", "jes");
app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3333, function() {
  console.log("Server running on port 3333...");
});
