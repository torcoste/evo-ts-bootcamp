import React, { StatelessComponent } from "react"
import styled from "styled-components"

import { SortingStatus } from "../constants"

const Button = styled.button`
  &:not(:last-of-type) {
    margin-right: 15px;
  }
`

type Props = {
  onNewSet: () => void
  onStartSort: () => void
  onPauseSort: () => void
  sortingStatus: SortingStatus
}

const ControlButtons: StatelessComponent<Props> = (
  props: Props
): JSX.Element => {
  const { onNewSet, onStartSort, onPauseSort, sortingStatus } = props
  const buttons = [
    { text: "New set", onClick: onNewSet },
    sortingStatus === SortingStatus.Solving && {
      text: "Pause",
      onClick: onPauseSort,
    },
    sortingStatus === SortingStatus.NotSolved && {
      text: "Start",
      onClick: onStartSort,
    },
    sortingStatus === SortingStatus.SolvingPaused && {
      text: "Resume",
      onClick: onStartSort,
    },
  ]
  return (
    <div>
      {buttons.map(
        (button) =>
          !!button && (
            <Button key={button.text} onClick={button.onClick}>
              {button.text}
            </Button>
          )
      )}
    </div>
  )
}

export default ControlButtons
