const jwt = require("jsonwebtoken");
// const secrest = require("../config/secrets.js");

// const authorization = (req, res, next) => {
//   try {
//     const token = req.headers.authorization.split(" ")[1]; // getting our token from our header
//     const decodedToken = jwt.verify(token, "JWT_SECRET"); //
//     const user_id = decodedToken.user_id;
//     if (req.body.user_id !== user_id) {
//       throw "Invaild Id";
//     } else {
//       next();
//     }
//   } catch (error) {
//     res.status(401).json({ error: "token not authorized" });
//   }
// };

// module.exports = authorization;

const authorization = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1]; // getting our token from our header
    const decodedToken = jwt.verify(token, "JWT_SECRET"); //
    const user_id = decodedToken.user_id;
    next();
  } catch (error) {
    res.status(401).json({ error: "token not authorized" });
  }
};

module.exports = authorization;
