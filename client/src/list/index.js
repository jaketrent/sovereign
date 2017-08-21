import { Link } from 'react-router-dom'
import React from 'react'

import * as games from '../games'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { fetched: false, games: [] }
  }
  async componentDidMount() {
    const body = await games.findAll()
    this.setState(_ => ({ fetched: true, games: body.data }))
  }
  renderLoading() {
    return <div>Loading...</div>
  }
  renderGames() {
    return (
      <ul>
        <li>
          {this.state.games.map(game =>
            <Link to={`/game/${game.id}`} key={game.id}>
              {game.id}
            </Link>
          )}
        </li>
      </ul>
    )
  }
  render() {
    return (
      <div>
        <h2>games list</h2>
        {this.state.fetched ? this.renderGames() : this.renderLoading()}
      </div>
    )
  }
}
