const { Receipt } = require("../models/receipt");
const ctrlWrapper = require("../utils/ctrlWrapper");
const HttpError = require("../utils/HttpError");

const createReceipt = async (req, res) => {
    const lastNumber = await Receipt.find();
    const nextNumber = lastNumber.length + 1;

    const result = await Receipt.create({ number: nextNumber });
    res.status(201).json(result);
};

const closeReceipt = async (req, res) => {
    const { total } = req.body;
    const { receiptId } = req.params;
    const dateClose = new Date();
    const formatedDate = dateClose.toLocaleString();
    const result = await Receipt.findByIdAndUpdate(receiptId, { date: formatedDate, total }, { new: true });
    if (!result) {
        throw HttpError(404, "receipt not found");
    }
    res.json(result);
};

module.exports = {
    createReceipt: ctrlWrapper(createReceipt),
    closeReceipt: ctrlWrapper(closeReceipt),
};
