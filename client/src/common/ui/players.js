import g from 'glamorous'
import React from 'react'

const Players = g.div({
  display: 'flex',
  height: '50px'
})

const Player = g.div(
  {
    flex: 1,
    padding: '5px'
  },
  ({ isActive }) => ({ color: isActive ? 'red' : 'black' })
)

const renderPlayers = props =>
  props.players.map(p =>
    <Player
      name={p.name}
      key={p.name}
      isActive={p.name === props.activePlayerName}
    >
      {p.name}
    </Player>
  )

export default props =>
  <Players>
    {renderPlayers(props)}
  </Players>
