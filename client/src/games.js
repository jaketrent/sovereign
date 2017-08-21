/* globals process */
import io from 'socket.io-client'

const sockets = {}

// server operations

function getSocket(id) {
  if (!sockets[id]) sockets[id] = io(process.env.REACT_APP_API_HOST + '/' + id)

  return sockets[id]
}

export async function create() {
  const res = await fetch(process.env.REACT_APP_API_HOST + '/api/games', {
    method: 'POST'
    // headers: {
    //   'Content-Type': 'application/json'
    // },
    // body: JSON.stringify({
    //   name: 'Hubot',
    //   login: 'hubot',
    // })
  })
  return res.json()
}

export async function find(id) {
  const res = await fetch(process.env.REACT_APP_API_HOST + '/api/games/' + id)
  return res.json()
}

export async function findAll() {
  const res = await fetch(process.env.REACT_APP_API_HOST + '/api/games')
  return res.json()
}

export function play(id, thePlay) {
  getSocket(id).emit('play', { id, play: thePlay })
}

export function listenGameUpdate(id, fn) {
  getSocket(id).on('game-update', fn)
}

export function unlistenGameUpdate(id, fn) {
  getSocket(id).off('game-update', fn)
}

// accessors

export function getPlayers(game) {
  return game.state.players
}

// convenience plays

export function playJoinAsPlayer(id, newPlayerName) {
  play(id, { type: 'joinAsPlayer', newPlayerName })
}
