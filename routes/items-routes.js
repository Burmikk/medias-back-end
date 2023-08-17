const express = require("express");
const router = express.Router();

const { validateBody } = require("../utils/validateBody");
const { schemas } = require("../models/item");
const { createItem, deleteItem, changeItem } = require("../controllers/item-controllers");

router.post("/", validateBody(schemas.addItem), createItem);
router.delete("/:itemId", deleteItem);
router.patch("/:itemId", validateBody(schemas.updateItem), changeItem);

module.exports = router;
