const gameState = require('../state')

test('initialState', () => {
  const game = gameState()

  expect(game.state.players).toEqual([])
  expect(game.state.phase).toEqual('setup')
  expect(game.state.turn).toEqual({})
  expect(game.errors).toEqual([])
})
