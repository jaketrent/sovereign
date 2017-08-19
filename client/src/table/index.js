import g from 'glamorous'
import React from 'react'

import { Card, EndTurn, Face, Players } from '../common/ui'

const Cards = g.div({ display: 'flex' })

export default _ =>
  <div>
    <h2>table</h2>
    <Players
      activePlayerName="Jake"
      players={[{ name: 'Jake' }, { name: 'Anne' }]}
    />
    <EndTurn />
    <Cards>
      <Card faceDown>
        <Face.Copper />
      </Card>
      <Card>
        <Face.Silver />
      </Card>
      <Card>
        <Face.Gold />
      </Card>
    </Cards>
    <ul>
      <li>show cards</li>
      <li>draw cards on turn</li>
      <li>buy cards on turn</li>
      <li>active player</li>
      <li>remaining actions</li>
      <li>remaining buys</li>
      <li>played cards on turn</li>
    </ul>
  </div>
