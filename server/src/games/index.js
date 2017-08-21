const express = require('express')

const db = require('../db')
const gamesRepo = require('./repo')
const gameState = require('./state')

const app = express()
const ios = {}

app.post('/', async (req, res) => {
  const game = gameState()
  const newGame = await gamesRepo.create(db, game)
  initSocket(req.io, newGame)
  res.json({ data: newGame })
})

app.get('/', async (req, res) => {
  const serializeGame = game => ({ id: game.id })
  const serialize = games => ({ data: games.map(serializeGame) })
  const games = await gamesRepo.findAll(db)
  res.json(serialize(games))
})

app.get('/:id', async (req, res) => {
  const serialize = game => ({ data: game })
  const game = await gamesRepo.find(db, req.params.id)
  initSocket(req.io, game)
  res.json({ data: [game] })
})

const handlePlay = async (io, data) => {
  const { id, play } = data
  const game = await gamesRepo.find(db, id)
  const newGame = gameState(game, play)
  await gamesRepo.save(db, newGame)
  io.of('/' + id).emit('game-update', newGame)
}

const initSocket = (io, game) => {
  if (ios[game.id]) return game

  const nsp = io.of('/' + game.id)
  nsp.on('connection', socket => {
    const _handlePlay = handlePlay.bind(null, io)

    socket.on('play', _handlePlay)

    socket.on('disconnect', _ => {
      // off not a fn
      // nsp.off('play', handlePlay)
    })
  })

  ios[game.id] = nsp

  return game
}

module.exports = app
