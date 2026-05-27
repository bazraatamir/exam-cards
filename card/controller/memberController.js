const MemberModel = require('../models/memberModel');

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

  async remove(req, res, next) {
    try {
      const { id } = req.params;
      await MemberModel.delete(id);
      res.status(200).json({
        status: 200,
        message: 'amjilttai ustgagdlaa',
      });
    } catch (error) {
      next(error);
    }
  },
};

module.exports = memberController;
