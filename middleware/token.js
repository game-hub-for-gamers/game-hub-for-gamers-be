const jwt = require("jsonwebtoken");
const secrests = require("../config/secrets.js");

function token(users) {
  const payload = {
    username: users.username,
    id: users.id,
  };
  //   returning our token's payload
  return jwt.sign(payload, secrests.jwtSecret);
}

module.exports = token;
