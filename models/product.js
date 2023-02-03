var mongoose = require("mongoose");
var Schema = mongoose.Schema;
const productSchema = new mongoose.Schema(
  {
    pID: { type: Schema.Types.ObjectId},
    name: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    stock: {
      type: Number,
    },
  },
  { timestamps: true }
);

exports.Product = mongoose.model("Product", productSchema);
