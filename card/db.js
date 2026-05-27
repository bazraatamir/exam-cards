const mysql = require('mysql2');
const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'Zk94387282@',
    database: '05.19'
});
module.exports = pool.promise();