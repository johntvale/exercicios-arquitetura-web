const mysql = require('mysql2/promise');

const connection = mysql.createPool({
    host: 'localhost',
    user: 'john',
    password: '0123456789',
    database: 'model_example',
});

module.exports = connection;
