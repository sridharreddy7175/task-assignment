var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
},{timestamps:true});

exports.Category = mongoose.model("Category", categorySchema);
