const express = require("express");
const router = express.Router();

const receiptControllers = require("../controllers/receipt-controllers");
const { schemas } = require("../models/receipt");
const { validateBody } = require("../utils/validateBody");

router.post("/", receiptControllers.createReceipt);
router.patch("/:receiptId", validateBody(schemas.closeReceiptSchema), receiptControllers.closeReceipt);

module.exports = router;
