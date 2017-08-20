import g from 'glamorous'
import React from 'react'

import { Card, CardsPlayed, EndTurn, Face, Players } from '../common/ui'

const Cards = g.div({ display: 'flex', flexWrap: 'wrap' })

const turn = {
  actionsRemaining: 1,
  buysRemaining: 1,
  playerName: 'Jake',
  cardsPlayed: [{ name: 'market' }]
}

export default _ =>
  <div>
    <h2>table</h2>
    <Players players={[{ name: 'Jake' }, { name: 'Anne' }]} turn={turn} />
    <EndTurn />
    <Cards>
      <Card>
        <Face.Estate />
      </Card>
      <Card>
        <Face.Duchy />
      </Card>
      <Card>
        <Face.Province />
      </Card>
    </Cards>
    <Cards>
      <Card>
        <Face.Copper />
      </Card>
      <Card>
        <Face.Silver />
      </Card>
      <Card>
        <Face.Gold />
      </Card>
    </Cards>
    <Cards>
      <Card>
        <Face.Cellar />
      </Card>
      <Card>
        <Face.Market />
      </Card>
      <Card>
        <Face.Merchant />
      </Card>
      <Card>
        <Face.Militia />
      </Card>
      <Card>
        <Face.Mine />
      </Card>
      <Card>
        <Face.Moat />
      </Card>
      <Card>
        <Face.Remodel />
      </Card>
      <Card>
        <Face.Smithy />
      </Card>
      <Card>
        <Face.Village />
      </Card>
      <Card>
        <Face.Workshop />
      </Card>
    </Cards>
    <CardsPlayed turn={turn} />
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
