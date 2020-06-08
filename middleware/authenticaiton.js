exports.models = (req, res, next) => {
  if (req.session && req.seesion.user) {
    next();
  } else {
    res.status(401).json({ error: "user not authorized" });
  }
};
