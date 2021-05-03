import React from "react"
import { connect } from "react-redux"
import { State } from "../redux/types"

interface PropsFromRedux {
  balance: State
}
interface BalanceDisplayProps extends PropsFromRedux {}

const BalanceDisplayComponent = ({ balance }: BalanceDisplayProps): React.ReactElement => (
  <p>
    Current balance: <b>{balance}</b>
  </p>
)

const mapStateToProps = (state: State): PropsFromRedux => ({
  balance: state,
})

export const BalanceDisplay = connect(mapStateToProps)(BalanceDisplayComponent)
