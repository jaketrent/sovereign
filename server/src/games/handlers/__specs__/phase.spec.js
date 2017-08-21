const gameState = require('../../state')

test('initialState', () => {
  const game = gameState()

  expect(game.state.phase).toEqual('setup')
})
