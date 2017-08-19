import g from 'glamorous'
import React from 'react'

import { Card } from '../common/ui'

const Hand = g.div({
  display: 'flex'
})

const HandCard = g.div({
  margin: '0 1vw'
})

export default _ =>
  <div>
    <h2>hand</h2>
    <Hand>
      <HandCard>
        <Card />
      </HandCard>
      <HandCard>
        <Card />
      </HandCard>
      <HandCard>
        <Card />
      </HandCard>
      <HandCard>
        <Card />
      </HandCard>
      <HandCard>
        <Card />
      </HandCard>
    </Hand>
    <ul>
      <li>see hand</li>
      <li>see deck</li>
      <li>see discard pile</li>
      <li>draw cards on turn</li>
      <li>play cards on turn</li>
    </ul>
  </div>
