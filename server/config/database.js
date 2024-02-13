const { createPool } = require('mysql2');
const pool = createPool({
    host: "localhost",
    user: "uhb",
    password: "uhbadmin",
    database: "uhb",
    connectionLimit: 10
})

module.exports = pool;