const express = require("express");
const {
  getTransactionData,
  searchTransaction,
} = require("../controllers/transaction");
const protect = require("../middleware/auth");

const router = express.Router();

router.get("/", protect, getTransactionData);
router.get("/:key", protect, searchTransaction);

module.exports = router;
