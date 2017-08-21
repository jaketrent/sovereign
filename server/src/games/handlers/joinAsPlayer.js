const err = (code, detail) => ({ code, detail })

const joinAsPlayerErrors = (game, play) => {
  const errs = []

  if (!play.newPlayerName)
    errs.push(err('errorNewPlayerNameRequired', 'Player name is required'))

  if (game.state.players.length >= 4)
    errs.push(err('errorPlayersMaxCount', 'A max 4 Players allowed'))

  return errs.length === 0
    ? null
    : { ...game, errors: game.errors.concat(errs) }
}
module.exports = (game, play) =>
  joinAsPlayerErrors(game, play) || {
    ...game,
    state: {
      ...game.state,
      players: game.state.players.concat([{ name: play.newPlayerName }])
    }
  }
