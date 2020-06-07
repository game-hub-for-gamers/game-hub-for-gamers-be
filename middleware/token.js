const jwt = require("jsonwebtoken");
const secrests = require("../config/secrets.js");

function token(users) {
  const payload = {
    // the payload variable is used for any data we want to sotre in our token
    username: users.username,
    id: users.id,
  };
  //   returning our token's payload
  return jwt.sign(payload, secrests.jwtSecret); // this is the signature where we are encoding the payload and the secrests togther
}

module.exports = token;
