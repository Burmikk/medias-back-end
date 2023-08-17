const { Schema, model } = require("mongoose");
const handleMogoosError = require("../middlewares/handleMogoosError");

const itemSchema = new Schema(
    {
        receipt_id: {
            type: String,
            required: true,
        },
        product_id: {
            type: String,
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
        },
        price: {
            type: Number,
            required: true,
        },
    },
    { versionKey: false }
);
itemSchema.post("save", handleMogoosError);

const Item = model("item", itemSchema);

/**
  Joi Schema----------------------------------------------------------------------
*/

const Joi = require("joi");

const addItem = Joi.object({
    receipt_id: Joi.string().required(),
    product_id: Joi.string().required(),
    quantity: Joi.number().required(),
    price: Joi.number().required(),
});
const updateItem = Joi.object({
    quantity: Joi.number().required(),
});

const schemas = {
    addItem,
    updateItem,
};

module.exports = { schemas, Item };
