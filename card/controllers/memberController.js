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

module.exports = { 
    create 
};