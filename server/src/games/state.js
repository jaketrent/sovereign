const uuid = require('uuid')

const players = require('./handlers/players')

const handlers = { ...players }

const initGame = _ => ({
  id: uuid.v4(),
  state: {
    players: [],
    deck: [],
    phase: '',
    turn: {}
  },
  errors: []
})

module.exports = (game, play = {}) => {
  if (!game) game = initGame()

  console.log('game', game)

  return handlers[play.type] ? handlers[play.type](game, play) : game
}
