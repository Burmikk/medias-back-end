const express = require("express");
const router = express.Router();

const productControllers = require("../controllers/products-controllers");
const { schemas } = require("../models/product");
const { validateBody } = require("../utils/validateBody");

router.get("/", productControllers.getAllProducts);
router.post("/", validateBody(schemas.ProductSchema), productControllers.addProduct);
router.delete("/", productControllers.removeAllProducts);

module.exports = router;
