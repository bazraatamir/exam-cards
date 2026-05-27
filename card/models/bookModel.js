const db = require('../db');

const BookModel = {
  async search(q) {
    const searchText = `%${q || ''}%`;
    const [rows] = await db.query(
      'SELECT * FROM `Ном` WHERE `гарчиг` LIKE ?',
      [searchText]
    );

    return rows;
  },
};

module.exports = BookModel;
