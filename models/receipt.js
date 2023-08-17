const { Schema, model } = require("mongoose");

const receiptShema = new Schema(
    {
        number: {
            type: Number,
            default: null,
        },
        date: {
            type: String,
            default: null,
        },
        total: {
            type: Number,
            default: 0,
        },
    },
    { versionKey: false }
);

const Receipt = model("receipt", receiptShema);

/**
  Joi Schema----------------------------------------------------------------------
*/

const Joi = require("joi");

const closeReceiptSchema = Joi.object({
    id: Joi.required(),
    total: Joi.number().required(),
});
const schemas = {
    closeReceiptSchema,
};

module.exports = { Receipt, schemas };
