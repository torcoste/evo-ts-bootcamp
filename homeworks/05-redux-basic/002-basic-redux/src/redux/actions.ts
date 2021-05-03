import { Action, ActionType } from "./types"

export const updateBalance = (amount: number): Action<number> => ({
  type: ActionType.UpdateBalance,
  payload: amount,
})

export const credit = (amount: number): Action<number> => ({
  type: ActionType.Credit,
  payload: amount,
})

export const debit = (amount: number): Action<number> => ({
  type: ActionType.Debit,
  payload: amount,
})

export const substractPercentage = (taxAmountPercentage: number): Action<number> => ({
  type: ActionType.SubstractPercentage,
  payload: taxAmountPercentage,
})


