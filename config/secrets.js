module.exports = {
  // call our global variables state and assign it users secret
  jwtSecret: process.env.JWT_SECRET || "secrets",
};
