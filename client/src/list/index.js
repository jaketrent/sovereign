import { Link } from 'react-router-dom'
import React from 'react'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { fetched: false, games: [] }
  }
  async componentDidMount() {
    const res = await fetch(`${process.env.REACT_APP_API_HOST}/api/games`)
    const json = await res.json()
    this.setState(_ => ({ fetched: true, games: json.data }))
  }
  renderLoading() {
    return <div>Loading...</div>
  }
  renderGames() {
    return (
      <ul>
        <li>
          {this.state.games.map(game =>
            <Link to={`/game/${game.id}`}>
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
