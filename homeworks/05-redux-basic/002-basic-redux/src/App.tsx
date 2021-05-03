import React from "react"
import "./App.css"
import { BalanceDisplay } from "./components/BalanceDisplay"

import { ReduxProvider } from "./redux/provider"

function App() {
  return (
    <ReduxProvider>
      <div className="App">
        <header className="App-header">
          <BalanceDisplay />
        </header>
      </div>
    </ReduxProvider>
  )
}

export default App
