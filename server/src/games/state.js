// @flow
import type { Game, Play } from './types'

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

module.exports = (game: Game, play: Play = { type: 'unknown' }) => {
  if (!game) game = initGame()

  return handlers[play.type] ? handlers[play.type](game, play) : game
}
