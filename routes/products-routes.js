const express = require("express");
const router = express.Router();

const productControllers = require("../controllers/products-controllers");

router.get("/products", productControllers.getAllProducts);

module.exports = router;
