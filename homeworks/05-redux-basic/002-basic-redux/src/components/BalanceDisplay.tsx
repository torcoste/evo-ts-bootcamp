import React from "react"
import { connect } from "react-redux"


interface BalanceDisplayProps {
    balance: number
}

const BalanceDisplayComponent = ({ balance }: BalanceDisplayProps) => {
  return <p>Current balance: <b>{balance}</b></p>
}

const mapStateToProps = (state: any) => ({
  balance: state,
})

export const BalanceDisplay = connect(mapStateToProps)(BalanceDisplayComponent)
