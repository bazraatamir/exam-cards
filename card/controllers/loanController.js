const LoanModel = require("../models/LoanModel");

const returnBook = async (req, res) => {
  const id = req.params.id;

  const result = await LoanModel.returnBook(id);

  res.status(200).json(result);
};

module.exports = { 
    returnBook 
};