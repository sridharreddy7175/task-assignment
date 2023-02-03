var express = require("express");
var router = express.Router();

var { createCategory,categoryList } = require("../controllers/category");

router.post("/create/category", createCategory);
router.get("/categoryList",categoryList)

module.exports = router;
