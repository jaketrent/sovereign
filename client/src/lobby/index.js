import { Link } from 'react-router-dom'
import React from 'react'

import * as games from '../games'
import NewPlayer from './new-player'
import StartGame from './start-game'

export default class extends React.Component {
  constructor(props) {
    super(props)
    this.state = { fetched: false, game: null, newPlayerName: '' }
  }
  async componentDidMount() {
    const body = await games.find(this.props.match.params.id)
    this.setState(
      _ => ({ fetched: true, game: body.data[0] }),
      _ => {
        games.listenGameUpdate(this.state.game.id, this.handleGameUpdate)
      }
    )
  }
  componentWillUnmount() {
    games.unlistenGameUpdate(this.state.game.id, this.handleGameUpdate)
  }
  handleGameUpdate = game => {
    this.setState(_ => ({ game }))
  }
  handleNewPlayerChange = evt => {
    const target = evt.target
    this.setState(_ => ({ newPlayerName: target.value }))
  }
  handleNewPlayerSubmit = evt => {
    evt.preventDefault()
    games.playJoinAsPlayer(this.state.game.id, this.state.newPlayerName)
    this.setState(_ => ({ newPlayerName: '' }))
  }
  handleStartGameSubmit = evt => {
    evt.preventDefault()
    games.playStartGame(this.state.game.id)
  }
  renderLoading() {
    return <div>Loading...</div>
  }
  renderErrors() {
    const codesToDisplay = [
      'errorStartGamePlayersRequired',
      'errorNewPlayerNameRequired'
    ]
    const errs = this.state.game.errors.filter(err =>
      codesToDisplay.includes(err.code)
    )
    return errs.length > 0
      ? <ul>
          {errs.map(err =>
            <li key={err.code}>
              {err.detail}
            </li>
          )}
        </ul>
      : null
  }
  renderPlayers() {
    return (
      <div>
        <ul>
          {games.getPlayers(this.state.game).map(p =>
            <li key={p.name}>
              <a href={`/game/${this.state.game.id}/hand?player=${p.name}`}>
                {p.name}
              </a>
            </li>
          )}
        </ul>
      </div>
    )
  }
  renderGame() {
    return (
      <div>
        {this.renderPlayers()}
        {this.renderErrors()}
        <NewPlayer
          value={this.state.newPlayerName}
          onChange={this.handleNewPlayerChange}
          onSubmit={this.handleNewPlayerSubmit}
        />
        <StartGame onSubmit={this.handleStartGameSubmit} />
        <Link to={`/game/${this.state.game.id}/table`}>join as table</Link>
      </div>
    )
  }
  render() {
    return (
      <div>
        <h2>lobby</h2>
        {this.state.fetched ? this.renderGame() : this.renderLoading()}
      </div>
    )
  }
}
