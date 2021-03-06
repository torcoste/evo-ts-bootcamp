import React from "react"
import styled from "styled-components"

import { ArrayVisualizer } from "./components/ArrayVisualizer"
import { ControlButtons } from "./components/ControlButtons"
import { SortingStatusView } from "./components/SortingStatusView"
import { ITTERATIONS_INTERVAL, SortingStatus } from "./constants"
import { generateRandomArray } from "./model/array"
import { bubbleSort } from "./model/bubbleSort"

import type { ArrayItem } from "./model/array"

const AppContainer = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  align-self: center;
  min-height: 100vh;
  padding: 0 16px;
`

class App extends React.Component {
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

  initIterator = () => {
    if (!this.iterator) this.iterator = bubbleSort(this.state.array)
  }

  makeSortingStep = () => {
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
  }

  startSorting = () => {
    this.setState({
      sortingStatus: SortingStatus.Solving,
    })
    this.initIterator()
    this.interval = setInterval(this.makeSortingStep, ITTERATIONS_INTERVAL)
  }

  pauseSorting = () => {
    this.clearInterval()
    this.setState({
      sortingStatus: SortingStatus.SolvingPaused,
    })
  }

  manualStep = () => {
    this.initIterator()
    this.makeSortingStep()
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
          onManualStep={this.manualStep}
          sortingStatus={sortingStatus}
        />
        <SortingStatusView sortingStatus={sortingStatus} />
      </AppContainer>
    )
  }
}

export default App
