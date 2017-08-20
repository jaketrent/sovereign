// @flow
const config = require('./config')

const pgConfig: Knex$PostgresConfig = {
  client: 'pg',
  connection: config.databaseUrl
}

const pg: Knex$Knex = require('knex')(pgConfig)

module.exports = pg
