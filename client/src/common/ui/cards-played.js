import React from 'react'

import { Card, Face } from './index'

const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1)

export default props =>
  <div>
    {props.turn.cardsPlayed.map(cp =>
      <Card key={cp.name}>
        {React.createElement(Face[capitalize(cp.name)])}
      </Card>
    )}
  </div>
