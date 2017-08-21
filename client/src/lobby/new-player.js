import React from 'react'

export default props =>
  <form onSubmit={props.onSubmit}>
    <input value={props.value} onChange={props.onChange} />
    <button>Add Player</button>
  </form>
