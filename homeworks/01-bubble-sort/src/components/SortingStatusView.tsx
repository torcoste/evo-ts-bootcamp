import React from "react"

import { SortingStatus } from "../constants"

interface Props {
  sortingStatus: SortingStatus
}

export const SortingStatusView = ({ sortingStatus }: Props): React.ReactElement => (
  <p>{sortingStatus}</p>
)
