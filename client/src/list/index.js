import { Link } from 'react-router-dom'
import React from 'react'

export default _ =>
  <div>
    <h2>games list</h2>
    <ul>
      <li>
        <Link to="/game/abc123">abc123</Link>
      </li>
    </ul>
  </div>
