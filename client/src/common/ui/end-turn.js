import g from 'glamorous'
import React from 'react'

const EndTurn = g.button({
  color: 'white',
  background: 'red',
  borderRadius: '3px',
  border: 'none',
  ':hover': {
    background: 'darkred'
  }
})

export default props => <EndTurn>End Turn</EndTurn>
