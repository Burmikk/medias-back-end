const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const app = express();

const productsRouter = require("./routes/products-routes");
const receiptRouter = require("./routes/receipt-routes");
const itemsRouter = require("./routes/items-routes");
const apiRouter = require("./routes/api-routes");

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/products", productsRouter);
app.use("/receipt", receiptRouter);
app.use("/items", itemsRouter);
app.use("/api-docs", apiRouter);

app.use((req, res) => {
    res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
    const { status = 500, message = "Server Error" } = err;
    res.status(status).json({ message });
});

module.exports = app;
