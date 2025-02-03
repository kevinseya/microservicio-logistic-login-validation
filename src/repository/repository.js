const mysqlPool = require('../config/mysql');
const pgPool = require('../config/postgres');

const findUserByEmail = async (email, isClient) => {
  let query, user;

  if (isClient) {
    query = 'SELECT * FROM clients WHERE email = $1';
    const { rows } = await pgPool.query(query, [email]);
    user = rows[0];
  } else {
    query = 'SELECT * FROM user WHERE email = ?';
    const [rows] = await mysqlPool.query(query, [email]);
    user = rows[0];
  }

  return user;
};

module.exports = { findUserByEmail };