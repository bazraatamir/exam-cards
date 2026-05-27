const mysql = require('mysql2/promise');

const db = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'library_db',
  waitForConnections: true,
  connectionLimit: 10,
});

async function getAllMembers() {
  try {
    const [rows] = await db.query('SELECT * FROM `Гишүүн`');
    return rows;
  } catch (error) {
    console.error('Гишүүн хүснэгтийн өгөгдөл авахад алдаа гарлаа:', error);
    throw error;
  }
}

module.exports = db;
module.exports.getAllMembers = getAllMembers;
