const Product = require("../models/product");

const getAllProducts = async (req, res, next) => {
    const result = await Product.find();
    res.json(result);
};

module.exports = {
    getAllProducts,
};
