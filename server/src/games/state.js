const players = require('./handlers/players')

const initialState = {
  players: [],
  deck: [],
  phase: '',
  turn: {}
}

const handlers = { ...players }

module.exports = (game = initialState, play = {}) => {
  return handlers[play.type] ? handlers[play.type](game, play) : game
}
