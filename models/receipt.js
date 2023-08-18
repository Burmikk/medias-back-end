const { Schema, model } = require("mongoose");
const handleMogoosError = require("../middlewares/handleMogoosError");

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
            require: [true, "Set total of receipt"],
        },
    },
    { versionKey: false }
);
receiptShema.post("save", handleMogoosError);

const Receipt = model("receipt", receiptShema);

/**
  Joi Schema----------------------------------------------------------------------
*/

const Joi = require("joi");

const ReceiptSchema = Joi.object({
    total: Joi.number().required(),
});
const schemas = {
    ReceiptSchema,
};

module.exports = { Receipt, schemas };
