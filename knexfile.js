// Update with your config settings.

module.exports = {

  development: {
    client: 'postgresql',
    connection: {

      database: 'game',
      user:     'postgres',
      password: 'pass'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      directory:  './data/migrations'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {

      database: 'game',
      user:     'postgres',
      password: 'pass'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: './data/migrations'
    }
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
