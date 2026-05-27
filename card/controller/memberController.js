const memberController = {
  async update(req, res, next) {
    try {

      res.status(200).json(
        {

        status: 200,
        message: 'amjilttai shinechlegdlee',
        data: req.body,
      });

    } catch (error) {

      next(error);
    }
  },
  
};

module.exports = memberController;
