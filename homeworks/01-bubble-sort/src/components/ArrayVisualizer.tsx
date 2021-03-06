import React from "react"
import styled from "styled-components"

import { ARRAY_ITEMS_QTY } from "../constants"
import { getRainbowColor } from "../model/color"
import type { ArrayItem } from "../model/array"

const Container = styled.div`
  height: 250px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 32px 0px;
  width: max-content;
  @media (min-width: 768px) {
    min-width: 600px;
  }
`

const ItemBar = styled.div<{ $height: number; $color: string }>`
  flex: 1;
  background-color: ${({ $color }) => $color};
  border: 1px solid black;
  height: ${({ $height }) => `${$height}%`};
  margin: 1px;
  min-width: 6px;
`

interface Props {
  array: ArrayItem[]
}

export class ArrayVisualizer extends React.Component<Props> {
  render() {
    const { array } = this.props
    return (
      <Container>
        {array.map(({ value, index }) => (
          <ItemBar
            key={index}
            $height={value * 100}
            $color={getRainbowColor(index, ARRAY_ITEMS_QTY)}
          />
        ))}
      </Container>
    )
  }
}
