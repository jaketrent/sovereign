const gameState = require('../../state')

test('joinAsPlayer', () => {
  const game = gameState(null, {
    type: 'joinAsPlayer',
    newPlayerName: 'Jake'
  })

  expect(game.state.players.length).toEqual(1)
  expect(game.state.players[0].name).toEqual('Jake')
})
