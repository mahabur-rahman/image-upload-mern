const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  myFile: { type: String },
});

// exports
module.exports = mongoose.model("postImage", PostSchema);
