import React from 'react'

export default props =>
  <form onSubmit={props.onSubmit}>
    <input onChange={props.onChange} />
    <button>Join as new player</button>
  </form>
