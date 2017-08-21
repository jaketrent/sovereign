const gameState = require('../../state')

test('initialState', () => {
  const game = gameState()

  expect(game.state.players).toEqual([])
})

test('joinAsPlayer with name', () => {
  const game = gameState(null, {
    type: 'joinAsPlayer',
    newPlayerName: 'Jake'
  })

  expect(game.state.players.length).toEqual(1)
  expect(game.state.players[0].name).toEqual('Jake')
})

test('joinAsPlayer invalid name', () => {
  const game = gameState(null, {
    type: 'joinAsPlayer',
    newPlayerName: null
  })

  expect(game.state.players.length).toEqual(0)
  expect(game.errors[0].code).toEqual('errorNewPlayerNameRequired')
  expect(game.errors[0].detail).toEqual('Player name is required')
})

test('joinAsPlayer invalid max players', () => {
  const game = gameState(
    { state: { players: [{}, {}, {}, {}] }, errors: [] },
    {
      type: 'joinAsPlayer',
      newPlayerName: 'Jake'
    }
  )

  expect(game.state.players.length).toEqual(4)
  expect(game.errors[0].code).toEqual('errorPlayersMaxCount')
  expect(game.errors[0].detail).toEqual('A max 4 Players allowed')
})
