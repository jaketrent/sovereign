const uuid = require('uuid')

const phase = require('./handlers/phase')
const players = require('./handlers/players')

const handlers = { ...phase, ...players }

const initGame = _ => ({
  id: uuid.v4(),
  state: {
    players: [],
    deck: [],
    phase: 'setup',
    turn: {}
  },
  errors: []
})

module.exports = (game, play = {}) => {
  if (!game) game = initGame()

  return handlers[play.type] ? handlers[play.type](game, play) : game
}
