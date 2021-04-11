import React from "react"
import styled from "styled-components"

import ArrayVisualizer from "./components/ArrayVisualizer"
import ControlButtons from "./components/ControlButtons"
import SortingStatusView from "./components/SortingStatusView"
import { ITTERATIONS_INTERVAL, SortingStatus } from "./constants"
import { generateRandomArray } from "./model/array"
import { bubbleSort } from "./model/bubbleSort"

import type { ArrayItem } from "./model/array"

const AppContainer = styled.main`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: center;
  padding: 16px;
`

class App extends React.Component<{}, {}> {
  interval?: NodeJS.Timeout
  iterator?: Iterator<ArrayItem[]>

  state = {
    array: generateRandomArray(),
    sortingStatus: SortingStatus.NotSolved,
  }

  clearInterval = () => {
    if (this.interval) clearInterval(this.interval)
  }

  setNewSet = () => {
    this.iterator = undefined
    this.clearInterval()
    this.setState({
      array: generateRandomArray(),
      sortingStatus: SortingStatus.NotSolved,
    })
  }

  startSorting = () => {
    this.setState({
      sortingStatus: SortingStatus.Solving,
    })
    if (!this.iterator) this.iterator = bubbleSort(this.state.array)
    this.interval = setInterval(() => {
      const iteration = this.iterator?.next()
      if (!iteration?.done) {
        const array = iteration?.value
        this.setState({ array })
        return
      }
      this.clearInterval()
      this.iterator = undefined
      this.setState({ sortingStatus: SortingStatus.Solved })
      return
    }, ITTERATIONS_INTERVAL)
  }

  pauseSorting = () => {
    this.clearInterval()
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
