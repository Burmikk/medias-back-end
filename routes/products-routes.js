const express = require("express");
const router = express.Router();

const productControllers = require("../controllers/products-controllers");

router.get("/", productControllers.getAllProducts);

module.exports = router;
