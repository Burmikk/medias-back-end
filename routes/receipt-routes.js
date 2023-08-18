const express = require("express");
const router = express.Router();

const receiptControllers = require("../controllers/receipt-controllers");
const { schemas } = require("../models/receipt");
const { validateBody } = require("../utils/validateBody");

router.post("/", validateBody(schemas.ReceiptSchema), receiptControllers.createReceipt);
router.patch("/:receiptId", validateBody(schemas.ReceiptSchema), receiptControllers.closeReceipt);

module.exports = router;
