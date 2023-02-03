const db = require("../models/category");
var mongoose = require("mongoose");


exports.createCategory = async (req, res) => {
  try {
    let { name } = req.body;
    const param = req.params.userID;
    console.log("praems",param)

    // add
    let newCategory = new db.Category({
      cID: new mongoose.Types.ObjectId(param),
      name,
    });
    newCategory = await newCategory.save();
    res.status(200).json({
      msg: "new Category is created",
      status: true,
    });
  } catch (error) {
    res.status(500).json({ errors: [{ msg: error.message, status: false }] });
  }
};

exports.categoryList = async (req, res) => {
  db.Category.aggregate([
    {
      $lookup: {
        from: "products",
        localField: "_id",
        foreignField: "pID",
        as: "info",
      },
    },
  ]).exec((err, result) => {
    if (err) {
      console.log("error", err);
    }
    if (result) {
      console.log(result, "hhhh");
      res.status(200).json({
        msg: "Categories",
        data: result,
      });
    }
  });
};
