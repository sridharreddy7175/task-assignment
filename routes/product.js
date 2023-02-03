var express = require("express");
var router = express.Router();

var { createProduct,productList } = require("../controllers/product");

router.post("/create/product", createProduct);
router.get("/productList",productList)

module.exports = router;
