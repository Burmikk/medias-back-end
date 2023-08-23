const { Item } = require("../models/item");

const ctrlWrapper = require("../utils/ctrlWrapper");
const HttpError = require("../utils/HttpError");

const createItem = async (req, res) => {
    const { product_id, receipt_id } = req.body;
    const isExisted = await Item.findOne({ product_id, receipt_id });
    if (isExisted) {
        throw HttpError(404, "item already exists");
    } else {
        const result = await Item.create(req.body);
        res.status(201).json(result);
    }
};

const deleteItem = async (req, res) => {
    const { itemId } = req.params;
    const result = await Item.findByIdAndDelete(itemId);
    if (!result) {
        throw HttpError(404);
    }
    res.json({ message: "product deleted" });
};

const changeItem = async (req, res) => {
    const { quantity } = req.body;
    const { itemId } = req.params;
    const dateClose = new Date();
    const formatedDate = dateClose.toLocaleString();
    const result = await Item.findByIdAndUpdate(itemId, { quantity }, { new: true });
    if (!result) {
        throw HttpError(404, "item not found");
    }
    res.json(result);
};

module.exports = {
    createItem: ctrlWrapper(createItem),
    deleteItem: ctrlWrapper(deleteItem),
    changeItem: ctrlWrapper(changeItem),
};
