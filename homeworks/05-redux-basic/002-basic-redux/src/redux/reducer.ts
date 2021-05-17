import { State, Action, ActionType } from "./types"

export function reducer(state: State = 1000.0, action: Action<number>): State {
  switch (action.type) {
    case ActionType.UpdateBalance:
      return action.payload
    case ActionType.Credit:
      return state - action.payload
    case ActionType.Debit:
      return state + action.payload
    case ActionType.SubstractPercentage:
      return state * (1 - action.payload / 100)
    default:
      return state
  }
}
