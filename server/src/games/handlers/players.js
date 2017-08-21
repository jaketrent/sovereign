const handlers = {}

handlers.joinAsPlayer = (game, play) => ({
  ...game,
  players: game.players.concat([{ name: play.newPlayerName }])
})

module.exports = handlers
