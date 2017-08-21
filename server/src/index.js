const config = require('./config')

const bodyParser: bodyParser = require('body-parser')
const cors = require('cors')
const express = require('express')
const http = require('http')
const socketio = require('socket.io')

const db = require('./db')
const games = require('./games')

const app: express$Application = express()
const server = http.Server(app)
const io = socketio(server)

const corsOptions = {
  origin(origin, done) {
    if (config.env !== 'production') return done(null, true)

    return config.corsWhitelist.includes(origin)
      ? done(null, true)
      : done(new Error(`Origin ${origin} not allowed`))
  },
  credentials: true
}

app.use('*', cors(corsOptions))
app.use(
  '/api/games',
  (req, res, next) => {
    req.io = io
    next()
  },
  games
)

const port = config.port

server.listen(port, _ => console.log('Server on port ' + port + '...'))
