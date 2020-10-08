const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const postsch = new Schema({
  username: { type: String },
  caption: { type: String },
  imgurl: { type: String },
});
module.exports = mongoose.model("postmodel", postsch);
