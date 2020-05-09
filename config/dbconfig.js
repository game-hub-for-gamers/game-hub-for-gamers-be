const knex = require("knex");

const knexFile = require("../knexfile.js");

const env = process.env.NODE_ENV || "development";

const configerOptions = knexFile[env];

module.exports = knex(configerOptions);
