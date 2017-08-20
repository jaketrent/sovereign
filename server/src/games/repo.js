const uuid = require('uuid')

const gameState = require('./state')

const create = async db => {
  const newGame = await db('games').insert({
    id: uuid.v4(),
    state: gameState()
  })
  return newGame
}

const find = async (db, id) => {
  const game = await db('games').where({
    id
  })
  return game
}

const findAll = async (db, id) => {
  const games = await db('games')
  return games
}

exports.find = find
exports.findAll = findAll
exports.create = create
