const JWT = require("jsonwebtoken");
const secret = "SECRET";

class TokenGenerator {
  static jsonwebtoken(user_id) {
    return JWT.sign(
      {
        user_id: user_id,
        iat: Math.floor(Date.now() / 1000),

        // Set the JWT token to expire in 10 minutes
        exp: Math.floor(Date.now() / 1000) + 500 * 60,
      },
      secret
    );
  }
  static decode(token) {
    try {
      const decoded = JWT.verify(token, secret);
      return decoded;
    } catch (error) {
      // Handle the error, e.g., token is invalid or expired
      throw new Error("Invalid or expired token");
    }
  }
}

module.exports = TokenGenerator;
