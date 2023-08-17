const express = require("express");
const router = express.Router();

const productControllers = require("../controllers/products-controllers");
const receiptControllers = require("../controllers/receipt-controllers");
const { schemas } = require("../models/receipt");
const { validateBody } = require("../utils/validateBody");

router.get("/products", productControllers.getAllProducts);
router.post("/receipt", receiptControllers.createReceipt);
router.patch("/receipt/close/", validateBody(schemas.closeReceiptSchema), receiptControllers.closeReceipt);

module.exports = router;
