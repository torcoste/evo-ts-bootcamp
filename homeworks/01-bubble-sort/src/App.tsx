import React from "react"
import styled from "styled-components"

import ArrayVisualizer from "./components/ArrayVisualizer"
import ControlButtons from "./components/ControlButtons"
import SortingStatusView from "./components/SortingStatusView"
import { SortingStatus } from "./constants"
import { generateRandomArray } from "./helpers"

const AppContainer = styled.main`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: center;
  padding: 16px;
`

class App extends React.Component<{}, {}> {
  state = {
    array: generateRandomArray(),
    sortingStatus: SortingStatus.NotSolved,
  }

  setNewSet = () => {
    this.setState({
      array: generateRandomArray(),
      sortingStatus: SortingStatus.NotSolved,
    })
  }

  startSorting = () => {
    this.setState({
      sortingStatus: SortingStatus.Solving,
    })
  }

  pauseSorting = () => {
    this.setState({
      sortingStatus: SortingStatus.SolvingPaused,
    })
  }

  render() {
    const { array, sortingStatus } = this.state

    return (
      <AppContainer>
        <h1>Bubble Sort Visualization</h1>
        <ArrayVisualizer array={array} />
        <ControlButtons
          onNewSet={this.setNewSet}
          onStartSort={this.startSorting}
          onPauseSort={this.pauseSorting}
          sortingStatus={sortingStatus}
        />
        <SortingStatusView sortingStatus={sortingStatus} />
      </AppContainer>
    )
  }
}

export default App
