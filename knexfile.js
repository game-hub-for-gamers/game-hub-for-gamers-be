require("dotenv").config();
// use the following code to install this is the json package
// npm install nodemon --save-dev

module.exports = {
  development: {
    client: "postgres",
    connection: {
      host: process.env.POSTGRES_DEV_HOST,
      port: process.env.POSTGRES_DEV_PORT,
      user: process.env.POSTGRES_DEV_USER,
      password: process.env.POSTGRES_DEV_PASSWORD,
      database: process.env.POSTGRES_DEV_DATABASE,
    },
    // process.env.POSTGRES_DEV_DATABASE,
    migrations: {
      directory: "./data/migrations",
    },
  },

  staging: {
    client: "pg",
    connection: {
      database: "",
      user: "",
      password: "",
    },
    migrations: {
      tableName: "./data/migrations",
    },
  },

  // production: {
  //   client: 'postgresql',
  //   connection: {
  //     database: 'my_db',
  //     user:     'username',
  //     password: 'password'
  //   },
  //   pool: {
  //     min: 2,
  //     max: 10
  //   },
  //   migrations: {
  //     tableName: 'knex_migrations'
  //   }
  // }
};
