module.exports = {

  development: {
    client: 'postgresql',
    connection: {
      user: process.env.POSTGRES_DEV_USER,
      password: process.env.POSTGRES_DEV_PASSWORD,
      database: process.env.POSTGRES_DEV_DATABASE,
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

      database: '',
      user:     '',
      password: ''
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