const db = require('../db');

const MemberModel = {
  async getAll() {
    const [rows] = await db.query('SELECT * FROM `Гишүүн`');
    return rows;
  },

  async getById(id) {
    const [rows] = await db.query('SELECT * FROM `Гишүүн` WHERE id = ?', [id]);
    return rows[0] || null;
  },

  async create({ нэр, утас, и_мэйл, бүртгэсэн_огноо }) {
    const [result] = await db.query(
      'INSERT INTO `Гишүүн` (`нэр`, `утас`, `и_мэйл`, `бүртгэсэн_огноо`) VALUES (?, ?, ?, ?)',
      [нэр, утас, и_мэйл, бүртгэсэн_огноо]
    );

    return result.insertId;
  },

  async delete(id) {
    const [result] = await db.query('DELETE FROM `Гишүүн` WHERE id = ?', [id]);
    return result.affectedRows;
  },
};

module.exports = MemberModel;
