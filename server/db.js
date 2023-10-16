const { Pool } = require('pg');

const pool = new Pool({
  host: 'localhost',
  port: 5432,
  database: 'mydb',
});

module.exports = {
  query: (text, params) => pool.query(text, params)
};