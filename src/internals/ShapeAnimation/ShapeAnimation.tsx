import React from "react"
import styled from "styled-components"

// Components
import { ShapeAnimationProps } from "./ShapeAnimation.model"

const ShapeAnimation = ({
  isToggled = false,
  transition,
}: ShapeAnimationProps) => {
  return (
    <Foreground>
      {isToggled && <button style={{ width: 50, height: 20 }} />}
    </Foreground>
  )
}

const Foreground = styled.div`
  position: relative;
  z-index: 1;
`

export default ShapeAnimation
