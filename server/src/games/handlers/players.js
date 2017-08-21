const handlers = {}

handlers.joinAsPlayer = (game, play) => ({
  ...game,
  state: {
    ...game.state,
    players: game.state.players.concat([{ name: play.newPlayerName }])
  }
})

module.exports = handlers
