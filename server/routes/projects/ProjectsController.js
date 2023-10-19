const db = require('../../db');
const TokenGenerator = require("../../util/token_generator.model");

async function saveProject(req,res) {
  try {
    const user_email = TokenGenerator.decode(req.body.token).user_id;
    const { underlying_price, strike_price, time_to_maturity, volatility, risk_free_rate, dividend, call_option_price} = req.body;
    const query = 'INSERT INTO projects (underlying_price, strike_price, time_to_maturity, volatility, risk_free_rate, dividend, user_email, call_option_price) VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *';
    const values = [underlying_price, strike_price, time_to_maturity, volatility, risk_free_rate, dividend, user_email, call_option_price];

    const result = await db.query(query, values);
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Failed to create user' });
  }
};
async function getProjects(req, res) {
  try {
    token = req.headers.authorization.slice(7)
    const user_email = TokenGenerator.decode(token);
    const query = 'SELECT * FROM projects WHERE user_email = $1';
    const values = [user_email.user_id];

    const result = await db.query(query, values);

    if (result.rowCount === 0) {
      res.json([]);
      return;
    }

    // Extract the fields from the result
    const fields = result.fields.map(field => field.name);

    // Transform the rows into neat object arrays
    const rows = result.rows.map(row => {
      const rowObject = {};
      fields.forEach(fieldName => {
        rowObject[fieldName] = row[fieldName];
      });
      return rowObject;
    });
    
    res.json(rows);
  } catch (error) {
    console.error('Error fetching projects:', error);
    res.status(500).json({ error: 'Failed to fetch projects' });
  }
};
async function deleteProject(req, res) {
  try {
    const projectId = req.params.id; // Assuming the ID is provided in the URL parameters
    const token = req.headers.authorization.slice(7);
    const user_email = TokenGenerator.decode(token);
    
    const query = 'DELETE FROM projects WHERE id = $1 AND user_email = $2';
    const values = [projectId, user_email.user_id];

    const result = await db.query(query, values);

    if (result.rowCount === 0) {
      res.status(403).json({ error: 'Not authorized to delete this project' });
    } else {
      res.json({ message: 'Project deleted successfully' });
    }
  } catch (error) {
    console.error('Error deleting project:', error);
    res.status(500).json({ error: 'Failed to delete the project' });
  }
}



module.exports = {
  saveProject,
  getProjects,
  deleteProject,
};