import { Link } from 'react-router-dom'
import React from 'react'

export default _ =>
  <div>
    <h2>lobby</h2>
    <Link to="/game/abc123/table">join as table</Link>
    <Link to="/game/abc123/hand">join as player</Link>
  </div>
