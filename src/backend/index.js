var express = require("express");
const mongoose = require("mongoose");
var app = express();
var cors = require("cors");
app.use(cors());
app.use(express.json());
mongoose.connect(
  "mongodb://localhost/insta-clone",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => {
    console.log("connection");
  }
);
var postsch = require("./models");
app.listen(5000, () => {
  console.log("suces");
});
app.get("/post", (req, res) => {
  postsch.find({}).then((result) => res.json(result));
});
