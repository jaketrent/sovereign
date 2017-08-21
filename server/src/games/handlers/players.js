const handlers = {}

const err = (code, detail) => ({ code, detail })

const joinAsPlayerErrors = (game, play) => {
  const errs = []

  if (!play.newPlayerName)
    errs.push(err('errorNewPlayerNameRequired', 'Player name is required'))

  return errs.length === 0
    ? null
    : { ...game, errors: game.errors.concat(errs) }
}
handlers.joinAsPlayer = (game, play) =>
  joinAsPlayerErrors(game, play) || {
    ...game,
    state: {
      ...game.state,
      players: game.state.players.concat([{ name: play.newPlayerName }])
    }
  }
module.exports = handlers
