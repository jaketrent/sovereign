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

const Victory = g.div(faceStyles, {
  background: 'lightgreen',
  color: 'black',
  borderColor: 'green'
})

const Action = g.div(faceStyles, {
  background: 'gray',
  color: 'black',
  borderColor: 'darkgray'
})

export default {
  Copper: _ => <Coin>copper</Coin>,
  Silver: _ => <Coin>silver</Coin>,
  Gold: _ => <Coin>gold</Coin>,
  Estate: _ => <Victory>estate</Victory>,
  Duchy: _ => <Victory>duchy</Victory>,
  Province: _ => <Victory>province</Victory>,
  // http://wiki.dominionstrategy.com/index.php/Dominion_(Base_Set)#Dominion_Only
  Cellar: _ => <Action>cellar</Action>,
  Market: _ => <Action>market</Action>,
  Merchant: _ => <Action>militia</Action>,
  Militia: _ => <Action>militia</Action>,
  Mine: _ => <Action>mine</Action>,
  Moat: _ => <Action>moat</Action>,
  Remodel: _ => <Action>remodel</Action>,
  Smithy: _ => <Action>smithy</Action>,
  Village: _ => <Action>village</Action>,
  Workshop: _ => <Action>workshop</Action>
}
