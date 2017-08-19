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

const Meta = props =>
  <div>
    Actions: {props.turn.actionsRemaining}
    Buys: {props.turn.buysRemaining}
  </div>

const renderPlayers = props =>
  props.players.map(p => {
    const isActive = p.name === props.turn.playerName
    return (
      <Player name={p.name} key={p.name} isActive={isActive}>
        {p.name}
        {isActive && <Meta turn={props.turn} />}
      </Player>
    )
  })

export default props =>
  <Players>
    {renderPlayers(props)}
  </Players>
