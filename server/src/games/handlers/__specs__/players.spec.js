const subject = require('../players')

const gameState = require('../../state')

test('joinAsPlayer', () => {
  const game = subject.joinAsPlayer(gameState(), {
    type: 'joinAsPlayer',
    newPlayerName: 'Jake'
  })

  expect(game.players.length).toEqual(1)
  expect(game.players[0].name).toEqual('Jake')
})
