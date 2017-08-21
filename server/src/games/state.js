// @flow
import type { Game, Play } from './types'

const fs = require('fs')
const path = require('path')
const uuid = require('uuid')

const handlers = fs
  .readdirSync(path.join(__dirname, 'handlers'), 'utf8')
  .reduce((acc, fileName) => {
    if (!/\.js$/.test(fileName)) return acc

    const fileNameNoExt = fileName.slice(
      0,
      fileName.indexOf(path.extname(fileName))
    )
    acc[fileNameNoExt] = require('./' + path.join('handlers', fileNameNoExt))
    return acc
  }, {})

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
