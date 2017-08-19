import g from 'glamorous'
import * as glamor from 'glamor'
import React from 'react'

const faceStyles = glamor.css({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  borderRadius: '8px',
  borderWidth: '1vw',
  borderStyle: 'solid'
})

const Coin = g.div(faceStyles, {
  background: 'yellow',
  color: 'black',
  borderColor: 'orange'
})

export default {
  Copper: _ => <Coin>copper</Coin>,
  Silver: _ => <Coin>silver</Coin>,
  Gold: _ => <Coin>gold</Coin>
}
