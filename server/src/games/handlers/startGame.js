const err = (code, detail) => ({ code, detail })

const startGameErrors = (game, play) => {
  const errs = []

  if (game.state.players.length < 2)
    errs.push(
      err('errorStartGamePlayersRequired', 'At least 2 players are required')
    )

  return errs.length === 0
    ? null
    : { ...game, errors: game.errors.concat(errs) }
}
module.exports = (game, play) =>
  startGameErrors(game, play) || {
    ...game,
    state: {
      ...game.state,
      phase: 'play'
    }
  }
