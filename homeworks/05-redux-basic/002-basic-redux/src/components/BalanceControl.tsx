import React from "react"
import { connect } from "react-redux"
import {
  credit,
  debit,
  substractPercentage,
  updateBalance,
} from "../redux/actions"

interface PropsFromRedux {
  updateBalance: (amount: number) => void
  credit: (amount: number) => void
  debit: (amount: number) => void
  substractPercentage: (taxAmountPercentage: number) => void
}

interface BalanceControlProps extends PropsFromRedux {}

const BalanceControlComponent = ({
  updateBalance,
  credit,
  debit,
  substractPercentage,
}: BalanceControlProps): React.ReactElement => {
  const onUpdateBalance = React.useCallback(() => {
    updateBalance(2000)
  }, [updateBalance])
  const onCredit = React.useCallback(() => {
    credit(350)
  }, [credit])
  const onDebit = React.useCallback(() => {
    debit(500)
  }, [debit])
  const onSubstractPercentage = React.useCallback(() => {
    substractPercentage(13)
  }, [substractPercentage])

  return (
    <div>
      <button onClick={onUpdateBalance}>updateBalance 2000</button>
      <button onClick={onCredit}>credit 350</button>
      <button onClick={onDebit}>debit 500</button>
      <button onClick={onSubstractPercentage}>substractPercentage 13</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch: Function): PropsFromRedux => ({
  updateBalance: (amount: number) => {
    dispatch(updateBalance(amount))
  },
  credit: (amount: number) => {
    dispatch(credit(amount))
  },
  debit: (amount: number) => {
    dispatch(debit(amount))
  },
  substractPercentage: (taxAmountPercentage: number) => {
    dispatch(substractPercentage(taxAmountPercentage))
  },
})

export const BalanceControl = connect(
  null,
  mapDispatchToProps
)(BalanceControlComponent)
