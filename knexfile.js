module.exports = {
  test: {
    client: 'pg',
    connection: 'postgres://localhost/airline_db',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
  },
  development: {
    client: 'pg',
    connection: 'postgres://postgres:@localhost:5432/airline',
    migrations: {
      directory: __dirname + '/db/migrations'
    },
  },
}