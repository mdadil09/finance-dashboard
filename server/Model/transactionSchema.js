const mongoose = require("mongoose");

const transactionSchema = new mongoose.Schema(
  {
    name: { type: String, require: true },
    amount: { type: String, require: true },
    date: { type: String, require: true },
    status: { type: String, require: true },
    account: { type: String, require: true },
    accountNumber: { type: String, require: true },
    expiry: { type: String, require: true },
    description: { type: String, require: true },
    isLoss: { type: Boolean, require: true },
    img: { type: String, require: true },
  },
  { timestamps: true }
);

const Transaction = mongoose.model("transaction", transactionSchema);

module.exports = Transaction;
