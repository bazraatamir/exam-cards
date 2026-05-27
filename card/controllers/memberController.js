const db = require("../config/db");

const create = async (req, res) => {
  const { name, phone, email } = req.body;

  const result = await db.query(
    "INSERT INTO members (name, phone, email) VALUES (?, ?, ?)",
    [name, phone, email]
  );

  res.status(201).json({
    id: result.insertId
  });
};

const updateController = {
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

module.exports = { 
    create,
    updateController 
};