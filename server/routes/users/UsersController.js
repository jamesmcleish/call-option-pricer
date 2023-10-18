const db = require('../../db');
const TokenGenerator = require("../../util/token_generator.model");

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
};

async function tokenGenerator(req,res) {

  const email = req.headers.email;
  const password = req.headers.password;
  const query = 'SELECT * FROM users WHERE email = $1';
  try {
    const result = await db.query(query, [email]);

    if (result.rows.length === 0) {
      console.log("Auth error: User not found");
      res.status(401).json({ message: "Authentication error: User not found" });
    } else {
      const user = result.rows[0];
      
      if (user.password !== password) {
        console.log("Auth error: Passwords do not match");
        res.status(401).json({ message: "Authentication error: Passwords do not match" });
      } else {
        const token = TokenGenerator.jsonwebtoken(email); 
        res.status(201).json({ token, message: "OK"});
      }
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ message: "Internal server error" });
  }
}

async function saveProject(req,res) {
  
}



module.exports = {
  createUser,
  tokenGenerator,
  saveProject,
};