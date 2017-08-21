const uuid = require('uuid')

const create = async (db, game) => {
  const rows = await db('games')
    .insert({
      id: game.id,
      state: game.state
    })
    .returning('*')
  return rows[0]
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
