import { Link } from 'react-router-dom'
import React from 'react'

import * as games from '../games'
import NewGame from './new-game'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { fetched: false, games: [] }
  }
  async componentDidMount() {
    const body = await games.findAll()
    this.setState(_ => ({ fetched: true, games: body.data }))
  }
  handleNewGameSubmit = async evt => {
    evt.preventDefault()
    const body = await games.create()
    this.setState(_ => ({ games: [body.data].concat(this.state.games) }))
  }
  renderLoading() {
    return <div>Loading...</div>
  }
  renderGames() {
    return (
      <div>
        <ul>
          {this.state.games.map(game =>
            <li key={game.id}>
              <Link to={`/game/${game.id}`}>
                {game.id}
              </Link>
            </li>
          )}
        </ul>
        <NewGame onSubmit={this.handleNewGameSubmit} />
      </div>
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
