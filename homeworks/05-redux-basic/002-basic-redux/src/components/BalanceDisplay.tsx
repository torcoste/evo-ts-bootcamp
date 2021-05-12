import React from "react"
import { connect } from "react-redux"
import { State } from "../redux/types"

interface BalanceDisplayProps extends ReturnType<typeof mapStateToProps> {}

const BalanceDisplayComponent = ({ balance }: BalanceDisplayProps): React.ReactElement => (
  <p>
    Current balance: <b>{balance}</b>
  </p>
)

const mapStateToProps = (state: State) => ({
  balance: state,
})

export const BalanceDisplay = connect(mapStateToProps)(BalanceDisplayComponent)
