export type State = number

export enum ActionType {
  UpdateBalance = "UPDATE_BALANCE",
  Credit = "CREDIT",
  Debit = "DEBIT",
  SubstractPercentage = "SUBTRACT_PERCENTAGE",
}

export interface Action<T> {
  type: ActionType
  payload: T
}
