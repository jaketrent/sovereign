import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import List from './list'
import Lobby from './lobby'
import Table from './table'
import Hand from './hand'

export default _ =>
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={List} />
      <Route exact path="/game/:id" component={Lobby} />
      <Route exact path="/game/:id/table" component={Table} />
      <Route exact path="/game/:id/hand" component={Hand} />
    </Switch>
  </BrowserRouter>
