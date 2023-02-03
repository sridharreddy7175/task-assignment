const db = require("../models/product");
var mongoose = require("mongoose");
exports.createProduct = async (req, res) => {
  try {
    let { name, price, description, stock, } = req.body;
    const param = req.params._id;
    // add
    let newProduct = new db.Product({
      name,
      price,
      description,
      stock,
      pID: new mongoose.Types.ObjectId(param),
    });
    newProduct = await newProduct.save();
    res.status(200).json({
      msg: "new Product is created",
      status: true,
    });
  } catch (error) {
    res.status(500).json({ errors: [{ msg: error.message, status: false }] });
  }
};

exports.productList = async (req, res) => {
  try {
    let categories = await db.Category.find({});
    if (!categories) {
      return res
        .status(401)
        .json({ errors: [{ msg: "No categories Found!" }] });
    }
    res.status(200).json({
      categories: categories,
    });
  } catch (error) {
    res.status(500).json({ errors: [{ msg: error.message, status: false }] });
  }
};
