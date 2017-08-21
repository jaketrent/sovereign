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
  const games = await db('games').where({
    id
  })
  return games[0]
}

const findAll = async (db, id) => {
  const games = await db('games')
  return games
}

const save = async (db, game) => {
  const updatedGame = await db('games').where({ id: game.id }).update({
    state: game.state
  })
  return updatedGame
}

exports.create = create
exports.find = find
exports.findAll = findAll
exports.save = save
