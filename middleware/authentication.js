module.exports = (req, res, next) => {
  // checks to see if user has correct cookie coming from sessions
  if (req.session && req.session.user) {
    next(); // if so then allow pass
  } else {
    res.status(401).json({ error: "user not authorized" }); // if not then send 401 error
  }
};
