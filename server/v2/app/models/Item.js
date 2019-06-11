var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var ItemSchema = new Schema({
  title: String,
  url: String,
  by: String,
  time: Date,
  score: Number
});

module.exports = mongoose.model("Item", ItemSchema);
