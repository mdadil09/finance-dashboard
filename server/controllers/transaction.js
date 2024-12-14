const Transaction = require("../Model/transactionSchema");
const paginatedResult = require("../middleware/paginatedResult");

const getTransactionData = async (req, res) => {
  const page = parseInt(req.query.page);
  const limit = parseInt(req.query.limit);

  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;

  const results = {};

  const totalNumber = await Transaction.countDocuments();

  if (endIndex < (await Transaction.countDocuments().exec())) {
    results.next = {
      page: page + 1,
      limit: limit,
      totalNumber: totalNumber,
    };
  }

  if (startIndex > 0) {
    results.previous = {
      page: page - 1,
      limit: limit,
      totalNumber: totalNumber,
    };
  }
  try {
    results.results = await Transaction.find()
      .limit(limit)
      .skip(startIndex)
      .exec();
    res.paginatedResults = results;

    res.status(200).send(results);
  } catch (e) {
    res.status(500).send(e);
  }
};
const searchTransaction = async (req, res) => {
  try {
    const searchKey = req.params.key;

    const result = await Transaction.find({
      $or: [
        { name: { $regex: searchKey, $options: "i" } },
        { accountNumber: { $regex: searchKey, $options: "i" } },
      ],
    });

    res.status(200).send(result);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { getTransactionData, searchTransaction };
