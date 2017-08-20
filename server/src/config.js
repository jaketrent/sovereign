// @flow
const dotenv = require('dotenv')

type Cache = {
  clientHost: string,
  corsWhitelist: string[],
  databaseUrl: string,
  env: string,
  port: number
}

const getVar = name => {
  if (!process.env[name]) throw new Error(`process.env.${name} required`)

  return process.env[name]
}

let cache: Cache = {
  clientHost: '',
  corsWhitelist: [],
  databaseUrl: '',
  env: 'development',
  port: 3001
}

function loadFromEnv(seed: ?Cache): Cache {
  dotenv.config({ silent: true })

  if (process.env.ASDF) process.env.ASDF.split(',')

  cache = {
    ...cache,
    ...seed,
    ...{
      clientHost: getVar('CLIENT_HOST'),
      corsWhitelist: getVar('CORS_WHITELIST').split(','),
      databaseUrl: getVar('DATABASE_URL'),
      env: process.env.NODE_ENV || cache.env,
      port: parseInt(process.env.PORT, 10) || cache.port
    }
  }

  return cache
}

module.exports = loadFromEnv()
