const BookModel = require('../models/bookModel');

const bookController = {

  async search(req, res, next) {
    try {

      const { q } = req.query;

      const books = await BookModel.search(q);

      res.status(200).json({
        
        status: 200,
        data: books,
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = bookController;
