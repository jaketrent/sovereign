export type Player = {
  name: string
}
export type Card = {
  name: string
}
export type Phase = 'setup' | 'play'
export type Turn = {}

export type Game = {
  id: string,
  state: {
    players: (?Player)[],
    deck: (?Card)[],
    phase: Phase,
    turn: Turn
  }
}

export type PlayType = 'startGame' | 'playerJoinGame' | 'unknown'

export type Play = {
  type: PlayType,
  [string]: [any]
}
