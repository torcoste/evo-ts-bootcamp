import React from "react"
import styled from "styled-components"
import { ArrayItem } from "../helpers"

const Container = styled.div`
  height: 250px;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  margin: 64px 128px;
`

const ItemBar = styled.div<{ $height: number }>`
  flex: 1;
  background-color: yellow;
  border: 1px solid black;
  height: ${({ $height }) => `${$height}%`};
  margin: 1px;
`

type Props = {
  array: ArrayItem[]
}

class ArrayVisualizer extends React.Component<Props> {
  render() {
    const { array } = this.props
    return (
      <Container>
        {array.map(({ value, index }) => (
          <ItemBar key={index} $height={value * 100} />
        ))}
      </Container>
    )
  }
}

export default ArrayVisualizer
