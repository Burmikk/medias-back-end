const { Item } = require("../models/item");

const ctrlWrapper = require("../utils/ctrlWrapper");
const HttpError = require("../utils/HttpError");

const createItem = async (req, res) => {
    const result = await Item.create(req.body);
    res.status(201).json(result);
};

const deleteItem = async (req, res) => {
    const { itemId } = req.params;
    const result = await Item.findByIdAndDelete(itemId);
    if (!result) {
        throw HttpError(404);
    }
    res.json({ message: "contact deleted" });
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
