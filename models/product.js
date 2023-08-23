const { Schema, model } = require("mongoose");
const handleMogoosError = require("../middlewares/handleMogoosError");

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

productShema.post("save", handleMogoosError);

const Product = model("product", productShema);

/**
  Joi Schema----------------------------------------------------------------------
*/

const Joi = require("joi");

const ProductSchema = Joi.object({
    name: Joi.string().required(),
    price: Joi.number().required(),
});
const schemas = {
    ProductSchema,
};

module.exports = { Product, schemas };
