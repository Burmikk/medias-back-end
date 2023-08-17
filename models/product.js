const { Schema, model } = require("mongoose");

const productShema = new Schema(
    {
        name: {
            type: String,
            require: [true, "Set name of product"],
        },
        price: {
            type: Number,
            require: [true, "Set price of product"],
        },
    },
    { versionKey: false }
);

const Product = model("product", productShema);

module.exports = Product;
