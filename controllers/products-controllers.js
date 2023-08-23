const { Product } = require("../models/product");
const HttpError = require("../utils/HttpError");
const ctrlWrapper = require("../utils/ctrlWrapper");

const getAllProducts = async (req, res) => {
    const result = await Product.find();
    res.json(result);
};

const addProduct = async (req, res) => {
    const { name } = req.body;
    const isExisted = await Product.findOne({ name });
    if (isExisted) {
        throw HttpError(404, "product already exists");
    } else {
        const result = await Product.create(req.body);
        res.status(201).json(result);
    }
};
const removeAllProducts = async (req, res) => {
    await Product.deleteMany();
    res.json({ message: "All products have been removed." });
};

module.exports = {
    getAllProducts: ctrlWrapper(getAllProducts),
    addProduct: ctrlWrapper(addProduct),
    removeAllProducts: ctrlWrapper(removeAllProducts),
};
