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
    sortingStatus === SortingStatus.Solving
      ? { text: "Pause", onClick: onPauseSort }
      : { text: "Start", onClick: onStartSort },
  ]
  return (
    <div>
      {buttons.map(({ text, onClick }) => (
        <Button key={text} onClick={onClick}>
          {text}
        </Button>
      ))}
    </div>
  )
}

export default ControlButtons
