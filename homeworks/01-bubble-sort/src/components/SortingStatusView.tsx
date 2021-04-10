import React from "react"
import { SortingStatus } from "../constants"

type Props = {
  sortingStatus: SortingStatus
}

const SortingStatusView: React.StatelessComponent<Props> = (
  props: Props
): JSX.Element => <p>{props.sortingStatus}</p>

export default SortingStatusView
