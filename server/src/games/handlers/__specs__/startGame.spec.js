const gameState = require('../../state')

test('invalid players', () => {
  const game = gameState(null, { type: 'startGame' })

  expect(game.state.phase).toEqual('setup')
  expect(game.errors[0].code).toEqual('errorStartGamePlayersRequired')
  expect(game.errors[0].detail).toEqual('At least 2 players are required')
})

test('valid', () => {
  const game = gameState(
    { state: { players: [{}, {}] } },
    { type: 'startGame' }
  )

  expect(game.state.phase).toEqual('play')
})
