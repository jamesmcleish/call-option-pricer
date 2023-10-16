const db = require('../../db');


async function createUser(req, res) {

  try {
    const { email, password } = req.body;
    const query = 'INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *';
    const values = [email, password];

    const result = await db.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
}

async function getUserById(req, res) {
  const userId = req.params.id;

  try {
    const query = 'SELECT * FROM users WHERE id = $1';
    const values = [userId];

    const result = await pool.query(query, values);

    if (result.rows.length === 0) {
      res.status(404).json({ error: 'User not found' });
    } else {
      res.json(result.rows[0]);
    }
  } catch (error) {
    console.error('Error getting user:', error);
    res.status(500).json({ error: 'Failed to get user' });
  }
}

module.exports = {
  createUser,
  getUserById,
};