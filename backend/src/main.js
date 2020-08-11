const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
var mongoose = require("mongoose");
var todo = require("./models/todo");
mongoose.connect("mongodb://localhost:27017/todos", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
var db = mongoose.connection;

const app = express();
app.use(morgan("combined"));
app.use(bodyParser.json());
app.use(cors());

app.listen(process.env.PORT || 8081); //backend executes at localhost:8081.

db.on("error", console.error.bind(console, "connection error"));
db.once("open", function (callback) {
  console.log("Connection Succeeded");
});
app.post("/todos", (req, res) => {
  console.log(req.body);
  var db = req.db;
  var Name = req.body.Name;
  var Description = req.body.Description;
  var Status = req.body.Status;
  var new_todo = new todo({
    Name: Name,
    Description: Description,
    Status: Status,
  });

  new_todo.save(function (error) {
    if (error) {
      console.log(error);
    }
    res.send({
      success: true,
      message: "Successfully added",
    });
  });
});
app.get("/todos", (req, res) => {
  todo
    .find({}, "Name Description Status", function (error, data) {
      if (error) {
        console.error(error);
      }
      res.send(data);
    })
    .sort({ _id: -1 });
});

app.get("/todo/:id", (req, res) => {
  var db = req.db;
  todo.findById(req.params.id, "Name Description Status", function (
    error,
    todo
  ) {
    if (error) {
      console.error(error);
    }
    res.send(todo);
  });
});

app.put("/todos/:id", (req, res) => {
  var db = req.db;
  todo.findById(req.params.id, "Name Description Status", function (
    error,
    todo
  ) {
    if (error) {
      console.error(error);
    }

    todo.Name = req.body.Name;
    todo.Description = req.body.Description;
    todo.Status = req.body.Status;
    todo.save(function (error) {
      if (error) {
        console.log(error);
      }
      res.send({
        success: true,
      });
    });
  });
});

app.delete("/todos/:id", (req, res) => {
  var db = req.db;
  todo.remove(
    {
      _id: req.params.id,
    },
    function (err, todo) {
      if (err) res.send(err);
      res.send({
        success: true,
      });
    }
  );
});
