var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var todoSchema = new Schema({
  Name: String,
  Description: String,
  Status: String,
});

var todo = mongoose.model("todo", todoSchema);
module.exports = todo;
