import React from "react"
import "./App.css"
import { BalanceDisplay } from "./components/BalanceDisplay"
import { BalanceControl } from "./components/BalanceControl"

import { ReduxProvider } from "./redux/provider"

function App() {
  return (
    <ReduxProvider>
      <div className="App">
        <header className="App-header">
          <BalanceDisplay />
          <BalanceControl />
        </header>
      </div>
    </ReduxProvider>
  )
}

export default App
