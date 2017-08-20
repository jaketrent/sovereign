const express = require('express')

const db = require('../db')
const gamesRepo = require('./repo')

const app = express()

app.post('/', async (req, res) => {
  const newGame = await gamesRepo.create(db)
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
  res.json({ data: game })
})

module.exports = app
